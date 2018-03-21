import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, tap} from "rxjs/operators";
import {Stage} from "../models/stage";
import {ErrorObservable} from "rxjs/observable/ErrorObservable";

@Injectable()
export class StageService {

  constructor(private http: HttpClient) { }

  private serverUrl = 'https://murmuring-cove-55676.herokuapp.com';

  get(id): Observable<Stage>
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      responseType: 'text' as 'json',
      withCredentials: true
    };

    console.log("get stage/id");
    return this.http.get<Stage>(this.serverUrl+"/plan/"+id, httpOptions)
      .pipe(
        tap(data => {

        } ),
        catchError(this.handleError)
      );

  }



  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
      console.error(error);
    }
    return new ErrorObservable(error);
  };


}

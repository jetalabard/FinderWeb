import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, tap} from "rxjs/operators";
import {Stage} from "../models/stage";
import {ErrorObservable} from "rxjs/observable/ErrorObservable";
import {Marker} from "../models/marker";

@Injectable()
export class MarkerService {

  constructor(private http: HttpClient) { }

  private serverUrl = 'https://murmuring-cove-55676.herokuapp.com';

  get(id): Observable<Marker>
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      responseType: 'text' as 'json',
      withCredentials: true
    };

    console.log("get marker/id");
    return this.http.get<Marker>(this.serverUrl+"/label/"+id, httpOptions)
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

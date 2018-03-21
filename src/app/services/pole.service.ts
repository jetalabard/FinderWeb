import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, tap} from "rxjs/operators";
import {ErrorObservable} from "rxjs/observable/ErrorObservable";
import {Pole} from "../models/pole";
import {Agency} from "../models/agency";

@Injectable()
export class PoleService {

  constructor(private http: HttpClient) { }

  private serverUrl = 'https://murmuring-cove-55676.herokuapp.com';


  get(id): Observable<Pole>
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      responseType: 'text' as 'json',
      withCredentials: true
    };

    console.log("get pole/id");
    return this.http.get<Pole>(this.serverUrl+"/pole/"+id, httpOptions)
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

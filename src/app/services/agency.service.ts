import { Injectable } from '@angular/core';
import {catchError, tap} from "rxjs/operators";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {ErrorObservable} from "rxjs/observable/ErrorObservable";
import {Agency} from "../models/agency";
import {Observable} from "rxjs/Observable";
import {Pole} from "../models/pole";

@Injectable()
export class AgencyService {


  constructor(private http: HttpClient) { }

  private serverUrl = 'https://murmuring-cove-55676.herokuapp.com';



  getAll(): Observable<Agency[]>
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      responseType: 'text' as 'json',
      withCredentials: true
    };

    return this.http.get<Agency[]>(this.serverUrl+"/agency", httpOptions)
      .pipe(

        tap(data => {

        } ),
        catchError(this.handleError)
      );

  }

  get(id): Observable<Agency>
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      responseType: 'text' as 'json',
      withCredentials: true
    };

    console.log("get agency/id");
    return this.http.get<Agency>(this.serverUrl+"/agency/"+id, httpOptions)
      .pipe(
        tap(data => {

        } ),
        catchError(this.handleError)
      );

  }

  getPoles(id): Observable<Pole[]>
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      responseType: 'text' as 'json',
      withCredentials: true
    };

    console.log("get agency/id/pole");
    return this.http.get<Pole[]>(this.serverUrl+"/agency/"+id+"/poles", httpOptions)
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

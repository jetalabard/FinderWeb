import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError} from "rxjs/operators";
import { HttpErrorResponse} from "@angular/common/http";
import { ErrorObservable} from "rxjs/observable/ErrorObservable";
import {Observable} from "rxjs/Observable";


@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  private serverUrl = 'https://murmuring-cove-55676.herokuapp.com';



  login(username,password)
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      responseType: 'text' as 'json'
    };

    return this.http.post(this.serverUrl+"/login", {username:username, password:password}, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }


  isLogged()
  {
    return true;
  }

  isAdmin()
  {
    return true;
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
    return new ErrorObservable(
      'Something bad happened; please try again later.');
  };
}

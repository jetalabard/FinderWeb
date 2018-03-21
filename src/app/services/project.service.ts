import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, tap} from "rxjs/operators";
import {Pole} from "../models/pole";
import {ErrorObservable} from "rxjs/observable/ErrorObservable";
import {Project} from "../models/project";

@Injectable()
export class ProjectService {


  constructor(private http: HttpClient) { }

  private serverUrl = 'https://murmuring-cove-55676.herokuapp.com';

  data: string[] =   ['',
    '{"_id": "1","collaborator": ["1","2"],"name": "PSA","photo": "","__v": 2}',
    '{"_id": "2","collaborator": ["1","3"],"name": "Limagrain","photo": "","__v": 2}'
  ];


  get(id): Observable<any>
  {
    return Observable.of(this.data[id]);

    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json'
    //   }),
    //   responseType: 'text' as 'json',
    //   withCredentials: true
    // };
    //
    // console.log("get project/id");
    // return this.http.get<Project>(this.serverUrl+"/project/"+id, httpOptions)
    //   .pipe(
    //     tap(data => {
    //
    //     } ),
    //     catchError(this.handleError)
    //   );
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

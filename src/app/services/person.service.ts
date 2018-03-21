import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, tap} from "rxjs/operators";
import {ErrorObservable} from "rxjs/observable/ErrorObservable";
import {Project} from "../models/project";
import {Person} from "../models/person";

@Injectable()
export class PersonService {


  constructor(private http: HttpClient) { }

  private serverUrl = 'https://murmuring-cove-55676.herokuapp.com';

  data: string[] =   ['',
    '{"_id": "1","name": "Faure","firstname": "Julie","__v": 2}',
    '{"_id": "2","name": "Gardo","firstname": "Michel","__v": 2}',
    '{"_id": "3","name": "Millano","firstname": "Arthur","__v": 2}'
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
    // console.log("get person/id");
    // return this.http.get<Person>(this.serverUrl+"/user/"+id, httpOptions)
    //   .pipe(
    //     tap(data => {
    //
    //     } ),
    //     catchError(this.handleError)
    //   );
  }

  getAll(): Observable<any>
  {
    let persons: string ="[";
    for(let p of this.data)
    {
      if(p != '')
        persons = persons+p+",";
    }
    persons = persons.slice(0,-1)+"]";
    console.log("persons : ");
    console.log(persons);

    return Observable.of(persons);
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

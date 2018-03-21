import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, tap} from "rxjs/operators";
import {Stage} from "../models/stage";
import {ErrorObservable} from "rxjs/observable/ErrorObservable";
import "rxjs/add/observable/of";

@Injectable()
export class StageService {

  constructor(private http: HttpClient) { }

  private serverUrl = 'https://murmuring-cove-55676.herokuapp.com';


  data: string[] =   ['',
    '{"_id": "1","markers": ["1111","2221","4441"],"name": "RDC","photo": "assets/images/map.JPG","__v": 2}',
    '{"_id": "2","markers": ["1111","3331"],"name": "RDC","photo": "assets/images/map.JPG","__v": 2}',
    '{"_id": "3","markers": ["1112","3331","4442"],"name": "1er Etage","photo": "assets/images/map.JPG","__v": 2}',
    '{"_id": "4","markers": ["2222","3331"],"name": "1er Etage","photo": "assets/images/map.JPG","__v": 2}',
    '{"_id": "5","markers": ["2222","3331","4441","4442"],"name": "2eme Etage","photo": "assets/images/map.JPG","__v": 2}'
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
    // console.log("get stage/id");
    // return this.http.get<Stage>(this.serverUrl+"/plan/"+id, httpOptions)
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

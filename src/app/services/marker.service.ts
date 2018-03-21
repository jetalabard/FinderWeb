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


  data: {[id: string]: string;} = {
    "0": '',
    "1111": '{"_id": "1111","name": "RH","type": "", "posX": "15", "posY": "83", "object": "5ab1ca4b1749b2235890ff37", "__v": 2}',
    "1112": '{"_id": "1112","name": "Support","type": "", "posX": "35", "posY": "83", "object": "5ab1caa41749b2235890ff3", "__v": 2}',
    "2221": '{"_id": "2221","name": "PSA","type": "", "posX": "60", "posY": "20", "object": "", "__v": 2}',
    "2222": '{"_id": "2222","name": "Limagrain","type": "", "posX": "12", "posY": "83", "object": "", "__v": 2}',
    "3331": '{"_id": "3331","name": "Bureau Michel","type": "", "posX": "56", "posY": "83", "object": "", "__v": 2}',
    "4441": '{"_id": "4441","name": "WC","type": "", "posX": "74", "posY": "83", "object": "", "__v": 2}',
    "4442": '{"_id": "4442","name": "Salle de réunion","type": "", "posX": "20", "posY": "20", "object": "", "__v": 2}'
  };


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
    // console.log("get marker/id");
    // return this.http.get<Marker>(this.serverUrl+"/label/"+id, httpOptions)
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

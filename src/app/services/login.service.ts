import { Injectable } from '@angular/core';

//imported by me
import { userLogin } from "../models/userLoginDetails";
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  endpoint: string = 'http://localhost:4000/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

   // login service
   userLogin(data: userLogin ): Observable<any> {
    let API_URL = `${this.endpoint}/login`;
    console.log(data);
    return this.http.post(API_URL, data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }


    // Error handling 
    errorMgmt(error: HttpErrorResponse) {
      let errorMessage = '';
      if (error.error instanceof ErrorEvent) {
        // Get client-side error
        errorMessage = error.error.message;
      } else {
        // Get server-side error
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      console.log(errorMessage);
      return throwError(errorMessage);
    }

}

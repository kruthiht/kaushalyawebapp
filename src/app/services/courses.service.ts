import { Injectable } from '@angular/core';

//imported by me


import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  endpoint: string = 'http://localhost:4000/courses';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  // Get all students
  GetCourses() {
    return this.http.get(`${this.endpoint}`);
  }
}

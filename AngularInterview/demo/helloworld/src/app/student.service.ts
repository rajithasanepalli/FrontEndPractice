import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ObjectUnsubscribedError, Observable, pipe, throwError } from 'rxjs';
import { StudentInterface } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  public _url = "../assets/data/student.json"
  constructor(private _http: HttpClient) { }
  getStudents(): Observable<StudentInterface[]> {
    return this._http.get<StudentInterface[]>(this._url);



  }



}


import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { StudentInterface } from './student';
import { catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  public _baseUrl = "../assets/data/student.json"
  constructor(private _http: HttpClient) { }

  getStudentdSata(): Observable<StudentInterface> {
    return this._http.get<StudentInterface>(this._baseUrl)
      .pipe(catchError(this.errorHandler))
  }


  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "unknown server error");
  }
}

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class FormRegisterService {

  public _baseUrl = 'http://localhost:8000/register';
  constructor(private _http: HttpClient) { }
  enroll(user: User) {
    return this._http.post<any>(this._baseUrl, user)



  }

}

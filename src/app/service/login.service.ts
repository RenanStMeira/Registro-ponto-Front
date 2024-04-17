import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private readonly API_URL = '/api/login';

  constructor(private http: HttpClient) { }

  login(loginData: Login): Observable<any> {
    return this.http.post<any>(this.API_URL, loginData);
  }
}
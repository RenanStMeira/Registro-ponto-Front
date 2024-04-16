import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../model/user';
import { map, tap } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly API = "api/usuario"

  constructor(private httpClient: HttpClient) { }

  list(): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(this.API);
  }

  createUser(user: Usuario) {
    return this.httpClient.post(this.API, user)
  }
}
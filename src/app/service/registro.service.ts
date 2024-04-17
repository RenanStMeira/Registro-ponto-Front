import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegistroDeHoras } from '../model/user';

@Injectable({
    providedIn: 'root'
  })
  export class RegistroDeHorasService {
    private readonly API_URL = '/api/registros';
  
    constructor(private http: HttpClient) { }
  
    iniciarRegistro(usuarioId: number): Observable<RegistroDeHoras> {
      const url = `${this.API_URL}/iniciar/${usuarioId}`;
      return this.http.post<RegistroDeHoras>(url, null);
    }

    finalizarRegistro(registroId: number): Observable<RegistroDeHoras> {
        const url = `${this.API_URL}/finalizar/${registroId}`;
        return this.http.put<RegistroDeHoras>(url, null);
      }
  }
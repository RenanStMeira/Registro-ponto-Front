import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { RelatorioDeHoras } from "../model/user";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
  export class RelatorioDeHorasService {
    private readonly API_URL = '/api/relatorios';
  
    constructor(private http: HttpClient) { }
  
    buscarTodosRelatorios(): Observable<RelatorioDeHoras[]> {
      return this.http.get<RelatorioDeHoras[]>(this.API_URL);
    }
  }
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  url:string=" https://rickandmortyapi.com/api";
  constructor(private http:HttpClient) { }
  obtenerEmpleados(){
     return this.http.get(`${this.url}/character`);
  }
}

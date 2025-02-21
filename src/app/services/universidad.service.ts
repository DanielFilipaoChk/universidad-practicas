import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UniversidadService {
  private apiUrl = 'http://localhost:5000/api/universidades'; // Cambia la URL según tu backend

  constructor(private http: HttpClient) {}

  getUniversidades(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  registrarUniversidad(universidad: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, universidad);
  }

  // Agregar métodos para crear, actualizar o eliminar universidades
}

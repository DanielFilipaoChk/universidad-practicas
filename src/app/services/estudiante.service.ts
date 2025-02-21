import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {
  private apiUrl = 'http://localhost:5000/api/estudiantes'; // Cambia la URL según tu backend

  constructor(private http: HttpClient) {}

  getEstudiantes(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  // Agregar otros métodos como crear, actualizar o eliminar estudiantes
}

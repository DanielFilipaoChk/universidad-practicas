import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-estudiante',
  templateUrl: './registro-estudiante.component.html',
  styleUrls: ['./registro-estudiante.component.css']
})
export class RegistroEstudianteComponent implements OnInit {
  estudiante = {
    nombre: '',
    apellido: '',
    correo: '',
    carrera: '',
    universidadId: ''
  };

  universidades = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    // Obtener las universidades para el select
    this.http.get('http://localhost:5000/api/universidades')
      .subscribe((response: any) => {
        this.universidades = response;
      }, error => {
        console.error('Error al obtener universidades:', error);
      });
  }

  onSubmit() {
    // Llamada a la API para registrar el estudiante
    this.http.post('http://localhost:5000/api/estudiantes', this.estudiante)
      .subscribe(response => {
        console.log('Estudiante registrado:', response);
        this.router.navigate(['/']); // Redirige a la página principal
      }, error => {
        console.error('Error al registrar el estudiante:', error);
      });
  }
}

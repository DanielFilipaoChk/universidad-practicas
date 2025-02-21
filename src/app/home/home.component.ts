import { Component, OnInit } from '@angular/core';
import { EstudianteService } from '../services/estudiante.service'; // Asegúrate de tener un servicio de estudiantes
import { UniversidadService } from '../services/universidad.service'; // Asegúrate de tener un servicio de universidades

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  estudiantes: any[] = [];
  universidades: any[] = [];

  constructor(
    private estudianteService: EstudianteService,
    private universidadService: UniversidadService
  ) {}

  ngOnInit(): void {
    // Cargar estudiantes y universidades desde el backend
    this.estudianteService.getEstudiantes().subscribe((data: any) => {
      this.estudiantes = data;
    });

    this.universidadService.getUniversidades().subscribe((data: any) => {
      this.universidades = data;
    });
  }

  // Funcionalidad para enviar solicitudes o realizar otras acciones
}

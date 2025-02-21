import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Para hacer peticiones HTTP
import { Router } from '@angular/router';

@Component({
  selector: 'app-datos-universidad',
  templateUrl: './datos-universidad.component.html',
  styleUrls: ['./datos-universidad.component.css']
})
export class DatosUniversidadComponent {

  // Modelo para los datos de la universidad (vacío al principio)
  universidad = {
    nombre: '',
    correo: '',
    direccion: ''
  };

  // Mensaje de éxito o error
  mensaje: string | null = null;

  constructor(private http: HttpClient, private router: Router) { }

  // Método para registrar la universidad
  registrarUniversidad() {
    this.http.post('http://localhost:5000/api/universidades', this.universidad)
      .subscribe(
        response => {
          console.log('Universidad registrada exitosamente', response);
          this.mensaje = "Universidad registrada correctamente.";
          // Redirigir a una página o mostrar mensaje si es necesario
        },
        error => {
          console.error('Error al registrar universidad', error);
          this.mensaje = "Hubo un error al registrar la universidad.";
        }
      );
  }

  // Método que se llama al enviar el formulario
  onSubmit() {
    this.registrarUniversidad();
  }
}

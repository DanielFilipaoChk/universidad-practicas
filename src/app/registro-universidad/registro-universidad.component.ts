import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-universidad',
  templateUrl: './registro-universidad.component.html',
  styleUrls: ['./registro-universidad.component.css']
})
export class RegistroUniversidadComponent {

  // Modelo para la universidad (inicialmente vacío)
  universidad = {
    nombre: '',
    correo: '',
    direccion: ''
  };

  // Variable para manejar los mensajes de éxito o error
  mensaje: string | null = null;

  constructor(private http: HttpClient, private router: Router) { }

  // Método para registrar la universidad
  registrarUniversidad() {
    console.log('Datos a enviar:', this.universidad);  // Verifica los datos antes de enviarlos
    this.http.post('http://localhost:5000/api/universidades', this.universidad)
      .subscribe(
        response => {
          console.log('Universidad registrada exitosamente', response);
          this.mensaje = "Universidad registrada correctamente.";
          // Redirigir al Home o a otra página si es necesario
          this.router.navigate(['/']); // Redirige a la página principal (ajusta la ruta según tu necesidad)
        },
        error => {
          console.error('Error al registrar universidad', error);
          this.mensaje = "Hubo un error al registrar la universidad.";
        }
      );
  }

  // Método que se llama al enviar el formulario
  onSubmit() {
    console.log('Formulario enviado');  // Verifica que se está llamando a onSubmitsss
    this.registrarUniversidad(); // Llamamos a registrar la universidad
  }
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroUniversidadComponent } from './registro-universidad/registro-universidad.component';
import { DatosUniversidadComponent } from './datos-universidad/datos-universidad.component'; // Importamos el nuevo componente

const routes: Routes = [
  { path: '', component: RegistroUniversidadComponent }, // Página de inicios
  { path: 'registro-universidad', component: RegistroUniversidadComponent },
  { path: 'registro-universidad/datos', component: DatosUniversidadComponent }, // Nueva ruta para mostrar los datos
  // Otras rutas si es necesarios
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

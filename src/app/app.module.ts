import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';  // Para las peticiones HTTP
import { FormsModule } from '@angular/forms';  // Para trabajar con formularios
import { JwtModule } from '@auth0/angular-jwt';  // Para trabajar con JWT

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistroEstudianteComponent } from './registro-estudiante/registro-estudiante.component';
import { RegistroUniversidadComponent } from './registro-universidad/registro-universidad.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,  // Página principal
    LoginComponent,  // Página de login
    RegistroUniversidadComponent,  // Formulario de registro de universidad
    RegistroEstudianteComponent  // Formulario de registro de estudiantess
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => localStorage.getItem('token'),
        allowedDomains: ['localhost:5000'],  // URL del backend
        disallowedRoutes: ['localhost:5000/api/login']  // Excluye la ruta de login de JWT
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

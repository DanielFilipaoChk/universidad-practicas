# Universidad-Prácticas

Este es un proyecto de gestión de universidades y estudiantes utilizando Angular y un backend en Node.js con JWT para autenticación.

## Descripción

La aplicación permite a los usuarios:

1. **Iniciar sesión** con un correo electrónico y una contraseña.
2. **Registrar universidades** con su nombre, correo y dirección.
3. **Ver las universidades** registradas.
4. **Registrar estudiantes** para prácticas en universidades.

## Requisitos

- Node.js
- Angular CLI
- Un servidor de backend que implemente las rutas para `login`, `universidades` y `estudiantes`.

## Instalación

1. Clona este repositorio:
   ```bash
   git clone <URL_DEL_REPOSITORIO>


2. Navega al directorio del proyecto:

bash
Copiar
cd universidad-practicas
Instala las dependencias de Node.js:

bash
Copiar
npm install
Asegúrate de que el backend esté corriendo en el puerto 5000 o configura la URL de la API en los servicios si es diferente.

Ejecución
Ejecuta el servidor Angular:

bash
Copiar
ng serve
Esto levantará el frontend en http://localhost:4200.

Si tu backend está corriendo localmente, el frontend debería poder consumir la API sin problemas.

Estructura del Proyecto
src/app/home: Componente para mostrar la lista de universidades y estudiantes.
src/app/login: Componente para el inicio de sesión de usuarios.
src/app/registro-estudiante: Componente para registrar estudiantes.
src/app/registro-universidad: Componente para registrar universidades.
src/app/datos-universidad: Componente para ingresar los datos detallados de una universidad.
src/services: Servicios de Angular para interactuar con el backend (Autenticación, Universidades, Estudiantes).
Rutas de la Aplicación
/: Página de inicio con la lista de universidades y estudiantes.
/login: Página para el inicio de sesión.
/registro-universidad: Página para registrar una universidad.
/registro-universidad/datos: Página para ingresar los datos detallados de la universidad.
/registro-estudiante: Página para registrar estudiantes.
API Backend
Asegúrate de tener el backend funcionando en el puerto 5000. Las rutas que se consumen en el frontend son:

POST /api/login: Para autenticarse con correo y contraseña.
POST /api/universidades: Para registrar nuevas universidades.
GET /api/universidades: Para obtener todas las universidades registradas.
GET /api/estudiantes: Para obtener todos los estudiantes.
Tecnologías Utilizadas
Frontend: Angular, HTML, CSS, TypeScript
Backend: Node.js, Express.js (si se usa un servidor basado en Node)
Autenticación: JWT (JSON Web Token)
HTTP Requests: HttpClientModule (Angular)
Dependencias adicionales:
@auth0/angular-jwt: Para manejar el almacenamiento y uso de tokens JWT en el frontend.
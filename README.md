# Proyecto de Libreria de Juegos

![Juegos](https://res.cloudinary.com/dmz6gyyoo/image/upload/v1678808479/pifce2dw5nprmfngq1ej.png)

Este proyecto tiene como objetivo proporcionar a los usuarios una plataforma en línea donde puedan buscar y filtrar juegos por diferentes categorías, y también ver detalles específicos de cada juego. Además, permite a los usuarios agregar nuevos juegos a la librería.

La aplicación utiliza React como framework de frontend, lo que permite una interfaz de usuario dinámica y moderna. También se utiliza una base de datos PostgreSQL para almacenar y gestionar los datos de los juegos, y un servidor Express para conectar el frontend con la base de datos.

[Link del proyecto](https://webdogsapp.netlify.app/)

## Funcionalidades
- Crear un nuevo juego
- Buscar un juego
- Filtrar juegos por diferentes categorías
- Ver detalles de cada juego

## Tecnologías utilizadas
- React: Biblioteca de JavaScript utilizada para construir la interfaz de usuario.
- PostgreSQL: Sistema de gestión de bases de datos utilizado para almacenar información sobre las razas de perros.
- Express: Framework de Node.js utilizado para manejar las peticiones al backend.

## Instalacion
1. Clona este repositorio en tu computadora.
2. En `api` crear un archivo llamado: `.env` que tenga la siguiente forma:

```env
DB_USER=usuariodepostgres
DB_PASSWORD=passwordDePostgres
DB_HOST=localhost
```
3. Reemplazar `usuariodepostgres` y `passwordDePostgres` con tus propias credenciales para conectarte a postgres. Este archivo va ser ignorado en la subida a github, ya que contiene información sensible (las credenciales).
4. Crearse desde psql una base de datos llamada `videogames`.
5. Navegar hasta la carpeta `client` y ejecutar el comando:
```bash
npm install
```
6. Navegar hasta la carpeta `api` y ejecutar el comando:
```bash
npm install
```
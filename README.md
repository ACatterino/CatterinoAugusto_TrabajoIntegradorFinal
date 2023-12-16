# Fullstack Blog App (MERN Stack)

¡Bienvenido a la documentación de la aplicación de blog Fullstack! Esta aplicación permite a los usuarios explorar una variedad de publicaciones de blog con una interfaz fácil de usar. A continuación se muestra una guía detallada sobre cómo configurar y ejecutar la aplicación.

&nbsp;

## Descripción general

Esta aplicación de blog FullStack está creada utilizando el Stack MERN (MongoDB, Express, React, Node.js). Los usuarios pueden disfrutar de funciones como categorización de publicaciones por hashtags, paginación y comentarios (solamente los que estén registrados podrán comentar). También pueden crear, editar, actualizar y eliminar sus publicaciones.

&nbsp;

## Requisitos del sistema

- Node.js version 18 o superior.
- npm version 9.8.1 o superior.
- MongoDB.
- Text Editor.
- Git.
- Postman (Opcional).

&nbsp;

## Tecnologías usadas:

1. ReactJs
2. NodeJs (Node version 18 o superior)
3. ExpressJs
4. MongoDB (Base de Datos)
5. JWT
6. Javascript, HTML
7. SASS (para los estilos).

&nbsp;

## Las características incluidas (lado del cliente):

1. Creación de cuenta de usuario (opcional)
2. Iniciar sesión (opcional)
3. Categorías de publicaciones por hashtags
4. Comentar publicaciones (solo disponible para usuarios que hayan iniciado sesión)
5. Sistema de CRUD para las publicaciones.

## Las características incluidas (lado del servidor):

1. Creación de cuenta de usuario.
2. Validación de inicio de sesion, registro de usuario y creación de publicaciones.
3. Sistema de CRUD para las publicaciones.

&nbsp;

## Screenshots:-

![Home Page](https://res.cloudinary.com/dq4gkweh3/image/upload/v1702687229/a82ee7d179e58e9942a189cc7bb71074_e31kcc.jpg)

![Post Detail](https://res.cloudinary.com/dq4gkweh3/image/upload/v1702688799/localhost_3000_posts_undefined_5_fg1cmi.png)

![Register Page](https://res.cloudinary.com/dq4gkweh3/image/upload/v1702688870/localhost_3000_posts_undefined_3_jemzo0.png)

![Login Page ](https://res.cloudinary.com/dq4gkweh3/image/upload/v1702688832/localhost_3000_posts_undefined_2_vnazzc.png)

&nbsp;
&nbsp;

# Configuración del servidor

## Variables de entorno
Primero, cree el archivo de variables de entorno `.env` en la carpeta del servidor. El archivo `.env` contiene las siguientes variables de entorno:

- MONGODB_URL = `MongoDB URL`
- PORT = `4444`

&nbsp;

## Pasos para correr del lado del servidor (Backend)

1. Abra el proyecto en cualquier editor de su elección.
2. Navegue hasta el directorio del servidor `cd backend`.
3. Ejecute `npm i` para instalar los paquetes.
4. Ejecute `npm start` para iniciar el servidor.

Si está configurado correctamente, debería ver un mensaje que indica que el servidor se está ejecutando correctamente y saldrá un mensaje "DB Connected".

&nbsp;

## Pasos para correr del lado del cliente (Frontend)

1. Navegue hasta el directorio del servidor `cd frontend`.
2. Ejecute `npm i` para instalar los paquetes.
3. Ejecute `npm start` para iniciar el servidor en `http://localhost:3000`.
4. Open [http://localhost:3000](http://localhost:3000) para visualizarlo en tu navegador.

&nbsp;

## Para soporte, contacto:

- Email: augustocatterino@gmail.com
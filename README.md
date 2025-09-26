# Cocktail App

Cocktail App es una aplicación web en Angular 20, diseñada para obtener información de cócteles. Se ejecuta en un entorno Dockerizado para facilitar la configuración y despliegue.

# Tecnologías principales utilizadas

Angular, PrimeNG, Tailwind CSS, TypeScript, NgRx, Docker.

# Características

- Aplicación frontend desarrollada con **Angular 20**.
- Contenedor **Docker** para ejecutar la app sin necesidad de configuraciones locales.
- **Live Reload** habilitado con volúmenes en Docker.
- Accesible en `localhost:4200` desde cualquier navegador.

---

## Instalación y Configuración

### 1️ **Requisitos previos**

Asegúrate de tener instalados:

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [NPM y NodeJS](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

### 2️ **Clonar el repositorio**

```sh
git clone https://github.com/fabcataldo/cocktails-app
cd cocktails-app
```

### 3 **Ejecución**

Primero instalar Node.js usando la URL especificada más arriba, luego:
Comprobar que esté instalado Node.js corriendo el comando:

```sh
node -v,
```

Después:
Correr el comando nvm use 22.16.0 asi instala la versión de Node.js, y automáticamente se setea dicha versión por defecto

Luego, instalar Docker y Docker Compose, siguiendo las instrucciones de los links que están al principio del documento.

Por último, "levantar" el entorno de Docker, y luego ejecutar por terminal:

```sh
docker-compose up --build
```

### Si quieres "apagar" el contenedor del frontend:

```sh
docker-compose down
```

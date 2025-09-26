# Cocktail App

Cocktail App es una aplicación web en Angular 20, diseñada para obtener información de cócteles. Se ejecuta en un entorno Dockerizado para facilitar la configuración y despliegue.

# Tecnologías principales utilizadas

Angular, PrimeNG, Tailwind CSS, TypeScript, NgRx, Docker, Docker Compose.

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

Habiendo instalado ya Node.js comprobar que esté instalado, ejecutando el comando:

```sh
node -v,
```

Después ejecutar el comando
```sh
nvm use 22.16.0
```
asi instala la versión de Node.js, y automáticamente se setea dicha versión por defecto

Luego, habiendo instalado también Docker y Docker Compose, "levantar" el entorno de Docker, ejecutando por terminal:

```sh
docker-compose up --build
```

### Si quieres "apagar" el contenedor del frontend:

```sh
docker-compose down
```

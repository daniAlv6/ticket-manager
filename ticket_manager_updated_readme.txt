
# 🎫 Ticket Manager - Proyecto Web con PHP, Apache, PostgreSQL y Docker

Este proyecto es una aplicación web básica para la gestión de tickets e incidencias, diseñada como práctica de desarrollo y para formar parte de un portfolio profesional.

Actualmente incluye:
- Un servidor web con PHP 8.2 y Apache, corriendo en un contenedor Docker.
- Un contenedor de base de datos PostgreSQL.
- Un contenedor de pgAdmin 4 para administración gráfica de la base de datos.
- Una estructura básica para futura ampliación (backend, frontend y base de datos).

---

## 🚀 Tecnologías utilizadas

- **PHP 8.2**: Backend de la aplicación web.
- **Apache**: Servidor web para servir los archivos PHP.
- **PostgreSQL 14**: Base de datos SQL robusta y profesional.
- **pgAdmin 4**: Herramienta web para administrar PostgreSQL gráficamente.
- **Docker**: Contenedores para desplegar la aplicación de forma aislada.
- **Docker Compose**: Orquestación de contenedores.
- **Windows + WSL 2**: Entorno de desarrollo en PC usando el subsistema de Linux.

---

## 📁 Estructura del proyecto

ticket-manager/
├── Dockerfile               # Construye imagen personalizada PHP + Apache
├── docker-compose.yml       # Define los servicios web, db y pgadmin
├── includes/                # Archivos PHP compartidos (configuración, conexión)
│   ├── config.php           # Configuración de base de datos
│   └── db.php               # Conexión PDO a PostgreSQL
├── sql/                     # Scripts SQL
│   └── init.sql             # Creación de tablas (users, tickets)
└── web/
    └── index.php            # Página de inicio servida en el navegador

---

## 🛠️ Instalación y puesta en marcha

### 1. Requisitos previos

- Docker Desktop instalado y funcionando (modo WSL 2 / Linux Containers).
- Acceso a terminal CMD o PowerShell.

### 2. Clonar o descargar este repositorio

git clone https://github.com/tuusuario/ticket-manager.git
cd ticket-manager

*(O simplemente descargar los archivos y colocarlos en una carpeta.)*

### 3. Levantar los contenedores

docker-compose up -d

Esto:
- Construye la imagen basada en PHP 8.2 con Apache.
- Lanza un contenedor PostgreSQL como base de datos.
- Lanza un contenedor pgAdmin para administración visual.

### 4. Verificar en el navegador

- Aplicación web: http://localhost:8080
- Panel de administración de base de datos (pgAdmin): http://localhost:5050

**Credenciales de pgAdmin:**
- Usuario: admin@admin.com
- Contraseña: admin

**Para conectar en pgAdmin a PostgreSQL:**
- Host: db
- Base de datos: ticketdb
- Usuario: user
- Contraseña: userpass
- Puerto: 5432

---

## ⚙️ Comandos útiles para desarrollo

| Acción                        | Comando                     |
|--------------------------------|------------------------------|
| Levantar los contenedores      | docker-compose up -d         |
| Ver contenedores activos       | docker ps                    |
| Ver logs del contenedor        | docker-compose logs          |
| Parar y eliminar contenedores  | docker-compose down          |

---

## 📌 Próximos pasos de ampliación

- Terminar de configurar init.sql para crear las tablas necesarias.
- Implementar sistema de login de usuarios en PHP.
- Crear formularios para gestionar tickets (crear, ver, editar, cerrar).
- Mejorar la interfaz web usando Bootstrap.
- Añadir validaciones con JavaScript.
- Documentar el flujo completo del sistema.

---

## 🌟 Quick Start (resumen rápido para reclutadores)

1. Clona este repositorio o descárgalo:
git clone https://github.com/tuusuario/ticket-manager.git
cd ticket-manager

2. Levanta los contenedores:
docker-compose up -d

3. Accede en el navegador:
- Aplicación web: http://localhost:8080
- Administra base de datos: http://localhost:5050

4. Usa pgAdmin para gestionar las tablas de la base de datos.

---
Tecnologías usadas (actualizado 29/04/25)
-------------------
- PHP 8.2
- Laravel 11
- Apache2 (en contenedor Docker)
- PostgreSQL 14 (en contenedor Docker)
- Docker Compose
- Node.js (en Windows para compilar assets frontend)
- Git y GitHub para control de versiones

Pasos hechos hasta ahora
-------------------------
- Configuración de Raspberry Pi como servidor (opcional).
- Instalación de PHP, Apache, PostgreSQL en contenedores Docker.
- Instalación de Laravel.
- Instalación de Laravel Breeze (sistema de login, registro y dashboard).
- Correcciones en configuración de Apache para permitir rutas amigables de Laravel.
- Instalación de Node.js y compilación de assets frontend con Vite (npm run build).
- Proyecto totalmente funcional con login, registro y dashboard.

Comandos importantes
---------------------
Levantar contenedores:
cd C:\app_ticket_manager
docker-compose up -d

Ver logs de contenedores:
docker-compose logs -f

Acceder a contenedor:
docker exec -it app_ticket_manager-web-1 bash

Ejecutar migraciones:
php artisan migrate

Compilar frontend:
cd C:\app_ticket_manager\web
npm run build

Git comandos:
cd C:\app_ticket_manager
git add .
git commit -m "Mensaje claro de cambios"
git push

Checklist diario de trabajo profesional
-----------------------------------------
Inicio de día:
- Abrir CMD o PowerShell
- cd C:\app_ticket_manager
- docker-compose up -d
- code C:\app_ticket_manager (abrir VSCode)
- Planificar la tarea del día

Durante el trabajo:
- Programar rutas, controladores, modelos, migraciones
- Probar cambios en navegador (http://localhost:8080/)
- Si modificas frontend: npm run build

Final del día o final de tarea:
- git add .
- git commit -m "Descripción clara de lo hecho"
- git push
- Anotar lo pendiente para mañana (opcional)

Notas importantes
-------------------
- No subir carpeta /vendor/ a GitHub (Laravel trae .gitignore correcto).
- Cada commit debe representar un avance concreto.
- Docker solo se levanta una vez al día.
- Frontend (npm) solo se compila si modificas vistas o estilos.
- Usa siempre http://localhost:8080 para probar.
## 👨‍💻 Autor

- [Tu Nombre]
- [Tu LinkedIn o GitHub]

---

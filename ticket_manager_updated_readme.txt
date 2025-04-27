
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

## 👨‍💻 Autor

- [Tu Nombre]
- [Tu LinkedIn o GitHub]

---

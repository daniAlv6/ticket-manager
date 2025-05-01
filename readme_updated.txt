
# Ticket Manager API - README

Este README recoge todos los pasos y tecnologías utilizadas para crear tu gestor de tickets como API REST con Laravel y Docker.

## 1. Descripción del proyecto
- **Aplicación**: Gestor de tickets/incidencias.
- **Backend**: Laravel 10, PHP 8.2 con Apache, PostgreSQL.
- **API**: Endpoints RESTful para Usuarios, Proyectos y Tickets.

## 2. Requisitos de hardware y software
- **Raspberry Pi 3** (o cualquier equipo) para servidor.
- **Docker** y **Docker Compose**.
- **Windows Subsystem for Linux (WSL2)** o similar.
- **Postman** o **curl** para probar la API.

## 3. Estructura de ficheros
```
app/                # Lógica de la aplicación
database/           # Migraciones, seeders y factories
public/             # Document root de Apache
routes/api.php      # Definición de rutas API
routes/web.php      # Rutas web (no usadas para API)
```

## 4. Docker y Docker Compose
- **Dockerfile**:
  - Imagen base: `php:8.2-apache`
  - Extensiones: `pdo_pgsql`, `unzip`, `git`
  - Composer instalado
  - DocumentRoot cambiado a `/var/www/html/public`
- **docker-compose.yml**:
  ```yaml
  services:
    web:
      build: .
      ports:
        - "8080:80"
      volumes:
        - ./web:/var/www/html
      depends_on:
        - db
    db:
      image: postgres:14
      environment:
        POSTGRES_DB: ticketdb
        POSTGRES_USER: user
        POSTGRES_PASSWORD: userpass
      volumes:
        - postgres_data:/var/lib/postgresql/data
    pgadmin:
      image: dpage/pgadmin4
      environment:
        PGADMIN_DEFAULT_EMAIL: admin@admin.com
        PGADMIN_DEFAULT_PASSWORD: admin
      ports:
        - "5050:80"
      depends_on:
        - db
  volumes:
    postgres_data:
  ```

### Construir y levantar containers
```bash
docker-compose build
docker-compose up -d
```

## 5. Configuración de Apache
- Habilitar `mod_rewrite` y definir `ServerName` para leer `.htaccess`.
- Permitir override en `public/`:
  ```bash
  a2enmod rewrite
  echo "ServerName localhost" >> /etc/apache2/apache2.conf
  # Añadir AllowOverride All para /var/www/html/public
  service apache2 restart
  ```

## 6. Instalación de Laravel y Composer
Dentro del contenedor web:
```bash
composer install
cp .env.example .env
php artisan key:generate
```

## 7. Migraciones y modelos
- Crear modelos y migraciones:
  ```bash
  php artisan make:model Project -m
  php artisan make:model TicketType -m
  php artisan make:model TicketPriority -m
  php artisan make:model TicketStatus -m
  php artisan make:model Ticket -m
  ```
- Editar migraciones en `database/migrations/...` y ejecutar:
  ```bash
  php artisan migrate
  ```

## 8. Seeders de metadatos
- Crear seeder:
  ```bash
  php artisan make:seeder TicketMetadataSeeder
  ```
- Insertar tipos, prioridades y estados en `run()`.
- Registrar en `DatabaseSeeder` y ejecutar:
  ```bash
  php artisan db:seed
  ```

## 9. Rutas API
En `routes/api.php`:
```php
use App\Http\Controllers\Api\{
    UserController,
    ProjectController,
    TicketController,
    TicketTypeController,
    TicketPriorityController,
    TicketStatusController
};

Route::apiResource('users', UserController::class);
Route::apiResource('projects', ProjectController::class);
Route::apiResource('tickets', TicketController::class);

// Solo lectura para metadatos
Route::get('ticket-types',     [TicketTypeController::class,    'index']);
Route::get('ticket-priorities',[TicketPriorityController::class,'index']);
Route::get('ticket-statuses',  [TicketStatusController::class,  'index']);
```

## 10. Controladores y lógica
- **Model binding**: inyecta la entidad en métodos `show`, `update`, `destroy`.
- **Mass assignment**: usar `$fillable` en cada modelo.
- **Métodos REST**:
  - `index()`: lista recursos (`Model::all()` o `paginate()`).
  - `store()`: `create()` + `response()->json($obj, 201)`.
  - `show()`: devuelve un único recurso.
  - `update()`: `$model->update($data)` + `response()->json($model)`.
  - `destroy()`: `$model->delete()` + `response()->json(null, 204)`.

## 11. Buenas prácticas aplicadas
- **Form Requests** (pendiente): separar validación.
- **API Resources** (pendiente): formatear respuesta JSON.
- **Paginación**: usar `paginate()` en Index.
- **Validaciones**: `required`, `exists`, `sometimes`.
- **Hash de contraseñas**: `Hash::make()` en UserController.
- **Logs y cache**:
  ```bash
  php artisan optimize:clear
  php artisan route:clear
  php artisan view:clear
  composer dump-autoload
  ```
- **Testing**: usar curl o Postman para CRUD completo.

## 12. Probar con Postman / curl
### Ejemplos curl
```bash
# Listar proyectos
curl http://localhost:8080/api/projects

# Crear proyecto
curl -i -X POST http://localhost:8080/api/projects   -H "Accept: application/json" -H "Content-Type: application/json"   -d '{"name":"Mi Proyecto","description":"..."}'

# Actualizar proyecto
curl -i -X PUT http://localhost:8080/api/projects/1   -H "Accept: application/json" -H "Content-Type: application/json"   -d '{"description":"Actualizado"}'

# Eliminar proyecto
curl -i -X DELETE http://localhost:8080/api/projects/1"
```

# Archivo generado automáticamente

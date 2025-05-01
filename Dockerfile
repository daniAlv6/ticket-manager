# Usar imagen oficial PHP con Apache
FROM php:8.2-apache

# Instalar extensiones necesarias
RUN apt-get update && apt-get install -y \
    libpq-dev \
    unzip \
    git \
    && docker-php-ext-install pdo pdo_pgsql

# Instalar Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Copiar el proyecto
COPY ./web /var/www/html/

# Cambiar DocumentRoot de Apache
RUN sed -i 's|/var/www/html|/var/www/html/public|g' /etc/apache2/sites-available/000-default.conf

# Habilitar mod_rewrite para rutas amigables
RUN a2enmod rewrite

# Dar permisos (opcional en local)
RUN chown -R www-data:www-data /var/www/html

WORKDIR /var/www/html


# Usar imagen oficial de PHP con Apache
FROM php:8.2-apache

# Instalar extensiones necesarias para Laravel y PostgreSQL
RUN apt-get update && apt-get install -y \
    libpq-dev \
    unzip \
    git \
    && docker-php-ext-install pdo pdo_pgsql

# Instalar Composer (gestor de dependencias PHP)
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Copiar los archivos de la app
COPY ./web /var/www/html/

# Establecer directorio de trabajo
WORKDIR /var/www/html

# Dar permisos adecuados (opcional para entornos locales)
RUN chown -R www-data:www-data /var/www/html

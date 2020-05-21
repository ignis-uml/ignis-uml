FROM php:7.3-fpm-alpine3.10

RUN apk update && apk add \
    $PHPIZE_DEPS \
    zlib-dev \
    libzip-dev \
    icu-dev \
    icu-libs \
    libssl1.1 \
    libressl-dev \
    freetype \
    libpng \
    libjpeg-turbo \
    libxslt \
    libxml2-dev \
    g++ \
    make \
    curl \
    bash

RUN rm -rf /tmp/* /usr/local/lib/php/doc/* /var/cache/apk/*

RUN docker-php-ext-configure intl
RUN docker-php-ext-install \
    intl \
    pdo_mysql \
    mbstring \
    xml \
    zip

RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" \
    && php -r "if (hash_file('sha384', 'composer-setup.php') === 'e0012edf3e80b6978849f5eff0d4b4e4c79ff1609dd1e613307e16318854d24ae64f26d17af3ef0bf7cfb710ca74755a') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;" \
    && php composer-setup.php --install-dir=/usr/local/bin --filename=composer \
    && php -r "unlink('composer-setup.php');"

WORKDIR /var/www

EXPOSE 9000

CMD ["php-fpm"]

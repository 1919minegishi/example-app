# PHPの公式イメージを使用
FROM php:8.1-fpm

# 必要なシステムパッケージとPHP拡張機能をインストール
RUN apt-get update && apt-get install -y \
    git \
    unzip \
    libonig-dev \
    libzip-dev \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    && rm -rf /var/lib/apt/lists/*

# PHPのGD拡張機能などを有効化
RUN docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd zip

# Composerのインストール
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

# 作業ディレクトリを設定
WORKDIR /var/www/html

# 権限を設定
USER www-data

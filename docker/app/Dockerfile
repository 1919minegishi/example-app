# Dockerfile

# PHP 8.1-FPM のベースイメージを使用
FROM php:8.1-fpm

# ----------------------------------------
# システムパッケージとPHP拡張機能のインストール
# ----------------------------------------
RUN apt-get update && apt-get install -y \
    git \
    curl \
    libpng-dev \
    libzip-dev \
    zip \
    unzip \
#    # Node.jsをインストールするための準備
#    gnupg \
#    && docker-php-ext-install pdo_mysql opcache bcmath
    nodejs \
    npm \
    && docker-php-ext-install pdo_mysql opcache bcmath

# ----------------------------------------
# Node.js v22 と npm 10.9 のインストール
# ----------------------------------------
# NodeSource のリポジトリから Node.js v22 をインストール
#RUN curl -fsSL https://deb.nodesource.com/setup_22.x | bash - \
#    && apt-get install -y nodejs \
    # npmは通常、Node.jsのインストール時に同梱されますが、
    # バージョンを明示的に合わせたい場合はnpmのバージョンアップを行います。
    # Node.js v22の最新版にはnpm 10.xが同梱されていますが、念のためバージョン確認を行います。
    # もしバージョンが合わない場合は 'npm install -g npm@10.9.0' を追加します。
    # ここでは、v22に同梱されているバージョンが10.9に近いと想定してそのままにします。

# Composer のインストール
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# アプリケーションコードを作業ディレクトリにコピー
WORKDIR /var/www/html

# 権限の設定
RUN usermod -u 1000 www-data

# ポートの公開
EXPOSE 9000

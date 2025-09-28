# セットアップ

## 新しいディレクトリに 'my-react-app' という名前でプロジェクトを作成
composer create-project laravel/laravel my-react-app
cd my-react-app

## Breeze パッケージを開発環境のみで必要な依存関係としてインストール
composer require laravel/breeze --dev

## React (Inertia.js) のスキャフォールディングを実行
Tailwind CSS も設定されます。
php artisan breeze:install react

## Node.js パッケージのインストール
npm install

## 開発サーバーの起動 (Vite 開発サーバー)
このコマンドはフロントエンドの変更を即座にブラウザに反映するために必要です。
npm run dev
http://localhost

## データベースのテーブルを生成
php artisan migrate

## Laravel の開発サーバーを起動
このコマンドは Vite とは別のターミナルウィンドウで実行します。
php artisan serve
http://172.31.160.1:8000


```
mine@mine:~/project/develop/my-react-app$ php -v
PHP 8.1.33 (cli) (built: Jul  3 2025 16:15:48) (NTS)
Copyright (c) The PHP Group
Zend Engine v4.1.33, Copyright (c) Zend Technologies
with Zend OPcache v8.1.33, Copyright (c), by Zend Technologies

mine@mine:~/project/develop/my-react-app$ composer -V
Composer version 2.8.12 2025-09-19 13:41:59
PHP version 8.1.33 (/usr/bin/php8.1)
Run the "diagnose" command to get more detailed diagnostics output.

mine@mine:~/project/develop/my-react-app$ npm -v
10.9.2

mine@mine:~/project/develop/my-react-app$ node -v
v22.17.0
```

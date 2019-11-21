# Setup

## Database

1. Create database `study-space` if doesnot exist.

2. Run `php artisan migrate` to migrate database.

## Run php service

1. Copy the `.env.example` file to a `.env` file in the same directory.

2. Run `composer install && composer update` to update php package.

3. Run `php artisan key:generate` update key (only for the first time).

4. Run `php artisan serve` to run application at `http://localhost:8000`.

## Run Fronte-end dev server

1. Run `npm install` to update UI dependences.

2. Run `npm run dev` to build webpack dev.

3. Run `npm start` to run nodejs service.

## Setup debug for PHP

### Install xdebug

1. Create info.php

2. Access to [XDebug](https://xdebug.org/wizard.php)

3. Copy source of info.php to textbox

4. Follow the Instructions.

5. Add end of php.ini

```
    [xdebug]
    xdebug.remote_enable=1
    xdebug.remote_autostart=1
```

### Add php debug to VSCode

1. Choose Extensions (Ctrl + Shift + X)

2. Search `php debug`

3. Follow the Installations.

### Run on server

1. Change `APP_ENV=local` to other in `.env`
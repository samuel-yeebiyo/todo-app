# To-do Project

### Built With

-   Laravel
-   React
-   TypeScript
-   Tailwind
-   Redis
-   PostgreSQL

### Installation

#### Laravel server

1. Install Laravel requirements.

```
composer install
```

2. Setup `.env` from from `.env.example` file.
3. Update database and and queue connection to suit your environment.
4. Run migrations.

```
php artisan migrate
```

#### React front-end

1. Install npm packages.

```
npm install
```

### Getting started

To start the laravel server and react frontend in tandem, you can use the npm dev script.

```
npm run dev
```

This will execute both the vite and the artisan command to start the respective processes.

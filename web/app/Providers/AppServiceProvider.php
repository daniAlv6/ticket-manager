<?php

namespace App\Providers;

use Illuminate\Support\Facades\Response;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    public function boot(): void
    {
        // Define un macro para respuestas JSON
        Response::macro('api', function ($data, $status = 200) {
            return response()->json($data, $status, ['Content-Type' => 'application/json']);
        });
    }

    public function register(): void
    {
        // Puedes registrar servicios adicionales aquí si es necesario
    }
}

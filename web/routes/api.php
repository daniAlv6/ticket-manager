<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ProjectController;
use App\Http\Controllers\Api\TicketController;

Route::get('/example', function () {
    return response()->json(['message' => 'This is an API route']);
});

// ------------------   Rutas de tu API   ------------------

// CRUD completo para proyectos
Route::apiResource('projects', ProjectController::class);

// CRUD completo para tickets
Route::apiResource('tickets',  TicketController::class);
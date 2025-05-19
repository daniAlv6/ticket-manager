<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\{
    TicketController,
    ProjectController,
    UserController,
    TicketTypeController,
    TicketPriorityController,
    TicketStatusController,
    
};

// Ruta de prueba (puedes quitarla si ya no la necesitas)
Route::get('/example', function () {
    return response()->json(['message' => 'This is an API route']);
});

// Rutas públicas (no requieren autenticación)
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login',    [AuthController::class, 'login']);

Route::get('/ticket-types',      [TicketTypeController::class, 'index']);
Route::get('/ticket-priorities', [TicketPriorityController::class, 'index']);
Route::get('/ticket-statuses',   [TicketStatusController::class, 'index']);

// Rutas protegidas (requieren token Sanctum)
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);

    Route::apiResource('users', UserController::class);
    Route::apiResource('tickets', TicketController::class);
    Route::apiResource('projects', ProjectController::class);
});

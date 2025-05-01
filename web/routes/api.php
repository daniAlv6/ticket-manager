<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ProjectController;
use App\Http\Controllers\Api\TicketController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\TicketTypeController;
use App\Http\Controllers\Api\TicketPriorityController;
use App\Http\Controllers\Api\TicketStatusController;

Route::get('/example', function () {
    return response()->json(['message' => 'This is an API route']);
});

// ------------------   Rutas de tu API   ------------------

// CRUD completo para proyectos
Route::apiResource('projects', ProjectController::class);

// CRUD completo para tickets
Route::apiResource('tickets',  TicketController::class);

// CRUD completo para usuarios
Route::apiResource('users', UserController::class);

Route::get('ticket-types',     [TicketTypeController::class,    'index']);

Route::get('ticket-priorities',[TicketPriorityController::class,'index']);

Route::get('ticket-statuses',  [TicketStatusController::class,  'index']);
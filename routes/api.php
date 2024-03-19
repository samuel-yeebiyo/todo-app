<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Controller
use App\Http\Controllers\TodoController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// Route to fetch todos
Route::get('/todos', [TodoController::class, 'index']);

// Route to update todos
Route::post('/todos/{id}', [TodoController::class, 'update']);
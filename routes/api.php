<?php

use App\Http\Controllers\TodoController;
use Illuminate\Http\Request;
// Controller
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// Route to fetch todos
Route::get('/todos', [TodoController::class, 'index']);

// Route to update todos
Route::post('/todos/{id}', [TodoController::class, 'update']);

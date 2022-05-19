<?php

use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\TasksController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\MessageController;
use App\Http\Controllers\API\PotionController;
use App\Http\Controllers\API\OutfitController;
use App\Http\Controllers\API\PartyController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);

Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('auth_user', [AuthController::class, 'getAuthenticatedUser']);
    Route::post('logout', [AuthController::class, 'logout']);
    Route::post('send_party_message', [MessageController::class, 'sendPartyMessage']);
    Route::get('get_previous_messages', [MessageController::class, 'getPreviousMessages']);
    Route::get('get_party_info', [PartyController::class, 'getPartyInfo']);
});

//storing and g potion
Route::post('addPotion', [PotionController::class, 'store']);
Route::get('potions',[PotionController::class, 'index']);
//storing and retrieving weapon
Route::post('addOutfit', [OutfitController::class, 'store']);
Route::get('outfit',[OutfitController::class, 'index']);

//new task
Route::post('newTask', [TasksController::class, 'create']);
Route::get('tasks',[TasksController::class, 'index']);

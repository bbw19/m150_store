<?php

use App\Http\Controllers\Api\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth =>sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/auth/register', [AuthController::class, 'createUser']);
Route::post('/auth/login', [AuthController::class, 'loginUser']);

Route::post('/cart/index', function() {return 'ass blast';});

Route::get('/index', function() {
    return response()->json([
        'products' => [
            [
              'id' => 1,
              'title' => 'Product 1',
              'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
              'price' => 50,
              'ratings' => 3,
              'reviews' => 5,
              'isAddedToCart' => false,
              'isAddedBtn' => false,
              'isFavourite' => false,
              'quantity' => 1
            ],
            [
              'id' => 2,
              'title' => 'Product 2',
              'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
              'price' => 35,
              'ratings' => 5,
              'reviews' => 10,
              'isAddedToCart' => false,
              'isAddedBtn' => false,
              'isFavourite' => false,
              'quantity' => 1
            ],
            [
              'id' => 3,
              'title' => 'Product 3',
              'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
              'price' => 110,
              'ratings' => 2,
              'reviews' => 3,
              'isAddedToCart' => false,
              'isAddedBtn' => false,
              'isFavourite' => false,
              'quantity' => 1
            ],
            [
              'id' => 4,
              'title' => 'Product 4',
              'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
              'price' => 50,
              'ratings' => 1,
              'reviews' => 0,
              'isAddedToCart' => false,
              'isAddedBtn' => false,
              'isFavourite' => false,
              'quantity' => 1
            ],
            [
              'id' => 5,
              'title' => 'Product 5',
              'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
              'price' => 35,
              'ratings' => 4,
              'reviews' => 2,
              'isAddedToCart' => false,
              'isAddedBtn' => false,
              'isFavourite' => false,
              'quantity' => 1
            ],
            [
              'id' => 6,
              'title' => 'Product 6',
              'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
              'price' => 110,
              'ratings' => 5,
              'reviews' => 1,
              'isAddedToCart' => false,
              'isAddedBtn' => false,
              'isFavourite' => false,
              'quantity' => 1
            ],
            [
              'id' => 7,
              'title' => 'Product 7',
              'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
              'price' => 50,
              'ratings' => 5,
              'reviews' => 7,
              'isAddedToCart' => false,
              'isAddedBtn' => false,
              'isFavourite' => false,
              'quantity' => 1
            ],
            [
              'id' => 8,
              'title' => 'Product 8',
              'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
              'price' => 35,
              'ratings' => 3,
              'reviews' => 0,
              'isAddedToCart' => false,
              'isAddedBtn' => false,
              'isFavourite' => false,
              'quantity' => 1
            ],
            [
              'id' => 9,
              'title' => 'Product 9',
              'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
              'price' => 110,
              'ratings' => 4,
              'reviews' => 2,
              'isAddedToCart' => false,
              'isAddedBtn' => false,
              'isFavourite' => false,
              'quantity' => 1
            ]
        ]
    ]);
});

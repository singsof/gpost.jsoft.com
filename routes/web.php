<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


// Route::middleware('guest')
//     ->prefix('auth')
//     ->name('auth.')
//     ->group(function () {
//         Route::prefix('admin')
//             ->controller(App\Http\Controllers\Auth\AuthAdminController::class)
//             ->name('admin.')
//             ->group(function () {
//                 Route::get('/', 'index')->name('index');
//                 Route::get('/login', 'viewLogin')->name('login');
//                 Route::post('/login', 'Login')->name('login-post');
//                 Route::get('/logout', 'Logout')->name('logout');
//             });

//         Route::prefix('employees')
//             // ->controller(AuthAdminController::class)
//             ->name('employees.')
//             ->group(function () {
//                 // Route::get('/login', 'LoginAdminPage')->name('login');
//             });
//     });
Route::get('/', function () {
    return view('customer.dashboard');
});
Route::get('/welcome', function () {
    return view('welcome');
});
require __DIR__ .'/auth.php';
require __DIR__ .'/customer.php';


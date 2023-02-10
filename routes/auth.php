<?php

use App\Http\Controllers\Auth\CustomerLoginControllers;
use Illuminate\Support\Facades\Route;





Route:: //middleware('guest')
    prefix('auth')
    ->name('auth.')
    ->group(function () {
        Route::prefix('customer')
            ->name('customer.')
            ->group(function () {
                Route::get('/login', [CustomerLoginControllers::class, 'viewLogin'])->name('viewLogin');
                Route::post('/login', [CustomerLoginControllers::class, 'customLogin'])->name('customLogin');
                Route::get('/register', [CustomerLoginControllers::class, 'viewRegistration'])->name('viewRegistration');
                Route::post('/register', [CustomerLoginControllers::class, 'customRegistration'])->name('customRegistration');
                // Route::get('/logout', 'Logout')->name('logout');
            });
    });

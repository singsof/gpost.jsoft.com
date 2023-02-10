<?php

use App\Http\Controllers\Auth\CustomerLoginControllers;
use Illuminate\Support\Facades\Route;





Route::prefix('view')
    ->name('view.')
    ->group(function () {
        Route::prefix('customer')
            ->name('customer.')
            ->group(function () {
                Route::get('/dashboard', function(){
                    return view('customer.dashboard');
                })->name('dashboard');
                Route::post('/login', [CustomerLoginControllers::class, 'customLogin'])->name('customLogin');
                // Route::get('/logout', 'Logout')->name('logout');
            });
    });

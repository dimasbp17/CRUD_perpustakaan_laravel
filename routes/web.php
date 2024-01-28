<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\AnggotaController;

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

Route::get('/anggota', [AnggotaController::class, 'index'])->name("anggota.index");
Route::post('/anggota', [AnggotaController::class, 'store'])->name("anggota.store");
Route::get('/anggota/{id}', [AnggotaController::class, 'show'])->name("anggota.show");
Route::put('/anggota/{id}', [AnggotaController::class, 'edit'])->name("anggota.edit");
Route::get('/anggota/{id}/delete', [AnggotaController::class, 'delete'])->name("anggota.delete");
Route::delete('/anggota/{id}/delete', [AnggotaController::class, 'destroy'])->name("anggota.destroy");

Route::get('/', function () {
    return Inertia::render('Homepage', [
        'title' => 'Perpustakaan',
        'description' => 'Selamat datang di Perpustakaan Online'
    ]);
});

Route::get('/welcome', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';

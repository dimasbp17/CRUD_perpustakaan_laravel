<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Anggota;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class AnggotaController extends Controller
{
    // controller index
    public function index(Request $request) 
    {
        $anggota = Anggota::all();
        return Inertia::render('Anggota/Index', [
            'title' => 'List anggota',
            'anggota' => $anggota
        ]);
    }

    // controller show
    public function show(Request $request, string $id)
    {
        if($id === 'create') {
            return Inertia::render('Anggota/Create', [
                'title' => 'Tambah Anggota'
            ]);
        }

        $anggota = Anggota::where('id', '=', $id)->first();
        return Inertia::render('Anggota/Show', [
            'title' => 'Detail anggota',
            'anggota' => $anggota
        ]);
    }

    // controller store
    public function store(Request $request) 
    {
        $validated = $request->validate([
            'nama' => 'required|string|max:100',
            'email' => 'required|unique:anggotas|email',
            'no_hp' => 'required|string|max:100',
            'alamat' => 'required|string|max:100'
        ]);

        Anggota::create($validated);
        return redirect()->route('anggota.index')->with('message', 'Anggota berhasil ditambahkan');
    }

    // controller edit
    public function edit(Request $request, string $id)
    {
        $validated = $request->validate([
            'nama' => 'required|string|max:100',
            'email' => 'required|unique:anggotas|email',
            'no_hp' => 'required|string|max:100',
            'alamat' => 'required|string|max:100'
        ]);

        $anggota = Anggota::where('id', '=', $id)->first();
        if(!$anggota) {
            return redirect()->route('anggota.show')->with('message', 'Anggota tidak ditemukan');
        }

        $anggota->update($validated);

        return redirect()->route('anggota.index')->with('message', 'Anggota berhasil diubah');
    }

    // controller delete
    public function delete(Request $request, string $id)
    {
        $anggota = Anggota::where('id', '=', $id)->first();
        return Inertia::render('Anggota/Delete', [
            'title' => 'Delete anggota',
            'anggota' => $anggota
        ]);
    }

    public function destroy(Request $request, string $id) {
        // dd($id);
        $anggota = Anggota::where('id', '=', $id)->first();
        if(!$anggota) {
            return redirect()->route('anggota.delete')->with('message', 'Anggota tidak ditemukan');
        };

        $anggota->delete();

        return redirect()->route('anggota.index')->with('message', 'Anggota berhasil dihapus');
    }
}

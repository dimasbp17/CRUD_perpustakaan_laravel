<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;
use Illuminate\Support\Facades\DB;

class AnggotaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create();
        foreach(range(1, 20) as $index) {
            DB::table('anggotas')->insert([
                'nama' => $faker->name(),
                'email' => $faker->email(),
                'no_hp' => $faker->phoneNumber(),
                'alamat' => $faker->address(),
            ]);
        }
    }
}

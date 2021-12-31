<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        DB::table('avatar_classes')->insert(
            array(
                [
                    'name' => 'warrior',
                    'base_attack' => 1,
                    'magic_attack' => 1,
                    'base_defense' => 1,
                    'magic_defense' => 1,
                ],
                [
                    'name' => 'mage',
                    'base_attack' => 1,
                    'magic_attack' => 1,
                    'base_defense' => 1,
                    'magic_defense' => 1,
                ],
                [
                    'name' => 'marksman',
                    'base_attack' => 1,
                    'magic_attack' => 1,
                    'base_defense' => 1,
                    'magic_defense' => 1,
                ],
            )
        );
    }
}

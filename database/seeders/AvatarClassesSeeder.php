<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AvatarClassesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
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

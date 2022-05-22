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
                ['name' => 'warrior',
                    'strength' => 20,
                    'agility' => 15,
                    'intelligence' => 5,
                    'hp' => 60,
                    'crit_chance' => 11.5,
                    'crit_damage' => 0.098,
                    'primary_attribute' => 1,
                    'secondary_attribute' => 2,
                    'ternary_attribute' => 3,
                ],
                ['name' => 'marksman',
                    'strength' => 5,
                    'agility' => 20,
                    'intelligence' => 15,
                    'hp' => 53,
                    'crit_chance' => 12,
                    'crit_damage' => 0.129,
                    'primary_attribute' => 2,
                    'secondary_attribute' => 3,
                    'ternary_attribute' => 1,
                ],
                ['name' => 'mage',
                    'strength' => 15,
                    'agility' => 5,
                    'intelligence' => 20,
                    'hp' => 58,
                    'crit_chance' => 10.5,
                    'crit_damage' => 0.33,
                    'primary_attribute' => 3,
                    'secondary_attribute' => 1,
                    'ternary_attribute' => 2,
                ],
            )
        );
    }
}

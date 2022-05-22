<?php

namespace Database\Seeders;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class AttributeBaseStatAdditionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('attribute_base_stat_additions')->insert(
            array(
                ['type' => 'primary',
                    'base_stat_addition' => 5
                ],
                ['type' => 'secondary',
                    'base_stat_addition' => 4
                ],
                ['type' => 'ternary',
                    'base_stat_addition' => 2
                ],
                ['type' => 'HP',
                    'base_stat_addition' => 2
                ],
            )
        );
    }
}

<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class OutfitInfoTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('outfit_info')->insert([
            'id'=> '34',
            'p_attack'=> '5',
            'm_attack'=> '5',
            'p_def'=> '5',
            'm_def'=> '5',
            'str'=> '5',
            'int'=> '5',
            'agi'=> '5',
            'crit'=> '5',
            'crit_dmg'=> '5',
            'price'=> '5',
        ]);
    }
}

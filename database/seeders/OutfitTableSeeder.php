<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class OutfitTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('outfit')->insert([
            'id'=> '34',
            'outfit_type'=> 'Weapon',
            'sex'=> 'Male',
            'male_image'=> 'assets/images/weapons/1639505166.png',
            'female_image'=> '',
            'name'=> 'seederNameWeap',
            'class'=> 'Mage',
            'rarity_type'=> 'Rare',
            'body_part'=> '',
            'spritesheet_img_name'=> 'glowingseeder.png',
            'directory'=> 'weapon/seeder/seeder',
            'outfit_infos'=>'34',
        ]);
    }
}

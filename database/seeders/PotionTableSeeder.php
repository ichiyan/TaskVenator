<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PotionTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('potion')->insert(
        [
            [
                //HEALTH POTIONS
                'id'=>'1',
                'image'=>'assets/images/potions/HealthPotionSmall.png',
                'name'=>'Health Potion Small',
                'type'=>'Hp Potion',
                'size'=>'Small',
                'effect'=>'20',
                'description'=>'Heals 20 hp ',
                'price'=>'1',

            ],[
                'id'=>'2',
                'image'=>'assets/images/potions/HealthPotionMedium.png',
                'name'=>'Health Potion Medium',
                'type'=>'Hp Potion',
                'size'=>'Medium',
                'effect'=>'30',
                'description'=>'Heals 30 hp ',
                'price'=>'2',
            ],[
                'id'=>'3',
                'image'=>'assets/images/potions/HealthPotionLarge.png',
                'name'=>'Health Potion Large',
                'type'=>'Hp Potion',
                'size'=>'Large',
                'effect'=>'50',
                'description'=>'Heals 50 hp ',
                'price'=>'3',
            ],[
                //POWERUP POTIONS
                'id'=>'4',
                'image'=>'assets/images/potions/PowerupPotionSmall.png',
                'name'=>'Powerup Potion Small',
                'type'=>'Powerup Potion',
                'size'=>'Small',
                'effect'=>'1.5',
                'description'=>'Adds x1.5 damage ',
                'price'=>'1',
            ],[
                'id'=>'5',
                'image'=>'assets/images/potions/PowerupPotionSmall.png',
                'name'=>'Powerup Potion Small',
                'type'=>'Powerup Potion',
                'size'=>'Medium',
                'effect'=>'2',
                'description'=>'Adds x2 damage ',
                'price'=>'1',
            ],[
                'id'=>'6',
                'image'=>'assets/images/potions/PowerupPotionLarge.png',
                'name'=>'Powerup Potion Large',
                'type'=>'Powerup Potion',
                'size'=>'Large',
                'effect'=>'2.5',
                'description'=>'Adds x2.5 damage ',
                'price'=>'1',
            ]

        ]);
    }
}

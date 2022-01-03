<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class ProductsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('products')->insert(
            [
        
        [
            //storing common type warrior weapon 
             'id'=> '1',
            'card'=> NULL,
            'potion'=> NULL,
            'outfit'=> '1',
        ],[
             'id'=> '2',
            'card'=> NULL,
            'potion'=> NULL,
            'outfit'=> '2',
        ],[
            'id'=> '3',
            'card'=> NULL,
            'potion'=> NULL,
            'outfit'=> '3',
        ],[
            'id'=> '4',
            'card'=> NULL,
            'potion'=> NULL,
            'outfit'=> '4',
        ],[
            'id'=> '5',
            'card'=> NULL,
            'potion'=> NULL,
            'outfit'=> '5',
        ],[
            //uncommon weap
            'id'=> '6',
            'card'=> NULL,
            'potion'=> NULL,
            'outfit'=> '6',
        ],[
            'id'=> '7',
            'card'=> NULL,
            'potion'=> NULL,
            'outfit'=> '7',
        ],[
            'id'=> '8',
            'card'=> NULL,
            'potion'=> NULL,
            'outfit'=> '8',
        ],[
            'id'=> '9',
            'card'=> NULL,
            'potion'=> NULL,
            'outfit'=> '9',
        ],[
            'id'=> '10',
            'card'=> NULL,
            'potion'=> NULL,
            'outfit'=> '10',
        ],[
            //rare weap
            'id'=> '11',
            'card'=> NULL,
            'potion'=> NULL,
            'outfit'=> '11',
        ],[
            'id'=> '12',
            'card'=> NULL,
            'potion'=> NULL,
            'outfit'=> '12',
        ],[
            'id'=> '13',
            'card'=> NULL,
            'potion'=> NULL,
            'outfit'=> '13',
        ],[
            'id'=> '14',
            'card'=> NULL,
            'potion'=> NULL,
            'outfit'=> '14',
        ],[
            //COMMON MARKSMAN WEAPS
            'id'=> '15',
            'card'=> NULL,
            'potion'=> NULL,
            'outfit'=> '15',
        ],[
            'id'=> '16',
            'card'=> NULL,
            'potion'=> NULL,
            'outfit'=> '16',
        ],[
            'id'=> '17',
            'card'=> NULL,
            'potion'=> NULL,
            'outfit'=> '17',
        ],[
            //UNCOMMON MARKSMAN WEAP
            'id'=> '18',
            'card'=> NULL,
            'potion'=> NULL,
            'outfit'=> '18',
        ],[
            'id'=> '19',
            'card'=> NULL,
            'potion'=> NULL,
            'outfit'=> '19',
        ],[
            'id'=> '20',
            'card'=> NULL,
            'potion'=> NULL,
            'outfit'=> '20',
        ],[
            //RARE MARKSMAN WEAP
            'id'=> '21',
            'card'=> NULL,
            'potion'=> NULL,
            'outfit'=> '21',
        ],[
            //COMMON MAGE WEAP
            'id'=> '22',
            'card'=> NULL,
            'potion'=> NULL,
            'outfit'=> '22',
        ],[
            //UNCOMMON MAGE WEAP
            'id'=> '23',
            'card'=> NULL,
            'potion'=> NULL,
            'outfit'=> '23',
        ],[
            //RARE MAGE WEAP
            'id'=> '24',
            'card'=> NULL,
            'potion'=> NULL,
            'outfit'=> '24',
        ],[
            //COMMON WARRIOR HEAD
            'id'=> '25',
            'card'=> NULL,
            'potion'=> NULL,
            'outfit'=> '25', 
        ],[
            'id'=> '26',
            'card'=> NULL,
            'potion'=> NULL,
            'outfit'=> '26',
        ]
        ]);
    }
}

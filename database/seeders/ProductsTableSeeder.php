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
        DB::table('products')->insert([
             'id'=> '34',
            'card'=> NULL,
            'potion'=> NULL,
            'outfit'=> '34',
        ]);
    }
}

<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;


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

        $this->call([AvatarClassesSeeder::class, UsersSeeder::class,  PartiesSeeder::class,
                    OutfitInfoTableSeeder::class, OutfitTableSeeder::class, PotionTableSeeder::class, ProductsTableSeeder::class
        ]);
    }
}

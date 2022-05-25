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

        $this->call([
                    AttributeBaseStatAdditionsSeeder::class,
                    AvatarClassesSeeder::class,
                    BattlePerformanceSeeder::class,
                    TaskDifficultiesSeeder::class,
                    LevelsSeeder::class, UsersSeeder::class,
                    OutfitInfoTableSeeder::class,
                    OutfitTableSeeder::class,
                    PotionTableSeeder::class, ProductsTableSeeder::class,
                    PartiesSeeder::class, TasksSeeder::class,
        ]);
    }
}

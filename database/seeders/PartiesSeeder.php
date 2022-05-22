<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PartiesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('parties')->insert(
            array(
               [
                    'party_name' => 'TaskVenator',
                   'party_image' => 'add_later',
                   'party_motto' => 'Let us finish this project!!',
                    'founded_on' => '2022-01-12 21:47:22',
                    'total_members' => 7,
                   'max_members' => 10,
                    'battles_won' => 0,
                    'battles_lost' => 0,
                    'founder' => 1,
               ],
            )
        );
        DB::table('party_members')->insert(
            array(
                [
                    'party_id' => 1,
                    'user_id' => 1,
                ],
                [
                    'party_id' => 1,
                    'user_id' => 2,
                ],
                [
                    'party_id' => 1,
                    'user_id' => 3,
                ],
                [
                    'party_id' => 1,
                    'user_id' => 4,
                ],
                [
                    'party_id' => 1,
                    'user_id' => 5,
                ],
                [
                    'party_id' => 1,
                    'user_id' => 6,
                ],
                [
                    'party_id' => 1,
                    'user_id' => 7,
                ],
            )
        );
    }
}

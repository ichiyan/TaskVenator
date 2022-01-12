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
                    'founded_on' => '2022-01-12 21:47:22',
                    'total_members' => 3,
                    'battles_won' => 0,
                    'battles_lost' => 0,
                    'party_creator' => 1,
               ],
            )
        );
        DB::table('party_members')->insert(
            array(
                [
                    'party_id' => 1,
                    'user_id' => 1,
                    'status' => 1,
                ],
                [
                    'party_id' => 1,
                    'user_id' => 2,
                    'status' => 1,
                ],
                [
                    'party_id' => 1,
                    'user_id' => 3,
                    'status' => 1,
                ],
            )
        );
    }
}

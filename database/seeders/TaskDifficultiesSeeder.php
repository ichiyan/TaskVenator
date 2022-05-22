<?php

namespace Database\Seeders;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class TaskDifficultiesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('task_difficulties')->insert(
            array(
                ['difficulty' => 'Very Easy',
                    'task_value' => 10,
                    'gems' => 2,
                    'hp_deduction' => 22,
                    'gem_deduction' => 8,
                    'hp_gain' => 4,
                    'gem_gain' => 2,
                    'penalty_points' => 10,
                ],
                ['difficulty' => 'Easy',
                    'task_value' => 20,
                    'gems' => 3,
                    'hp_deduction' => 21,
                    'gem_deduction' => 5,
                    'hp_gain' => 8,
                    'gem_gain' => 3,
                    'penalty_points' => 5,
                ],
                ['difficulty' => 'Medium',
                    'task_value' => 30,
                    'gems' => 5,
                    'hp_deduction' => 18,
                    'gem_deduction' => 3,
                    'hp_gain' => 13,
                    'gem_gain' => 5,
                    'penalty_points' => 3,
                ],
                ['difficulty' => 'Hard',
                    'task_value' => 40,
                    'gems' => 7,
                    'hp_deduction' => 15,
                    'gem_deduction' => 2,
                    'hp_gain' => 19,
                    'gem_gain' => 7,
                    'penalty_points' => 2,
                ],
                ['difficulty' => 'Extreme',
                    'task_value' => 50,
                    'gems' => 10,
                    'hp_deduction' => 10,
                    'gem_deduction' => 1,
                    'hp_gain' => 26,
                    'gem_gain' => 10,
                    'penalty_points' => 1,
                ],
            )
        );
    }
}

<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TasksSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('tasks')->insert(
            array(
                ['title' => 'SIPP',
                    'show_when_done' => 1, 'is_in_progress' => 0, 'subtasks' => 2, 'owner' => 1, ],
                ['title' => 'Thesis',
                    'show_when_done' => 0, 'is_in_progress' => 0.5, 'subtasks' => 2, 'owner' => 1, ],
                ['title' => 'Software Engineering',
                    'show_when_done' => 1, 'is_in_progress' => 0.5, 'subtasks' => 2, 'owner' => 1, ],
                ['title' => 'ATFL',
                    'show_when_done' => 1, 'is_in_progress' => 1, 'subtasks' => 2, 'owner' => 2, ],
                ['title' => 'DA',
                    'show_when_done' => 1, 'is_in_progress' => 0, 'subtasks' => 2, 'owner' => 2, ],
                ['title' => 'AA',
                    'show_when_done' => 1, 'is_in_progress' => 0, 'subtasks' => 2, 'owner' => 2, ],
            )
        );
        DB::table('task_items')->insert(
            array(
                //task 1
                ['content' => 'Final project', 'is_complete' => 0, 'frequency' => 1, 'deadline' => "2022-06-08 11:31:58",
                    'date_complete' => null, 'is_public' => 1, 'reminder' => 1, 'task_id' => 1, 'task_difficulty' => 1],
                ['content' => 'Reporting', 'is_complete' => 0, 'frequency' => 1, 'deadline' => "2022-06-08 11:31:58",
                    'date_complete' => null, 'is_public' => 1, 'reminder' => 1, 'task_id' => 1, 'task_difficulty' => 1],
                //task 2
                ['content' => 'Final project', 'is_complete' => 1, 'frequency' => 1, 'deadline' => "2022-06-08 11:31:58",
                    'date_complete' => "2022-05-22 11:31:58", 'is_public' => 1, 'reminder' => 1, 'task_id' => 2, 'task_difficulty' => 2],
                ['content' => 'Proposal', 'is_complete' => 0, 'frequency' => 1, 'deadline' => "2022-06-08 11:31:58",
                    'date_complete' => null, 'is_public' => 0, 'reminder' => 1, 'task_id' => 2, 'task_difficulty' => 2],
                //task 3
                ['content' => 'Final project', 'is_complete' => 1, 'frequency' => 2, 'deadline' => "2022-06-08 11:31:58",
                    'date_complete' => "2022-05-22 11:31:58", 'is_public' => 1, 'reminder' => 1, 'task_id' => 3, 'task_difficulty' => 3],
                ['content' => 'Document', 'is_complete' => 0, 'frequency' => 2, 'deadline' => "2022-06-08 11:31:58",
                    'date_complete' => null, 'is_public' => 1, 'reminder' => 1, 'task_id' => 3, 'task_difficulty' => 3],
                //task 4
                ['content' => 'Final project', 'is_complete' => 1, 'frequency' => 7, 'deadline' => "2022-06-08 11:31:58",
                    'date_complete' => "2022-05-22 11:31:58", 'is_public' => 0, 'reminder' => 1, 'task_id' => 4, 'task_difficulty' => 1],
                ['content' => 'Research paper', 'is_complete' => 1, 'frequency' => 7, 'deadline' => "2022-06-08 11:31:58",
                    'date_complete' => "2022-05-22 11:31:58", 'is_public' => 0, 'reminder' => 1, 'task_id' => 4, 'task_difficulty' => 1],
                //task 5
                ['content' => 'Final project', 'is_complete' => 0, 'frequency' => 0, 'deadline' => "2022-06-08 11:31:58",
                    'date_complete' => null, 'is_public' => 1, 'reminder' => 1, 'task_id' => 5, 'task_difficulty' => 4],
                ['content' => 'Research problem', 'is_complete' => 0, 'frequency' => 0, 'deadline' => "2022-06-08 11:31:58",
                    'date_complete' => null, 'is_public' => 1, 'reminder' => 1, 'task_id' => 5, 'task_difficulty' => 4],
                //task 6
                ['content' => 'Final project', 'is_complete' => 0, 'frequency' => 0, 'deadline' => "2022-06-08 11:31:58",
                    'date_complete' => null, 'is_public' => 1, 'reminder' => 1, 'task_id' => 6, 'task_difficulty' => 5],
                ['content' => 'Website', 'is_complete' => 0, 'frequency' => 0, 'deadline' => "2022-06-08 11:31:58",
                    'date_complete' => null, 'is_public' => 0, 'reminder' => 1, 'task_id' => 6, 'task_difficulty' => 5],
            )
        );
    }
}

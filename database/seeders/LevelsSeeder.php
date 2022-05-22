<?php

namespace Database\Seeders;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class LevelsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('levels')->insert(
            array(
                ['level' => 1, 'xp_needed' => 25 ],
                ['level' => 2, 'xp_needed' => 50 ],
                ['level' => 3, 'xp_needed' => 75 ],
                ['level' => 4, 'xp_needed' => 100 ],
                ['level' => 5, 'xp_needed' => 150 ],
                ['level' => 6, 'xp_needed' => 210 ],
                ['level' => 7, 'xp_needed' => 220 ],
                ['level' => 8, 'xp_needed' => 240 ],
                ['level' => 9, 'xp_needed' => 250 ],
                ['level' => 10, 'xp_needed' => 260 ],
                ['level' => 11, 'xp_needed' => 280 ],
                ['level' => 12, 'xp_needed' => 300 ],
                ['level' => 13, 'xp_needed' => 310 ],
                ['level' => 14, 'xp_needed' => 330 ],
                ['level' => 15, 'xp_needed' => 350 ],
                ['level' => 16, 'xp_needed' => 360 ],
                ['level' => 17, 'xp_needed' => 380 ],
                ['level' => 18, 'xp_needed' => 400 ],
                ['level' => 19, 'xp_needed' => 420 ],
                ['level' => 20, 'xp_needed' => 440 ],
                ['level' => 21, 'xp_needed' => 460 ],
                ['level' => 22, 'xp_needed' => 480 ],
                ['level' => 23, 'xp_needed' => 500 ],
                ['level' => 24, 'xp_needed' => 520 ],
                ['level' => 25, 'xp_needed' => 550 ],
                ['level' => 26, 'xp_needed' => 570 ],
                ['level' => 27, 'xp_needed' => 590 ],
                ['level' => 28, 'xp_needed' => 620 ],
                ['level' => 29, 'xp_needed' => 640 ],
                ['level' => 30, 'xp_needed' => 660 ],
                ['level' => 31, 'xp_needed' => 690 ],
                ['level' => 32, 'xp_needed' => 720 ],
                ['level' => 33, 'xp_needed' => 740 ],
                ['level' => 34, 'xp_needed' => 770 ],
                ['level' => 35, 'xp_needed' => 800 ],
                ['level' => 36, 'xp_needed' => 820 ],
                ['level' => 37, 'xp_needed' => 850 ],
                ['level' => 38, 'xp_needed' => 880 ],
                ['level' => 39, 'xp_needed' => 910 ],
                ['level' => 40, 'xp_needed' => 940 ],
                ['level' => 41, 'xp_needed' => 970 ],
                ['level' => 42, 'xp_needed' => 1000 ],
                ['level' => 43, 'xp_needed' => 1030 ],
                ['level' => 44, 'xp_needed' => 1060 ],
                ['level' => 45, 'xp_needed' => 1100 ],
                ['level' => 46, 'xp_needed' => 1130 ],
                ['level' => 47, 'xp_needed' => 1160 ],
                ['level' => 48, 'xp_needed' => 1200 ],
                ['level' => 49, 'xp_needed' => 1230 ],
            )
        );
    }
}

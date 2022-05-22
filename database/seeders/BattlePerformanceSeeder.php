<?php

namespace Database\Seeders;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class BattlePerformanceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('battle_performances')->insert(
            array(
                ['name' => 'Worst',
                    'penalty_points_lower_limit' => 50,
                    'penalty_points_upper_limit' => null,
                    'hp_gain' => 0,
                    'xp_gain' => 0,
                    'gem_gain' => 0,
                    'no_reward_rate' => 70,
                    'health_potion_drop_rate' => 60,
                    'powerup_potion_drop_rate' => 40,
                    'common_weapon_drop_rate' => 60,
                    'uncommon_weapon_drop_rate' => 35,
                    'rare_weapon_drop_rate' => 5,
                    'common_outfit_drop_rate' => 60,
                    'uncommon_outfit_drop_rate' => 35,
                    'rare_outfit_drop_rate' => 5,
                ],
                ['name' => 'Bad',
                    'penalty_points_lower_limit' => 15,
                    'penalty_points_upper_limit' => 49,
                    'hp_gain' => 0.5,
                    'xp_gain' => 0.5,
                    'gem_gain' => 1,
                    'no_reward_rate' => 54,
                    'health_potion_drop_rate' => 60,
                    'powerup_potion_drop_rate' => 40,
                    'common_weapon_drop_rate' => 60,
                    'uncommon_weapon_drop_rate' => 35,
                    'rare_weapon_drop_rate' => 5,
                    'common_outfit_drop_rate' => 60,
                    'uncommon_outfit_drop_rate' => 35,
                    'rare_outfit_drop_rate' => 5,
                ],
                ['name' => 'Good',
                    'penalty_points_lower_limit' => 5,
                    'penalty_points_upper_limit' => 14,
                    'hp_gain' => 1,
                    'xp_gain' => 0.8,
                    'gem_gain' => 2,
                    'no_reward_rate' => 48,
                    'health_potion_drop_rate' => 60,
                    'powerup_potion_drop_rate' => 40,
                    'common_weapon_drop_rate' => 60,
                    'uncommon_weapon_drop_rate' => 35,
                    'rare_weapon_drop_rate' => 5,
                    'common_outfit_drop_rate' => 60,
                    'uncommon_outfit_drop_rate' => 35,
                    'rare_outfit_drop_rate' => 5,
                ],
                ['name' => 'Very Good',
                    'penalty_points_lower_limit' => 1,
                    'penalty_points_upper_limit' => 4,
                    'hp_gain' => 1.2,
                    'xp_gain' => 1,
                    'gem_gain' => 3,
                    'no_reward_rate' => 39,
                    'health_potion_drop_rate' => 60,
                    'powerup_potion_drop_rate' => 40,
                    'common_weapon_drop_rate' => 60,
                    'uncommon_weapon_drop_rate' => 35,
                    'rare_weapon_drop_rate' => 5,
                    'common_outfit_drop_rate' => 60,
                    'uncommon_outfit_drop_rate' => 35,
                    'rare_outfit_drop_rate' => 5,
                ],
                ['name' => 'Excellent',
                    'penalty_points_lower_limit' => 0,
                    'penalty_points_upper_limit' => 0,
                    'hp_gain' => 1.5,
                    'xp_gain' => 1.2,
                    'gem_gain' => 5,
                    'no_reward_rate' => 30,
                    'health_potion_drop_rate' => 60,
                    'powerup_potion_drop_rate' => 40,
                    'common_weapon_drop_rate' => 60,
                    'uncommon_weapon_drop_rate' => 35,
                    'rare_weapon_drop_rate' => 5,
                    'common_outfit_drop_rate' => 60,
                    'uncommon_outfit_drop_rate' => 35,
                    'rare_outfit_drop_rate' => 5,
                ],
            )
        );
    }
}

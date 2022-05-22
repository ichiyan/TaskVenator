<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class BattlePerformance extends Model
{
    use HasFactory;
    protected $table = 'battle_performances';
    protected $fillable = ['name', 'penalty_points_lower_limit', 'penalty_points_upper_limit',
                            'hp_gain', 'xp_gain', 'gem_gain', 'no_reward_rate', 'health_potion_drop_rate',
                            'powerup_potion_drop_rate', 'common_weapon_drop_rate', 'uncommon_weapon_drop_rate',
                            'rare_weapon_drop_rate', 'common_outfit_drop_rate', 'uncommon_outfit_drop_rate',
                            'rare_outfit_drop_rate'];
}

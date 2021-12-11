<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class BattleReward extends Model
{
    use HasFactory;
    protected $table = 'battle_rewards';
    protected $fillable = ['battle', 'reward', 'amount'];

    public function duringBattle(): \Illuminate\Database\Eloquent\Relations\HasOne
    {
        return $this->hasOne(Battle::class);
    }

    public function rewarded(): HasOne
    {
        return $this->hasOne(Reward::class);
    }
}

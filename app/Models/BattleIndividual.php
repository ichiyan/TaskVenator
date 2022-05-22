<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class BattleIndividual extends Model
{
    use HasFactory;
    protected $table = 'battle_individuals';
    protected $fillable = ['monster_id', 'user_id', 'monster_remaining_hp',
                            'battle_started', 'battle_performance_id'];

    public function is_fighting(): BelongsTo
    {
        return $this->belongsTo(Monster::class);
    }
    public function is_fighter(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
    public function performance_is(): BelongsTo
    {
        return $this->belongsTo(BattlePerformance::class);
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class BattleGroup extends Model
{
    use HasFactory;
    protected $table = 'battle_groups';
    protected $fillable = ['monster_id', 'user_id', 'monster_remaining_hp',
                            'battle_started', 'battle_performance_id'];

    public function has_oponent(): BelongsTo
    {
        return $this->belongsTo(Monster::class);
    }
}

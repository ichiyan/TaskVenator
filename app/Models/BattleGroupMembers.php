<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class BattleGroupMembers extends Model
{
    use HasFactory;
    protected $table = 'battle_group_members';
    protected $fillable = ['battle_group_id', 'user_id', 'dmg_done' ];

    public function includes_members(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function is_fighting_in(): BelongsTo
    {
        return $this->belongsTo(BattleGroup::class);
    }
}

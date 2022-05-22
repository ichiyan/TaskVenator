<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Avatar extends Model
{
    use HasFactory;
    protected $table = 'avatars';
    protected $fillable = ['level', 'image', 'sex', 'skin_tone', 'background_color', 'items',
        'strength', 'agility', 'intelligence', 'current_hp', 'current_xp', 'max_hp', 'max_xp',
        'crit_chance', 'crit_damage', 'user_info_id', 'class_id'];

    protected $casts = [
        'items' => 'array',
    ];

    public function user_info(): BelongsTo
    {
        return $this->belongsTo(UserInfo::class);
    }

    public function class(): BelongsTo
    {
        return $this->belongsTo(AvatarClass::class);
    }
}

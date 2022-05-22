<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class AvatarClass extends Model
{
    use HasFactory;
    protected $table = 'avatar_classes';
    protected $fillable = ['name', 'strength', 'agility', 'intelligence', 'hp',
                            'crit_chance', 'crit_damage', 'primary_attribute',
                            'secondary_attribute', 'ternary_attribute'];

    public function has_avatars(): HasMany
    {
        return $this->hasMany(Avatar::class);
    }
}

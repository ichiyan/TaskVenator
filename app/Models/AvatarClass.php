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
    protected $fillable = ['name', 'base_attack', 'magic_attack', 'base_defense', 'magic_defense'];

    public function classed(): HasMany
    {
        return $this->hasMany(Avatar::class);
    }
}

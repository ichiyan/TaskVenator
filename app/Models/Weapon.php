<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Weapon extends Model
{
    use HasFactory;
    protected $table = 'weapons';
    protected $fillable = ['name', 'base_attack', 'magic_attack', 'base_defense', 'magic_defense', 'class'];

    public function usedBy(): HasMany
    {
        return $this->hasMany(User::class);
    }

    public function classed(): HasOne
    {
        return $this->hasOne(AvatarClass::class);
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Monster extends Model
{
    use HasFactory;
    protected $table = 'monsters';
    protected $fillable = ['name', 'base_hp', 'base_attack', 'base_defense', 'image', 'class'];

    public function classifiedAs(): HasOne
    {
        return $this->hasOne(MClass::class);
    }

    public function foughtIn(): HasMany
    {
        return $this->hasMany(Battle::class);
    }
}

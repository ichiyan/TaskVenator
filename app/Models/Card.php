<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Card extends Model
{
    use HasFactory;
    protected $table = 'cards';
    protected $fillable = ['name', 'class', 'rarity', 'attack_effectivity', 'attack_effect'];

    public function classedAs(): HasOne
    {
        return $this->hasOne(MClass::class);
    }

    public function results(): HasOne
    {
        return $this->hasOne(AttackEffect::class);
    }

    public function featuredIn(): HasOne
    {
        return $this->hasOne(Product::class);
    }
}

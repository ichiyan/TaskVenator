<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Product extends Model
{
    use HasFactory;
    protected $table='products';
    protected $fillable = ['card', 'weapon', 'potion', 'outfit', 'price'];

    public function featuresCard(): HasOne
    {
        return $this->hasOne(Card::class);
    }

    public function featuresWeapon(): HasOne
    {
        return $this->hasOne(Weapon::class);
    }

    public function featuresPotion(): HasOne
    {
        return $this->hasOne(Potion::class);
    }

    public function featuresOutfit(): HasOne
    {
        return $this->hasOne(Outfit::class);
    }
}

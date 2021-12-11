<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Outfit extends Model
{
    use HasFactory;
    protected $table='outfit';
    protected $fillable =['outfitType', 'image', 'name', 'class',
                        'type', 'pAttack', 'mAttack', 'pDef', 'mDef',
                        'str', 'int', 'agi', 'crit', 'critDmg', 'price'];

    public function featuredIn(): HasOne
    {
        return $this->hasOne(Product::class);
    }
}

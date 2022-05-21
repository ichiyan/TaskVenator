<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class OutfitInfo extends Model
{
    use HasFactory;
    protected $table='outfit_info';
    protected $fillable =[
        'str', 
        'int', 
        'agi', 
        'crit_chance', 
        'crit_dmg', 
        'price'
    ];

    public function featuresOutfitInfo(): HasOne
    {
        return $this->hasOne(Outfit::class);
    }
}

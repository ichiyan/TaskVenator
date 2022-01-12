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
        'p_attack', 
        'm_attack', 
        'p_def', 
        'm_def',
        'str', 
        'int', 
        'agi', 
        'crit', 
        'crit_dmg', 
        'price'
    ];

    public function featuresOutfitInfo(): HasOne
    {
        return $this->hasOne(Outfit::class);
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Outfit extends Model
{
    use HasFactory;
    protected $table='outfit';
    protected $fillable =[
        'OutfitType',
        'sex',
        'male_image',
        'female_image',
        'name',
        'class',
        'rarity_type',
        'bodyPart',
        'spritesheet_img_name',
        'directory',
        'zPos',
        'outfit_infos',

    ];

    public function featuredIn(): HasOne
    {
        return $this->hasOne(Product::class);
    }

    public function featuresOutfitInfo(): HasOne
    {
        return $this->hasOne(OutfitInfo::class,'id', 'outfit_infos');
    }
}

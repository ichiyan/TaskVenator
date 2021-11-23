<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Outfit extends Model
{
    use HasFactory;
    protected $table='outfit';
    protected $fillable =[
        'outfitType',
        'image',
        'name',
        'class',
        'type',
        'pAttack',
        'mAttack',
        'pDef',
        'mDef',
        'str',
        'int',
        'agi',
        'crit',
        'critDmg',
        'price',
    ];
}

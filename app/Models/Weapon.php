<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Weapon extends Model
{
    use HasFactory;
    protected $table='weapon';
    protected $fillable =[
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

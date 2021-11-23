<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Potion extends Model
{
    use HasFactory;
    protected $table='potion';
    protected $fillable = [
        'image',
        'name',
        'type',
        'size',
        'effect',
        'description',
        'price',
    ];
}

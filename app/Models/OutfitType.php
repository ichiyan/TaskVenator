<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OutfitType extends Model
{
    use HasFactory;
    protected $table = 'outfit_types';
    protected $fillable = ['name'];
}

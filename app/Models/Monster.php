<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Monster extends Model
{
    use HasFactory;
    protected $table = 'monsters';
    protected $fillable = ['name', 'image','description'];
}

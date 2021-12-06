<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AttackEffect extends Model
{
    use HasFactory;
    protected $table = 'attack_effects';
    protected $fillable = ['name'];
}

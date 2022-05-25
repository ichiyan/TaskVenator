<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TaskDifficulty extends Model
{
    use HasFactory;
    protected $table = 'task_difficulties';
    protected $fillable = ['difficulty','task_value', 'gems', 'hp_deduction', 'gem_deduction',
                            'hp_gain', 'gem_gain', 'penalty_points'];
}

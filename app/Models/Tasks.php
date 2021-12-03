<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tasks extends Model
{
    use HasFactory;
    protected $table = 'tasks';
    protected $fillable = ['title', 'show_is_done', 'is_in_progress',
                            'subtasks', 'show_is_done', 'owner'];
    public function tasked() {
        return $this->belongsTo(TaskItem::class);
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TaskItem extends Model
{
    use HasFactory;
    protected $table = 'task_items';
    protected $fillable = ['content', 'is_complete', 'frequency',
                        'deadline', 'date_complete', 'is_public',
                        'reminder', 'task_id', 'task_difficulty'];

    public function tasked(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(Tasks::class);
    }
}

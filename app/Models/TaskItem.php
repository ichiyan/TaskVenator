<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TaskItem extends Model
{
    use HasFactory;
    protected $table = 'task_items';
    protected $fillable = ['content', 'is_complete', 'frequency',
                        'deadline', 'is_public', 'reminder', 'tasks'];

    public function tasked(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(Tasks::class);
    }
}

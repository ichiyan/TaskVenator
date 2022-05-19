<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Tasks extends Model
{
    use HasFactory;
    protected $table = 'tasks';
    protected $fillable = ['title', 'show_is_done', 'is_in_progress',
                            'subtasks', 'owner'];

    public function tasked(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(TaskItem::class);
    }

    public function belongsToUser(): hasOne
    {
        return $this->hasOne(User::class);
    }
}

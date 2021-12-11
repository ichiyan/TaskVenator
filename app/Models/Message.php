<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;

class Message extends Model
{
    use HasFactory;

    public function user_messages(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(UserMessage::class);
    }

    public function users(): \Illuminate\Database\Eloquent\Relations\BelongsToMany
    {
        return $this->belongsToMany(User::class, 'user_messages', 'message_id', 'sender_id')
            ->withTimestamps();
    }

}

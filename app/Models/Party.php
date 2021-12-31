<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Party extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'name',
    ];

    public function party_members(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(PartyMember::class);
    }

    public function user_messages(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(UserMessage::class);
    }

    public function battledIn(): HasMany
    {
        return $this->hasMany(Battle::class);
    }
}

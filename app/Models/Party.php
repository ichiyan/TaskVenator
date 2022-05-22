<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Party extends Model
{
    use HasFactory;

    protected $fillable = ['party_name', 'party_image', 'party_motto', 'founded_on',
                            'total_members', 'max_members', 'battles_won', 'battles_lost', 'founder'];

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

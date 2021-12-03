<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Party extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'name',
    ];

    public function party_members(){
        return $this->hasMany(PartyMember::class);
    }

    public function user_messages(){
        return $this->hasMany(UserMessage::class);
    }

}

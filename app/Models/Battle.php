<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Battle extends Model
{
    use HasFactory;
    protected $table = 'battles';
    protected $fillable = ['participating', 'party', 'opponent'];

    public function playedBy(): HasMany
    {
        return $this->hasMany(User::class);
    }

    public function opposedBy(): HasOne
    {
        return $this->hasOne(Monster::class);
    }

    public function teamInvolved(): HasOne
    {
        return $this->hasOne(Party::class);
    }
}

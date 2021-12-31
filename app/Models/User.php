<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function user_info(): HasOne
    {
        return $this->hasOne(UserInfo::class);
    }

    public function hasToDo(): HasMany
    {
        return $this->hasMany(Tasks::class);
    }

    public function ownsParty(): hasOne
    {
        return $this->hasOne(Party::class);
    }

    public function inParty(): hasOne
    {
        return $this->hasOne(PartyMember::class);
    }

    public function battled(): HasMany
    {
        return $this->hasMany(Battle::class);
    }

}

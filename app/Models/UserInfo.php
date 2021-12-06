<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class UserInfo extends Model
{
    use HasFactory;
    protected $table = 'user_infos';
    protected $fillable = ['gems', 'HP', 'warning_days', 'avatar', 'user_id'];

    public function looks(): hasOne
    {
        return $this->hasOne(Avatar::class);
    }

    public function belongsToUser(): hasOne
    {
        return $this->hasOne(User::class);
    }
}

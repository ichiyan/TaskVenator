<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class UserInfo extends Model
{
    use HasFactory;
    protected $table = 'user_infos';
    protected $fillable = ['username', 'gems', 'warning_days', 'has_party', 'last_opened_chat', 'is_in_battle','last_received_daily_hp','avatar', 'user_id'];

    public function avatar(): hasOne
    {
        return $this->hasOne(Avatar::class);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

}

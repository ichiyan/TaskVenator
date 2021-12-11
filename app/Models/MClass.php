<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class MClass extends Model
{
    use HasFactory;
    protected $table = 'm_classes';
    protected $fillable = ['name'];

    public function classifiesMonsters(): HasMany
    {
        return $this->hasMany(Monster::class);
    }
}

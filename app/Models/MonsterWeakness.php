<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class MonsterWeakness extends Model
{
    use HasFactory;
    protected $table = 'monster_weaknesses';
    protected $fillable = ['monster_class', 'weak_against', 'vulnerability_points'];

//    public function classifiedAs(): HasOne
//    {
//        return $this->hasOne(MClass::class);
//    }
}

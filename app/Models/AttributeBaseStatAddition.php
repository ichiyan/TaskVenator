<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class AttributeBaseStatAddition extends Model
{
    use HasFactory;
    protected $table = 'attribute_base_stat_additions';
    protected $fillable = ['type', 'base_stat_addition'];
}

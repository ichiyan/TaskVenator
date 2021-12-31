<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Potion extends Model
{
    use HasFactory;
    protected $table='potion';
    protected $fillable = ['image', 'name', 'type',
                        'size', 'effect', 'description', 'price'];

    public function featuredIn(): HasOne
    {
        return $this->hasOne(Product::class);
    }
}

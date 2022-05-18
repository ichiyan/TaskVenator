<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Inventory extends Model
{
    use HasFactory;
    protected $table = 'inventories';
    protected $fillable = ['user_id', 'product','outfit_type','body_part', 'amount', 'status'];

    public function belongsToUser(): HasOne
    {
        return $this->hasOne(User::class);
    }

    public function contains(): HasOne
    {
        return $this->hasOne(Product::class, 'id', 'product');
    }
    
   
}

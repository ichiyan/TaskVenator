<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $table='product';
    protected $fillable = [

        'outfit_id',
        'potion_id',
        
    ];

    public function outfit(){
        return $this->hasOne(Outfit::class, 'id');
    }
    public function potion(){
        return $this->hasOne(Potion::class, 'id');
    }
    
   

}

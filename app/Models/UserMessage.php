<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserMessage extends Model
{
    use HasFactory;

    public function message() {
        return $this->belongsTo(Message::class);
    }

    public function party(){
        return $this->belongsTo(Party::class);
    }

}

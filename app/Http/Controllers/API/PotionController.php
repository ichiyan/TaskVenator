<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Potion;

class PotionController extends Controller
{
    public function store(Request $request){
                
                $potion= new Potion;
                $potion->name= $request->input('name');
                $potion->size= $request->input('size');
                $potion->type= $request->input('type');
                $potion->description= $request->input('description');
                $potion->price= $request->input('price');
                $potion->save();

                return response()->json([
                    'status' => 200,
                    'message' => 'Potion Added Successfully',
                ]);
        

    }
}

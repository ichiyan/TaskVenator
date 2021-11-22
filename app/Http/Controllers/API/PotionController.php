<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Potion;

class PotionController extends Controller
{
    public function index(Request $request){
            $potion= Potion::all();

            return response()->json([
                'status' => 200,
                'potions' => $potion,
            ]);

    }

    public function store(Request $request){
            
                $potion= new Potion;
                if($request->hasFile('image')){
                    $file= $request->file('image');
                    $extension= $file->getClientOriginalExtension();
                    $filename= time() .'.'.$extension;
                    $file->move('assets/images/', $filename);
                    $potion->image = 'assets/images/' .$filename;

                }
                $potion->name= $request->input('name');
                $potion->type= $request->input('type');
                $potion->size= $request->input('size');
                $potion->description= $request->input('description');
                $potion->price= $request->input('price');
                $potion->save();

                return response()->json([
                    'status' => 200,
                    'message' => 'Potion Added Successfully',
                ]);
        

    }
}

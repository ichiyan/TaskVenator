<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Potion;
use App\Models\Product;

class PotionController extends Controller
{
    public function index(Request $request){
            $potion= Potion::all();
            $product= Product::with('potion')->where('potion_id', '!=', '0')->get();
            return response()->json([
                'status' => 200,
                'potions' => $potion,
                'product' =>$product,
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
                $potion->effect= $request->input('effect');
                $potion->description= $request->input('description');
                $potion->price= $request->input('price');
                $potion->save();

                $product= new Product;
                $product->potion_id=$potion->id;
                $product->save();

                return response()->json([
                    'status' => 200,
                    'message' => 'Potion Added Successfully',
                ]);
        

    }
}

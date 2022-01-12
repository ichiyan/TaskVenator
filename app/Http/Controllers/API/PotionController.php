<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Potion;
use App\Models\Product;

class PotionController extends Controller
{
    public function index(Request $request){
            // $potion= Potion::all();
            $potion= Product::with('featuresPotion')->where('potion', '!=', 'NULL')->get();
            return response()->json([
                'status' => 200,
                'potion' => $potion,
                // 'product' =>$product,
            ]);

    }

    public function store(Request $request){
            
                $potion= new Potion;
                if($request->hasFile('image')){
                    $file= $request->file('image');
                    $extension= $file->getClientOriginalExtension();
                    $filename= time() .'.'.$extension;
                    $file->move('assets/images/potion', $filename);
                    $potion->image = 'assets/images/potion/' .$filename;

                }
                $potion->name= $request->input('name');
                $potion->type= $request->input('type');
                $potion->size= $request->input('size');
                $potion->effect= $request->input('effect');
                $potion->description= $request->input('description');
                $potion->price= $request->input('price');
                $potion->save();

                $product= new Product;
                $product->outfit= NULL;
                $product->potion= $potion->id;

                $product->save();

                return response()->json([
                    'status' => 200,
                    'message' => 'Potion Added Successfully',
                ]);
        

    }
}

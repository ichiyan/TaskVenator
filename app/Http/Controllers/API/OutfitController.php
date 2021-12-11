<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Outfit;
use App\Models\Product;

class OutfitController extends Controller
{
    public function index(Request $request){
        $outfit= Outfit::all();
        $product= Product::with('outfit')->where('outfit_id', '!=', '0')->get();
        return response()->json([
            'status' => 200,
            'outfit' => $outfit,
            'product' =>$product,
        ]);
}
    public function store(Request $request){
        $weapon= new Outfit;
        if($request->hasFile('image')){
            $file= $request->file('image');
            $extension= $file->getClientOriginalExtension();
            $filename= time() .'.'.$extension;
            $file->move('assets/images/', $filename);
            $weapon->image = 'assets/images/' .$filename;

        }
        $weapon->outfitType= $request->input('outfitType');
        $weapon->name= $request->input('name');
        $weapon->class= $request->input('class');
        $weapon->type= $request->input('type');
        $weapon->pAttack= $request->input('pAttack');
        $weapon->mAttack= $request->input('mAttack');
        $weapon->pDef= $request->input('pDef');
        $weapon->mDef= $request->input('mDef');
        $weapon->str= $request->input('str');
        $weapon->int= $request->input('int');
        $weapon->agi= $request->input('agi');
        $weapon->crit= $request->input('crit');
        $weapon->critDmg= $request->input('critDmg');
        $weapon->price= $request->input('price');
        $weapon->save();

        $product= new Product;

        $product->outfit_id= $weapon->id;
        $product->potion_id= NULL;
        $product->save();
        return response()->json([
            'status' => 200,
            'message' => 'Outfit Added Successfully',
        ]);

    }
}

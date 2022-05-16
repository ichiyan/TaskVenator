<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Outfit;
use App\Models\Product;
use App\Models\Inventory;
use App\Models\OutfitInfo;
use App\Models\UserInfo;
use App\Models\User;
use App\Models\Avatar;
use App\Models\AvatarClass;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class OutfitController extends Controller
{
    public function index(Request $request){
        // $outfit= Outfit::all();
        $user_id = Auth::id();
        // $product= Product::with('featuresOutfit')->where('outfit', '!=', 'NULL')->get();
        // $items=Inventory::with('contains')->where('user_id', '==', '$user_id')->get();
        $weapon= DB::table('products')
                 ->join('outfit', 'outfit.id', '=', 'products.outfit')
                 ->where('outfit.outfit_type','=', "Weapon")
                 ->join('outfit_info', 'outfit_info.id', '=', 'outfit.outfit_infos')
                 ->get(['outfit.*', 'outfit_info.*', 'products.id AS product_id']);

        $armor= DB::table('products')
                ->join('outfit', 'outfit.id', '=', 'products.outfit')
                ->where('outfit.outfit_type','=', "Armor")
                ->join('outfit_info', 'outfit_info.id', '=', 'outfit.outfit_infos')
                ->get(['outfit.*', 'outfit_info.*', 'products.id AS product_id']);
        
        $class= DB::table('users')
                ->where('avatars.user_info_id', '=', $user_id)
                ->join('avatars', 'avatars.user_info_id', '=', 'users.id')
                ->join('avatar_classes', 'avatar_classes.id', '=', 'avatars.class_id')
                ->get('avatar_classes.name');

        return response()->json([
            'status' => 200,
            'weapon' => $weapon,
            'armor' =>$armor,
            'avatar' =>$class,

            // 'user_id' => $user_id,
            // 'items' => $items,
            
        ]);
}
    public function store(Request $request){

        $outfit_info= new OutfitInfo;
        $outfit_info->p_attack= $request->input('p_attack');
        $outfit_info->m_attack= $request->input('m_attack');
        $outfit_info->p_def= $request->input('p_def');
        $outfit_info->m_def= $request->input('m_def');
        $outfit_info->str= $request->input('str');
        $outfit_info->int= $request->input('int');
        $outfit_info->agi= $request->input('agi');
        $outfit_info->crit= $request->input('crit');
        $outfit_info->crit_dmg= $request->input('crit_dmg');
        $outfit_info->price= $request->input('price');
        $outfit_info->save();

        $outfit= new Outfit;
        if($request->hasFile('male_image') && $request->hasFile('female_image')){
            if($request->input('outfit_type')==="Weapon"){
                $file1= $request->file('male_image');
                $extension= $file1->getClientOriginalExtension();
                $filename= time() .'.'.$extension;
                $file1->move('assets/images/weapons', $filename);
                $outfit->male_image = 'assets/images/weapons/' .$filename;

                $file2= $request->file('female_image');
                $extension= $file2->getClientOriginalExtension();
                $filename= time() .'.'.$extension;
                $file2->move('assets/images/weapons', $filename);
                $outfit->female_image = 'assets/images/weapons/' .$filename;
            }else{
                $file1= $request->file('male_image');
                $extension= $file1->getClientOriginalExtension();
                $filename= time() .'.'.$extension;
                $file1->move('assets/images/armors', $filename);
                $outfit->male_image = 'assets/images/armors/' .$filename;

                $file2= $request->file('female_image');
                $extension= $file2->getClientOriginalExtension();
                $filename= time() .'.'.$extension;
                $file2->move('assets/images/weapons', $filename);
                $outfit->female_image = 'assets/images/armors/' .$filename;
            }
               

        }else if($request->hasFile('male_image')){
            if($request->input('outfit_type')==="Weapon"){
                $file1= $request->file('male_image');
                $extension= $file1->getClientOriginalExtension();
                $filename= time() .'.'.$extension;
                $file1->move('assets/images/weapons', $filename);
                $outfit->male_image = 'assets/images/weapons/' .$filename;

            }else{
                $file1= $request->file('male_image');
                $extension= $file1->getClientOriginalExtension();
                $filename= time() .'.'.$extension;
                $file1->move('assets/images/armors', $filename);
                $outfit->male_image = 'assets/images/armors/' .$filename;
            }
        }else if($request->hasFile('female_image')){
              if($request->input('outfit_type')==="Weapon"){
         
                $file2= $request->file('female_image');
                $extension= $file2->getClientOriginalExtension();
                $filename= time() .'.'.$extension;
                $file2->move('assets/images/weapons', $filename);
                $outfit->female_image = 'assets/images/weapons/' .$filename;
            }else{
     
                $file2= $request->file('female_image');
                $extension= $file2->getClientOriginalExtension();
                $filename= time() .'.'.$extension;
                $file2->move('assets/images/weapons', $filename);
                $outfit->female_image = 'assets/images/armors/' .$filename;
            }
        }
        $outfit->outfit_type= $request->input('outfit_type');
        $outfit->sex= $request->input('sex');
        $outfit->name= $request->input('name');
        $outfit->class= $request->input('class');
        $outfit->rarity_type= $request->input('rarity_type');
        $outfit->body_part= $request->input('body_part');
        $outfit->spritesheet_img_name= $request->input('spritesheet_img_name');
        $outfit->directory= $request->input('directory');
        $outfit->outfit_infos=$outfit_info->id;
        $outfit->save();

      
        $product= new Product;
        $product->outfit= $outfit->id;
        $product->potion= NULL;
        $product->save();
        return response()->json([
            'status' => 200,
            'message' => 'Outfit Added Successfully',
        ]);

    }
}

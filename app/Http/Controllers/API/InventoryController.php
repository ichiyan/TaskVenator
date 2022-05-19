<?php

namespace App\Http\Controllers\API;


use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\Inventory;
use App\Models\User;
use App\Models\UserInfo;
use App\Models\Potion;
use App\Models\Outfit;
use App\Models\Avatar;
use App\Models\AvatarClass;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class InventoryController extends Controller
{
    public function index(Request $request){
        // $items=Inventory::all();
        $user_id= Auth::id();
        // $items=User::with('getItems')->where('id','=', $user_id)->get();
        // $items= Inventory::with('contains')->where('user_id', '=', $user_id)->get();
        $item= DB::table('inventories')
                ->join('users', 'users.id', '=', 'inventories.user_id')
                ->join('products', 'products.id', '=', 'inventories.product')
                ->join('outfit','outfit.id','=','products.outfit')
                ->where('outfit.outfit_type','=', "Armor")
                ->join('outfit_info', 'outfit_info.id', '=', 'outfit.outfit_infos')
                ->get(['outfit.*','outfit_info.*','inventories.*'  ,'inventories.user_id AS inventUserId']);

        $weapon= DB::table('inventories')
                ->join('users', 'users.id', '=', 'inventories.user_id')
                ->join('products', 'products.id', '=', 'inventories.product')
                ->join('outfit','outfit.id','=','products.outfit')
                ->where('outfit.outfit_type','=', "Weapon")
                ->join('outfit_info', 'outfit_info.id', '=', 'outfit.outfit_infos')
                ->get(['outfit.*','outfit_info.*','inventories.*','inventories.user_id AS inventUserId']);

        $potion= DB::table('inventories')
                ->join('users', 'users.id', '=', 'inventories.user_id')
                ->join('products', 'products.id', '=', 'inventories.product')
                ->join('potion','potion.id','=','products.potion')
                ->select('potion.*', 'inventories.user_id AS inventUserId' )
                ->get();



    //     $weapon= DB::table('products')
    //             ->join('outfit', 'outfit.id', '=', 'products.outfit')
    //             ->where('outfit.outfit_type','=', "Weapon")
    //             ->join('outfit_info', 'outfit_info.id', '=', 'outfit.outfit_infos')
    //             ->get(['outfit.*', 'outfit_info.*', 'products.id AS product_id']);

    //    $armor= DB::table('products')
    //            ->join('outfit', 'outfit.id', '=', 'products.outfit')
    //            ->where('outfit.outfit_type','=', "Armor")
    //            ->join('outfit_info', 'outfit_info.id', '=', 'outfit.outfit_infos')
    //            ->get(['outfit.*', 'outfit_info.*', 'products.id AS product_id']);
        return response()->json([
            'message' => "inventory success",
            'status'=>200,
            'weapon' => $weapon,
            'item' => $item,
            'potion' => $potion,
            'auth_id'=> $user_id,
        ]);
    }

    public function store(Request $request){

        $inventory= new Inventory;
        $user_id = Auth::id();
        $inventory->user_id= $user_id;
        $inventory->product= $request->input('product');
        $inventory->outfit_type= $request->input('outfit_type');
        $inventory->body_part=$request->input('body_part');
        $inventory->amount=$request->input('amount');

        $inventory->save();

        $user_info= UserInfo::find($user_id);
        $user_info->gems = $user_info->gems - $request->input('amount');
        $user_info->save();

        return response()->json([
            'text' => "Success",
            'gems' => $user_info->gems,
            'user' =>$user_id,
            'amount' => $request->input('amount'),
            'product' => $request->input(),
            'status' => 200

        ]);
    }

    public function getGems(Request $request){
        $gems = $user_info= UserInfo::find(Auth::id());;
        return response()->json([
            'status' => 200,
            'gems' =>$gems->gems
        ]);
    }

    public function update(Request $request){

        $user_id = Auth::id();
        $id= $request->input('inventoryId');
        $body_part = $request->input('body_part');
        $outfit_type = $request->input('outfit_type');
        $inventory = Inventory::find($id);
        $status = $request->input('status');
        $type= "Weapon";
        $returnID = 0;

        if($status == 1){
            //unequip clicked item
            DB::update('update inventories set status = ? where id = ?  && user_id = ?',
                        [0, $id, $user_id]);
        }else{
            if($outfit_type === "Weapon"){

                //check if there is an item of the same type that is currently equipped
                $to_unequip = DB::table('inventories')
                        ->where('outfit_type', '=', $outfit_type)
                        ->where('body_part', '=', $body_part)
                        ->where('status', '=', 1)
                        ->get();

                if(count($to_unequip) != 0){
                    //if there is such item, unequip
                    $returnID = $to_unequip->pluck('id')[0];
                    DB::update('update inventories set status = ? where status = ? && outfit_type = ? && user_id = ?',
                                [0, 1 , 'Weapon', $user_id]);
                }else{
                    $returnID = 0;
                }

                //equip clicked item
                DB::update('update inventories set status = ? where id = ?  && user_id = ?',
                          [1, $id, $user_id]);
            }
        }

        return response()->json([
            'status' => 200,
            'id' => $returnID
        ]);
    }
}

<?php

namespace App\Http\Controllers\API;


use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\Inventory;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class InventoryController extends Controller
{
    public function index(Request $request){
        // $items=Inventory::all();
        $user_id= Auth::id();
        // $items=User::with('getItems')->where('id','=', $user_id)->get();
        // $items= Inventory::with('contains')->where('user_id', '=', $user_id)->get();
        $items= DB::table('inventories')
                ->join('users', 'users.id', '=', 'inventories.user_id')
                ->join('products', 'products.id', '=', 'inventories.product')
                ->join('outfit','outfit.id','=','products.outfit')
                ->select('outfit.*', 'inventories.user_id AS inventUserId' )
                ->get();

        $potions= DB::table('inventories')
                ->join('users', 'users.id', '=', 'inventories.user_id')
                ->join('products', 'products.id', '=', 'inventories.product')
                ->join('potion','potion.id','=','products.potion')
                ->select('potion.*', 'inventories.user_id AS inventUserId' )
                ->get();
        return response()->json([
            'message' => "inventory success",
            'status'=>200,
            'items' => $items,
            'potions' => $potions,
            'auth_id'=> $user_id,
            
           
            
            
      
        ]);
    }
   
    public function store(Request $request){
        
        $inventory= new Inventory;
        $user_id = Auth::id();
        $inventory->user_id= $user_id;
        $inventory->product= $request->input('product');
        $inventory->amount=$request->input('amount');

        $inventory->save();

        

        return response()->json([
            'text' => "testing success",
          
            'user' =>$user_id,
            'amount' => $request->input('amount'),
            'product' => $request->input(),
 
      
        ]);
    }
}

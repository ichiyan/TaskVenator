<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Avatar;
use App\Models\AvatarClass;
use App\Models\UserInfo;
use App\Models\User;
use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Inventory;
use App\Models\Outfit;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;


class UserInfoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $user_info = new UserInfo();
        $user_info->username = $request->username;
        $user_info->gems = 10;

        $avatar = $user_info->avatar()->create([
            'sex' =>  $request->sex,
            'skin_tone' => $request->skin_tone,
            'background_color' => $request->background_color,
            'items' => $request->items,
        ]);

        $user = User::find(Auth::id());
        $user_info->user()->associate($user);
        $user_info->save();
        $user_info->avatar()->save($avatar);

        $avatar_class = AvatarClass::where('name', '=', $request->class)->first();
        $avatar->class()->associate($avatar_class);
        $avatar->save();


        if($request->class === "warrior"){
            for($start=106; $start<112; $start++){
                $inventory= new Inventory;
                $user_id = Auth::id();
                // $outfit= DB::table('products')
                //             ->where('products.outfit', '=', $start)
                //             ->join('outfit', 'outfit.id', '=', 'products.outfit')
                //             ->select('outfit.outfit_type', 'outfit.body_part')
                //             ->get();
                $inventory->user_id= $user_id;
                $inventory->product= $start;
                    if($start<111){
                        $inventory->outfit_type= "Armor";
                    }else{
                        $inventory->outfit_type= "Weapon";
                    }
                // $inventory->outfit_type= $outfit->outfit_type;
                    if($start===106){
                        $inventory->body_part= "Head";
                    }else if($start === 107){
                        $inventory->body_part= "Arms";
                    }else if($start === 108){
                        $inventory->body_part= "Torso";
                    }else if($start === 109){
                        $inventory->body_part= "Legs";
                    }else if($start === 110){
                        $inventory->body_part= "Footwear";
                    }
                // $inventory->body_part= $outfit->body_part;
                $inventory->amount='0';
                $inventory->status='1';
                $inventory->save();
            }

        }else if($request->class === "marksman"){
            for($start=112; $start<117; $start++){
                $inventory= new Inventory;
                $user_id = Auth::id();
                // $outfit= DB::table('products')
                //             ->where('products.outfit', '=', $start)
                //             ->join('outfit', 'outfit.id', '=', 'products.outfit')
                //             ->select('outfit.outfit_type', 'outfit.body_part')
                //             ->get();
                $inventory->user_id= $user_id;
                $inventory->product= $start;
                    if($start<116){
                        $inventory->outfit_type= "Armor";
                    }else{
                        $inventory->outfit_type= "Weapon";
                    }
                // $inventory->outfit_type= $outfit->outfit_type;
                    if($start===112){
                        $inventory->body_part= "Head";
                    }else if($start === 113){
                        $inventory->body_part= "Torso";
                    }else if($start === 114){
                        $inventory->body_part= "Legs";
                    }else if($start === 115){
                        $inventory->body_part= "Footwear";
                    }
                $inventory->amount='0';
                $inventory->status='1';
                $inventory->save();
            }
        }else{
            for($start=117; $start<122; $start++){
                $inventory= new Inventory;
                $user_id = Auth::id();
                // $outfit= DB::table('products')
                //             ->where('products.outfit', '=', $start)
                //             ->join('outfit', 'outfit.id', '=', 'products.outfit')
                //             ->select('outfit.outfit_type', 'outfit.body_part')
                //             ->get();
                $inventory->user_id= $user_id;
                $inventory->product= $start;
                    if($start<121){
                        $inventory->outfit_type= "Armor";
                    }else{
                        $inventory->outfit_type= "Weapon";
                    }
                    $inventory->status='1';
                // $inventory->outfit_type= $outfit->outfit_type;
                    if($start===117){
                        $inventory->body_part= "Head";
                        $inventory->status='0';
                    }else if($start === 118){
                        $inventory->body_part= "Torso";
                    }else if($start === 119){
                        $inventory->body_part= "Legs";
                    }else if($start === 120){
                        $inventory->body_part= "Footwear";
                    }
                $inventory->amount='0';
                $inventory->save();
            }
        }





        return response()->json([
            'status' => 200,
            'message' => 'User and Avatar Info Added Successfully',
            'avatar' => $avatar_class
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show()
    {
        $user_id = Auth::id();
        $user_info = User::find($user_id)->user_info;
        $avatar = UserInfo::find($user_info->id)->avatar->with('class')->where('user_info_id', '=', $user_id)->first();

        return response()->json([
            'status' => 200,
            'username' => $user_info->username,
            'has_party' => $user_info->has_party,
            'level' => $avatar->level,
            'class' => $avatar->class->name,
            'sex' => $avatar->sex,
            'skin_tone' => $avatar->skin_tone,
            'background_color' => $avatar->background_color,
            'items' => $avatar->items,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        // DB::update('update avatars set items = ? where id = ?', [$request->items, Auth::id()]);

        Avatar::where('id', Auth::id())->update(array('items' => $request->items));

        return response()->json([
            'status' => 200,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}

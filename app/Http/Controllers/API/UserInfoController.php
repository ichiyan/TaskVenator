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
use App\Models\Level;
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

        $avatar_class = AvatarClass::where('name', '=', $request->class)->first();
        $level1 = Level::where('level', '=', '1')->first();

        $avatar = $user_info->avatar()->create([
            'sex' =>  $request->sex,
            'skin_tone' => $request->skin_tone,
            'background_color' => $request->background_color,
            'items' => $request->items,
            'strength' => $avatar_class->strength,
            'agility' => $avatar_class->agility,
            'intelligence' => $avatar_class->intelligence,
            'current_hp' => $avatar_class->hp,
            'max_hp' => $avatar_class->hp,
            'max_xp' => $level1->xp_needed,
            'crit_chance' => $avatar_class->crit_chance,
            'crit_damage' => $avatar_class->crit_damage,
        ]);

        $avatar->class()->associate($avatar_class);

        $user = User::find(Auth::id());
        $user_info->user()->associate($user);
        $user_info->save();
        $user_info->avatar()->save($avatar);

        $avatar->save();

        if($request->class == "warrior"){
            for($start=106; $start<112; $start++){
                $inventory= new Inventory;
                $user_id = Auth::id();
                $inventory->user_id= $user_id;
                $inventory->product= $start;
                    if($start<111){
                        $inventory->OutfitType= 1;
                    }else{
                        $inventory->OutfitType= 2;
                    }
                    $inventory->status='1';
                    if($start===106){
                        $inventory->bodyPart= "Head";
                        $inventory->status='0';
                    }else if($start === 107){
                        $inventory->bodyPart= "Arms";
                    }else if($start === 108){
                        $inventory->bodyPart= "Torso";
                    }else if($start === 109){
                        $inventory->bodyPart= "Legs";
                    }else if($start === 110){
                        $inventory->bodyPart= "Footwear";
                    }
                $inventory->amount='0';
                $inventory->save();
            }

        }else if($request->class == "marksman"){
            for($start=112; $start<117; $start++){
                $inventory= new Inventory;
                $user_id = Auth::id();
                $inventory->user_id= $user_id;
                $inventory->product= $start;
                    if($start<116){
                        $inventory->OutfitType= 1;
                    }else{
                        $inventory->OutfitType= 2;
                    }
                    $inventory->status='1';
                    if($start===112){
                        $inventory->bodyPart= "Head";
                        $inventory->status='0';
                    }else if($start === 113){
                        $inventory->bodyPart= "Torso";
                    }else if($start === 114){
                        $inventory->bodyPart= "Legs";
                    }else if($start === 115){
                        $inventory->bodyPart= "Footwear";
                    }
                $inventory->amount='0';
                $inventory->save();
            }
        }else{
            for($start=117; $start<122; $start++){
                $inventory= new Inventory;
                $user_id = Auth::id();
                $inventory->user_id= $user_id;
                $inventory->product= $start;
                    if($start<121){
                        $inventory->OutfitType= 1;
                    }else{
                        $inventory->OutfitType= 2;
                    }
                    $inventory->status='1';
                    if($start===117){
                        $inventory->bodyPart= "Head";
                        $inventory->status='0';
                    }else if($start === 118){
                        $inventory->bodyPart= "Torso";
                    }else if($start === 119){
                        $inventory->bodyPart= "Legs";
                    }else if($start === 120){
                        $inventory->bodyPart= "Footwear";
                    }
                $inventory->amount='0';
                $inventory->save();
            }
        }

        return response()->json([
            'status' => 200,
            'message' => 'User and Avatar Info Added Successfully',
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
            'curr_hp' => $avatar->current_hp,
            'curr_xp' => $avatar->current_xp,
            'max_hp' => $avatar->max_hp,
            'max_xp' => $avatar->max_xp,
            'crit_chance' => $avatar->crit_chance,
            'crit_damage' => $avatar->crit_damage,
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

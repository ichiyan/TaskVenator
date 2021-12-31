<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Avatar;
use App\Models\AvatarClass;
use App\Models\UserInfo;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


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
        $avatar = UserInfo::find($user_info->id)->avatar->with('class')->first();

        return response()->json([
            'status' => 200,
            'username' => $user_info->username,
            'level' => $avatar->level,
            'class' => $avatar->class->name,
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
    public function update(Request $request, $id)
    {
        //
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

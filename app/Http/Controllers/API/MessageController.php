<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class MessageController extends Controller
{
    public function conversation(){
        //change users to party members
        $users = User::where('id', '!=', Auth::id())->get();
        //testing
        $otherUserInfo = User::findOrFail(2);
        $authUserInfo = User::find(Auth::id());

        // $this->data['users'] = $users;
        // $this->data['authUserInfo'] = $authUserInfo;

        return response()->json([
            'status'=>200,
            'users'=>$users,
            'otherUserInfo'=>$otherUserInfo,
            'authUserInfo'=>$authUserInfo,
        ]);

    }
}

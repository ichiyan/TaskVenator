<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\PartyMember;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class PartyController extends Controller
{
    public function getPartyInfo(){

        $party = PartyMember::where('user_id', '=', Auth::id())
                    ->first()
                    ->party;

        $party_members = $party->party_members;

        $ctr = 0;
        $party_members_info = [];

        foreach ($party_members as $member) {
            //$member->user refers to users table for now (should refer to users_info w/c contains username, avatar, etc)
            $party_members_info[++$ctr] = $member->user;
        }

        $data = [];

        $data['party'] = $party;
        //should number of members also be stored in party table?
        $data['party_members_count'] = $ctr;
        $data['party_members'] = $party_members_info;

        return response()->json([
            'status' => 200,
            'data' => $data,
            'message' => 'Party information retrieved successfully'
        ]);

    }
}

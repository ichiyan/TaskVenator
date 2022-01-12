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

        $user_id = Auth::id();
        $party = PartyMember::where('user_id', '=', $user_id)
                    ->first()
                    ->party;

        $members = $party->party_members;
        $members_info = [];
        foreach ($party->party_members as $member) {
           $member->user->user_info->avatar;
           array_push($members_info, $member['user']['user_info']);
        }

        return response()->json([
            'status' => 200,
            'test' => $members,
            'party_name' => $party->party_name,
            'total_members' => $party->total_members,
            'members' => $members_info,
            'message' => 'Party information retrieved successfully'
        ]);

    }
}

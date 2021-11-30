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

        $data = [];

        $data['party_name'] = $party->party_name;

        return response()->json([
            'status' => 200,
            'data' => $data,
            'message' => 'Party information retrieved successfully'
        ]);

    }
}

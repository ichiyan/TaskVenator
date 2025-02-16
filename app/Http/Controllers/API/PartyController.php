<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\PartyMember;
use App\Models\Party;
use App\Models\UserInfo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

use function PHPSTORM_META\map;

class PartyController extends Controller
{
    public function getPartyInfo(){

        $user_id = Auth::id();
        $party = PartyMember::where('user_id', '=', $user_id)
                    ->first()
                    ->party;

        $members = $party->party_members->where('id', '!=', $user_id);
        $members_info = [];
        foreach ($members as $member) {
           $member->user->user_info->avatar;
           array_push($members_info, $member['user']['user_info']);
        }

        $founder = UserInfo::where('id', $party->founder)->first()->username;

        return response()->json([
            'status' => 200,
            'party_id' => $party->id,
            'party_name' => $party->party_name,
            'party_image' => $party->party_image,
            'total_members' => $party->total_members,
            'max_members' => $party->max_members,
            'party_motto' => $party->party_motto,
            'founded_on' => $party->founded_on,
            'founder_username' =>  $founder,
            'battles_won' => $party->battles_won,
            'battles_lost' => $party->battles_lost,
            'members' => $members_info,
            'message' => 'Party information retrieved successfully'
        ]);

    }

    public function store (Request $request){

        $id = Auth::id();

        if($request->input("is_party_image_placeholder") == 0){
            $file = $request->file('party_image');
            $extension= $file->getClientOriginalExtension();
            $filename= time() .'.'.$extension;
            $file->move('assets/images/party_images', $filename);
            $party_image = 'assets/images/party_images/'.$filename;
        }else{
            $party_image = 'assets/images/party_images/party_image_placeholder.png';
        }

        $party = Party::create([
                    'party_name' => $request->input('party_name'),
                    'party_image' => $party_image,
                    'party_motto' => $request->input('party_motto'),
                    'founded_on' => Carbon::now(),
                    'total_members' => '1',
                    'max_members' => $request->input('max_members'),
                    'founder' => $id,
                ]);

        PartyMember::create([
            'party_id' => $party->id,
            'user_id' => $id,
        ]);

        return response()->json([
            'status' => 200,
            'message' => 'Party successfully created.',
        ]);
    }


    public function show(){


        $parties = Party::all();

        foreach ($parties as $party){
            $party['founder_username'] = UserInfo::find( $party['founder'])->username;
            $party['party_members'] = $party->party_members;
            foreach($party['party_members'] as $member){
                $member['username'] = $member->user->user_info->username;
                $member['avatar_img_dir'] = $member->user->user_info->avatar->avatar_img;
                unset($member->user);
            }
        }

        return response()->json([
            'status' => 200,
            'message' => 'Parties successfully displayed.',
            'parties' => $parties,
        ]);


    }


}

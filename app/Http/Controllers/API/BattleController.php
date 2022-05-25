<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Battle;
use App\Models\Monster;
use App\Models\Avatar;
use App\Models\UserInfo;
use App\Models\BattlePerformance;
use App\Models\BattleIndividual;
use App\Models\BattleGroup;
use App\Models\BattleGroupMembers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class BattleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(): \Illuminate\Http\JsonResponse
    {
        //for individual battle
        $id = Auth::id();
        $user=UserInfo::find($id);
        if($user->is_in_battle == 1){

            $battle = DB::table('battle_individuals')->where('user_id', $id)->where('monster_remaining_hp','>',0)->first();
            $monster = Monster::find($battle->monster_id);
            $performance = BattlePerformance::find($battle->battle_performance_id);
            $level = Avatar::find($id);


            return response()->json([
                'status' => 200,
                'battle' => $battle,
                'monster' => $monster,
                'id' => $battle->id,
                'performance' => $performance,
                'level' => $level->level,
                'message' => "you are in battle",
            ]);
        }else{
            return response()->json([
                'status' => 300,
                'message' => "you are NOT in battle",
            ]);
        }
        
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
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

    public function getMonsters(Request $request)
    {
        $monsters= Monster::all();
        $count= Monster::all()->count();
        $id = Auth::id();

        $avatar = Avatar::find($id);
        $hp = 100 + ($avatar->level * 8);

        $engaging= DB::table('battle_group_members')
                  ->where('battle_group_members.user_id', '=', $id)
                  ->join('battle_groups', 'battle_groups.id','=', 'battle_group_members.battle_group_id')
                  ->get();

        return response()->json([
            'status' => 200,
            'monsters' => $monsters,
            'count' => $count,
            'hp' => $hp,
            'engaging' =>$engaging
        ]);
    }

    public function joinBattle(Request $request)
    {
        $id = Auth::id();

        $user = UserInfo::find($id);
        $user->is_in_battle = 1;
        $user->save();

        $join = new BattleIndividual;
        $join->monster_id = $request->monsterid;
        $join->user_id = $id;
        $join->monster_remaining_hp = $request->monsterhp;
        $join->battle_started = Carbon::now()->format('Y-m-d H:i:s');
        $join->battle_performance_id = 5;
        $join->save();


        return response()->json([
            'status' => 200,
            'message' => "joined battle",
        ]);
    }

    public function cancelbattle(Request $request)
    {
        $id = Auth::id();

        $user = UserInfo::find($id);
        $user->is_in_battle = 0;
        $user->save();
        
        $battle = DB::table('battle_individuals')->where('id', $request->id)->delete();


        return response()->json([
            'status' => 200,
            'message' => "battle cancelled!",
        ]);
    }
}

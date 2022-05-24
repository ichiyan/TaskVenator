<?php

namespace App\Http\Controllers\API;
use App\Http\Controllers\Controller;
use App\Models\Party;
use App\Models\PartyMember;
use App\Models\TaskItem;
use App\Models\Tasks;
use App\Models\UserInfo;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class TasksController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(): \Illuminate\Http\JsonResponse
    {
        //
        //is_in_progress column =>   0=not started;  -1=completed;   1=in progress
        $id = Auth::id();
        $taskList = DB::table("tasks")
                    ->where('owner', "=", $id)
                    ->get();

        return response()->json([
            'status' => 200,
            'tasks' => $taskList,
            'id' => $id
        ]);
    }

    public function getPartyMembers(): \Illuminate\Http\JsonResponse
    {
        //
        $user_id = Auth::id();
        $party = PartyMember::where('user_id', '=', $user_id)
            ->first()
            ->party;

        $members = $party->party_members;
        $members_info = [];
        foreach ($members as $member) {
            $member->user;
            array_push($members_info, $member['user']);
        }

        return response()->json([
            'status' => 200,
            'party_id' => $party->id,
            'total_members' => $party->total_members,
            'members' => $members_info,
            'message' => 'Party information retrieved successfully'
        ]);
//        $id = Auth::id();
//        $has_party=DB::table('user_infos')
//            ->where('user_id', "=", $id)
//            ->get();
//        if($has_party->has_party == 1){
//            $party =DB::table('party_members')
//                ->where('user_id', "=", $id)
//                ->get();
//            $party_members =DB::table('party_members')
//                ->where('party_id', "=", $party->party_id)
//                ->get();
//        }
//
//        return response()->json([
//            'status' => 200,
//            'party_members' => $party_members,
//            'id' => $id
//        ]);
    }

    public function groupTasks(): \Illuminate\Http\JsonResponse
    {
        //
        //is_in_progress column =>   0=not started;  -1=completed;   1=in progress
        $id = Auth::id();
        $has_party=DB::table('user_infos')
                    ->where('user_id', "=", $id)
                    ->get();
        if($has_party->has_party == 1){
            $party =DB::table('party_members')
                ->where('user_id', "=", $id)
                ->get();
            $party_members =DB::table('party_members')
                ->where('party_id', "=", $party->party_id)
                ->get();
//            foreach($party_members as $party_member){
//                $taskList = DB::table("tasks")
//                    ->join('task_items', 'tasks.id', "=", 'task_items.task_id')
//                    ->where('owner', "=", $id)
//                    ->get();
//            }
        }

        return response()->json([
            'status' => 200,
            'party_members' => $party_members,
            'id' => $id
        ]);
    }

    public function getTaskItems(): \Illuminate\Http\JsonResponse
    {
        //
        $id = Auth::id();
        $taskItem = DB::table("tasks")
            ->join('task_items', 'tasks.id', "=", 'task_items.task_id')
//            ->where('tasks.id', "=", $task_id)
            ->get();

        return response()->json([
            'status' => 200,
            'taskItemDB' => $taskItem,
            'id' => $id
        ]);
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
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        //
        $tasks = new Tasks([
            'title' => $request->get('title'),
            'content' => $request->get('content')
        ]);
        $tasks->save();
        return response()->json('Successfully added');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id)
    {
        //
        $tasks = Tasks::find($id);
        return response()->json($tasks);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function edit(Request $request, int $id): \Illuminate\Http\JsonResponse
    {
        //
        $task = Tasks::find($id);
        $task->title  = $request->get('title');
        $task->show_is_done  = $request->get('show_is_done');
        $task->is_in_progress  = $request->get('is_in_progress');
        $task->subtasks  = $request->get('subtasks');
        $task->owner  = $request->get('owner');
        $task->save();

        return response()->json('Successfully Updated');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request)
    {
        //
        $now = Carbon::now();

        $taskItem = TaskItem::find($request->get('task_id'));

        $task_id= TaskItem::find($request->get('task_id'))->task_id;
        //is_in_progress column =>   0=not started;  -1=completed;   1=in progress
        $task = Tasks::find($task_id);
        $completedTasks = DB::table("tasks")
            ->join('task_items', 'tasks.id', "=", 'task_items.task_id')
            ->where('tasks.id', "=", $task_id)
            ->where('task_items.is_complete', "=", 1)
            ->count();

        if($taskItem->is_complete==0){
            $taskItem->is_complete  = 1;
            $taskItem->date_complete  = $now;

            if($task->subtasks == $completedTasks+1){ //if complete
                $task->is_in_progress = -1;
            }else if($task->is_in_progress == 0){//if still in_progress
                $task->is_in_progress = 1;
            }
            $message = 'Congratulations on Completing a Task!';
        }else{ //undo completed task
            $taskItem->is_complete  = 0;
            $taskItem->date_complete  = null;

            if($task->is_in_progress == -1){//turns to in_progress
                $task->is_in_progress = 1;
            }else if($task->is_in_progress == 1 && $completedTasks==0){
                $task->is_in_progress = 0;
            }
            $message = 'You will finish it someday!';
        }
        $taskItem->save();
        $task->save();

        return response()->json([
            'status' => 200,
            'message' => $message,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id)
    {
        //
        $task = Tasks::find($id);
        $task->delete();
        return response()->json('Successfully Deleted');
    }
}

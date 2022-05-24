<?php

namespace App\Http\Controllers\API;
use App\Http\Controllers\Controller;
use App\Models\Party;
use App\Models\TaskItem;
use App\Models\Tasks;
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
        }

        return response()->json([
            'status' => 200,
            'party_members' => $party_members,
            'id' => $id,
            'party' => $has_party,
        ]);
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
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, $id)
    {
        //
        $now = Carbon::now();
        $completedTasks = 0;

        $taskItem = TaskItem::find($id);
        $taskItem->is_complete  = $request->get('done');
        $taskItem->date_complete  = $now;
        $taskItem->save();

        $task_id= TaskItem::find($id)->task_id;
        //is_in_progress column =>   0=not started;  -1=completed;   1=in progress
        $task = Tasks::find($task_id);
        $completedTasks = DB::table("tasks")
                        ->join('task_items', 'tasks.id', "=", 'task_items.task_id')
                        ->where('tasks.id', "=", $task_id)
                        ->where('task_items.is_complete', "=", 1)
                        ->count();

//        foreach($otherItems  as $key => $item){
//            if ($item->is_complete == 0) {
//                $inc_count++;
//            }
//        }
        if($task->subtasks == $completedTasks){
            $task->is_in_progress = -1;
        }else if($task->is_in_progress == 0){
            $task->is_in_progress = 1;
        }
        $task->save();

        return response()->json('Congratulations on Completing a Task!');
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

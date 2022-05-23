<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Tasks;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use mysql_xdevapi\Table;

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
        $tasks = Tasks::all();
        $id = Auth::hasUser();
        $taskList = DB::table("tasks")
                    ->where(owner, "=", $id)
                    ->joinWhere(task_items, task_id, "=", id);
        return response()->json([
            'status' => 200,
            'tasks' => $tasks,
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

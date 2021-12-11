<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class InventoryController extends Controller
{
    public function store(Request $request){
        return response()->json([
            'text' => "testing success",
        ]);
    }
}

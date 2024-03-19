<?php

namespace App\Http\Controllers;

use App\Models\Todo;

class TodoController extends Controller
{
    // Fetch paginated todos here
    public function index()
    {
        $todos = Todo::orderBy('id')->paginate(10);

        return response()->json($todos);
    }

    // Fetch todo using id here
    public function update($id)
    {
        $todo = Todo::find($id);

        if (! empty($todo)) {
            $todo->update([
                'status' => $todo->status == 'pending' ? 'done' : 'pending',
            ]);

            return response()->json($todo);
        } else {
            return response()->json([
                'error' => 'Todo item not found',
            ], 404);
        }

    }
}

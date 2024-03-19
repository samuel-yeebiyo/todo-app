<?php

describe('todos', function () {

    it('can fetch paginated todo list', function () {
        // Create multiple todo items first
        create_todos(20);

        $response = $this->get('/api/todos');

        $response->assertStatus(200);
        $response->assertJsonStructure([
            'current_page',
            'per_page',
            'data' => [
                '*' => [
                    'id',
                    'title',
                    'status',
                ],
            ],
        ]);
    });

    it('can update todo item status', function () {
        // Create a todo item first
        $todo = create_todo();

        $response = $this->post("/api/todos/{$todo->id}");

        $response->assertStatus(200);
        if ($todo->status == 'pending') {
            expect($response['status'])->toBe('done');
        } else {
            expect($response['status'])->toBe('pending');
        }

    });

});

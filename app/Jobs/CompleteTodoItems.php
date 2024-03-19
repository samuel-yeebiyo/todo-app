<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class CompleteTodoItems implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * The number of times the job may be attempted.
     *
     * @var int
     */
    protected $tries = 3;

    protected $todo_chunk = null;

    /**
     * Create a new job instance.
     */
    public function __construct($chunk)
    {
        $this->todo_chunk = $chunk;
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        foreach ($this->todo_chunk as $todo) {
            if ($todo->status == 'pending') {
                $todo->update([
                    'status' => 'done',
                ]);
            }
        }
    }
}

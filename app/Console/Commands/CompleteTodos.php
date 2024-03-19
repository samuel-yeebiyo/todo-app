<?php

namespace App\Console\Commands;

use App\Jobs\CompleteTodoItems;
use App\Models\Todo;
use Illuminate\Console\Command;

class CompleteTodos extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'todo:complete-todos';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Complete all todo items';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        Todo::where('status', 'pending')->chunk(100, function ($chunk) {
            CompleteTodoItems::dispatch($chunk);
        });
    }
}

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTaskItemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('task_items', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('content');
            $table->boolean('is_complete');
            $table->integer('frequency');
            $table->date('deadline');
            $table->boolean('is_public');
            $table->integer('reminder');
            $table->foreignId('tasks')->constrained('tasks', 'id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('task_items');
    }
}

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
            $table->string('content', 1000);
            $table->boolean('is_complete');
            $table->integer('frequency');
            $table->dateTime('deadline');
            $table->dateTime('date_complete')->nullable();
            $table->boolean('is_public');
            $table->integer('reminder');
            $table->foreignId('task_id')->constrained('tasks', 'id');
            $table->foreignId('task_difficulty')->constrained('task_difficulties', 'id');
            $table->timestamps();
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

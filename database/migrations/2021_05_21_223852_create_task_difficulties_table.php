<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTaskDifficultiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('task_difficulties', function (Blueprint $table) {
            $table->id();
            $table->string('difficulty', 40);
            $table->integer('task_value');
            $table->integer('gems');
            $table->integer('hp_deduction');
            $table->integer('gem_deduction');
            $table->integer('hp_gain');
            $table->integer('gem_gain');
            $table->integer('penalty_points');
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
        Schema::dropIfExists('task_difficulties');
    }
}

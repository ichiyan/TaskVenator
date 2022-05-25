<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBattleIndividualsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('battle_individuals', function (Blueprint $table) {
            $table->id();
            $table->foreignId('monster_id')->constrained('monsters', 'id');
            $table->foreignId('user_id')->constrained('users', 'id');
            $table->integer('monster_remaining_hp');
            $table->dateTime('battle_started');
            $table->foreignId('battle_performance_id')->nullable()->constrained('battle_performances', 'id');
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
        Schema::dropIfExists('battle_individuals');
    }
}

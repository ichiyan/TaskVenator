<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBattleGroupsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('battle_groups', function (Blueprint $table) {
            $table->id();
            $table->foreignId('monster_id')->constrained('monsters', 'id');
            $table->foreignId('party_id')->constrained('parties', 'id');
            $table->integer('participating_members');
            $table->integer('remaining_monster_hp');
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
        Schema::dropIfExists('battle_groups');
    }
}

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBattleGroupMembersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('battle_group_members', function (Blueprint $table) {
            $table->id();
            $table->foreignId('battle_group_id')->constrained('battle_groups', 'id');
            $table->foreignId('user_id')->constrained('users', 'id');
            $table->integer('dmg_done'); //not final
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
        Schema::dropIfExists('battle_group_members');
    }
}

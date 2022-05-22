<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBattlePerformancesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('battle_performances', function (Blueprint $table) {
            $table->id();
            $table->string('name','20');
            $table->integer('penalty_points_lower_limit');
            $table->integer('penalty_points_upper_limit')->nullable();
            $table->integer('hp_gain');
            $table->integer('xp_gain');
            $table->integer('gem_gain');
            $table->integer('no_reward_rate');
            $table->integer('health_potion_drop_rate');
            $table->integer('powerup_potion_drop_rate');
            $table->integer('common_weapon_drop_rate');
            $table->integer('uncommon_weapon_drop_rate');
            $table->integer('rare_weapon_drop_rate');
            $table->integer('common_outfit_drop_rate');
            $table->integer('uncommon_outfit_drop_rate');
            $table->integer('rare_outfit_drop_rate');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('battle_performances');
    }
}

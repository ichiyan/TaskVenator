<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOutfitInfoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('outfit_info', function (Blueprint $table) {
            $table->id();
            $table->integer('p_attack');
            $table->integer('m_attack');
            $table->integer('p_def');
            $table->integer('m_def');
            $table->integer('str');
            $table->integer('int');
            $table->integer('agi');
            $table->integer('crit');
            $table->integer('crit_dmg');
            $table->integer('price');
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
        Schema::dropIfExists('outfit_info');
    }
}

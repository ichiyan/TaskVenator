<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWeaponTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('weapon', function (Blueprint $table) {
            $table->id();
            $table->string('image')->nullable();
            $table->string('name');
            $table->string('class');
            $table->string('type');
            $table->integer('pAttack');
            $table->integer('mAttack');
            $table->integer('pDef');
            $table->integer('mDef');
            $table->integer('str');
            $table->integer('int');
            $table->integer('agi');
            $table->integer('crit');
            $table->integer('critDmg');
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
        Schema::dropIfExists('weapon');
    }
}

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAvatarClassesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('avatar_classes', function (Blueprint $table) {
            $table->id();
            $table->string('name', 40);
            $table->integer('base_attack');
            $table->integer('magic_attack');
            $table->integer('base_defense');
            $table->integer('magic_defense');
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
        Schema::dropIfExists('avatar_classes');
    }
}

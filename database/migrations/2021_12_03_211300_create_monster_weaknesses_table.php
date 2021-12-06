<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMonsterWeaknessesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('monster_weaknesses', function (Blueprint $table) {
            $table->id();
            $table->foreignId('monster_class')->constrained('m_classes', 'id');
            $table->foreignId('weak_against')->constrained('m_classes', 'id');
            $table->integer('vulnerability_points');
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
        Schema::dropIfExists('monster_weaknesses');
    }
}

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePartiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('parties', function (Blueprint $table) {
            $table->id();
            $table->string('party_name', 50);
            $table->string('party_image', 100);
            $table->string('party_motto', 500);
            $table->date('founded_on');
            $table->integer('total_members');
            $table->integer('max_members');
            $table->integer('battles_won');
            $table->integer('battles_lost');
            $table->foreignId('founder')->constrained('users', 'id');
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
        Schema::dropIfExists('parties');
    }
}

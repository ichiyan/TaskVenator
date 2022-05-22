<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserInfosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_infos', function (Blueprint $table) {
            $table->id();
            $table->string('username');
            $table->integer('gems')->default('0'); //change default?
            //TBD: default warning days
            $table->integer('warning_days')->default('3');
            $table->integer('has_party')->default('0')->comment('0: no party, 1: has party');
            $table->date('last_opened_chat')->nullable();
            $table->boolean('is_in_battle')->default('0');
            $table->date('last_received_daily_hp')->nullable();
            $table->foreignId('user_id')->constrained('users', 'id')->onUpdate('cascade')->onDelete('cascade');
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
        Schema::dropIfExists('user_infos');
    }
}

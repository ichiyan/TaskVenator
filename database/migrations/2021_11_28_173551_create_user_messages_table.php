<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserMessagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_messages', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('message_id');
            $table->unsignedInteger('sender_id');
            $table->unsignedInteger('receiver_id')->nullable(); //nullable for party messages
            $table->unsignedInteger('party_id')->nullable();    //nullable for private messages
            $table->tinyInteger('type')->default(0)->comment('1: group msg, 0:personal msg');
            $table->tinyInteger('seen_status')->default(0)->comment('1:seen');
            $table->tinyInteger('deliver_status')->default(0)->comment('1:delivered');
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
        Schema::dropIfExists('user_messages');
    }
}

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAvatarsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('avatars', function (Blueprint $table) {
            $table->id();
            $table->integer('level')->default('1');
            $table->integer('sex')->comment('0: male, 1: female');
            $table->string('skin_tone')->comment('corresponding color name in spritesheet');
            $table->string('background_color')->comment('hex value');
            $table->json('items');
            $table->string('avatar_img')->nullable();
            $table->integer('strength');
            $table->integer('agility');
            $table->integer('intelligence');
            $table->integer('current_hp');
            $table->integer('current_xp')->default('0');
            $table->integer('max_hp');
            $table->integer('max_xp');
            $table->integer('crit_chance');
            $table->integer('crit_damage');
            $table->foreignId('class_id')->nullable()->constrained('avatar_classes', 'id');
            $table->foreignId('user_info_id')->nullable()->constrained('user_infos', 'id')->onUpdate('cascade')->onDelete('cascade');
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
        Schema::dropIfExists('avatars');
    }
}

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOutfitTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('outfit', function (Blueprint $table) {
            $table->id();
            $table->string('outfit_type');
            $table->string('sex');
            $table->string('male_image')->nullable();
            $table->string('female_image')->nullable();
            $table->string('name');
            $table->string('class');
            $table->string('rarity_type');
            $table->string('body_part')->nullable();
            $table->string('spritesheet_img_name');
            $table->string('directory');
            $table->integer('zPos');
            $table->foreignId('outfit_infos')->constrained('outfit_info', 'id');
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
        Schema::dropIfExists('outfit');
    }
}

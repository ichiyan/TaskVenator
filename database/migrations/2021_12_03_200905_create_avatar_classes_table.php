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
            $table->integer('strength');
            $table->integer('agility');
            $table->integer('intelligence');
            $table->integer('hp');
            $table->integer('crit_chance');
            $table->integer('crit_damage'); //in %
            $table->foreignId('primary_attribute')->constrained('attributes', 'id');
            $table->foreignId('secondary_attribute')->constrained('attributes', 'id');
            $table->foreignId('ternary_attribute')->constrained('attributes', 'id');
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

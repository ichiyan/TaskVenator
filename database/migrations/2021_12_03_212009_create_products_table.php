<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() //NOT SURE WHAT THIS SHOULD BE FOR
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->foreignId('card')->constrained('cards', 'id')->nullable();
            $table->foreignId('weapon')->constrained('weapons', 'id')->nullable();
            $table->foreignId('potion')->constrained('potion', 'id')->nullable();
            $table->foreignId('outfit')->constrained('outfit', 'id')->nullable();
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
        Schema::dropIfExists('products');
    }
}

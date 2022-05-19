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
            $table->foreignId('card')->nullable()->constrained('cards', 'id');
            $table->foreignId('weapon')->nullable()->constrained('weapons', 'id');
            $table->foreignId('potion')->nullable()->constrained('potion', 'id');
            $table->foreignId('outfit')->nullable()->constrained('outfit', 'id');
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

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInventoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('inventories', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users', 'id');
            $table->foreignId('product')->constrained('products', 'id');
            $table->foreignId('OutfitType')->nullable()->constrained('outfit_types', 'id');
            $table->foreignId('bodyPart')->nullable()->constrained('body_parts', 'id');
            $table->integer('amount');
            $table->boolean('status')->default(0);  //1 if equipped otherwise 0
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
        Schema::dropIfExists('inventories');
    }
}

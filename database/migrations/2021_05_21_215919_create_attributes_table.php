<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class CreateAttributesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('attributes', function (Blueprint $table) {
            $table->id();
            $table->string('name','20');
            $table->string('abbreviation','10');
        });

        DB::table('attributes')->insert(
            array(
                ['name' => 'strength',
                    'abbreviation' => 'STR'
                ],
                ['name' => 'agility',
                    'abbreviation' => 'AGI'
                ],
                ['name' => 'intelligence',
                    'abbreviation' => 'INT'
                ],
            )
        );
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('attributes');
    }
}

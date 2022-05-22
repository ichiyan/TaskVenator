<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class CreateMonstersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('monsters', function (Blueprint $table) {
            $table->id();
            $table->string('name', 50);
            $table->string('image', 200)->nullable();
            $table->timestamps();
        });

        DB::table('monsters')->insert(
            array(
                ['name' => 'Zombie',
                    'image' => "",
                ],
                ['name' => 'Cthulhu',
                    'image' => "",
                ],
                ['name' => 'Cerberus',
                    'image' => "",
                ],
                ['name' => 'Ghoul',
                    'image' => "",
                ],
                ['name' => 'Dryads',
                    'image' => "",
                ],
                ['name' => 'Mummy',
                    'image' => "",
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
        Schema::dropIfExists('monsters');
    }
}

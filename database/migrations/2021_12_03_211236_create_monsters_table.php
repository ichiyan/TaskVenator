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
                    'image' => "assets/images/monsters/Zombie.gif",
                ],
                ['name' => 'Cthulhu',
                    'image' => "assets/images/monsters/Cthulhu.gif",
                ],
                ['name' => 'Cerberus',
                    'image' => "assets/images/monsters/Cerberus.gif",
                ],
                ['name' => 'Ghoul',
                    'image' => "assets/images/monsters/Ghoul.gif",
                ],
                ['name' => 'Dryads',
                    'image' => "assets/images/monsters/Dryads.gif",
                ],
                ['name' => 'Mummy',
                    'image' => "assets/images/monsters/Mummy.gif",
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

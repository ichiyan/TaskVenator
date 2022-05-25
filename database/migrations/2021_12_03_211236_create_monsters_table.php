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
            $table->string('description',200)->nullable();
            $table->timestamps();
        });

        DB::table('monsters')->insert(
            array(
                ['name' => 'Zombie',
                    'image' => "assets/images/monsters/Zombie.gif",
                    'description' => "A corpse said to be revived by witchcraft",
                ],
                ['name' => 'Cthulhu',
                    'image' => "assets/images/monsters/Cthulhu.gif",
                    'description' => "A Great Old One of great power who lies in a death-like slumber",
                ],
                ['name' => 'Cerberus',
                    'image' => "assets/images/monsters/Cerberus.gif",
                    'description' => "The monstrous watchdog of the underworld",
                ],
                ['name' => 'Ghoul',
                    'image' => "assets/images/monsters/Ghoul.gif",
                    'description' => "An evil spirit that rob graves and feed on dead bodies",
                ],
                ['name' => 'Dryads',
                    'image' => "assets/images/monsters/Dryads.gif",
                    'description' => "A nymph inhabiting a forest or a tree",
                ],
                ['name' => 'Mummy',
                    'image' => "assets/images/monsters/Mummy.gif",
                    'description' => "A animal whose soft tissues and organs have been preserved",
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

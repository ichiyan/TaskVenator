<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert(
            array(
                [
                    'name' => 'Gab',
                    'email' => 'gab@gmail.com',
                    'password' => bcrypt('p@ssw0rd'),
                ],
                [
                    'name' => 'Anne',
                    'email' => 'anne@gmail.com',
                    'password' => bcrypt('p@ssw0rd'),
                ],
                [
                    'name' => 'Daves',
                    'email' => 'daves@gmail.com',
                    'password' => bcrypt('p@ssw0rd'),
                ],
                [
                    'name' => 'Luffy',
                    'email' => 'luffy@gmail.com',
                    'password' => bcrypt('p@ssw0rd'),
                ],
                [
                    'name' => 'Zoro',
                    'email' => 'zoro@gmail.com',
                    'password' => bcrypt('p@ssw0rd'),
                ],
                [
                    'name' => 'Robin',
                    'email' => 'robin@gmail.com',
                    'password' => bcrypt('p@ssw0rd'),
                ],
                [
                    'name' => 'Sanji',
                    'email' => 'sanji@gmail.com',
                    'password' => bcrypt('p@ssw0rd'),
                ],
            )
        );

        DB::table('user_infos')->insert(
            array(
                [
                    'username' => 'gab_01',
                    'has_party' => 1,
                    'user_id' => 1
                ],
                [
                    'username' => 'anne_02',
                    'has_party' => 1,
                    'user_id' => 2
                ],
                [
                    'username' => 'daves_03',
                    'has_party' => 1,
                    'user_id' => 3
                ],
            )
        );

        DB::table('avatars')->insert(
            array(
                [
                    'sex' => 1,
                    'skin_tone' => 'darkelf_2',
                    'background_color' => '#9580FF',
                    'items' => '[{"class":"mage","name":"shoes","sex":"unisex","image":[],"img_name":"black.png","base_src":"assets\/images\/spritesheets\/feet\/shoes\/","zPos":15},{"class":"mage","name":"legPants","sex":"unisex","image":[],"img_name":"navy.png","base_src":"assets\/images\/spritesheets\/legs\/pants\/","zPos":20},{"name":"eye color","sex":"unisex","image":[],"img_name":"purple.png","base_src":"assets\/images\/spritesheets\/eyes\/","zPos":20},{"class":"mage","name":"cloak","sex":"male","image":[],"img_name":"black.png","base_src":"assets\/images\/spritesheets\/torso\/jacket\/iverness\/","zPos":55},{"class":"mage","name":"cape","sex":"unisex","image":[],"img_name":"black.png","base_src":"assets\/images\/spritesheets\/cape\/solid\/","zPos":85},{"class":"mage","name":"scarf","sex":"none","image":[],"img_name":"blue.png","base_src":"assets\/images\/spritesheets\/neck\/scarf\/","zPos":90},{"name":"hair style","sex":"unisex","image":[],"img_name":"purple.png","base_src":"assets\/images\/spritesheets\/hair\/xlong\/","zPos":120},{"class":"mage","name":"hat","sex":"unisex","image":[],"img_name":"black.png","base_src":"assets\/images\/spritesheets\/hat\/magic\/","zPos":130},{"class":"mage","name":"weapon","sex":"unisex","image":[],"img_name":"simple_staff.png","base_src":"assets\/images\/spritesheets\/weapon\/thrust\/","zPos":140}]',
                    'class_id' => 2,
                    'user_info_id' => 1,
                ],
                [
                    'sex' => 1,
                    'skin_tone' => 'light',
                    'background_color' => '#80FFEA',
                    'items' => '[{"class":"marksman","name":"shoes","sex":"unisex","image":[],"img_name":"black.png","base_src":"assets\/images\/spritesheets\/feet\/shoes\/","zPos":15},{"name":"eye color","sex":"unisex","image":[],"img_name":"red.png","base_src":"assets\/images\/spritesheets\/eyes\/","zPos":20},{"class":"marksman","name":"legPants","sex":"unisex","image":[],"img_name":"green.png","base_src":"assets\/images\/spritesheets\/legs\/pants\/","zPos":20},{"class":"marksman","name":"shirt","sex":"unisex","image":[],"img_name":"green.png","base_src":"assets\/images\/spritesheets\/torso\/clothes\/longsleeve\/","zPos":35},{"class":"marksman","name":"armor","sex":"unisex","image":[],"img_name":"brown.png","base_src":"assets\/images\/spritesheets\/torso\/armour\/leather\/","zPos":60},{"class":"marksman","name":"bauldron","sex":"unisex","image":[],"img_name":"brown.png","base_src":"assets\/images\/spritesheets\/bauldron\/","zPos":65},{"class":"marksman","name":"quiver","sex":"none","image":[],"img_name":"quiver.png","base_src":"assets\/images\/spritesheets\/quiver\/","zPos":100},{"name":"hair style","sex":"unisex","image":[],"img_name":"rose.png","base_src":"assets\/images\/spritesheets\/hair\/braid\/","zPos":120},{"class":"marksman","name":"hat","sex":"unisex","image":[],"img_name":"leather.png","base_src":"assets\/images\/spritesheets\/hat\/cloth\/","zPos":130},{"class":"marksman","name":"weapon","sex":"none","image":[],"img_name":"normal.png","base_src":"assets\/images\/spritesheets\/weapon\/bow\/","zPos":140},{"class":"marksman","name":"ammo","sex":"none","image":[],"img_name":"arrow.png","base_src":"assets\/images\/spritesheets\/ammo\/","zPos":150}]',
                    'class_id' => 3,
                    'user_info_id' => 2,
                ],
                [
                    'sex' => 0,
                    'skin_tone' => 'zombie',
                    'background_color' => '#FFFF80',
                    'items' => '[{"class":"warrior","name":"shoes","sex":"unisex","image":[],"img_name":"4.png","base_src":"assets\/images\/spritesheets\/feet\/armor\/","zPos":15},{"name":"eye color","sex":"unisex","image":[],"img_name":"purple.png","base_src":"assets\/images\/spritesheets\/eyes\/","zPos":20},{"class":"warrior","name":"legArmor","sex":"unisex","image":[],"img_name":"7.png","base_src":"assets\/images\/spritesheets\/legs\/armour\/","zPos":20},{"class":"warrior","name":"chainmail","sex":"unisex","image":[],"img_name":"gray.png","base_src":"assets\/images\/spritesheets\/torso\/chainmail\/","zPos":50},{"class":"warrior","name":"shoulderPlate","sex":"unisex","image":[],"img_name":"7.png","base_src":"assets\/images\/spritesheets\/shoulders\/plate\/","zPos":60},{"class":"warrior","name":"arms","sex":"unisex","image":[],"img_name":"1.png","base_src":"assets\/images\/spritesheets\/arms\/","zPos":60},{"class":"warrior","name":"plate","sex":"unisex","image":[],"img_name":"11.png","base_src":"assets\/images\/spritesheets\/torso\/armour\/plate\/","zPos":60},{"class":"warrior","name":"gloves","sex":"unisex","image":[],"img_name":"1.png","base_src":"assets\/images\/spritesheets\/gloves\/","zPos":70},{"class":"warrior","name":"shield","sex":"unisex","image":[],"img_name":"round_brown.png","base_src":"assets\/images\/spritesheets\/shield\/","zPos":110},{"name":"hair style","sex":"unisex","image":[],"img_name":"blue.png","base_src":"assets\/images\/spritesheets\/hair\/ponytail2\/","zPos":120},{"class":"warrior","name":"helmet","sex":"unisex","image":[],"img_name":"norman.png","base_src":"assets\/images\/spritesheets\/hat\/helmet\/","zPos":130},{"class":"warrior","name":"slashWeapon","sex":"unisex","image":[],"img_name":"dagger.png","base_src":"assets\/images\/spritesheets\/weapon\/slash\/","zPos":140}]',
                    'class_id' => 1,
                    'user_info_id' => 3,
                ],
            )
        );
    }
}

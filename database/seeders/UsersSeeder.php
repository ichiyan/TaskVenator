<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

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
                [
                    'name' => 'Ace',
                    'email' => 'ace@gmail.com',
                    'password' => bcrypt('p@ssw0rd'),
                ],
                [
                    'name' => 'Law',
                    'email' => 'law@gmail.com',
                    'password' => bcrypt('p@ssw0rd'),
                ],
                [
                    'name' => 'Eustass',
                    'email' => 'eustass@gmail.com',
                    'password' => bcrypt('p@ssw0rd'),
                ],
            )
        );

        DB::table('user_infos')->insert(
            array(
                [
                    'username' => 'axolotl',
                    'gems'=> 10,
                    'has_party' => 1,
                    'last_opened_chat' => '2022-01-12 02:18:50',
                    'last_received_daily_hp' => '2022-01-12 02:18:50',
                    'user_id' => 1
                ],
                [
                    'username' => 'capybara',
                    'gems'=> 10,
                    'has_party' => 1,
                    'last_opened_chat' => '2022-01-12 02:18:50',
                    'last_received_daily_hp' => '2022-01-12 02:18:50',
                    'user_id' => 2
                ],
                [
                    'username' => 'cat_emperor',
                    'gems'=> 10,
                    'has_party' => 1,
                    'last_opened_chat' => '2022-01-12 02:18:50',
                    'last_received_daily_hp' => '2022-01-12 02:18:50',
                    'user_id' => 3
                ],
                [
                    'username' => 'penguin',
                    'gems'=> 10,
                    'has_party' => 1,
                    'last_opened_chat' => '2022-01-12 02:18:50',
                    'last_received_daily_hp' => '2022-01-12 02:18:50',
                    'user_id' => 4
                ],
                [
                    'username' => 'jellyfish',
                    'gems'=> 10,
                    'has_party' => 1,
                    'last_opened_chat' => '2022-01-12 02:18:50',
                    'last_received_daily_hp' => '2022-01-12 02:18:50',
                    'user_id' => 5
                ],
                [
                    'username' => 'red_panda',
                    'gems'=> 10,
                    'has_party' => 1,
                    'last_opened_chat' => '2022-01-12 02:18:50',
                    'last_received_daily_hp' => '2022-01-12 02:18:50',
                    'user_id' => 6
                ],
                [
                    'username' => 'kurage',
                    'gems'=> 10,
                    'has_party' => 1,
                    'last_opened_chat' => '2022-01-12 02:18:50',
                    'last_received_daily_hp' => '2022-01-12 02:18:50',
                    'user_id' => 7
                ],
                [
                    'username' => 'norin',
                    'gems'=> 10,
                    'has_party' => 1,
                    'last_opened_chat' => '2022-01-12 02:18:50',
                    'last_received_daily_hp' => '2022-01-12 02:18:50',
                    'user_id' => 8
                ],
                [
                    'username' => 'dokyun',
                    'gems'=> 10,
                    'has_party' => 1,
                    'last_opened_chat' => '2022-01-12 02:18:50',
                    'last_received_daily_hp' => '2022-01-12 02:18:50',
                    'user_id' => 9
                ],
                [
                    'username' => 'kaiii',
                    'gems'=> 500,
                    'has_party' => 1,
                    'last_opened_chat' => '2022-01-12 02:18:50',
                    'last_received_daily_hp' => '2022-01-12 02:18:50',
                    'user_id' => 10
                ],

            )
        );

        DB::table('avatars')->insert(
            array(
                [
                    'level' => 1,
                    'sex' => 1,
                    'skin_tone' => 'darkelf_2',
                    'background_color' => '#9580FF',
                    'items'=> '[{"class":"mage","name":"shoes","body_part":"feet","sex":"unisex","image":[],"img_name":"black.png","base_src":"assets\/images\/spritesheets\/feet\/shoes\/","zPos":15},{"class":"mage","name":"legPants","body_part":"legs","sex":"unisex","image":[],"img_name":"navy.png","base_src":"assets\/images\/spritesheets\/legs\/pants\/","zPos":20},{"name":"eye color","sex":"unisex","image":[],"img_name":"purple.png","base_src":"assets\/images\/spritesheets\/eyes\/","zPos":20},{"class":"mage","name":"cloak","body_part":"torso","sex":"male","image":[],"img_name":"black.png","base_src":"assets\/images\/spritesheets\/torso\/jacket\/iverness\/","zPos":55},{"class":"mage","name":"cape","body_part":"none","sex":"unisex","image":[],"img_name":"black.png","base_src":"assets\/images\/spritesheets\/cape\/solid\/","zPos":85},{"class":"mage","name":"scarf","body_part":"neck","sex":"none","image":[],"img_name":"blue.png","base_src":"assets\/images\/spritesheets\/neck\/scarf\/","zPos":90},{"name":"hair style","sex":"unisex","image":[],"img_name":"purple.png","base_src":"assets\/images\/spritesheets\/hair\/bangslong2\/","zPos":120},{"class":"mage","name":"weapon","body_part":"none","sex":"unisex","image":[],"img_name":"simple_staff.png","base_src":"assets\/images\/spritesheets\/weapon\/thrust\/","zPos":140}]',
                    'avatar_img' => 'assets/images/avatars/1.jpg',
                    'strength' => 15,
                    'agility' => 5,
                    'intelligence' => 20,
                    'current_hp' => 58,
                    'current_xp' => 0,
                    'max_hp' => 58,
                    'max_xp' => 25,
                    'crit_chance' => 11,
                    'crit_damage' => 0,
                    'class_id' => 3,
                    'user_info_id' => 1,
                ],
                [
                    'level' => 1,
                    'sex' => 0,
                    'skin_tone' => 'light',
                    'background_color' => '#8AFF80',
                    'items' => '[{"class":"warrior","name":"shoes","body_part":"feet","sex":"unisex","image":[],"img_name":"4.png","base_src":"assets\/images\/spritesheets\/feet\/armor\/","zPos":15},{"name":"eye color","sex":"unisex","image":[],"img_name":"gray.png","base_src":"assets\/images\/spritesheets\/eyes\/","zPos":20},{"class":"warrior","name":"legArmor","body_part":"legs","sex":"unisex","image":[],"img_name":"7.png","base_src":"assets\/images\/spritesheets\/legs\/armour\/","zPos":20},{"class":"warrior","name":"chainmail","body_part":"torso","sex":"unisex","image":[],"img_name":"gray.png","base_src":"assets\/images\/spritesheets\/torso\/chainmail\/","zPos":50},{"class":"warrior","name":"plate","body_part":"torso","sex":"unisex","image":[],"img_name":"11.png","base_src":"assets\/images\/spritesheets\/torso\/armour\/plate\/","zPos":60},{"class":"warrior","name":"arms","body_part":"arms","sex":"unisex","image":[],"img_name":"1.png","base_src":"assets\/images\/spritesheets\/arms\/","zPos":60},{"class":"warrior","name":"shoulderPlate","body_part":"shoulders","sex":"unisex","image":[],"img_name":"7.png","base_src":"assets\/images\/spritesheets\/shoulders\/plate\/","zPos":60},{"class":"warrior","name":"gloves","body_part":"hands","sex":"unisex","image":[],"img_name":"1.png","base_src":"assets\/images\/spritesheets\/gloves\/","zPos":70},{"class":"warrior","name":"shield","body_part":"none","sex":"unisex","image":[],"img_name":"round_brown.png","base_src":"assets\/images\/spritesheets\/shield\/","zPos":110},{"name":"hair style","sex":"unisex","image":[],"img_name":"ash.png","base_src":"assets\/images\/spritesheets\/hair\/halfmessy\/","zPos":120},{"class":"warrior","name":"slashWeapon","body_part":"none","sex":"unisex","image":[],"img_name":"dagger.png","base_src":"assets\/images\/spritesheets\/weapon\/slash\/","zPos":140}]',
                    'avatar_img' => 'assets/images/avatars/2.jpg',
                    'strength' => 20,
                    'agility' => 15,
                    'intelligence' => 5,
                    'current_hp' => 60,
                    'current_xp' => 0,
                    'max_hp' => 60,
                    'max_xp' => 25,
                    'crit_chance' => 12,
                    'crit_damage' => 0,
                    'class_id' => 1,
                    'user_info_id' => 2,
                ],
                [
                    'level' => 1,
                    'sex' => 0,
                    'skin_tone' => 'tanned',
                    'background_color' => '#FF9580',
                    'items'=> '[{"class":"marksman","name":"shoes","body_part":"feet","sex":"unisex","image":[],"img_name":"black.png","base_src":"assets\/images\/spritesheets\/feet\/shoes\/","zPos":15},{"class":"marksman","name":"legPants","body_part":"legs","sex":"unisex","image":[],"img_name":"green.png","base_src":"assets\/images\/spritesheets\/legs\/pants\/","zPos":20},{"class":"marksman","name":"shirt","body_part":"torso","sex":"unisex","image":[],"img_name":"green.png","base_src":"assets\/images\/spritesheets\/torso\/clothes\/longsleeve\/","zPos":35},{"class":"marksman","name":"armor","body_part":"torso","sex":"unisex","image":[],"img_name":"brown.png","base_src":"assets\/images\/spritesheets\/torso\/armour\/leather\/","zPos":60},{"class":"marksman","name":"bauldron","body_part":"none","sex":"unisex","image":[],"img_name":"brown.png","base_src":"assets\/images\/spritesheets\/bauldron\/","zPos":65},{"class":"marksman","name":"quiver","body_part":"none","sex":"none","image":[],"img_name":"quiver.png","base_src":"assets\/images\/spritesheets\/quiver\/","zPos":100},{"name":"hair style","sex":"unisex","image":[],"img_name":"rose.png","base_src":"assets\/images\/spritesheets\/hair\/braid\/","zPos":120},{"class":"marksman","name":"weapon","body_part":"none","sex":"none","image":[],"img_name":"normal.png","base_src":"assets\/images\/spritesheets\/weapon\/bow\/","zPos":140},{"class":"marksman","name":"ammo","body_part":"none","sex":"none","image":[],"img_name":"arrow.png","base_src":"assets\/images\/spritesheets\/ammo\/","zPos":150}]',
                    'avatar_img' => 'assets/images/avatars/3.jpg',
                    'strength' => 5,
                    'agility' => 20,
                    'intelligence' => 15,
                    'current_hp' => 53,
                    'current_xp' => 0,
                    'max_hp' => 53,
                    'max_xp' => 25,
                    'crit_chance' => 12,
                    'crit_damage' => 0,
                    'class_id' => 2,
                    'user_info_id' => 3,
                ],
                [
                    'level' => 1,
                    'sex' => 0,
                    'skin_tone' => 'zombie',
                    'background_color' => '#80FFEA',
                    'items' => '[{"class":"mage","name":"shoes","body_part":"feet","sex":"unisex","image":[],"img_name":"black.png","base_src":"assets\/images\/spritesheets\/feet\/shoes\/","zPos":15},{"class":"mage","name":"legPants","body_part":"legs","sex":"unisex","image":[],"img_name":"navy.png","base_src":"assets\/images\/spritesheets\/legs\/pants\/","zPos":20},{"class":"mage","name":"cloak","body_part":"torso","sex":"male","image":[],"img_name":"black.png","base_src":"assets\/images\/spritesheets\/torso\/jacket\/iverness\/","zPos":55},{"class":"mage","name":"cape","body_part":"none","sex":"unisex","image":[],"img_name":"black.png","base_src":"assets\/images\/spritesheets\/cape\/solid\/","zPos":85},{"class":"mage","name":"scarf","body_part":"neck","sex":"none","image":[],"img_name":"blue.png","base_src":"assets\/images\/spritesheets\/neck\/scarf\/","zPos":90},{"name":"hair style","sex":"unisex","image":[],"img_name":"raven.png","base_src":"assets\/images\/spritesheets\/hair\/shorthawk\/","zPos":120},{"class":"mage","name":"weapon","body_part":"none","sex":"unisex","image":[],"img_name":"simple_staff.png","base_src":"assets\/images\/spritesheets\/weapon\/thrust\/","zPos":140}]',
                    'avatar_img' => 'assets/images/avatars/4.jpg',
                    'strength' => 15,
                    'agility' => 5,
                    'intelligence' => 20,
                    'current_hp' => 58,
                    'current_xp' => 0,
                    'max_hp' => 58,
                    'max_xp' => 25,
                    'crit_chance' => 11,
                    'crit_damage' => 0,
                    'class_id' => 3,
                    'user_info_id' => 4,
                ],
                [
                    'level' => 1,
                    'sex' => 0,
                    'skin_tone' => 'olive',
                    'background_color' => '#9580FF',
                    'items' => '[{"class":"warrior","name":"shoes","body_part":"feet","sex":"unisex","image":[],"img_name":"4.png","base_src":"assets\/images\/spritesheets\/feet\/armor\/","zPos":15},{"class":"warrior","name":"legArmor","body_part":"legs","sex":"unisex","image":[],"img_name":"7.png","base_src":"assets\/images\/spritesheets\/legs\/armour\/","zPos":20},{"name":"eye color","sex":"unisex","image":[],"img_name":"purple.png","base_src":"assets\/images\/spritesheets\/eyes\/","zPos":20},{"class":"warrior","name":"chainmail","body_part":"torso","sex":"unisex","image":[],"img_name":"gray.png","base_src":"assets\/images\/spritesheets\/torso\/chainmail\/","zPos":50},{"class":"warrior","name":"shoulderPlate","body_part":"shoulders","sex":"unisex","image":[],"img_name":"7.png","base_src":"assets\/images\/spritesheets\/shoulders\/plate\/","zPos":60},{"class":"warrior","name":"arms","body_part":"arms","sex":"unisex","image":[],"img_name":"1.png","base_src":"assets\/images\/spritesheets\/arms\/","zPos":60},{"class":"warrior","name":"plate","body_part":"torso","sex":"unisex","image":[],"img_name":"11.png","base_src":"assets\/images\/spritesheets\/torso\/armour\/plate\/","zPos":60},{"class":"warrior","name":"gloves","body_part":"hands","sex":"unisex","image":[],"img_name":"1.png","base_src":"assets\/images\/spritesheets\/gloves\/","zPos":70},{"class":"warrior","name":"shield","body_part":"none","sex":"unisex","image":[],"img_name":"round_brown.png","base_src":"assets\/images\/spritesheets\/shield\/","zPos":110},{"name":"hair style","sex":"unisex","image":[],"img_name":"redhead.png","base_src":"assets\/images\/spritesheets\/hair\/spiked_liberty\/","zPos":120},{"class":"warrior","name":"slashWeapon","body_part":"none","sex":"unisex","image":[],"img_name":"dagger.png","base_src":"assets\/images\/spritesheets\/weapon\/slash\/","zPos":140}]',
                    'avatar_img' => 'assets/images/avatars/5.jpg',
                    'strength' => 20,
                    'agility' => 15,
                    'intelligence' => 5,
                    'current_hp' => 60,
                    'current_xp' => 0,
                    'max_hp' => 60,
                    'max_xp' => 25,
                    'crit_chance' => 12,
                    'crit_damage' => 0,
                    'class_id' => 1,
                    'user_info_id' => 5,
                ],
                [
                    'level' => 1,
                    'sex' => 1,
                    'skin_tone' => 'white',
                    'background_color' => '#FFFF80',
                    'items' => '[{"class":"marksman","name":"shoes","body_part":"feet","sex":"unisex","image":[],"img_name":"black.png","base_src":"assets\/images\/spritesheets\/feet\/shoes\/","zPos":15},{"class":"marksman","name":"legPants","body_part":"legs","sex":"unisex","image":[],"img_name":"green.png","base_src":"assets\/images\/spritesheets\/legs\/pants\/","zPos":20},{"class":"marksman","name":"shirt","body_part":"torso","sex":"unisex","image":[],"img_name":"green.png","base_src":"assets\/images\/spritesheets\/torso\/clothes\/longsleeve\/","zPos":35},{"class":"marksman","name":"armor","body_part":"torso","sex":"unisex","image":[],"img_name":"brown.png","base_src":"assets\/images\/spritesheets\/torso\/armour\/leather\/","zPos":60},{"class":"marksman","name":"bauldron","body_part":"none","sex":"unisex","image":[],"img_name":"brown.png","base_src":"assets\/images\/spritesheets\/bauldron\/","zPos":65},{"class":"marksman","name":"quiver","body_part":"none","sex":"none","image":[],"img_name":"quiver.png","base_src":"assets\/images\/spritesheets\/quiver\/","zPos":100},{"name":"hair style","sex":"unisex","image":[],"img_name":"chestnut.png","base_src":"assets\/images\/spritesheets\/hair\/long_messy2\/","zPos":120},{"class":"marksman","name":"weapon","body_part":"none","sex":"none","image":[],"img_name":"normal.png","base_src":"assets\/images\/spritesheets\/weapon\/bow\/","zPos":140},{"class":"marksman","name":"ammo","body_part":"none","sex":"none","image":[],"img_name":"arrow.png","base_src":"assets\/images\/spritesheets\/ammo\/","zPos":150}]',
                    'avatar_img' => 'assets/images/avatars/6.jpg',
                    'strength' => 5,
                    'agility' => 20,
                    'intelligence' => 15,
                    'current_hp' => 53,
                    'current_xp' => 0,
                    'max_hp' => 53,
                    'max_xp' => 25,
                    'crit_chance' => 12,
                    'crit_damage' => 0,
                    'class_id' => 2,
                    'user_info_id' => 6,
                ],
                [
                    'level' => 1,
                    'sex' => 1,
                    'skin_tone' => 'darkelf_2',
                    'background_color' => '#9580FF',
                    'items' => '[{"class":"warrior","name":"shoes","body_part":"feet","sex":"unisex","image":[],"img_name":"4.png","base_src":"assets\/images\/spritesheets\/feet\/armor\/","zPos":15},{"class":"warrior","name":"legArmor","body_part":"legs","sex":"unisex","image":[],"img_name":"7.png","base_src":"assets\/images\/spritesheets\/legs\/armour\/","zPos":20},{"class":"warrior","name":"chainmail","body_part":"torso","sex":"unisex","image":[],"img_name":"gray.png","base_src":"assets\/images\/spritesheets\/torso\/chainmail\/","zPos":50},{"class":"warrior","name":"plate","body_part":"torso","sex":"unisex","image":[],"img_name":"11.png","base_src":"assets\/images\/spritesheets\/torso\/armour\/plate\/","zPos":60},{"class":"warrior","name":"arms","body_part":"arms","sex":"unisex","image":[],"img_name":"1.png","base_src":"assets\/images\/spritesheets\/arms\/","zPos":60},{"class":"warrior","name":"shoulderPlate","body_part":"shoulders","sex":"unisex","image":[],"img_name":"7.png","base_src":"assets\/images\/spritesheets\/shoulders\/plate\/","zPos":60},{"class":"warrior","name":"gloves","body_part":"hands","sex":"unisex","image":[],"img_name":"1.png","base_src":"assets\/images\/spritesheets\/gloves\/","zPos":70},{"class":"warrior","name":"shield","body_part":"none","sex":"unisex","image":[],"img_name":"round_brown.png","base_src":"assets\/images\/spritesheets\/shield\/","zPos":110},{"name":"hair style","sex":"unisex","image":[],"img_name":"white.png","base_src":"assets\/images\/spritesheets\/hair\/bangslong2\/","zPos":120},{"class":"warrior","name":"slashWeapon","body_part":"none","sex":"unisex","image":[],"img_name":"dagger.png","base_src":"assets\/images\/spritesheets\/weapon\/slash\/","zPos":140}]',
                    'avatar_img' => 'assets/images/avatars/7.jpg',
                    'strength' => 20,
                    'agility' => 15,
                    'intelligence' => 5,
                    'current_hp' => 60,
                    'current_xp' => 0,
                    'max_hp' => 60,
                    'max_xp' => 25,
                    'crit_chance' => 12,
                    'crit_damage' => 0,
                    'class_id' => 1,
                    'user_info_id' => 7,
                ],
                [
                    'level' => 1,
                    'sex' => 0,
                    'skin_tone' => 'peach',
                    'background_color' => '#FFFFFF',
                    'items' => '[{"class":"mage","name":"shoes","body_part":"feet","sex":"unisex","image":[],"img_name":"black.png","base_src":"assets\/images\/spritesheets\/feet\/shoes\/","zPos":15},{"class":"mage","name":"legPants","body_part":"legs","sex":"unisex","image":[],"img_name":"navy.png","base_src":"assets\/images\/spritesheets\/legs\/pants\/","zPos":20},{"class":"mage","name":"cloak","body_part":"torso","sex":"male","image":[],"img_name":"black.png","base_src":"assets\/images\/spritesheets\/torso\/jacket\/iverness\/","zPos":55},{"class":"mage","name":"cape","body_part":"none","sex":"unisex","image":[],"img_name":"black.png","base_src":"assets\/images\/spritesheets\/cape\/solid\/","zPos":85},{"class":"mage","name":"scarf","body_part":"neck","sex":"none","image":[],"img_name":"blue.png","base_src":"assets\/images\/spritesheets\/neck\/scarf\/","zPos":90},{"name":"hair style","sex":"unisex","image":[],"img_name":"pink.png","base_src":"assets\/images\/spritesheets\/hair\/curtains\/","zPos":120},{"class":"mage","name":"weapon","body_part":"none","sex":"unisex","image":[],"img_name":"simple_staff.png","base_src":"assets\/images\/spritesheets\/weapon\/thrust\/","zPos":140}]',
                    'avatar_img' => 'assets/images/avatars/8.jpg',
                    'strength' => 15,
                    'agility' => 5,
                    'intelligence' => 20,
                    'current_hp' => 58,
                    'current_xp' => 0,
                    'max_hp' => 58,
                    'max_xp' => 25,
                    'crit_chance' => 11,
                    'crit_damage' => 0,
                    'class_id' => 3,
                    'user_info_id' => 8,
                ],
                [
                    'level' => 1,
                    'sex' => 0,
                    'skin_tone' => 'light',
                    'background_color' => '#FF80BF',
                    'items' => '[{"class":"marksman","name":"shoes","body_part":"feet","sex":"unisex","image":[],"img_name":"black.png","base_src":"assets\/images\/spritesheets\/feet\/shoes\/","zPos":15},{"class":"marksman","name":"legPants","body_part":"legs","sex":"unisex","image":[],"img_name":"green.png","base_src":"assets\/images\/spritesheets\/legs\/pants\/","zPos":20},{"name":"eye color","sex":"unisex","image":[],"img_name":"purple.png","base_src":"assets\/images\/spritesheets\/eyes\/","zPos":20},{"class":"marksman","name":"shirt","body_part":"torso","sex":"unisex","image":[],"img_name":"green.png","base_src":"assets\/images\/spritesheets\/torso\/clothes\/longsleeve\/","zPos":35},{"class":"marksman","name":"armor","body_part":"torso","sex":"unisex","image":[],"img_name":"brown.png","base_src":"assets\/images\/spritesheets\/torso\/armour\/leather\/","zPos":60},{"class":"marksman","name":"bauldron","body_part":"none","sex":"unisex","image":[],"img_name":"brown.png","base_src":"assets\/images\/spritesheets\/bauldron\/","zPos":65},{"class":"marksman","name":"quiver","body_part":"none","sex":"none","image":[],"img_name":"quiver.png","base_src":"assets\/images\/spritesheets\/quiver\/","zPos":100},{"name":"hair style","sex":"unisex","image":[],"img_name":"gray.png","base_src":"assets\/images\/spritesheets\/hair\/pixie\/","zPos":120},{"class":"marksman","name":"weapon","body_part":"none","sex":"none","image":[],"img_name":"normal.png","base_src":"assets\/images\/spritesheets\/weapon\/bow\/","zPos":140},{"class":"marksman","name":"ammo","body_part":"none","sex":"none","image":[],"img_name":"arrow.png","base_src":"assets\/images\/spritesheets\/ammo\/","zPos":150}]',
                    'avatar_img' => 'assets/images/avatars/9.jpg',
                    'strength' => 5,
                    'agility' => 20,
                    'intelligence' => 15,
                    'current_hp' => 53,
                    'current_xp' => 0,
                    'max_hp' => 53,
                    'max_xp' => 25,
                    'crit_chance' => 12,
                    'crit_damage' => 0,
                    'class_id' => 2,
                    'user_info_id' => 9,
                ],
                [
                    'level' => 1,
                    'sex' => 0,
                    'skin_tone' => 'light',
                    'background_color' => '#FFFFFF',
                    'items' => '[{"class":"warrior","name":"shoes","body_part":"feet","sex":"unisex","image":[],"img_name":"4.png","base_src":"assets\/images\/spritesheets\/feet\/armor\/","zPos":15},{"name":"eye color","sex":"unisex","image":[],"img_name":"brown.png","base_src":"assets\/images\/spritesheets\/eyes\/","zPos":20},{"class":"warrior","name":"legArmor","body_part":"legs","sex":"unisex","image":[],"img_name":"7.png","base_src":"assets\/images\/spritesheets\/legs\/armour\/","zPos":20},{"class":"warrior","name":"chainmail","body_part":"torso","sex":"unisex","image":[],"img_name":"gray.png","base_src":"assets\/images\/spritesheets\/torso\/chainmail\/","zPos":50},{"class":"warrior","name":"plate","body_part":"torso","sex":"unisex","image":[],"img_name":"11.png","base_src":"assets\/images\/spritesheets\/torso\/armour\/plate\/","zPos":60},{"class":"warrior","name":"arms","body_part":"arms","sex":"unisex","image":[],"img_name":"1.png","base_src":"assets\/images\/spritesheets\/arms\/","zPos":60},{"class":"warrior","name":"shoulderPlate","body_part":"shoulders","sex":"unisex","image":[],"img_name":"7.png","base_src":"assets\/images\/spritesheets\/shoulders\/plate\/","zPos":60},{"class":"warrior","name":"gloves","body_part":"hands","sex":"unisex","image":[],"img_name":"1.png","base_src":"assets\/images\/spritesheets\/gloves\/","zPos":70},{"class":"warrior","name":"shield","body_part":"none","sex":"unisex","image":[],"img_name":"round_brown.png","base_src":"assets\/images\/spritesheets\/shield\/","zPos":110},{"name":"hair style","sex":"unisex","image":[],"img_name":"gray.png","base_src":"assets\/images\/spritesheets\/hair\/spiked_beehive\/","zPos":120},{"class":"warrior","name":"slashWeapon","body_part":"none","sex":"unisex","image":[],"img_name":"dagger.png","base_src":"assets\/images\/spritesheets\/weapon\/slash\/","zPos":140}]',
                    'avatar_img' => 'assets/images/avatars/10.jpg',
                    'strength' => 20,
                    'agility' => 15,
                    'intelligence' => 5,
                    'current_hp' => 20,
                    'current_xp' => 0,
                    'max_hp' => 60,
                    'max_xp' => 25,
                    'crit_chance' => 12,
                    'crit_damage' => 0,
                    'class_id' => 1,
                    'user_info_id' => 10,
                ],
            )
        );
    }
}

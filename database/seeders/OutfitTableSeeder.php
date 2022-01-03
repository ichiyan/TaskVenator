<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class OutfitTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('outfit')->insert([
        [
            //warrior common weapon 
            'id'=> '1',
            'outfit_type'=> 'Weapon',
            'sex'=> 'Female',
            'male_image'=> '',
            'female_image'=> 'assets/images/weapons/female_shovel.png',
            'name'=> 'Shovel',
            'class'=> 'Warrior',
            'rarity_type'=> 'Common',
            'body_part'=> '',
            'spritesheet_img_name'=> 'shovel.png',
            'directory'=> 'weapon/thrust/female/shovel.png',//d
            'outfit_infos'=>'1',
        ],[
            'id'=> '2',
            'outfit_type'=> 'Weapon',
            'sex'=> 'Female',
            'male_image'=> '',
            'female_image'=> 'assets/images/weapons/female_spear_black.png',
            'name'=> 'Spear',
            'class'=> 'Warrior',
            'rarity_type'=> 'Common',
            'body_part'=> '',
            'spritesheet_img_name'=> 'spear_black.png',
            'directory'=> 'weapon/thrust/female/spear_black.png',//d
            'outfit_infos'=>'2'
        ],[
            'id'=> '3',
            'outfit_type'=> 'Weapon',
            'sex'=> 'Female',
            'male_image'=> '',
            'female_image'=> 'assets/images/weapons/female_pickaxe.png',
            'name'=> 'Pickaxe',
            'class'=> 'Warrior',
            'rarity_type'=> 'Common',
            'body_part'=> '',
            'spritesheet_img_name'=> 'pickaxe.png',//d
            'directory'=> 'weapon/thrust/female/pickaxe.png',
            'outfit_infos'=>'3'
        ],[
            'id'=> '4',
            'outfit_type'=> 'Weapon',
            'sex'=> 'Male',
            'male_image'=> 'assets/images/weapons/male_shovel.png',
            'female_image'=> '',
            'name'=> 'Shovel',
            'class'=> 'Warrior',
            'rarity_type'=> 'Common',
            'body_part'=> '',
            'spritesheet_img_name'=> 'shovel.png',//d
            'directory'=> 'weapon/thrust/male/shovel.png',
            'outfit_infos'=>'4'
        ],[
            'id'=> '5',
            'outfit_type'=> 'Weapon',
            'sex'=> 'Male',
            'male_image'=> 'assets/images/weapons/male_spear_black.png',
            'female_image'=> '',
            'name'=> 'Spear',
            'class'=> 'Warrior',
            'rarity_type'=> 'Common',
            'body_part'=> '',
            'spritesheet_img_name'=> 'spear_black.png',//d
            'directory'=> 'weapon/thrust/male/spear_black.png',
            'outfit_infos'=>'5'
        ],[
            'id'=> '6',
            'outfit_type'=> 'Weapon',
            'sex'=> 'Male',
            'male_image'=> 'assets/images/weapons/male_pickaxe.png',
            'female_image'=> '',
            'name'=> 'Pickaxe',
            'class'=> 'Warrior',
            'rarity_type'=> 'Common',
            'body_part'=> '',
            'spritesheet_img_name'=> 'pickaxe.png',
            'directory'=> 'weapon/thrust/male/shovel.png', //d
            'outfit_infos'=>'6'
        ],[
            //uncommon type warrior weapon
            'id'=> '7',
            'outfit_type'=> 'Weapon',
            'sex'=> 'Male',
            'male_image'=> 'assets/images/weapons/male_waraxe.png',
            'female_image'=> '',
            'name'=> 'Waraxe',
            'class'=> 'Warrior',
            'rarity_type'=> 'Uncommon',
            'body_part'=> '',
            'spritesheet_img_name'=> 'waraxe.png',
            'directory'=> 'weapon/thrust/male/waraxe.png', //d
            'outfit_infos'=>'7'
        ],[
          
            'id'=> '8',
            'outfit_type'=> 'Weapon',
            'sex'=> 'Female',
            'male_image'=> '',
            'female_image'=> 'assets/images/weapons/female_waraxe.png',
            'name'=> 'Waraxe',
            'class'=> 'Warrior',
            'rarity_type'=> 'Uncommon',
            'body_part'=> '',
            'spritesheet_img_name'=> 'waraxe.png',
            'directory'=> 'weapon/thrust/female/waraxe.png', //d
            'outfit_infos'=>'8'
        ],[
          
            'id'=> '9',
            'outfit_type'=> 'Weapon',
            'sex'=> 'Female',
            'male_image'=> '',
            'female_image'=> 'assets/images/weapons/female_halberd.png',
            'name'=> 'Halberd',
            'class'=> 'Warrior',
            'rarity_type'=> 'Uncommon',
            'body_part'=> '',
            'spritesheet_img_name'=> 'halberd.png',
            'directory'=> 'weapon/slash_oversize/female/female_halberd.png', //d
            'outfit_infos'=>'9'
        ],[
          
            'id'=> '10',
            'outfit_type'=> 'Weapon',
            'sex'=> 'Male',
            'male_image'=> 'assets/images/weapons/male_halberd.png',
            'female_image'=> '',
            'name'=> 'Halberd',
            'class'=> 'Warrior',
            'rarity_type'=> 'Uncommon',
            'body_part'=> '',
            'spritesheet_img_name'=> 'halberd.png',
            'directory'=> 'weapon/slash_oversize/female/male_halberd.png', //d
            'outfit_infos'=>'10'
        ],[
            //rare weap
            'id'=> '11',
            'outfit_type'=> 'Weapon',
            'sex'=> 'Male',
            'male_image'=> 'assets/images/weapons/male_glowsword_blue.png',
            'female_image'=> '',
            'name'=> 'Glowing Blue Sword',
            'class'=> 'Warrior',
            'rarity_type'=> 'Rare',
            'body_part'=> '',
            'spritesheet_img_name'=> 'glowsword_blue.png',
            'directory'=> 'weapon/slash_oversize_layered/all/glowsword_blue.png', //d
            'outfit_infos'=>'11'
        ],[
            'id'=> '12',
            'outfit_type'=> 'Weapon',
            'sex'=> 'Female',
            'male_image'=> '',
            'female_image'=> 'assets/images/weapons/female_glowsword_blue.png',
            'name'=> 'Glowing Red Sword',
            'class'=> 'Warrior',
            'rarity_type'=> 'Rare',
            'body_part'=> '',
            'spritesheet_img_name'=> 'glowsword_blue.png',
            'directory'=> 'weapon/slash_oversize_layered/all/glowsword_blue.png', //d
            'outfit_infos'=>'12'
        ],[
            'id'=> '13',
            'outfit_type'=> 'Weapon',
            'sex'=> 'Female',
            'male_image'=> '',
            'female_image'=> 'assets/images/weapons/female_glowsword_red.png',
            'name'=> 'Glowing Red Sword',
            'class'=> 'Warrior',
            'rarity_type'=> 'Rare',
            'body_part'=> '',
            'spritesheet_img_name'=> 'glowsword_red.png',
            'directory'=> 'weapon/slash_oversize_layered/all/glowsword_red.png', //d
            'outfit_infos'=>'13'
        ],[
            'id'=> '14',
            'outfit_type'=> 'Weapon',
            'sex'=> 'Female',
            'male_image'=> '',
            'female_image'=> 'assets/images/weapons/female_glowsword_red.png',
            'name'=> 'Glowing Red Sword',
            'class'=> 'Warrior',
            'rarity_type'=> 'Rare',
            'body_part'=> '',
            'spritesheet_img_name'=> 'glowsword_red.png',
            'directory'=> 'weapon/slash_oversize_layered/all/glowsword_red.png', //d
            'outfit_infos'=>'14'
        ],[
            //COMMON MARKSMAN WEAPS
            'id'=> '15',
            'outfit_type'=> 'Weapon',
            'sex'=> 'None',
            'male_image'=> 'assets/images/weapons/10.png',
            'female_image'=> '',
            'name'=> 'Common Bow1',
            'class'=> 'Marksman',
            'rarity_type'=> 'Common',
            'body_part'=> '',
            'spritesheet_img_name'=> '10.png',
            'directory'=> 'weapon/bow/10.png', //d
            'outfit_infos'=>'15'
          
        ],[
            'id'=> '16',
            'outfit_type'=> 'Weapon',
            'sex'=> 'None',
            'male_image'=> 'assets/images/weapons/recurve.png',
            'female_image'=> '',
            'name'=> 'Common Bow2',
            'class'=> 'Marksman',
            'rarity_type'=> 'Common',
            'body_part'=> '',
            'spritesheet_img_name'=> 'recurve.png',
            'directory'=> 'weapon/bow/recurve.png', //d
            'outfit_infos'=>'16'
        ],[
            'id'=> '17',
            'outfit_type'=> 'Weapon',
            'sex'=> 'None',
            'male_image'=> 'assets/images/weapons/great.png',
            'female_image'=> '',
            'name'=> 'Common Bow3',
            'class'=> 'Marksman',
            'rarity_type'=> 'Common',
            'body_part'=> '',
            'spritesheet_img_name'=> 'great.png',
            'directory'=> 'weapon/bow/great.png', //d
            'outfit_infos'=>'17'
        ],[
            //UNCOMMON MARKSMAN WEAP
            'id'=> '18',
            'outfit_type'=> 'Weapon',
            'sex'=> 'None',
            'male_image'=> 'assets/images/weapons/6.png',
            'female_image'=> '',
            'name'=> 'Uncommon Bow1',
            'class'=> 'Marksman',
            'rarity_type'=> 'Uncommon',
            'body_part'=> '',
            'spritesheet_img_name'=> '6.png',
            'directory'=> 'weapon/bow/6.png', //d
            'outfit_infos'=>'18'
        ],[
            'id'=> '19',
            'outfit_type'=> 'Weapon',
            'sex'=> 'None',
            'male_image'=> 'assets/images/weapons/7.png',
            'female_image'=> '',
            'name'=> 'Uncommon Bow2',
            'class'=> 'Marksman',
            'rarity_type'=> 'Uncommon',
            'body_part'=> '',
            'spritesheet_img_name'=> '7.png',
            'directory'=> 'weapon/bow/7.png', //d
            'outfit_infos'=>'19'
        ],[
            'id'=> '20',
            'outfit_type'=> 'Weapon',
            'sex'=> 'None',
            'male_image'=> 'assets/images/weapons/9.png',
            'female_image'=> '',
            'name'=> 'Uncommon Bow2',
            'class'=> 'Marksman',
            'rarity_type'=> 'Uncommon',
            'body_part'=> '',
            'spritesheet_img_name'=> '9.png',
            'directory'=> 'weapon/bow/9.png', //d
            'outfit_infos'=>'20'
        ],[
            //RARE MARSKMAN WEAP
            'id'=> '21',
            'outfit_type'=> 'Weapon',
            'sex'=> 'None',
            'male_image'=> 'assets/images/weapons/8.png',
            'female_image'=> '',
            'name'=> 'Rare Bow',
            'class'=> 'Marksman',
            'rarity_type'=> 'Rare',
            'body_part'=> '',
            'spritesheet_img_name'=> '8.png',
            'directory'=> 'weapon/bow/8.png', //d
            'outfit_infos'=>'21'
        ],[
            //COMMON MAGE WEAP
            'id'=> '22',
            'outfit_type'=> 'Weapon',
            'sex'=> 'None',
            'male_image'=> 'assets/images/weapons/cane.png',
            'female_image'=> '',
            'name'=> 'Common Cane',
            'class'=> 'Mage',
            'rarity_type'=> 'Common',
            'body_part'=> '',
            'spritesheet_img_name'=> 'cane.png',
            'directory'=> 'weapon/thrust/male/cane.png', //d
            'outfit_infos'=>'22'
        ],[
            //UNCOMMON MAGE WEAP
            'id'=> '23',
            'outfit_type'=> 'Weapon',
            'sex'=> 'None',
            'male_image'=> 'assets/images/weapons/saber.png',
            'female_image'=> '',
            'name'=> 'Uncommon MageWeap',
            'class'=> 'Mage',
            'rarity_type'=> 'Uncommon',
            'body_part'=> '',
            'spritesheet_img_name'=> 'saber.png',
            'directory'=> 'weapon/slash_oversize_layered/all/saber.png', //d
            'outfit_infos'=>'23'
        ],[
        //RARE MAGE WEAP
            'id'=> '24',
            'outfit_type'=> 'Weapon',
            'sex'=> 'None',
            'male_image'=> 'assets/images/weapons/male_scythe.png',
            'female_image'=> '',
            'name'=> 'Rare MageWeap',
            'class'=> 'Mage',
            'rarity_type'=> 'Rare',
            'body_part'=> '',
            'spritesheet_img_name'=> 'scythe.png',
            'directory'=> 'weapon/slash_oversize_layered/all/scythe.png', //d
            'outfit_infos'=>'24'
        ],[
            //COMMON WARRIOR HEAD
            'id'=> '25',
            'outfit_type'=> 'Armor',
            'sex'=> 'Female',
            'male_image'=> '',
            'female_image'=> 'assets/images/weapons/female_steel1.png',
            'name'=> 'Common Helm',
            'class'=> 'Warrior',
            'rarity_type'=> 'Common',
            'body_part'=> '',
            'spritesheet_img_name'=> 'steel1.png',
            'directory'=> 'hat/legion/female/steel1.png', //d
            'outfit_infos'=>'25'
        ],[
            'id'=> '26',
            'outfit_type'=> 'Armor',
            'sex'=> 'Male',
            'male_image'=> 'assets/images/weapons/male_steel1.png',
            'female_image'=> '',
            'name'=> 'Common Helm',
            'class'=> 'Warrior',
            'rarity_type'=> 'Common',
            'body_part'=> '',
            'spritesheet_img_name'=> 'steel1.png',
            'directory'=> 'hat/legion/male/steel1.png', //d
            'outfit_infos'=>'26'
        ]
        ]);
    }
}

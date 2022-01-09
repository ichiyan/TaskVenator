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
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/weapons/male_shovel.png',
            'female_image'=> 'assets/images/weapons/female_shovel.png',
            'name'=> 'Shovel',
            'class'=> 'Warrior',
            'rarity_type'=> 'Common',
            'body_part'=> '',
            'spritesheet_img_name'=> 'shovel.png',
            'directory'=> 'weapon/thrust/female/shovel.png',
            'outfit_infos'=>'1',
        ],[
            'id'=> '2',
            'outfit_type'=> 'Weapon',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/weapons/male_spear_black.png',
            'female_image'=> 'assets/images/weapons/female_spear_black.png',
            'name'=> 'Spear',
            'class'=> 'Warrior',
            'rarity_type'=> 'Common',
            'body_part'=> '',
            'spritesheet_img_name'=> 'spear_black.png',
            'directory'=> 'weapon/thrust/female/spear_black.png',
            'outfit_infos'=>'2'
        ],[
            'id'=> '3',
            'outfit_type'=> 'Weapon',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/weapons/male_pickaxe.png',
            'female_image'=> 'assets/images/weapons/female_pickaxe.png',
            'name'=> 'Pickaxe',
            'class'=> 'Warrior',
            'rarity_type'=> 'Common',
            'body_part'=> '',
            'spritesheet_img_name'=> 'pickaxe.png',
            'directory'=> 'weapon/thrust/female/pickaxe.png',
            'outfit_infos'=>'3'
        ],[
            //uncommon type warrior weapon
            'id'=> '4',
            'outfit_type'=> 'Weapon',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/weapons/male_waraxe.png',
            'female_image'=> 'assets/images/weapons/female_waraxe.png',
            'name'=> 'Waraxe',
            'class'=> 'Warrior',
            'rarity_type'=> 'Uncommon',
            'body_part'=> '',
            'spritesheet_img_name'=> 'waraxe.png',
            'directory'=> 'weapon/thrust/male/waraxe.png', 
            'outfit_infos'=>'4'
        ],[
          
            'id'=> '5',
            'outfit_type'=> 'Weapon',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/weapons/male_halberd.png',
            'female_image'=> 'assets/images/weapons/female_halberd.png',
            'name'=> 'Halberd',
            'class'=> 'Warrior',
            'rarity_type'=> 'Uncommon',
            'body_part'=> '',
            'spritesheet_img_name'=> 'halberd.png',
            'directory'=> 'weapon/slash_oversize/female/female_halberd.png', 
            'outfit_infos'=>'5'
        ],[
            //rare warrior weap
            'id'=> '6',
            'outfit_type'=> 'Weapon',
            'sex'=> 'None',
            'male_image'=> 'assets/images/weapons/glowsword_blue.png',
            'female_image'=> '',
            'name'=> 'Glowing Blue Sword',
            'class'=> 'Warrior',
            'rarity_type'=> 'Rare',
            'body_part'=> '',
            'spritesheet_img_name'=> 'glowsword_blue.png',
            'directory'=> 'weapon/slash_oversize_layered/all/glowsword_blue.png', 
            'outfit_infos'=>'6'
        ],[
            'id'=> '7',
            'outfit_type'=> 'Weapon',
            'sex'=> 'None',
            'male_image'=> 'assets/images/weapons/glowsword_red.png',
            'female_image'=> '',
            'name'=> 'Glowing Red Sword',
            'class'=> 'Warrior',   
            'rarity_type'=> 'Rare',
            'body_part'=> '',
            'spritesheet_img_name'=> 'glowsword_red.png',
            'directory'=> 'weapon/slash_oversize_layered/all/glowsword_red.png', 
            'outfit_infos'=>'7'
        ],[
            //COMMON MARKSMAN WEAPS
            'id'=> '8',
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
            'outfit_infos'=>'8'
          
        ],[
            'id'=> '9',
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
            'outfit_infos'=>'9'
        ],[
            'id'=> '10',
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
            'outfit_infos'=>'10'
        ],[
            //UNCOMMON MARKSMAN WEAP
            'id'=> '11',
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
            'outfit_infos'=>'11'
        ],[
            'id'=> '12',
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
            'outfit_infos'=>'12'
        ],[
            'id'=> '13',
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
            'outfit_infos'=>'13'
        ],[
            //RARE MARSKMAN WEAP
            'id'=> '14',
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
            'outfit_infos'=>'14'
        ],[
            //COMMON MAGE WEAP
            'id'=> '15',
            'outfit_type'=> 'Weapon',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/weapons/male_cane.png',
            'female_image'=> 'assets/images/weapons/female_cane.png',
            'name'=> 'Common Cane',
            'class'=> 'Mage',
            'rarity_type'=> 'Common',
            'body_part'=> '',
            'spritesheet_img_name'=> 'cane.png',
            'directory'=> 'weapon/thrust/male/cane.png', 
            'outfit_infos'=>'15'
        ],[
            //UNCOMMON MAGE WEAP
            'id'=> '16',
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
            'outfit_infos'=>'16'
        ],[
        //RARE MAGE WEAP
            'id'=> '17',
            'outfit_type'=> 'Weapon',
            'sex'=> 'None',
            'male_image'=> 'assets/images/weapons/scythe.png',
            'female_image'=> '',
            'name'=> 'Rare MageWeap',
            'class'=> 'Mage',
            'rarity_type'=> 'Rare',
            'body_part'=> '',
            'spritesheet_img_name'=> 'scythe.png',
            'directory'=> 'weapon/slash_oversize_layered/all/scythe.png', //d
            'outfit_infos'=>'17'
        ],[
            //COMMON WARRIOR HEAD
            'id'=> '18',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male_steel_1.png',
            'female_image'=> 'assets/images/armors/female_steel_1.png',
            'name'=> 'Steel Helm',
            'class'=> 'Warrior',
            'rarity_type'=> 'Common',
            'body_part'=> 'Head',
            'spritesheet_img_name'=> 'steel_1.png',
            'directory'=> 'hat/legion/male/steel_1.png', 
            'outfit_infos'=>'18'
        ],[
            'id'=> '19',
            'outfit_type'=> 'Armor',
            'sex'=> 'None',
            'male_image'=> 'assets/images/armors/round.png',
            'female_image'=> '',
            'name'=> 'Round Helm',
            'class'=> 'Warrior',
            'rarity_type'=> 'Common',
            'body_part'=> 'Head',
            'spritesheet_img_name'=> 'round.png',
            'directory'=> 'hat/horned/round.png', 
            'outfit_infos'=>'19'
        ],[
            //UNCOMMON WARRIOR HEAD
            'id'=> '20',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male_morion_faceplate_plumage.png',
            'female_image'=> 'assets/images/armors/male_morion_faceplate_plumage.png',
            'name'=> 'Morion Plumage Helm',
            'class'=> 'Warrior',
            'rarity_type'=> 'Uncommon',
            'body_part'=> 'Head',
            'spritesheet_img_name'=> 'morion_faceplate_plumage.png',
            'directory'=> 'hat/helmet/male/morion_faceplate_plumage.png', 
            'outfit_infos'=>'20'
        ],[
            'id'=> '21',
            'outfit_type'=> 'Armor',
            'sex'=> 'None',
            'male_image'=> 'assets/images/armors/male.png',
            'female_image'=> '',
            'name'=> 'Bonnie Feather Helm',
            'class'=> 'Warrior',
            'rarity_type'=> 'Uncommon',
            'body_part'=> 'Head',
            'spritesheet_img_name'=> 'male.png',
            'directory'=> 'hat/pirate/bonnie_feather/male.png', 
            'outfit_infos'=>'21'
        ],[
            //RARE WARRIOR HEAD
            'id'=> '22',
            'outfit_type'=> 'Armor',
            'sex'=> 'None',
            'male_image'=> 'assets/images/armors/4.png',
            'female_image'=> '',
            'name'=> 'Gold Horned Helm',
            'class'=> 'Warrior',
            'rarity_type'=> 'Rare',
            'body_part'=> 'Head',
            'spritesheet_img_name'=> '4.png',
            'directory'=> 'hat/horned/4.png', 
            'outfit_infos'=>'22'
        ],[
            'id'=> '23',
            'outfit_type'=> 'Armor',
            'sex'=> 'None',
            'male_image'=> 'assets/images/armors/male_tricorne_captain_pirate_skull.png',
            'female_image'=> '',
            'name'=> 'Tricorne Pirate Skull Helm',
            'class'=> 'Warrior',
            'rarity_type'=> 'Rare',
            'body_part'=> 'Head',
            'spritesheet_img_name'=> 'male.png',
            'directory'=> 'hat/pirate/tricorne_captain_pirate_skull/male.png', 
            'outfit_infos'=>'23'
        ],[
            'id'=> '24',
            'outfit_type'=> 'Armor',
            'sex'=> 'None',
            'male_image'=> 'assets/images/armors/2_4.png',
            'female_image'=> '',
            'name'=> 'Rare Crown',
            'class'=> 'Warrior',
            'rarity_type'=> 'Rare',
            'body_part'=> 'Head',
            'spritesheet_img_name'=> '4.png',
            'directory'=> 'hat/crown/4.png', 
            'outfit_infos'=>'24'
        ],[
            //COMMON WARRIOR ARMS  
            'id'=> '25',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male_2.png',
            'female_image'=> 'assets/images/armors/female_2.png',
            'name'=> 'C-1 Arms',
            'class'=> 'Warrior',
            'rarity_type'=> 'Common',
            'body_part'=> 'Arms',
            'spritesheet_img_name'=> '2.png',
            'directory'=> 'arms/male/2.png', 
            'outfit_infos'=>'25'
        ],[
            //UNCOMMON WARRIOR ARMS
            'id'=> '26',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male_5.png',
            'female_image'=> 'assets/images/armors/female_5.png',
            'name'=> 'UC-1 Arms',
            'class'=> 'Warrior',
            'rarity_type'=> 'Uncommon',
            'body_part'=> 'Arms',
            'spritesheet_img_name'=> '5.png',
            'directory'=> 'arms/male/5.png', 
            'outfit_infos'=>'26'
        ],[
            'id'=> '27',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male_6.png',
            'female_image'=> 'assets/images/armors/female_6.png',
            'name'=> 'UC-2 Arms',
            'class'=> 'Warrior',
            'rarity_type'=> 'Uncommon',
            'body_part'=> 'Arms',
            'spritesheet_img_name'=> '6.png',
            'directory'=> 'arms/male/6.png', 
            'outfit_infos'=>'27'
        ],[
            //RARE WARRIOR ARMS
            'id'=> '28',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male_3.png',
            'female_image'=> 'assets/images/armors/female_3.png',
            'name'=> 'R-1 Arms',
            'class'=> 'Warrior',
            'rarity_type'=> 'Rare',
            'body_part'=> 'Arms',
            'spritesheet_img_name'=> '3.png',
            'directory'=> 'arms/male/3.png', 
            'outfit_infos'=>'28'
        ],[
            'id'=> '29',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male_4.png',
            'female_image'=> 'assets/images/armors/female_4.png',
            'name'=> 'R-2 Arms',
            'class'=> 'Warrior',
            'rarity_type'=> 'Rare',
            'body_part'=> 'Arms',
            'spritesheet_img_name'=> '4.png',
            'directory'=> 'arms/male/4.png', 
            'outfit_infos'=>'29'
        ],[
            //COMMON WARRIOR TORSO
            'id'=> '30',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male_steel.png',
            'female_image'=> 'assets/images/armors/female_steel.png',
            'name'=> 'C-1 Torso',
            'class'=> 'Warrior',
            'rarity_type'=> 'Common',
            'body_part'=> 'Torso',
            'spritesheet_img_name'=> 'steel.png',
            'directory'=> 'torso/armour/legion/male/steel.png', 
            'outfit_infos'=>'30'
        ],[
            //UNCOMMON WARRIOR TORSO
            'id'=> '31',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male_15.png',
            'female_image'=> 'assets/images/armors/female_15.png',
            'name'=> 'UC-1 Torso',
            'class'=> 'Warrior',
            'rarity_type'=> 'Uncommon',
            'body_part'=> 'Torso',
            'spritesheet_img_name'=> '15.png',
            'directory'=> 'torso/armour/plate/male/15.png', 
            'outfit_infos'=>'31'
        ],[
            'id'=> '32',
            'outfit_type'=> 'Armor',
            'sex'=> 'Male',
            'male_image'=> 'assets/images/armors/male_brown.png',
            'female_image'=> '',
            'name'=> 'UC-2 Torso',
            'class'=> 'Warrior',    
            'rarity_type'=> 'Uncommon',
            'body_part'=> 'Torso',
            'spritesheet_img_name'=> 'brown.png',
            'directory'=> 'torso/clothes/longsleeve/male/brown.png', 
            'outfit_infos'=>'32'
        ],[
            //RARE WARRIOR TORSO
            'id'=> '33',
            'outfit_type'=> 'Armor',
            'sex'=> 'Male',
            'male_image'=> 'assets/images/armors/male_yellow.png',
            'female_image'=> '',
            'name'=> 'R-1 Torso',
            'class'=> 'Warrior',
            'rarity_type'=> 'Rare',
            'body_part'=> 'Torso',
            'spritesheet_img_name'=> 'yellow.png',
            'directory'=> 'torso/clothes/longsleeve/male/yellow.png', 
            'outfit_infos'=>'33'
        ],[
            'id'=> '34',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male_13.png',
            'female_image'=> 'assets/images/armors/female_13.png',
            'name'=> 'R-2 Torso',
            'class'=> 'Warrior',
            'rarity_type'=> 'Rare',
            'body_part'=> 'Torso',
            'spritesheet_img_name'=> '13.png',
            'directory'=> 'torso/armour/plate/male/13.png', 
            'outfit_infos'=>'34'
        ],[
            'id'=> '35',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male_gold.png',
            'female_image'=> 'assets/images/armors/female_gold.png',
            'name'=> 'R-3 Torso',
            'class'=> 'Warrior',
            'rarity_type'=> 'Rare',
            'body_part'=> 'Torso',
            'spritesheet_img_name'=> 'gold.png',
            'directory'=> 'torso/armour/legion/male/gold.png', 
            'outfit_infos'=>'35'
        ],[
            //COMMON WARRIOR LEGS
            'id'=> '36',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male_11.png',
            'female_image'=> 'assets/images/armors/female_11.png',
            'name'=> 'C-1 Legs',
            'class'=> 'Warrior',
            'rarity_type'=> 'Common',
            'body_part'=> 'Legs',
            'spritesheet_img_name'=> '11.png',
            'directory'=> 'legs/armour/male/11.png', 
            'outfit_infos'=>'36'
        ],[
            //UNCOMMON WARRIOR LEGS
            'id'=> '37',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male_12.png',
            'female_image'=> 'assets/images/armors/female_12.png',
            'name'=> 'UC-1 Legs',
            'class'=> 'Warrior',
            'rarity_type'=> 'Uncommon',
            'body_part'=> 'Legs',
            'spritesheet_img_name'=> '12.png',
            'directory'=> 'legs/armour/male/12.png', 
            'outfit_infos'=>'37'
        ],[
            'id'=> '38',
            'outfit_type'=> 'Armor',
            'sex'=> 'Female',
            'male_image'=> '',
            'female_image'=> 'assets/images/armors/female_brown2.png',
            'name'=> 'UC-2 Legs',
            'class'=> 'Warrior',
            'rarity_type'=> 'Uncommon',
            'body_part'=> 'Legs',
            'spritesheet_img_name'=> 'brown.png',
            'directory'=> 'legs/armour/male/brown.png', 
            'outfit_infos'=>'38'
        ],[
            'id'=> '39',
            'outfit_type'=> 'Armor',
            'sex'=> 'Male',
            'male_image'=> 'assets/images/armors/male_brown2.png',
            'female_image'=> '',
            'name'=> 'UC-3 Legs',
            'class'=> 'Warrior',
            'rarity_type'=> 'Uncommon',
            'body_part'=> 'Legs',
            'spritesheet_img_name'=> 'brown.png',
            'directory'=> 'legs/armour/male/brown.png', 
            'outfit_infos'=>'39'
        ],[
            //RARE WARRIOR LEGS
            'id'=> '40',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male_9.jpg',
            'female_image'=> 'assets/images/armors/female_9.jpg',
            'name'=> 'R-1 Legs',
            'class'=> 'Warrior',
            'rarity_type'=> 'Rare',
            'body_part'=> 'Legs',
            'spritesheet_img_name'=> '9.jpg',
            'directory'=> 'legs/armour/male/9.jpg', 
            'outfit_infos'=>'40'
        ],[
            'id'=> '41',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male_10.png',
            'female_image'=> 'assets/images/armors/female_10.png',
            'name'=> 'R-2 Legs',
            'class'=> 'Warrior',
            'rarity_type'=> 'Rare',
            'body_part'=> 'Legs',
            'spritesheet_img_name'=> '10.png',
            'directory'=> 'legs/armour/male/10.png', 
            'outfit_infos'=>'41'
        ],[
            //COMMON WARRIOR FOOTWEAR
            'id'=> '42',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male2_5.png',
            'female_image'=> 'assets/images/armors/female2_5.png',
            'name'=> 'C-1 Foot',
            'class'=> 'Warrior',
            'rarity_type'=> 'Common',
            'body_part'=> 'Footwear',
            'spritesheet_img_name'=> '5.png',
            'directory'=> 'feet/armor/male/5.png', 
            'outfit_infos'=>'42'
        ],[
            //UNCOMMON WARRIOR FOOTWEAR
            'id'=> '43',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male2_7.png',
            'female_image'=> 'assets/images/armors/female2_7.png',
            'name'=> 'UC-1 Foot',
            'class'=> 'Warrior',
            'rarity_type'=> 'Uncommon',
            'body_part'=> 'Footwear',
            'spritesheet_img_name'=> '7.png',
            'directory'=> 'feet/armor/male/7.png', 
            'outfit_infos'=>'43'
        ],[
            'id'=> '44',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male2_9.png',
            'female_image'=> 'assets/images/armors/female2_9.png',
            'name'=> 'UC-2 Foot',
            'class'=> 'Warrior',
            'rarity_type'=> 'Uncommon',
            'body_part'=> 'Footwear',
            'spritesheet_img_name'=> '9.png',
            'directory'=> 'feet/armor/male/9.png', 
            'outfit_infos'=>'44'
        ],[
            //RARE WARRIOR FOOTWEAR
            'id'=> '45',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male_6.png',
            'female_image'=> 'assets/images/armors/female_6.png',
            'name'=> 'R-1 Foot',
            'class'=> 'Warrior',
            'rarity_type'=> 'Rare',
            'body_part'=> 'Footwear',
            'spritesheet_img_name'=> '6.png',
            'directory'=> 'feet/armor/male/6.png', 
            'outfit_infos'=>'45'
        ],[
            //COMMON MARKSMAN HEAD
            'id'=> '46',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male_bandana_gray.png',
            'female_image'=> 'assets/images/armors/female_bandana_gray.png',
            'name'=> 'C-1 Head',
            'class'=> 'Marksman',
            'rarity_type'=> 'Common',
            'body_part'=> 'Head',
            'spritesheet_img_name'=> 'bandana_gray.png',
            'directory'=> 'hat/cloth/male/bandana_gray.png', 
            'outfit_infos'=>'46'
        ],[
            //UNCOMMON MARKSMAN HEAD
            'id'=> '47',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/hood_black.png',
            'female_image'=> 'assets/images/armors/hood_black.png',
            'name'=> 'UC-1 Head',
            'class'=> 'Marksman',
            'rarity_type'=> 'Uncommon',
            'body_part'=> 'Head',
            'spritesheet_img_name'=> 'hood_black.png',
            'directory'=> 'hat/cloth/male/hood_black.png', 
            'outfit_infos'=>'47'
        ],[
            'id'=> '48',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/hijab.jpg',
            'female_image'=> 'assets/images/armors/hijab.jpg',
            'name'=> 'UC-2 Head',
            'class'=> 'Marksman',
            'rarity_type'=> 'Uncommon',
            'body_part'=> 'Head',
            'spritesheet_img_name'=> 'hijab.jpg',
            'directory'=> 'hat/cloth/male/hijab.png', 
            'outfit_infos'=>'48'
        ],[
            //RARE MARKSMAN HEAD
            'id'=> '49',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male_hood_white.png',
            'female_image'=> 'assets/images/armors/female_hood_white.png',
            'name'=> 'R-1 Head',
            'class'=> 'Marksman',
            'rarity_type'=> 'Rare',
            'body_part'=> 'Head',
            'spritesheet_img_name'=> 'hood_white.png',
            'directory'=> 'hat/cloth/male/hood_white.png', 
            'outfit_infos'=>'49'
        ],[
            'id'=> '50',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male_gold_2.png',
            'female_image'=> 'assets/images/armors/female_gold_2.png',
            'name'=> 'R-2 Head',
            'class'=> 'Marksman',
            'rarity_type'=> 'Rare',
            'body_part'=> 'Head',
            'spritesheet_img_name'=> 'gold_2.png',
            'directory'=> 'hat/legion/male/gold_2.png', 
            'outfit_infos'=>'50'
        ],[
            //COMMON MARKSMAN ARMS  
            'id'=> '51',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male_2.png',
            'female_image'=> 'assets/images/armors/female_2.png',
            'name'=> 'C-1 Arms',
            'class'=> 'Marksman',
            'rarity_type'=> 'Common',
            'body_part'=> 'Arms',
            'spritesheet_img_name'=> '2.png',
            'directory'=> 'arms/male/2.png', 
            'outfit_infos'=>'51'
        ],[
            //UNCOMMON MARKSMAN ARMS
            'id'=> '52',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male_5.png',
            'female_image'=> 'assets/images/armors/female_5.png',
            'name'=> 'UC-1 Arms',
            'class'=> 'Marksman',
            'rarity_type'=> 'Uncommon',
            'body_part'=> 'Arms',
            'spritesheet_img_name'=> '5.png',
            'directory'=> 'arms/male/5.png', 
            'outfit_infos'=>'52'
        ],[
            'id'=> '53',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male_6.png',
            'female_image'=> 'assets/images/armors/female_6.png',
            'name'=> 'UC-2 Arms',
            'class'=> 'Marksman',
            'rarity_type'=> 'Uncommon',
            'body_part'=> 'Arms',
            'spritesheet_img_name'=> '6.png',
            'directory'=> 'arms/male/6.png', 
            'outfit_infos'=>'53'
        ],[
            //RARE MARKSMAN ARMS
            'id'=> '54',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male_3.png',
            'female_image'=> 'assets/images/armors/female_3.png',
            'name'=> 'R-1 Arms',
            'class'=> 'Marksman',
            'rarity_type'=> 'Rare',
            'body_part'=> 'Arms',
            'spritesheet_img_name'=> '3.png',
            'directory'=> 'arms/male/3.png', 
            'outfit_infos'=>'54'
        ],[
            'id'=> '55',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male_4.png',
            'female_image'=> 'assets/images/armors/female_4.png',
            'name'=> 'R-2 Arms',
            'class'=> 'Marksman',
            'rarity_type'=> 'Rare',
            'body_part'=> 'Arms',
            'spritesheet_img_name'=> '4.png',
            'directory'=> 'arms/male/4.png', 
            'outfit_infos'=>'55'
        ],[
            //COMMON MARKSMAN TORSO
            'id'=> '56',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male_blue.png',
            'female_image'=> 'assets/images/armors/female_blue.png',
            'name'=> 'C-1 Torso',
            'class'=> 'Marksman',
            'rarity_type'=> 'Common',
            'body_part'=> 'Torso',
            'spritesheet_img_name'=> 'blue.png',
            'directory'=> 'torso/armour/leather/male/blue.png', 
            'outfit_infos'=>'56'
        ],[
            //UNCOMMON MARKSMAN TORSO
            'id'=> '57',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male2_blue.png',
            'female_image'=> 'assets/images/armors/female2_blue.png',
            'name'=> 'UC-1 Torso',
            'class'=> 'Marksman',
            'rarity_type'=> 'Uncommon',
            'body_part'=> 'Torso',
            'spritesheet_img_name'=> 'blue.png',
            'directory'=> 'torso/clothes/longsleeve/male/blue.png', 
            'outfit_infos'=>'57'
        ],[
            'id'=> '58',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male_maroon.png',
            'female_image'=> 'assets/images/armors/female_maroon.png',
            'name'=> 'UC-2 Torso',
            'class'=> 'Marksman',
            'rarity_type'=> 'Uncommon',
            'body_part'=> 'Torso',
            'spritesheet_img_name'=> 'maroon.png',
            'directory'=> 'torso/clothes/longsleeve/male/maroon.png', 
            'outfit_infos'=>'58'
        ],[
            'id'=> '59',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male_black.png',
            'female_image'=> 'assets/images/armors/female_black.png',
            'name'=> 'UC-3 Torso',
            'class'=> 'Marksman',
            'rarity_type'=> 'Uncommon',
            'body_part'=> 'Torso',
            'spritesheet_img_name'=> 'black.png',
            'directory'=> 'torso/clothes/longsleeve/male/black.png', 
            'outfit_infos'=>'59'
        ],[
            //RARE MARKSMAN TORSO
            'id'=> '60',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male2_white.png',
            'female_image'=> 'assets/images/armors/female2_white.png',
            'name'=> 'R-1 Torso',
            'class'=> 'Marksman',
            'rarity_type'=> 'Rare',
            'body_part'=> 'Torso',
            'spritesheet_img_name'=> 'white.png',
            'directory'=> 'torso/clothes/longsleeve/male/white.png', 
            'outfit_infos'=>'60'
        ],[
            'id'=> '61',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male_teal.png',
            'female_image'=> 'assets/images/armors/female_teal.png',
            'name'=> 'R-2 Torso',
            'class'=> 'Marksman',
            'rarity_type'=> 'Rare',
            'body_part'=> 'Torso',
            'spritesheet_img_name'=> 'teal.png',
            'directory'=> 'torso/clothes/longsleeve/male/teal.png', 
            'outfit_infos'=>'61'
        ],[
            //COMMON MARKSMAN LEGS
            'id'=> '62',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male_8.jpg',
            'female_image'=> 'assets/images/armors/female_8.jpg',
            'name'=> 'C-1 Legs',
            'class'=> 'Marksman',
            'rarity_type'=> 'Common',
            'body_part'=> 'Legs',
            'spritesheet_img_name'=> '8.jpg',
            'directory'=> 'legs/armour/male/8.png', 
            'outfit_infos'=>'62'
        ],[
            //UNCOMMON MARKSMAN LEGS
            'id'=> '63',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male3_blue.png',
            'female_image'=> 'assets/images/armors/female3_blue.png',
            'name'=> 'UC-1 Legs',
            'class'=> 'Marksman',
            'rarity_type'=> 'Uncommon',
            'body_part'=> 'Legs',
            'spritesheet_img_name'=> 'blue.png',
            'directory'=> 'legs/pants/male/blue.png', 
            'outfit_infos'=>'63'
        ],[
            'id'=> '64',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male2_black.png',
            'female_image'=> 'assets/images/armors/female2_black.png',
            'name'=> 'UC-2 Legs',
            'class'=> 'Marksman',
            'rarity_type'=> 'Uncommon',
            'body_part'=> 'Legs',
            'spritesheet_img_name'=> 'black.png',
            'directory'=> 'legs/pants/male/black.png', 
            'outfit_infos'=>'64'
        ],[
            //RARE MARKSMAN LEGS
            'id'=> '65',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male2_teal.png',
            'female_image'=> 'assets/images/armors/female2_teal.png',
            'name'=> 'R-1 Legs',
            'class'=> 'Marksman',
            'rarity_type'=> 'Rare',
            'body_part'=> 'Legs',
            'spritesheet_img_name'=> 'teal.png',
            'directory'=> 'legs/pants/male/teal.png', 
            'outfit_infos'=>'65'
        ],[
            'id'=> '66',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male2_white.png',
            'female_image'=> 'assets/images/armors/female2_white.png',
            'name'=> 'R-2 Legs',
            'class'=> 'Marksman',
            'rarity_type'=> 'Rare',
            'body_part'=> 'Legs',
            'spritesheet_img_name'=> 'white.png',
            'directory'=> 'legs/pants/male/white.png', 
            'outfit_infos'=>'66'
        ],[
            'id'=> '67',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male2_yellow.png',
            'female_image'=> 'assets/images/armors/female2_yellow.png',
            'name'=> 'R-3 Legs',
            'class'=> 'Marksman',
            'rarity_type'=> 'Rare',
            'body_part'=> 'Legs',
            'spritesheet_img_name'=> 'yellow.png',
            'directory'=> 'legs/pants/male/yellow.png', 
            'outfit_infos'=>'67'
        ],[
            //COMMON MARKSMAN FOOTWEAR
            'id'=> '68',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male3_brown.png',
            'female_image'=> 'assets/images/armors/female3_brown.png',
            'name'=> 'C-1 Foot',
            'class'=> 'Marksman',
            'rarity_type'=> 'Common',
            'body_part'=> 'Footwear',
            'spritesheet_img_name'=> 'brown.png',
            'directory'=> 'feet/shoes/male/brown.png', 
            'outfit_infos'=>'68'
        ],[
            //UNCOMMON MARKSMAN FOOTWEAR
            'id'=> '69',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male2_maroon.png',
            'female_image'=> 'assets/images/armors/female2_maroon.png',
            'name'=> 'UC-1 Foot',
            'class'=> 'Marksman',
            'rarity_type'=> 'Uncommon',
            'body_part'=> 'Footwear',
            'spritesheet_img_name'=> 'maroon.png',
            'directory'=> 'feet/shoes/male/maroon.png', 
            'outfit_infos'=>'69'
        ],[
            'id'=> '70',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male2_7.png',
            'female_image'=> 'assets/images/armors/female2_7.png',
            'name'=> 'UC-2 Foot',
            'class'=> 'Marksman',
            'rarity_type'=> 'Uncommon',
            'body_part'=> 'Footwear',
            'spritesheet_img_name'=> '7.png',
            'directory'=> 'feet/armor/male/7.png', 
            'outfit_infos'=>'70'
        ],[
            'id'=> '71',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male2_9.png',
            'female_image'=> 'assets/images/armors/female2_9.png',
            'name'=> 'UC-3 Foot',
            'class'=> 'Marksman',
            'rarity_type'=> 'Uncommon',
            'body_part'=> 'Footwear',
            'spritesheet_img_name'=> '9.png',
            'directory'=> 'feet/armor/male/9.png', 
            'outfit_infos'=>'71'
        ],[
            //RARE MARKSMAN FOOTWEAR
            'id'=> '72',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male_6.png',
            'female_image'=> 'assets/images/armors/female_6.png',
            'name'=> 'R-1 Foot',
            'class'=> 'Marksman',
            'rarity_type'=> 'Rare',
            'body_part'=> 'Footwear',
            'spritesheet_img_name'=> '6.png',
            'directory'=> 'feet/armor/male/6.png', 
            'outfit_infos'=>'72'
        ],[
            //COMMON MAGE HEAD
            'id'=> '73',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male_brown_2.png',
            'female_image'=> 'assets/images/armors/female_brown_2.png',
            'name'=> 'C-1 Head',
            'class'=> 'Mage',
            'rarity_type'=> 'Common',
            'body_part'=> 'Head',
            'spritesheet_img_name'=> 'brown_2.png',
            'directory'=> 'hat/magic/male/brown_2.png', 
            'outfit_infos'=>'73'
        ],[
            //UNCOMMON MAGE HEAD
            'id'=> '74',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male_no_moon.png',
            'female_image'=> 'assets/images/armors/female_no_moon.png',
            'name'=> 'UC-1 Head',
            'class'=> 'Mage',
            'rarity_type'=> 'Uncommon',
            'body_part'=> 'Head',
            'spritesheet_img_name'=> 'no_moon.png',
            'directory'=> 'hat/magic/male/no_moon.png', 
            'outfit_infos'=>'74'
        ],[
            'id'=> '75',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male_red.png',
            'female_image'=> 'assets/images/armors/female_red.png',
            'name'=> 'UC-2 Head',
            'class'=> 'Mage',
            'rarity_type'=> 'Uncommon',
            'body_part'=> 'Head',
            'spritesheet_img_name'=> 'red.png',
            'directory'=> 'hat/magic/male/red.png', 
            'outfit_infos'=>'75'
        ],[
            //RARE MAGE HEAD
            'id'=> '76',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male3_teal.png',
            'female_image'=> 'assets/images/armors/female3_teal.png',
            'name'=> 'R-1 Head',
            'class'=> 'Mage',
            'rarity_type'=> 'Rare',
            'body_part'=> 'Head',
            'spritesheet_img_name'=> 'teal.png',
            'directory'=> 'hat/magic/male/teal.png', 
            'outfit_infos'=>'76'
        ],[
            'id'=> '77',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male3_yellow.png',
            'female_image'=> 'assets/images/armors/female3_yellow.png',
            'name'=> 'R-2 Head',
            'class'=> 'Mage',
            'rarity_type'=> 'Rare',
            'body_part'=> 'Head',
            'spritesheet_img_name'=> 'yellow.png',
            'directory'=> 'hat/magic/male/yellow.png', 
            'outfit_infos'=>'77'
        ],[
            'id'=> '78',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male_moon.png',
            'female_image'=> 'assets/images/armors/female_moon.png',
            'name'=> 'R-3 Head',
            'class'=> 'Mage',
            'rarity_type'=> 'Rare',
            'body_part'=> 'Head',
            'spritesheet_img_name'=> 'moon.png',
            'directory'=> 'hat/magic/male/moon.png', 
            'outfit_infos'=>'78'
        ],[
            //COMMON MAGE ARMS  
            'id'=> '79',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male_2.png',
            'female_image'=> 'assets/images/armors/female_2.png',
            'name'=> 'C-1 Arms',
            'class'=> 'Mage',
            'rarity_type'=> 'Common',
            'body_part'=> 'Arms',
            'spritesheet_img_name'=> '2.png',
            'directory'=> 'arms/male/2.png', 
            'outfit_infos'=>'79'
        ],[
            //UNCOMMON MAGE ARMS
            'id'=> '80',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male_5.png',
            'female_image'=> 'assets/images/armors/female_5.png',
            'name'=> 'UC-1 Arms',
            'class'=> 'Mage',
            'rarity_type'=> 'Uncommon',
            'body_part'=> 'Arms',
            'spritesheet_img_name'=> '5.png',
            'directory'=> 'arms/male/5.png', 
            'outfit_infos'=>'80'
        ],[
            'id'=> '81',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male_6.png',
            'female_image'=> 'assets/images/armors/female_6.png',
            'name'=> 'UC-2 Arms',
            'class'=> 'Mage',
            'rarity_type'=> 'Uncommon',
            'body_part'=> 'Arms',
            'spritesheet_img_name'=> '6.png',
            'directory'=> 'arms/male/6.png', 
            'outfit_infos'=>'81'
        ],[
            //RARE MAGE ARMS
            'id'=> '82',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male_3.png',
            'female_image'=> 'assets/images/armors/female_3.png',
            'name'=> 'R-1 Arms',
            'class'=> 'Mage',
            'rarity_type'=> 'Rare',
            'body_part'=> 'Arms',
            'spritesheet_img_name'=> '3.png',
            'directory'=> 'arms/male/3.png', 
            'outfit_infos'=>'82'
        ],[
            'id'=> '83',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male_4.png',
            'female_image'=> 'assets/images/armors/female_4.png',
            'name'=> 'R-2 Arms',
            'class'=> 'Mage',
            'rarity_type'=> 'Rare',
            'body_part'=> 'Arms',
            'spritesheet_img_name'=> '4.png',
            'directory'=> 'arms/male/4.png', 
            'outfit_infos'=>'83'
        ],[
            //COMMON MAGE TORSO
            'id'=> '84',
            'outfit_type'=> 'Armor',
            'sex'=> 'Male',
            'male_image'=> 'assets/images/armors/male_dark_gray.png',
            'female_image'=> '',
            'name'=> 'C-1 Torso',
            'class'=> 'Mage',
            'rarity_type'=> 'Common',
            'body_part'=> 'Torso',
            'spritesheet_img_name'=> 'dark_gray.png',
            'directory'=> 'torso/jacket/trench/male/dark_gray.png', 
            'outfit_infos'=>'84'
        ],[
            //UNCOMMON MAGE TORSO
            'id'=> '85',
            'outfit_type'=> 'Armor',
            'sex'=> 'Male',
            'male_image'=> 'assets/images/armors/male4_blue.png',
            'female_image'=> '',
            'name'=> 'UC-1 Torso',
            'class'=> 'Mage',
            'rarity_type'=> 'Uncommon',
            'body_part'=> 'Torso',
            'spritesheet_img_name'=> 'blue.png',
            'directory'=> 'torso/jacket/collared/male/blue.png', 
            'outfit_infos'=>'85'
        ],[
            'id'=> '86',
            'outfit_type'=> 'Armor',
            'sex'=> 'Male',
            'male_image'=> 'assets/images/armors/male3_maroon.png',
            'female_image'=> '',
            'name'=> 'UC-2 Torso',
            'class'=> 'Mage',
            'rarity_type'=> 'Uncommon',
            'body_part'=> 'Torso',
            'spritesheet_img_name'=> 'maroon.png',
            'directory'=> 'torso/jacket/collared/male/maroon.png', 
            'outfit_infos'=>'86'
        ],[
            //RARE MAGE TORSO
            'id'=> '87',
            'outfit_type'=> 'Armor',
            'sex'=> 'Male',
            'male_image'=> 'assets/images/armors/male4_teal.png',
            'female_image'=> '',
            'name'=> 'R-1 Torso',
            'class'=> 'Mage',
            'rarity_type'=> 'Rare',
            'body_part'=> 'Torso',
            'spritesheet_img_name'=> 'teal.png',
            'directory'=> 'torso/jacket/collared/male/teal.png', 
            'outfit_infos'=>'87'
        ],[
            'id'=> '88',
            'outfit_type'=> 'Armor',
            'sex'=> 'Male',
            'male_image'=> 'assets/images/armors/male4_yellow.png',
            'female_image'=> '',
            'name'=> 'R-2 Torso',
            'class'=> 'Mage',
            'rarity_type'=> 'Rare',
            'body_part'=> 'Torso',
            'spritesheet_img_name'=> 'yellow.png',
            'directory'=> 'torso/jacket/collared/male/yellow.png', 
            'outfit_infos'=>'88'
        ],[
            //COMMON MAGE LEGS
            'id'=> '89',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male_8.jpg',
            'female_image'=> 'assets/images/armors/female_8.jpg',
            'name'=> 'C-1 Legs',
            'class'=> 'Mage',
            'rarity_type'=> 'Common',
            'body_part'=> 'Legs',
            'spritesheet_img_name'=> '8.jpg',
            'directory'=> 'legs/armour/male/8.png', 
            'outfit_infos'=>'89'
        ],[
            //UNCOMMON MAGE LEGS
            'id'=> '90',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male3_blue.png',
            'female_image'=> 'assets/images/armors/female3_blue.png',
            'name'=> 'UC-1 Legs',
            'class'=> 'Mage',
            'rarity_type'=> 'Uncommon',
            'body_part'=> 'Legs',
            'spritesheet_img_name'=> 'blue.png',
            'directory'=> 'legs/pants/male/blue.png', 
            'outfit_infos'=>'90'
        ],[
            'id'=> '91',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male2_black.png',
            'female_image'=> 'assets/images/armors/female2_black.png',
            'name'=> 'UC-2 Legs',
            'class'=> 'Mage',
            'rarity_type'=> 'Uncommon',
            'body_part'=> 'Legs',
            'spritesheet_img_name'=> 'black.png',
            'directory'=> 'legs/pants/male/black.png', 
            'outfit_infos'=>'91'
        ],[
            //RARE MARKSMAN LEGS
            'id'=> '92',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male2_teal.png',
            'female_image'=> 'assets/images/armors/female2_teal.png',
            'name'=> 'R-1 Legs',
            'class'=> 'Mage',
            'rarity_type'=> 'Rare',
            'body_part'=> 'Legs',
            'spritesheet_img_name'=> 'teal.png',
            'directory'=> 'legs/pants/male/teal.png', 
            'outfit_infos'=>'92'
        ],[
            'id'=> '93',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male2_white.png',
            'female_image'=> 'assets/images/armors/female2_white.png',
            'name'=> 'R-2 Legs',
            'class'=> 'Mage',
            'rarity_type'=> 'Rare',
            'body_part'=> 'Legs',
            'spritesheet_img_name'=> 'white.png',
            'directory'=> 'legs/pants/male/white.png', 
            'outfit_infos'=>'93'
        ],[
            'id'=> '94',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male2_yellow.png',
            'female_image'=> 'assets/images/armors/female2_yellow.png',
            'name'=> 'R-3 Legs',
            'class'=> 'Mage',
            'rarity_type'=> 'Rare',
            'body_part'=> 'Legs',
            'spritesheet_img_name'=> 'yellow.png',
            'directory'=> 'legs/pants/male/yellow.png', 
            'outfit_infos'=>'94'
        ],[
            //COMMON MARKSMAN FOOTWEAR
            'id'=> '95',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male3_brown.png',
            'female_image'=> 'assets/images/armors/female3_brown.png',
            'name'=> 'C-1 Foot',
            'class'=> 'Mage',
            'rarity_type'=> 'Common',
            'body_part'=> 'Footwear',
            'spritesheet_img_name'=> 'brown.png',
            'directory'=> 'feet/shoes/male/brown.png', 
            'outfit_infos'=>'95'
        ],[
            //UNCOMMON MARKSMAN FOOTWEAR
            'id'=> '96',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male2_maroon.png',
            'female_image'=> 'assets/images/armors/female2_maroon.png',
            'name'=> 'UC-1 Foot',
            'class'=> 'Mage',
            'rarity_type'=> 'Uncommon',
            'body_part'=> 'Footwear',
            'spritesheet_img_name'=> 'maroon.png',
            'directory'=> 'feet/shoes/male/maroon.png', 
            'outfit_infos'=>'96'
        ],[
            'id'=> '97',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male2_7.png',
            'female_image'=> 'assets/images/armors/female2_7.png',
            'name'=> 'UC-2 Foot',
            'class'=> 'Mage',
            'rarity_type'=> 'Uncommon',
            'body_part'=> 'Footwear',
            'spritesheet_img_name'=> '7.png',
            'directory'=> 'feet/armor/male/7.png', 
            'outfit_infos'=>'97'
        ],[
            'id'=> '98',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male2_9.png',
            'female_image'=> 'assets/images/armors/female2_9.png',
            'name'=> 'UC-3 Foot',
            'class'=> 'Mage',
            'rarity_type'=> 'Uncommon',
            'body_part'=> 'Footwear',
            'spritesheet_img_name'=> '9.png',
            'directory'=> 'feet/armor/male/9.png', 
            'outfit_infos'=>'98'
        ],[
            //RARE MARKSMAN FOOTWEAR
            'id'=> '99',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male_6.png',
            'female_image'=> 'assets/images/armors/female_6.png',
            'name'=> 'R-1 Foot',
            'class'=> 'Mage',
            'rarity_type'=> 'Rare',
            'body_part'=> 'Footwear',
            'spritesheet_img_name'=> '6.png',
            'directory'=> 'feet/armor/male/6.png', 
            'outfit_infos'=>'99'
        ]
    ]);
   }
}

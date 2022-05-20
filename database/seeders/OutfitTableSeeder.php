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
            //warrior common weapon -done
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
            'directory'=> 'weapon/thrust/',
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
            'directory'=> 'weapon/thrust/',
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
            'directory'=> 'weapon/thrust/',
            'outfit_infos'=>'3'
        ],[
            //uncommon type warrior weapon -done
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
            'directory'=> 'weapon/thrust/',
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
            'directory'=> 'weapon/slash_oversize/',
            'outfit_infos'=>'5'
        ],[
            //rare warrior weap - done
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
            'directory'=> 'weapon/slash_oversize_layered/all/',
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
            'directory'=> 'weapon/slash_oversize_layered/all/',
            'outfit_infos'=>'7'
        ],[
            //COMMON MARKSMAN WEAPS
            'id'=> '8',
            'outfit_type'=> 'Weapon',
            'sex'=> 'None',
            'male_image'=> 'assets/images/weapons/10.png',
            'female_image'=> '',
            'name'=> 'Black Bow',
            'class'=> 'Marksman',
            'rarity_type'=> 'Common',
            'body_part'=> '',
            'spritesheet_img_name'=> '10.png',
            'directory'=> 'weapon/bow/', //d
            'outfit_infos'=>'8'

        ],[
            'id'=> '9',
            'outfit_type'=> 'Weapon',
            'sex'=> 'None',
            'male_image'=> 'assets/images/weapons/recurve.png',
            'female_image'=> '',
            'name'=> 'Wooden Bow',
            'class'=> 'Marksman',
            'rarity_type'=> 'Common',
            'body_part'=> '',
            'spritesheet_img_name'=> 'recurve.png',
            'directory'=> 'weapon/bow/', //d
            'outfit_infos'=>'9'
        ],[
            'id'=> '10',
            'outfit_type'=> 'Weapon',
            'sex'=> 'None',
            'male_image'=> 'assets/images/weapons/great.png',
            'female_image'=> '',
            'name'=> 'Normal Bow',
            'class'=> 'Marksman',
            'rarity_type'=> 'Common',
            'body_part'=> '',
            'spritesheet_img_name'=> 'great.png',
            'directory'=> 'weapon/bow/', //d
            'outfit_infos'=>'10'
        ],[
            //UNCOMMON MARKSMAN WEAP
            'id'=> '11',
            'outfit_type'=> 'Weapon',
            'sex'=> 'None',
            'male_image'=> 'assets/images/weapons/6.png',
            'female_image'=> '',
            'name'=> 'Blue Bow',
            'class'=> 'Marksman',
            'rarity_type'=> 'Uncommon',
            'body_part'=> '',
            'spritesheet_img_name'=> '6.png',
            'directory'=> 'weapon/bow/', //d
            'outfit_infos'=>'11'
        ],[
            'id'=> '12',
            'outfit_type'=> 'Weapon',
            'sex'=> 'None',
            'male_image'=> 'assets/images/weapons/7.png',
            'female_image'=> '',
            'name'=> 'Orange Bow',
            'class'=> 'Marksman',
            'rarity_type'=> 'Uncommon',
            'body_part'=> '',
            'spritesheet_img_name'=> '7.png',
            'directory'=> 'weapon/bow/', //d
            'outfit_infos'=>'12'
        ],[
            'id'=> '13',
            'outfit_type'=> 'Weapon',
            'sex'=> 'None',
            'male_image'=> 'assets/images/weapons/9.png',
            'female_image'=> '',
            'name'=> 'Green Bow',
            'class'=> 'Marksman',
            'rarity_type'=> 'Uncommon',
            'body_part'=> '',
            'spritesheet_img_name'=> '9.png',
            'directory'=> 'weapon/bow/', //d
            'outfit_infos'=>'13'
        ],[
            //RARE MARSKMAN WEAP
            'id'=> '14',
            'outfit_type'=> 'Weapon',
            'sex'=> 'None',
            'male_image'=> 'assets/images/weapons/8.png',
            'female_image'=> '',
            'name'=> 'Golden Bow',
            'class'=> 'Marksman',
            'rarity_type'=> 'Rare',
            'body_part'=> '',
            'spritesheet_img_name'=> '8.png',
            'directory'=> 'weapon/bow/', //d
            'outfit_infos'=>'14'
        ],[
            //COMMON MAGE WEAP
            'id'=> '15',
            'outfit_type'=> 'Weapon',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/weapons/male_cane.png',
            'female_image'=> 'assets/images/weapons/female_cane.png',
            'name'=> 'Cane',
            'class'=> 'Mage',
            'rarity_type'=> 'Common',
            'body_part'=> '',
            'spritesheet_img_name'=> 'cane.png',
            'directory'=> 'weapon/thrust/',
            'outfit_infos'=>'15'
        ],[
            //UNCOMMON MAGE WEAP
            'id'=> '16',
            'outfit_type'=> 'Weapon',
            'sex'=> 'None',
            'male_image'=> 'assets/images/weapons/saber.png',
            'female_image'=> '',
            'name'=> 'Magic Dagger',
            'class'=> 'Mage',
            'rarity_type'=> 'Uncommon',
            'body_part'=> '',
            'spritesheet_img_name'=> 'saber.png',
            'directory'=> 'weapon/slash_oversize_layered/all/', //d
            'outfit_infos'=>'16'
        ],[
        //RARE MAGE WEAP
            'id'=> '17',
            'outfit_type'=> 'Weapon',
            'sex'=> 'None',
            'male_image'=> 'assets/images/weapons/scythe.png',
            'female_image'=> '',
            'name'=> 'Reaper Scythe',
            'class'=> 'Mage',
            'rarity_type'=> 'Rare',
            'body_part'=> '',
            'spritesheet_img_name'=> 'scythe.png',
            'directory'=> 'weapon/slash_oversize_layered/all/', //d
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
            'directory'=> 'hat/legion/',
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
            'directory'=> 'hat/horned/',
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
            'directory'=> 'hat/helmet/',
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
            'directory'=> 'hat/pirate/bonnie_feather/',
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
            'directory'=> 'hat/horned/',
            'outfit_infos'=>'22'
        ],[
            'id'=> '23',
            'outfit_type'=> 'Armor',
            'sex'=> 'None',
            'male_image'=> 'assets/images/armors/male_tricorne_captain_pirate_skull.png',
            'female_image'=> '',
            'name'=> 'Tricorne Skull Helm',
            'class'=> 'Warrior',
            'rarity_type'=> 'Rare',
            'body_part'=> 'Head',
            'spritesheet_img_name'=> 'male.png',
            'directory'=> 'hat/pirate/tricorne_captain_pirate_skull/',
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
            'directory'=> 'hat/crown/',
            'outfit_infos'=>'24'
        ],[
            //COMMON WARRIOR ARMS
            'id'=> '25',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male_2.png',
            'female_image'=> 'assets/images/armors/female_2.png',
            'name'=> 'WAR-C-1 Arms',
            'class'=> 'Warrior',
            'rarity_type'=> 'Common',
            'body_part'=> 'Arms',
            'spritesheet_img_name'=> '2.png',
            'directory'=> 'arms/',
            'outfit_infos'=>'25'
        ],[
            //UNCOMMON WARRIOR ARMS
            'id'=> '26',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male_5.png',
            'female_image'=> 'assets/images/armors/female_5.png',
            'name'=> 'WAR-UC-1 Arms',
            'class'=> 'Warrior',
            'rarity_type'=> 'Uncommon',
            'body_part'=> 'Arms',
            'spritesheet_img_name'=> '5.png',
            'directory'=> 'arms/',
            'outfit_infos'=>'26'
        ],[
            'id'=> '27',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male_6.png',
            'female_image'=> 'assets/images/armors/female_6.png',
            'name'=> 'WAR-UC-2 Arms',
            'class'=> 'Warrior',
            'rarity_type'=> 'Uncommon',
            'body_part'=> 'Arms',
            'spritesheet_img_name'=> '6.png',
            'directory'=> 'arms/',
            'outfit_infos'=>'27'
        ],[
            //RARE WARRIOR ARMS
            'id'=> '28',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male_3.png',
            'female_image'=> 'assets/images/armors/female_3.png',
            'name'=> 'WAR-R-1 Arms',
            'class'=> 'Warrior',
            'rarity_type'=> 'Rare',
            'body_part'=> 'Arms',
            'spritesheet_img_name'=> '3.png',
            'directory'=> 'arms/',
            'outfit_infos'=>'28'
        ],[
            'id'=> '29',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male_4.png',
            'female_image'=> 'assets/images/armors/female_4.png',
            'name'=> 'WAR-R-2 Arms',
            'class'=> 'Warrior',
            'rarity_type'=> 'Rare',
            'body_part'=> 'Arms',
            'spritesheet_img_name'=> '4.png',
            'directory'=> 'arms/',
            'outfit_infos'=>'29'
        ],[
            //COMMON WARRIOR TORSO
            'id'=> '30',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male_steel.png',
            'female_image'=> 'assets/images/armors/female_steel.png',
            'name'=> 'WAR-C-1 Torso',
            'class'=> 'Warrior',
            'rarity_type'=> 'Common',
            'body_part'=> 'Torso',
            'spritesheet_img_name'=> 'steel.png',
            'directory'=> 'torso/armour/legion/',
            'outfit_infos'=>'30'
        ],[
            //UNCOMMON WARRIOR TORSO
            'id'=> '31',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male_15.png',
            'female_image'=> 'assets/images/armors/female_15.png',
            'name'=> 'WAR-UC-1 Torso',
            'class'=> 'Warrior',
            'rarity_type'=> 'Uncommon',
            'body_part'=> 'Torso',
            'spritesheet_img_name'=> '15.png',
            'directory'=> 'torso/armour/plate/',
            'outfit_infos'=>'31'
        ],[
            'id'=> '32',
            'outfit_type'=> 'Armor',
            'sex'=> 'Male',
            'male_image'=> 'assets/images/armors/male_brown.png',
            'female_image'=> '',
            'name'=> 'WAR-UC-2 Torso',
            'class'=> 'Warrior',
            'rarity_type'=> 'Uncommon',
            'body_part'=> 'Torso',
            'spritesheet_img_name'=> 'brown.png',
            'directory'=> 'torso/clothes/longsleeve/',
            'outfit_infos'=>'32'
        ],[
            //RARE WARRIOR TORSO
            'id'=> '33',
            'outfit_type'=> 'Armor',
            'sex'=> 'Male',
            'male_image'=> 'assets/images/armors/male_yellow.png',
            'female_image'=> '',
            'name'=> 'WAR-R-1 Torso',
            'class'=> 'Warrior',
            'rarity_type'=> 'Rare',
            'body_part'=> 'Torso',
            'spritesheet_img_name'=> 'yellow.png',
            'directory'=> 'torso/clothes/longsleeve/',
            'outfit_infos'=>'33'
        ],[
            'id'=> '34',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male_13.png',
            'female_image'=> 'assets/images/armors/female_13.png',
            'name'=> 'WAR-R-2 Torso',
            'class'=> 'Warrior',
            'rarity_type'=> 'Rare',
            'body_part'=> 'Torso',
            'spritesheet_img_name'=> '13.png',
            'directory'=> 'torso/armour/plate/',
            'outfit_infos'=>'34'
        ],[
            'id'=> '35',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male_gold.png',
            'female_image'=> 'assets/images/armors/female_gold.png',
            'name'=> 'WAR-R-3 Torso',
            'class'=> 'Warrior',
            'rarity_type'=> 'Rare',
            'body_part'=> 'Torso',
            'spritesheet_img_name'=> 'gold.png',
            'directory'=> 'torso/armour/legion/',
            'outfit_infos'=>'35'
        ],[
            //COMMON WARRIOR LEGS
            'id'=> '36',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male_11.png',
            'female_image'=> 'assets/images/armors/female_11.png',
            'name'=> 'WAR-C-1 Legs',
            'class'=> 'Warrior',
            'rarity_type'=> 'Common',
            'body_part'=> 'Legs',
            'spritesheet_img_name'=> '11.png',
            'directory'=> 'legs/armour/',
            'outfit_infos'=>'36'
        ],[
            //UNCOMMON WARRIOR LEGS
            'id'=> '37',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male_12.png',
            'female_image'=> 'assets/images/armors/female_12.png',
            'name'=> 'WAR-UC-1 Legs',
            'class'=> 'Warrior',
            'rarity_type'=> 'Uncommon',
            'body_part'=> 'Legs',
            'spritesheet_img_name'=> '12.png',
            'directory'=> 'legs/armour/',
            'outfit_infos'=>'37'
        ],[
            'id'=> '38',
            'outfit_type'=> 'Armor',
            'sex'=> 'Female',
            'male_image'=> '',
            'female_image'=> 'assets/images/armors/female_brown2.png',
            'name'=> 'WAR-UC-2 Legs',
            'class'=> 'Warrior',
            'rarity_type'=> 'Uncommon',
            'body_part'=> 'Legs',
            'spritesheet_img_name'=> 'brown.png',
            'directory'=> 'legs/armour/',
            'outfit_infos'=>'38'
        ],[
            'id'=> '39',
            'outfit_type'=> 'Armor',
            'sex'=> 'Male',
            'male_image'=> 'assets/images/armors/male_brown2.png',
            'female_image'=> '',
            'name'=> 'WAR-UC-3 Legs',
            'class'=> 'Warrior',
            'rarity_type'=> 'Uncommon',
            'body_part'=> 'Legs',
            'spritesheet_img_name'=> 'brown.png',
            'directory'=> 'legs/armour/',
            'outfit_infos'=>'39'
        ],[
            //RARE WARRIOR LEGS
            'id'=> '40',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/R-1Legs.png',
            'female_image'=> 'assets/images/armors/R-1Legs.png',
            'name'=> 'WAR-R-1 Legs',
            'class'=> 'Warrior',
            'rarity_type'=> 'Rare',
            'body_part'=> 'Legs',
            'spritesheet_img_name'=> '9.jpg',
            'directory'=> 'legs/armour/',
            'outfit_infos'=>'40'
        ],[
            'id'=> '41',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male_10.png',
            'female_image'=> 'assets/images/armors/female_10.png',
            'name'=> 'WAR-R-2 Legs',
            'class'=> 'Warrior',
            'rarity_type'=> 'Rare',
            'body_part'=> 'Legs',
            'spritesheet_img_name'=> '10.png',
            'directory'=> 'legs/armour/',
            'outfit_infos'=>'41'
        ],[
            //COMMON WARRIOR FOOTWEAR
            'id'=> '42',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male2_5.png',
            'female_image'=> 'assets/images/armors/female2_5.png',
            'name'=> 'WAR-C-1 Foot',
            'class'=> 'Warrior',
            'rarity_type'=> 'Common',
            'body_part'=> 'Footwear',
            'spritesheet_img_name'=> '5.png',
            'directory'=> 'feet/armor/',
            'outfit_infos'=>'42'
        ],[
            //UNCOMMON WARRIOR FOOTWEAR
            'id'=> '43',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male2_7.png',
            'female_image'=> 'assets/images/armors/female2_7.png',
            'name'=> 'WAR-UC-1 Foot',
            'class'=> 'Warrior',
            'rarity_type'=> 'Uncommon',
            'body_part'=> 'Footwear',
            'spritesheet_img_name'=> '7.png',
            'directory'=> 'feet/armor/',
            'outfit_infos'=>'43'
        ],[
            'id'=> '44',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male2_9.png',
            'female_image'=> 'assets/images/armors/female2_9.png',
            'name'=> 'WAR-UC-2 Foot',
            'class'=> 'Warrior',
            'rarity_type'=> 'Uncommon',
            'body_part'=> 'Footwear',
            'spritesheet_img_name'=> '9.png',
            'directory'=> 'feet/armor/',
            'outfit_infos'=>'44'
        ],[
            //RARE WARRIOR FOOTWEAR
            'id'=> '45',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male_6.png',
            'female_image'=> 'assets/images/armors/female_6.png',
            'name'=> 'WAR-R-1 Foot',
            'class'=> 'Warrior',
            'rarity_type'=> 'Rare',
            'body_part'=> 'Footwear',
            'spritesheet_img_name'=> '6.png',
            'directory'=> 'feet/armor/',
            'outfit_infos'=>'45'
        ],[
            //COMMON MARKSMAN HEAD
            'id'=> '46',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male_bandana_gray.png',
            'female_image'=> 'assets/images/armors/female_bandana_gray.png',
            'name'=> 'MRK-C-1 Head',
            'class'=> 'Marksman',
            'rarity_type'=> 'Common',
            'body_part'=> 'Head',
            'spritesheet_img_name'=> 'bandana_gray.png',
            'directory'=> 'hat/cloth/',
            'outfit_infos'=>'46'
        ],[
            //UNCOMMON MARKSMAN HEAD
            'id'=> '47',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/hood_black.png',
            'female_image'=> 'assets/images/armors/hood_black.png',
            'name'=> 'MRK-UC-1 Head',
            'class'=> 'Marksman',
            'rarity_type'=> 'Uncommon',
            'body_part'=> 'Head',
            'spritesheet_img_name'=> 'hood_black.png',
            'directory'=> 'hat/cloth/',
            'outfit_infos'=>'47'
        ],[
            'id'=> '48',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/hijab.png',
            'female_image'=> 'assets/images/armors/hijab.png',
            'name'=> 'MRK-UC-2 Head',
            'class'=> 'Marksman',
            'rarity_type'=> 'Uncommon',
            'body_part'=> 'Head',
            'spritesheet_img_name'=> 'hijab.jpg',
            'directory'=> 'hat/cloth/',
            'outfit_infos'=>'48'
        ],[
            //RARE MARKSMAN HEAD
            'id'=> '49',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male_hood_white.png',
            'female_image'=> 'assets/images/armors/female_hood_white.png',
            'name'=> 'MRK-R-1 Head',
            'class'=> 'Marksman',
            'rarity_type'=> 'Rare',
            'body_part'=> 'Head',
            'spritesheet_img_name'=> 'hood_white.png',
            'directory'=> 'hat/cloth/',
            'outfit_infos'=>'49'
        ],[
            'id'=> '50',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male_gold_2.png',
            'female_image'=> 'assets/images/armors/female_gold_2.png',
            'name'=> 'MRK-R-2 Head',
            'class'=> 'Marksman',
            'rarity_type'=> 'Rare',
            'body_part'=> 'Head',
            'spritesheet_img_name'=> 'gold_2.png',
            'directory'=> 'hat/legion/',
            'outfit_infos'=>'50'
        ],[
            //COMMON MARKSMAN ARMS
            'id'=> '51',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male_2.png',
            'female_image'=> 'assets/images/armors/female_2.png',
            'name'=> 'MRK-C-1 Arms',
            'class'=> 'Marksman',
            'rarity_type'=> 'Common',
            'body_part'=> 'Arms',
            'spritesheet_img_name'=> '2.png',
            'directory'=> 'arms/',
            'outfit_infos'=>'51'
        ],[
            //UNCOMMON MARKSMAN ARMS
            'id'=> '52',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male_5.png',
            'female_image'=> 'assets/images/armors/female_5.png',
            'name'=> 'MRK-UC-1 Arms',
            'class'=> 'Marksman',
            'rarity_type'=> 'Uncommon',
            'body_part'=> 'Arms',
            'spritesheet_img_name'=> '5.png',
            'directory'=> 'arms/',
            'outfit_infos'=>'52'
        ],[
            'id'=> '53',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male_6.png',
            'female_image'=> 'assets/images/armors/female_6.png',
            'name'=> 'MRK-UC-2 Arms',
            'class'=> 'Marksman',
            'rarity_type'=> 'Uncommon',
            'body_part'=> 'Arms',
            'spritesheet_img_name'=> '6.png',
            'directory'=> 'arms/',
            'outfit_infos'=>'53'
        ],[
            //RARE MARKSMAN ARMS
            'id'=> '54',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male_3.png',
            'female_image'=> 'assets/images/armors/female_3.png',
            'name'=> 'MRK-R-1 Arms',
            'class'=> 'Marksman',
            'rarity_type'=> 'Rare',
            'body_part'=> 'Arms',
            'spritesheet_img_name'=> '3.png',
            'directory'=> 'arms/',
            'outfit_infos'=>'54'
        ],[
            'id'=> '55',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male_4.png',
            'female_image'=> 'assets/images/armors/female_4.png',
            'name'=> 'MRK-R-2 Arms',
            'class'=> 'Marksman',
            'rarity_type'=> 'Rare',
            'body_part'=> 'Arms',
            'spritesheet_img_name'=> '4.png',
            'directory'=> 'arms/',
            'outfit_infos'=>'55'
        ],[
            //COMMON MARKSMAN TORSO
            'id'=> '56',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male_blue.png',
            'female_image'=> 'assets/images/armors/female_blue.png',
            'name'=> 'MRK-C-1 Torso',
            'class'=> 'Marksman',
            'rarity_type'=> 'Common',
            'body_part'=> 'Torso',
            'spritesheet_img_name'=> 'blue.png',
            'directory'=> 'torso/armour/leather/',
            'outfit_infos'=>'56'
        ],[
            //UNCOMMON MARKSMAN TORSO
            'id'=> '57',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male2_blue.png',
            'female_image'=> 'assets/images/armors/female2_blue.png',
            'name'=> 'MRK-UC-1 Torso',
            'class'=> 'Marksman',
            'rarity_type'=> 'Uncommon',
            'body_part'=> 'Torso',
            'spritesheet_img_name'=> 'blue.png',
            'directory'=> 'torso/clothes/longsleeve/',
            'outfit_infos'=>'57'
        ],[
            'id'=> '58',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male_maroon.png',
            'female_image'=> 'assets/images/armors/female_maroon.png',
            'name'=> 'MRK-UC-2 Torso',
            'class'=> 'Marksman',
            'rarity_type'=> 'Uncommon',
            'body_part'=> 'Torso',
            'spritesheet_img_name'=> 'maroon.png',
            'directory'=> 'torso/clothes/longsleeve/',
            'outfit_infos'=>'58'
        ],[
            'id'=> '59',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male_black.png',
            'female_image'=> 'assets/images/armors/female_black.png',
            'name'=> 'MRK-UC-3 Torso',
            'class'=> 'Marksman',
            'rarity_type'=> 'Uncommon',
            'body_part'=> 'Torso',
            'spritesheet_img_name'=> 'black.png',
            'directory'=> 'torso/clothes/longsleeve/',
            'outfit_infos'=>'59'
        ],[
            //RARE MARKSMAN TORSO
            'id'=> '60',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male2_white.png',
            'female_image'=> 'assets/images/armors/female2_white.png',
            'name'=> 'MRK-R-1 Torso',
            'class'=> 'Marksman',
            'rarity_type'=> 'Rare',
            'body_part'=> 'Torso',
            'spritesheet_img_name'=> 'white.png',
            'directory'=> 'torso/clothes/longsleeve/',
            'outfit_infos'=>'60'
        ],[
            'id'=> '61',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male_teal.png',
            'female_image'=> 'assets/images/armors/female_teal.png',
            'name'=> 'MRK-R-2 Torso',
            'class'=> 'Marksman',
            'rarity_type'=> 'Rare',
            'body_part'=> 'Torso',
            'spritesheet_img_name'=> 'teal.png',
            'directory'=> 'torso/clothes/longsleeve/',
            'outfit_infos'=>'61'
        ],[
            //COMMON MARKSMAN LEGS
            'id'=> '62',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male_8.png',
            'female_image'=> 'assets/images/armors/male_8.png',
            'name'=> 'MRK-C-1 Legs',
            'class'=> 'Marksman',
            'rarity_type'=> 'Common',
            'body_part'=> 'Legs',
            'spritesheet_img_name'=> '8.jpg',
            'directory'=> 'legs/armour/',
            'outfit_infos'=>'62'
        ],[
            //UNCOMMON MARKSMAN LEGS
            'id'=> '63',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male3_blue.png',
            'female_image'=> 'assets/images/armors/female3_blue.png',
            'name'=> 'MRK-UC-1 Legs',
            'class'=> 'Marksman',
            'rarity_type'=> 'Uncommon',
            'body_part'=> 'Legs',
            'spritesheet_img_name'=> 'blue.png',
            'directory'=> 'legs/pants/',
            'outfit_infos'=>'63'
        ],[
            'id'=> '64',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male2_black.png',
            'female_image'=> 'assets/images/armors/female2_black.png',
            'name'=> 'MRK-UC-2 Legs',
            'class'=> 'Marksman',
            'rarity_type'=> 'Uncommon',
            'body_part'=> 'Legs',
            'spritesheet_img_name'=> 'black.png',
            'directory'=> 'legs/pants/',
            'outfit_infos'=>'64'
        ],[
            //RARE MARKSMAN LEGS
            'id'=> '65',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male2_teal.png',
            'female_image'=> 'assets/images/armors/female2_teal.png',
            'name'=> 'MRK-R-1 Legs',
            'class'=> 'Marksman',
            'rarity_type'=> 'Rare',
            'body_part'=> 'Legs',
            'spritesheet_img_name'=> 'teal.png',
            'directory'=> 'legs/pants/',
            'outfit_infos'=>'65'
        ],[
            'id'=> '66',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male2_white.png',
            'female_image'=> 'assets/images/armors/female2_white.png',
            'name'=> 'MRK-R-2 Legs',
            'class'=> 'Marksman',
            'rarity_type'=> 'Rare',
            'body_part'=> 'Legs',
            'spritesheet_img_name'=> 'white.png',
            'directory'=> 'legs/pants/',
            'outfit_infos'=>'66'
        ],[
            'id'=> '67',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male2_yellow.png',
            'female_image'=> 'assets/images/armors/female2_yellow.png',
            'name'=> 'MRK-R-3 Legs',
            'class'=> 'Marksman',
            'rarity_type'=> 'Rare',
            'body_part'=> 'Legs',
            'spritesheet_img_name'=> 'yellow.png',
            'directory'=> 'legs/pants/',
            'outfit_infos'=>'67'
        ],[
            //COMMON MARKSMAN FOOTWEAR
            'id'=> '68',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male3_brown.png',
            'female_image'=> 'assets/images/armors/female3_brown.png',
            'name'=> 'MRK-C-1 Foot',
            'class'=> 'Marksman',
            'rarity_type'=> 'Common',
            'body_part'=> 'Footwear',
            'spritesheet_img_name'=> 'brown.png',
            'directory'=> 'feet/shoes/',
            'outfit_infos'=>'68'
        ],[
            //UNCOMMON MARKSMAN FOOTWEAR
            'id'=> '69',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male2_maroon.png',
            'female_image'=> 'assets/images/armors/female2_maroon.png',
            'name'=> 'MRK-UC-1 Foot',
            'class'=> 'Marksman',
            'rarity_type'=> 'Uncommon',
            'body_part'=> 'Footwear',
            'spritesheet_img_name'=> 'maroon.png',
            'directory'=> 'feet/shoes/',
            'outfit_infos'=>'69'
        ],[
            'id'=> '70',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male2_7.png',
            'female_image'=> 'assets/images/armors/female2_7.png',
            'name'=> 'MRK-UC-2 Foot',
            'class'=> 'Marksman',
            'rarity_type'=> 'Uncommon',
            'body_part'=> 'Footwear',
            'spritesheet_img_name'=> '7.png',
            'directory'=> 'feet/armor/',
            'outfit_infos'=>'70'
        ],[
            'id'=> '71',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male2_9.png',
            'female_image'=> 'assets/images/armors/female2_9.png',
            'name'=> 'MRK-UC-3 Foot',
            'class'=> 'Marksman',
            'rarity_type'=> 'Uncommon',
            'body_part'=> 'Footwear',
            'spritesheet_img_name'=> '9.png',
            'directory'=> 'feet/armor/',
            'outfit_infos'=>'71'
        ],[
            //RARE MARKSMAN FOOTWEAR
            'id'=> '72',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male_6.png',
            'female_image'=> 'assets/images/armors/female_6.png',
            'name'=> 'MRK-R-1 Foot',
            'class'=> 'Marksman',
            'rarity_type'=> 'Rare',
            'body_part'=> 'Footwear',
            'spritesheet_img_name'=> '6.png',
            'directory'=> 'feet/armor/',
            'outfit_infos'=>'72'
        ],[
            //COMMON MAGE HEAD
            'id'=> '73',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male_brown_2.png',
            'female_image'=> 'assets/images/armors/female_brown_2.png',
            'name'=> 'MGE-C-1 Head',
            'class'=> 'Mage',
            'rarity_type'=> 'Common',
            'body_part'=> 'Head',
            'spritesheet_img_name'=> 'brown_2.png',
            'directory'=> 'hat/magic/',
            'outfit_infos'=>'73'
        ],[
            //UNCOMMON MAGE HEAD
            'id'=> '74',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male_no_moon.png',
            'female_image'=> 'assets/images/armors/female_no_moon.png',
            'name'=> 'MGE-UC-1 Head',
            'class'=> 'Mage',
            'rarity_type'=> 'Uncommon',
            'body_part'=> 'Head',
            'spritesheet_img_name'=> 'no_moon.png',
            'directory'=> 'hat/magic/',
            'outfit_infos'=>'74'
        ],[
            'id'=> '75',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male_red.png',
            'female_image'=> 'assets/images/armors/female_red.png',
            'name'=> 'MGE-UC-2 Head',
            'class'=> 'Mage',
            'rarity_type'=> 'Uncommon',
            'body_part'=> 'Head',
            'spritesheet_img_name'=> 'red.png',
            'directory'=> 'hat/magic/',
            'outfit_infos'=>'75'
        ],[
            //RARE MAGE HEAD
            'id'=> '76',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male3_teal.png',
            'female_image'=> 'assets/images/armors/female3_teal.png',
            'name'=> 'MGE-R-1 Head',
            'class'=> 'Mage',
            'rarity_type'=> 'Rare',
            'body_part'=> 'Head',
            'spritesheet_img_name'=> 'teal.png',
            'directory'=> 'hat/magic/',
            'outfit_infos'=>'76'
        ],[
            'id'=> '77',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male3_yellow.png',
            'female_image'=> 'assets/images/armors/female3_yellow.png',
            'name'=> 'MGE-R-2 Head',
            'class'=> 'Mage',
            'rarity_type'=> 'Rare',
            'body_part'=> 'Head',
            'spritesheet_img_name'=> 'yellow.png',
            'directory'=> 'hat/magic/',
            'outfit_infos'=>'77'
        ],[
            'id'=> '78',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male_moon.png',
            'female_image'=> 'assets/images/armors/female_moon.png',
            'name'=> 'MGE-R-3 Head',
            'class'=> 'Mage',
            'rarity_type'=> 'Rare',
            'body_part'=> 'Head',
            'spritesheet_img_name'=> 'moon.png',
            'directory'=> 'hat/magic/',
            'outfit_infos'=>'78'
        ],[
            //COMMON MAGE ARMS
            'id'=> '79',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male_2.png',
            'female_image'=> 'assets/images/armors/female_2.png',
            'name'=> 'MGE-C-1 Arms',
            'class'=> 'Mage',
            'rarity_type'=> 'Common',
            'body_part'=> 'Arms',
            'spritesheet_img_name'=> '2.png',
            'directory'=> 'arms/',
            'outfit_infos'=>'79'
        ],[
            //UNCOMMON MAGE ARMS
            'id'=> '80',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male_5.png',
            'female_image'=> 'assets/images/armors/female_5.png',
            'name'=> 'MGE-UC-1 Arms',
            'class'=> 'Mage',
            'rarity_type'=> 'Uncommon',
            'body_part'=> 'Arms',
            'spritesheet_img_name'=> '5.png',
            'directory'=> 'arms/',
            'outfit_infos'=>'80'
        ],[
            'id'=> '81',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male_6.png',
            'female_image'=> 'assets/images/armors/female_6.png',
            'name'=> 'MGE-UC-2 Arms',
            'class'=> 'Mage',
            'rarity_type'=> 'Uncommon',
            'body_part'=> 'Arms',
            'spritesheet_img_name'=> '6.png',
            'directory'=> 'arms/',
            'outfit_infos'=>'81'
        ],[
            //RARE MAGE ARMS
            'id'=> '82',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male_3.png',
            'female_image'=> 'assets/images/armors/female_3.png',
            'name'=> 'MGE-R-1 Arms',
            'class'=> 'Mage',
            'rarity_type'=> 'Rare',
            'body_part'=> 'Arms',
            'spritesheet_img_name'=> '3.png',
            'directory'=> 'arms/',
            'outfit_infos'=>'82'
        ],[
            'id'=> '83',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male_4.png',
            'female_image'=> 'assets/images/armors/female_4.png',
            'name'=> 'MGE-R-2 Arms',
            'class'=> 'Mage',
            'rarity_type'=> 'Rare',
            'body_part'=> 'Arms',
            'spritesheet_img_name'=> '4.png',
            'directory'=> 'arms/',
            'outfit_infos'=>'83'
        ],[
            //COMMON MAGE TORSO
            'id'=> '84',
            'outfit_type'=> 'Armor',
            'sex'=> 'Male',
            'male_image'=> 'assets/images/armors/male_dark_gray.png',
            'female_image'=> '',
            'name'=> 'MGE-C-1 Torso',
            'class'=> 'Mage',
            'rarity_type'=> 'Common',
            'body_part'=> 'Torso',
            'spritesheet_img_name'=> 'dark_gray.png',
            'directory'=> 'torso/jacket/trench/',
            'outfit_infos'=>'84'
        ],[
            //UNCOMMON MAGE TORSO
            'id'=> '85',
            'outfit_type'=> 'Armor',
            'sex'=> 'Male',
            'male_image'=> 'assets/images/armors/male4_blue.png',
            'female_image'=> '',
            'name'=> 'MGE-UC-1 Torso',
            'class'=> 'Mage',
            'rarity_type'=> 'Uncommon',
            'body_part'=> 'Torso',
            'spritesheet_img_name'=> 'blue.png',
            'directory'=> 'torso/jacket/collared/',
            'outfit_infos'=>'85'
        ],[
            'id'=> '86',
            'outfit_type'=> 'Armor',
            'sex'=> 'Male',
            'male_image'=> 'assets/images/armors/male3_maroon.png',
            'female_image'=> '',
            'name'=> 'MGE-UC-2 Torso',
            'class'=> 'Mage',
            'rarity_type'=> 'Uncommon',
            'body_part'=> 'Torso',
            'spritesheet_img_name'=> 'maroon.png',
            'directory'=> 'torso/jacket/collared/',
            'outfit_infos'=>'86'
        ],[
            //RARE MAGE TORSO
            'id'=> '87',
            'outfit_type'=> 'Armor',
            'sex'=> 'Male',
            'male_image'=> 'assets/images/armors/male4_teal.png',
            'female_image'=> '',
            'name'=> 'MGE-R-1 Torso',
            'class'=> 'Mage',
            'rarity_type'=> 'Rare',
            'body_part'=> 'Torso',
            'spritesheet_img_name'=> 'teal.png',
            'directory'=> 'torso/jacket/collared/',
            'outfit_infos'=>'87'
        ],[
            'id'=> '88',
            'outfit_type'=> 'Armor',
            'sex'=> 'Male',
            'male_image'=> 'assets/images/armors/male4_yellow.png',
            'female_image'=> '',
            'name'=> 'MGE-R-2 Torso',
            'class'=> 'Mage',
            'rarity_type'=> 'Rare',
            'body_part'=> 'Torso',
            'spritesheet_img_name'=> 'yellow.png',
            'directory'=> 'torso/jacket/collared/',
            'outfit_infos'=>'88'
        ],[
            //COMMON MAGE LEGS
            'id'=> '89',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male_8.png',
            'female_image'=> 'assets/images/armors/male_8.png',
            'name'=> 'MGE-C-1 Legs',
            'class'=> 'Mage',
            'rarity_type'=> 'Common',
            'body_part'=> 'Legs',
            'spritesheet_img_name'=> '8.jpg',
            'directory'=> 'legs/armour/',
            'outfit_infos'=>'89'
        ],[
            //UNCOMMON MAGE LEGS
            'id'=> '90',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male3_blue.png',
            'female_image'=> 'assets/images/armors/female3_blue.png',
            'name'=> 'MGE-UC-1 Legs',
            'class'=> 'Mage',
            'rarity_type'=> 'Uncommon',
            'body_part'=> 'Legs',
            'spritesheet_img_name'=> 'blue.png',
            'directory'=> 'legs/pants/',
            'outfit_infos'=>'90'
        ],[
            'id'=> '91',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male2_black.png',
            'female_image'=> 'assets/images/armors/female2_black.png',
            'name'=> 'MGE-UC-2 Legs',
            'class'=> 'Mage',
            'rarity_type'=> 'Uncommon',
            'body_part'=> 'Legs',
            'spritesheet_img_name'=> 'black.png',
            'directory'=> 'legs/pants/',
            'outfit_infos'=>'91'
        ],[
            //RARE MAGE LEGS
            'id'=> '92',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male2_teal.png',
            'female_image'=> 'assets/images/armors/female2_teal.png',
            'name'=> 'MGE-R-1 Legs',
            'class'=> 'Mage',
            'rarity_type'=> 'Rare',
            'body_part'=> 'Legs',
            'spritesheet_img_name'=> 'teal.png',
            'directory'=> 'legs/pants/',
            'outfit_infos'=>'92'
        ],[
            'id'=> '93',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male2_white.png',
            'female_image'=> 'assets/images/armors/female2_white.png',
            'name'=> 'MGE-R-2 Legs',
            'class'=> 'Mage',
            'rarity_type'=> 'Rare',
            'body_part'=> 'Legs',
            'spritesheet_img_name'=> 'white.png',
            'directory'=> 'legs/pants/',
            'outfit_infos'=>'93'
        ],[
            'id'=> '94',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male2_yellow.png',
            'female_image'=> 'assets/images/armors/female2_yellow.png',
            'name'=> 'MGE-R-3 Legs',
            'class'=> 'Mage',
            'rarity_type'=> 'Rare',
            'body_part'=> 'Legs',
            'spritesheet_img_name'=> 'yellow.png',
            'directory'=> 'legs/pants/',
            'outfit_infos'=>'94'
        ],[
            //COMMON MAGE FOOTWEAR
            'id'=> '95',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male3_brown.png',
            'female_image'=> 'assets/images/armors/female3_brown.png',
            'name'=> 'MGE-C-1 Foot',
            'class'=> 'Mage',
            'rarity_type'=> 'Common',
            'body_part'=> 'Footwear',
            'spritesheet_img_name'=> 'brown.png',
            'directory'=> 'feet/shoes/',
            'outfit_infos'=>'95'
        ],[
            //UNCOMMON MARKSMAN FOOTWEAR
            'id'=> '96',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male2_maroon.png',
            'female_image'=> 'assets/images/armors/female2_maroon.png',
            'name'=> 'MGE-UC-1 Foot',
            'class'=> 'Mage',
            'rarity_type'=> 'Uncommon',
            'body_part'=> 'Footwear',
            'spritesheet_img_name'=> 'maroon.png',
            'directory'=> 'feet/shoes/',
            'outfit_infos'=>'96'
        ],[
            'id'=> '97',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male2_7.png',
            'female_image'=> 'assets/images/armors/female2_7.png',
            'name'=> 'MGE-UC-2 Foot',
            'class'=> 'Mage',
            'rarity_type'=> 'Uncommon',
            'body_part'=> 'Footwear',
            'spritesheet_img_name'=> '7.png',
            'directory'=> 'feet/armor/',
            'outfit_infos'=>'97'
        ],[
            'id'=> '98',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male2_9.png',
            'female_image'=> 'assets/images/armors/female2_9.png',
            'name'=> 'MGE-UC-3 Foot',
            'class'=> 'Mage',
            'rarity_type'=> 'Uncommon',
            'body_part'=> 'Footwear',
            'spritesheet_img_name'=> '9.png',
            'directory'=> 'feet/armor/',
            'outfit_infos'=>'98'
        ],[
            //RARE MARKSMAN FOOTWEAR
            'id'=> '99',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/male_6.png',
            'female_image'=> 'assets/images/armors/female_6.png',
            'name'=> 'MGE-R-1 Foot',
            'class'=> 'Mage',
            'rarity_type'=> 'Rare',
            'body_part'=> 'Footwear',
            'spritesheet_img_name'=> '6.png',
            'directory'=> 'feet/armor/',
            'outfit_infos'=>'99'
        ],[
            //DEFAULT WARRIOR HEAD
            'id'=> '100',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/warriorHead.png',
            'female_image'=> 'assets/images/armors/warriorHead.png',
            'name'=> 'WAR-Default Head',
            'class'=> 'Warrior',
            'rarity_type'=> 'Common',
            'body_part'=> 'Head',
            'spritesheet_img_name'=> 'norman.png',
            'directory'=> 'feet/armor/',
            'outfit_infos'=>'100'
        ],[
            //DEFAULT WARRIOR ARMS
            'id'=> '101',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/warriorArms.png',
            'female_image'=> 'assets/images/armors/warriorArms.png',
            'name'=> 'WAR-Default Arms',
            'class'=> 'Warrior',
            'rarity_type'=> 'Common',
            'body_part'=> 'Arms',
            'spritesheet_img_name'=> '1.png',
            'directory'=> 'arms/',
            'outfit_infos'=>'101'
        ],[
            //DEFAULT WARRIOR TORSO
            'id'=> '102',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/warriorTorso.png',
            'female_image'=> 'assets/images/armors/warriorTorso.png',
            'name'=> 'WAR-Default Torso',
            'class'=> 'Warrior',
            'rarity_type'=> 'Common',
            'body_part'=> 'Torso',
            'spritesheet_img_name'=> 'gray.png',
            'directory'=> 'torso/chainmail/',
            'outfit_infos'=>'102'
        ],[
            //DEFAULT WARRIOR LEGS
            'id'=> '103',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/warriorLegs.png',
            'female_image'=> 'assets/images/armors/warriorLegs.png',
            'name'=> 'WAR-Default Legs',
            'class'=> 'Warrior',
            'rarity_type'=> 'Common',
            'body_part'=> 'Legs',
            'spritesheet_img_name'=> '7.png',
            'directory'=> 'legs/armour/',
            'outfit_infos'=>'103'
        ],[
            //DEFAULT WARRIOR FOOTWEAR
            'id'=> '104',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/warriorFeet.png',
            'female_image'=> 'assets/images/armors/warriorFeet.png',
            'name'=> 'WAR-Default Footwear',
            'class'=> 'Warrior',
            'rarity_type'=> 'Common',
            'body_part'=> 'Footwear',
            'spritesheet_img_name'=> '4.png',
            'directory'=> 'feet/armor/',
            'outfit_infos'=>'104'
        ],[
            //DEFAULT WARRIOR WEAPON
            'id'=> '105',
            'outfit_type'=> 'Weapon',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/weapons/warriorWeapon.png',
            'female_image'=> 'assets/images/weapons/warriorWeapon.png',
            'name'=> 'WAR-Default Weapon',
            'class'=> 'Warrior',
            'rarity_type'=> 'Common',
            'body_part'=> '',
            'spritesheet_img_name'=> 'dagger.png',
            'directory'=> 'weapon/slash/',
            'outfit_infos'=>'105',
        ],[
            //DEFAULT MARKSMAN HEAD
            'id'=> '106',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/marksmanHead.png',
            'female_image'=> 'assets/images/armors/marksmanHead.png',
            'name'=> 'MRK-Default Head',
            'class'=> 'Marksman',
            'rarity_type'=> 'Common',
            'body_part'=> 'Head',
            'spritesheet_img_name'=> 'leather.png',
            'directory'=> 'hat/cloth/',
            'outfit_infos'=>'106'
        ],[
            //DEFAULT MARKSMAN TORSO
            'id'=> '107',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/marksmanTorso.png',
            'female_image'=> 'assets/images/armors/marksmanTorso.png',
            'name'=> 'MRK-Default Torso',
            'class'=> 'Marksman',
            'rarity_type'=> 'Common',
            'body_part'=> 'Torso',
            'spritesheet_img_name'=> 'green.png',
            'directory'=> 'torso/clothes/longsleeve/',
            'outfit_infos'=>'107'
        ],[
            //DEFAULT MARKSMAN LEGS
            'id'=> '108',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/marksmanLegs.png',
            'female_image'=> 'assets/images/armors/marksmanLegs.png',
            'name'=> 'MRK-Default Legs',
            'class'=> 'Marksman',
            'rarity_type'=> 'Common',
            'body_part'=> 'Legs',
            'spritesheet_img_name'=> 'green.png',
            'directory'=> 'legs/pants/',
            'outfit_infos'=>'108'
        ],[
            //DEFAULT MARKSMAN FOOTWEAR
            'id'=> '109',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/marksmanFeet.png',
            'female_image'=> 'assets/images/armors/marksmanFeet.png',
            'name'=> 'MRK-Default Legs',
            'class'=> 'Marksman',
            'rarity_type'=> 'Common',
            'body_part'=> 'Footwear',
            'spritesheet_img_name'=> 'black.png',
            'directory'=> 'feet/shoes/',
            'outfit_infos'=>'109'
        ],[
            //DEFAULT MARKSMAN WEAPON
            'id'=> '110',
            'outfit_type'=> 'Weapon',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/weapons/marksmanWeapon.png',
            'female_image'=> 'assets/images/weapons/marksmanWeapon.png',
            'name'=> 'MRK-Default Weapon',
            'class'=> 'Marksman',
            'rarity_type'=> 'Common',
            'body_part'=> '',
            'spritesheet_img_name'=> 'normal.png',
            'directory'=> 'weapon/bow/',
            'outfit_infos'=>'110'
        ],[
            //DEFAULT MAGE HEAD
            'id'=> '111',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/mageHead.png',
            'female_image'=> 'assets/images/armors/mageHead.png',
            'name'=> 'MGE-Default Head',
            'class'=> 'Mage',
            'rarity_type'=> 'Common',
            'body_part'=> 'Head',
            'spritesheet_img_name'=> 'black.png',
            'directory'=> 'hat/magic/',
            'outfit_infos'=>'111'
        ],[
            //DEFAULT MAGE TORSO
            'id'=> '112',
            'outfit_type'=> 'Armor',
            'sex'=> 'Male',
            'male_image'=> 'assets/images/armors/mageTorso.png',
            'female_image'=> '',
            'name'=> 'MGE-Default Torso',
            'class'=> 'Mage',
            'rarity_type'=> 'Common',
            'body_part'=> 'Torso',
            'spritesheet_img_name'=> 'black.png',
            'directory'=> 'torso/jacket/iverness/',
            'outfit_infos'=>'112'
        ],[
            //DEFAULT MAGE LEGS
            'id'=> '113',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/mageLegs.png',
            'female_image'=> 'assets/images/armors/mageLegs.png',
            'name'=> 'MGE-Default Legs',
            'class'=> 'Mage',
            'rarity_type'=> 'Common',
            'body_part'=> 'Legs',
            'spritesheet_img_name'=> 'navy.png',
            'directory'=> 'legs/pants/',
            'outfit_infos'=>'113'
        ],[
            //DEFAULT MAGE FOOTWEAR
            'id'=> '114',
            'outfit_type'=> 'Armor',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/armors/mageFeet.png',
            'female_image'=> 'assets/images/armors/mageFeet.png',
            'name'=> 'MGE-Default Feet',
            'class'=> 'Mage',
            'rarity_type'=> 'Common',
            'body_part'=> 'Footwear',
            'spritesheet_img_name'=> 'black.png',
            'directory'=> 'feet/shoes/',
            'outfit_infos'=>'114'
        ],[
            //DEFAULT MAGE FOOTWEAR
            'id'=> '115',
            'outfit_type'=> 'Weapon',
            'sex'=> 'Unisex',
            'male_image'=> 'assets/images/weapons/mageWeapon.png',
            'female_image'=> 'assets/images/weapons/mageWeapon.png',
            'name'=> 'MGE-Default Weapon',
            'class'=> 'Mage',
            'rarity_type'=> 'Common',
            'body_part'=> '',
            'spritesheet_img_name'=> 'simple_staff.png',
            'directory'=> 'weapon/thrust/',
            'outfit_infos'=>'115'
        ]
    ]);
   }
}

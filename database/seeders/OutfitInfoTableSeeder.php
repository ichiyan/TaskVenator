<?php

namespace Database\Seeders;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class OutfitInfoTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('outfit_info')->insert([

        [
            //common type warrior weapon info
            'id'=> '1',
            'str'=> '2',
            'int'=> '1',
            'agi'=> '3',
            'crit_chance'=> '1',
            'crit_dmg'=> '1',
            'price'=> '20',
        ],[
            'id'=> '2',
            'str'=> '2',
            'int'=> '1',
            'agi'=> '3',
            'crit_chance'=> '1',
            'crit_dmg'=> '1',
            'price'=> '20',
        ],[
            'id'=> '3',
            'str'=> '3',
            'int'=> '1',
            'agi'=> '1',
            'crit_chance'=> '2',
            'crit_dmg'=> '1',
            'price'=> '20',  //done
        ],[
            //uncommon type weapon warrior info
            'id'=> '4',
            'str'=> '5',
            'int'=> '1',
            'agi'=> '2',
            'crit_chance'=> '3',
            'crit_dmg'=> '2',
            'price'=> '50',
        ],[
            'id'=> '5',
            'str'=> '3',
            'int'=> '1',
            'agi'=> '2',
            'crit_chance'=> '5',
            'crit_dmg'=> '2',
            'price'=> '50', //done
        ],[
            //rare type weapon warrior info
            'id'=> '6',
            'str'=> '4',
            'int'=> '2',
            'agi'=> '7',
            'crit_chance'=> '5',
            'crit_dmg'=> '3',
            'price'=> '100',
        ],[
            'id'=> '7',
            'str'=> '4',
            'int'=> '2',
            'agi'=> '5',
            'crit_chance'=> '7',
            'crit_dmg'=> '3',
            'price'=> '100', //done
        ],[
            //COMMON MARKSMAN WEAP INFO
            'id'=> '8',
            'str'=> '2',
            'int'=> '2',
            'agi'=> '3',
            'crit_chance'=> '1',
            'crit_dmg'=> '1',
            'price'=> '20',
        ],[
            'id'=> '9',
            'str'=> '1',
            'int'=> '2',
            'agi'=> '2',
            'crit_chance'=> '3',
            'crit_dmg'=> '1',
            'price'=> '20',
        ],[
            'id'=> '10',
            'str'=> '3',
            'int'=> '2',
            'agi'=> '1',
            'crit_chance'=> '2',
            'crit_dmg'=> '1',
            'price'=> '20',
        ],[
            //UNCOMMON MARKSMAN WEAP
            'id'=> '11',
            'str'=> '5',
            'int'=> '2',
            'agi'=> '2',
            'crit_chance'=> '3',
            'crit_dmg'=> '2',
            'price'=> '50',
        ],[
            'id'=> '12',
            'str'=> '3',
            'int'=> '2',
            'agi'=> '2',
            'crit_chance'=> '5',
            'crit_dmg'=> '2',
            'price'=> '50',
        ],[
            'id'=> '13',
            'str'=> '2',
            'int'=> '2',
            'agi'=> '5',
            'crit_chance'=> '3',
            'crit_dmg'=> '2',
            'price'=> '50',
        ],[
            //RARE MARKSMAN WEAP
            'id'=> '14',
            'str'=> '4',
            'int'=> '3',
            'agi'=> '5',
            'crit_chance'=> '7',
            'crit_dmg'=> '3',
            'price'=> '100',
        ],[
            //COMMON MAGE WEAP
            'id'=> '15',
            'str'=> '1',
            'int'=> '3',
            'agi'=> '3',
            'crit_chance'=> '2',
            'crit_dmg'=> '1',
            'price'=> '20',
        ],[
            //UNCOMMON MAGE WEAP
            'id'=> '16',
            'str'=> '2',
            'int'=> '4',
            'agi'=> '3',
            'crit_chance'=> '5',
            'crit_dmg'=> '2',
            'price'=> '50',
        ],[
            //RARE MAGE WEAP
            'id'=> '17',
            'str'=> '4',
            'int'=> '5',
            'agi'=> '5',
            'crit_chance'=> '7',
            'crit_dmg'=> '3',
            'price'=> '100',
        ],[
            //COMMON WARRIOR  HEAD
            'id'=> '18',
            'str'=> '0',
            'int'=> '0',
            'agi'=> '0',
            'crit_chance'=> '0',
            'crit_dmg'=> '0',
            'price'=> '20',
        ],[
            'id'=> '19',
            'str'=> '0',
            'int'=> '0',
            'agi'=> '0',
            'crit_chance'=> '0',
            'crit_dmg'=> '0',
            'price'=> '20',
        ],[
            //UNCOMMON WARRIOR HEAD
            'id'=> '20',
            'str'=> '0',
            'int'=> '0',
            'agi'=> '0',
            'crit_chance'=> '0',
            'crit_dmg'=> '0',
            'price'=> '50',
        ],[
            'id'=> '21',
            'str'=> '0',
            'int'=> '0',
            'agi'=> '0',
            'crit_chance'=> '0',
            'crit_dmg'=> '0',
            'price'=> '50',
        ],[
            //RARE WARRIOR HEAD
            'id'=> '22',
            'str'=> '0',
            'int'=> '0',
            'agi'=> '0',
            'crit_chance'=> '0',
            'crit_dmg'=> '0',
            'price'=> '100',
        ],[
            'id'=> '23',
            'str'=> '0',
            'int'=> '0',
            'agi'=> '0',
            'crit_chance'=> '0',
            'crit_dmg'=> '0',
            'price'=> '100',
        ],[
            'id'=> '24',
            'str'=> '0',
            'int'=> '0',
            'agi'=> '0',
            'crit_chance'=> '0',
            'crit_dmg'=> '0',
            'price'=> '100',
        ],[
            //COMMON WARRIOR ARMS
            'id'=> '25',
            'str'=> '0',
            'int'=> '0',
            'agi'=> '0',
            'crit_chance'=> '0',
            'crit_dmg'=> '0',
            'price'=> '20',
        ],[
            //UNCOMMON WARRIOR ARMS
            'id'=> '26',
            'str'=> '0',
            'int'=> '0',
            'agi'=> '0',
            'crit_chance'=> '0',
            'crit_dmg'=> '0',
            'price'=> '50',
        ],[
            'id'=> '27',
            'str'=> '0',
            'int'=> '0',
            'agi'=> '0',
            'crit_chance'=> '0',
            'crit_dmg'=> '0',
            'price'=> '50',
        ],[
            //RARE WARRIOR ARMS
            'id'=> '28',
            'str'=> '0',
            'int'=> '0',
            'agi'=> '0',
            'crit_chance'=> '0',
            'crit_dmg'=> '0',
            'price'=> '100',
        ],[
            'id'=> '29',
            'str'=> '0',
            'int'=> '0',
            'agi'=> '0',
            'crit_chance'=> '0',
            'crit_dmg'=> '0',
            'price'=> '100',
        ],[
            //COMMON WARRIOR TORSO
            'id'=> '30',
            'str'=> '0',
            'int'=> '0',
            'agi'=> '0',
            'crit_chance'=> '0',
            'crit_dmg'=> '0',
            'price'=> '20',
        ],[
            //UNCOMMON WARRIOR TORSO
            'id'=> '31',
            'str'=> '1',
            'int'=> '0',
            'agi'=> '0',
            'crit_chance'=> '0',
            'crit_dmg'=> '0',
            'price'=> '50',
        ],[
            'id'=> '32',
            'str'=> '1',
            'int'=> '0',
            'agi'=> '0',
            'crit_chance'=> '0',
            'crit_dmg'=> '0',
            'price'=> '50',
        ],[
            //RARE WARRIOR TORSO
            'id'=> '33',
            'str'=> '2',
            'int'=> '0',
            'agi'=> '0',
            'crit_chance'=> '0',
            'crit_dmg'=> '0',
            'price'=> '100',
        ],[
            'id'=> '34',
            'str'=> '2',
            'int'=> '0',
            'agi'=> '0',
            'crit_chance'=> '0',
            'crit_dmg'=> '0',
            'price'=> '100',
        ],[
            'id'=> '35',
            'str'=> '2',
            'int'=> '0',
            'agi'=> '0',
            'crit_chance'=> '0',
            'crit_dmg'=> '0',
            'price'=> '100',
        ],[
            //COMMON WARRIOR LEGS
            'id'=> '36',
            'str'=> '0',
            'int'=> '0',
            'agi'=> '0',
            'crit_chance'=> '0',
            'crit_dmg'=> '0',
            'price'=> '20',
        ],[
            //UNCOMMON WARRIOR LEGS
            'id'=> '37',
            'str'=> '0',
            'int'=> '0',
            'agi'=> '1',
            'crit_chance'=> '0',
            'crit_dmg'=> '0',
            'price'=> '50',
        ],[
            'id'=> '38',
            'str'=> '0',
            'int'=> '0',
            'agi'=> '1',
            'crit_chance'=> '0',
            'crit_dmg'=> '0',
            'price'=> '50',
        ],[
            'id'=> '39',
            'str'=> '0',
            'int'=> '0',
            'agi'=> '1',
            'crit_chance'=> '0',
            'crit_dmg'=> '0',
            'price'=> '50',
        ],[
            //RARE WARRIOR LEGS
            'id'=> '40',
            'str'=> '0',
            'int'=> '0',
            'agi'=> '2',
            'crit_chance'=> '0',
            'crit_dmg'=> '0',
            'price'=> '100',
        ],[
            'id'=> '41',
            'str'=> '0',
            'int'=> '2',
            'agi'=> '0',
            'crit_chance'=> '0',
            'crit_dmg'=> '0',
            'price'=> '100',
        ],[
            //COMMON WARRIOR FOOTWEAR
            'id'=> '42',
            'str'=> '0',
            'int'=> '0',
            'agi'=> '0',
            'crit_chance'=> '0',
            'crit_dmg'=> '0',
            'price'=> '20',
        ],[
            //UNCOMMON WARRIOR FOOTWEAR
            'id'=> '43',
            'str'=> '0',
            'int'=> '0',
            'agi'=> '2',
            'crit_chance'=> '0',
            'crit_dmg'=> '0',
            'price'=> '50',
        ],[
            'id'=> '44',
            'str'=> '0',
            'int'=> '0',
            'agi'=> '2',
            'crit_chance'=> '0',
            'crit_dmg'=> '0',
            'price'=> '50',
        ],[
            //RARE WARRIOR FOOTWEAR
            'id'=> '45',
            'str'=> '0',
            'int'=> '0',
            'agi'=> '3',
            'crit_chance'=> '0',
            'crit_dmg'=> '0',
            'price'=> '100',
        ],[
            //COMMON MARKSMAN HEAD
            'id'=> '46',
            'str'=> '0',
            'int'=> '0',
            'agi'=> '0',
            'crit_chance'=> '0',
            'crit_dmg'=> '0',
            'price'=> '20',
        ],[
            //UNCOMMON MARKSMAN HEAD
            'id'=> '47',
            'str'=> '0',
            'int'=> '0',
            'agi'=> '0',
            'crit_chance'=> '0',
            'crit_dmg'=> '0',
            'price'=> '50',
        ],[
            'id'=> '48',
            'str'=> '0',
            'int'=> '0',
            'agi'=> '0',
            'crit_chance'=> '0',
            'crit_dmg'=> '0',
            'price'=> '50',
        ],[
            //RARE MARKSMAN HEAD
            'id'=> '49',
            'str'=> '0',
            'int'=> '0',
            'agi'=> '0',
            'crit_chance'=> '0',
            'crit_dmg'=> '0',
            'price'=> '100',
        ],[
            'id'=> '50',
            'str'=> '0',
            'int'=> '0',
            'agi'=> '0',
            'crit_chance'=> '0',
            'crit_dmg'=> '0',
            'price'=> '100',
        ],[
            //COMMON MARKSMAN ARMS
            'id'=> '51',
            'str'=> '0',
            'int'=> '0',
            'agi'=> '0',
            'crit_chance'=> '0',
            'crit_dmg'=> '0',
            'price'=> '20',
        ],[
            //UNCOMMON MARKSMAN ARMS
            'id'=> '52',
            'str'=> '0',
            'int'=> '0',
            'agi'=> '0',
            'crit_chance'=> '0',
            'crit_dmg'=> '0',
            'price'=> '50',
        ],[
            'id'=> '53',
            'str'=> '0',
            'int'=> '0',
            'agi'=> '0',
            'crit_chance'=> '0',
            'crit_dmg'=> '0',
            'price'=> '50',
        ],[
            //RARE MARKSMAN ARMS
            'id'=> '54',
            'str'=> '0',
            'int'=> '0',
            'agi'=> '0',
            'crit_chance'=> '0',
            'crit_dmg'=> '0',
            'price'=> '100',
        ],[
            'id'=> '55',
            'str'=> '0',
            'int'=> '0',
            'agi'=> '0',
            'crit_chance'=> '0',
            'crit_dmg'=> '0',
            'price'=> '100',
        ],[
            //COMMON MARKSMAN TORSO
            'id'=> '56',
            'str'=> '0',
            'int'=> '0',
            'agi'=> '0',
            'crit_chance'=> '0',
            'crit_dmg'=> '0',
            'price'=> '20',
        ],[
            //UNCOMMON MARKSMAN TORSO
            'id'=> '57',
            'str'=> '1',
            'int'=> '0',
            'agi'=> '0',
            'crit_chance'=> '0',
            'crit_dmg'=> '0',
            'price'=> '50',
        ],[
            'id'=> '58',
            'str'=> '1',
            'int'=> '0',
            'agi'=> '0',
            'crit_chance'=> '0',
            'crit_dmg'=> '0',
            'price'=> '50',
        ],[
            'id'=> '59',
            'str'=> '1',
            'int'=> '0',
            'agi'=> '0',
            'crit_chance'=> '0',
            'crit_dmg'=> '0',
            'price'=> '50',
        ],[
            //RARE MARKSMAN TORSO
            'id'=> '60',
            'str'=> '2',
            'int'=> '0',
            'agi'=> '0',
            'crit_chance'=> '0',
            'crit_dmg'=> '0',
            'price'=> '100',
        ],[
            'id'=> '61',
            'str'=> '2',
            'int'=> '0',
            'agi'=> '0',
            'crit_chance'=> '0',
            'crit_dmg'=> '0',
            'price'=> '100',
        ],[
            //COMMON MARKSMAN LEGS
            'id'=> '62',
            'str'=> '0',
            'int'=> '0',
            'agi'=> '0',
            'crit_chance'=> '0',
            'crit_dmg'=> '0',
            'price'=> '20',
        ],[
            //UNCOMMON MARKSMAN LEGS
            'id'=> '63',
            'str'=> '0',
            'int'=> '0',
            'agi'=> '1',
            'crit_chance'=> '0',
            'crit_dmg'=> '0',
            'price'=> '50',
        ],[
            'id'=> '64',
            'str'=> '0',
            'int'=> '0',
            'agi'=> '1',
            'crit_chance'=> '0',
            'crit_dmg'=> '0',
            'price'=> '50',
        ],[
            //RARE MARKSMAN LEGS
            'id'=> '65',
            'str'=> '0',
            'int'=> '0',
            'agi'=> '2',
            'crit_chance'=> '0',
            'crit_dmg'=> '0',
            'price'=> '100',
        ],[
            'id'=> '66',
            'str'=> '0',
            'int'=> '0',
            'agi'=> '2',
            'crit_chance'=> '0',
            'crit_dmg'=> '0',
            'price'=> '100',
        ],[
            'id'=> '67',
            'str'=> '0',
            'int'=> '0',
            'agi'=> '2',
            'crit_chance'=> '0',
            'crit_dmg'=> '0',
            'price'=> '100',
        ],[
            //COMMON MARKSMAN FOOTWEAR
            'id'=> '68',
            'str'=> '0',
            'int'=> '0',
            'agi'=> '0',
            'crit_chance'=> '0',
            'crit_dmg'=> '0',
            'price'=> '20',
        ],[
            //UNCOMMON MARKSMAN FOOTWEAR
            'id'=> '69',
            'str'=> '0',
            'int'=> '0',
            'agi'=> '2',
            'crit_chance'=> '0',
            'crit_dmg'=> '0',
            'price'=> '50',
        ],[
            'id'=> '70',
            'str'=> '0',
            'int'=> '0',
            'agi'=> '2',
            'crit_chance'=> '0',
            'crit_dmg'=> '0',
            'price'=> '50',
        ],[
            'id'=> '71',
            'str'=> '0',
            'int'=> '0',
            'agi'=> '2',
            'crit_chance'=> '0',
            'crit_dmg'=> '0',
            'price'=> '50',
        ],[
            //RARE MARKSMAN FOOTWEAR
            'id'=> '72',
            'str'=> '0',
            'int'=> '0',
            'agi'=> '3',
            'crit_chance'=> '0',
            'crit_dmg'=> '0',
            'price'=> '100',
        ],[
            //COMMON MAGE HEAD
            'id'=> '73',
            'str'=> '0',
            'int'=> '0',
            'agi'=> '0',
            'crit_chance'=> '0',
            'crit_dmg'=> '0',
            'price'=> '20',
        ],[
            //UNCOMMON MAGE HEAD
            'id'=> '74',
            'str'=> '0',
            'int'=> '0',
            'agi'=> '0',
            'crit_chance'=> '0',
            'crit_dmg'=> '0',
            'price'=> '50',
        ],[
            'id'=> '75',
            'str'=> '0',
            'int'=> '0',
            'agi'=> '0',
            'crit_chance'=> '0',
            'crit_dmg'=> '0',
            'price'=> '50',
        ],[
            //RARE MAGE HEAD
            'id'=> '76',
            'str'=> '0',
            'int'=> '0',
            'agi'=> '0',
            'crit_chance'=> '0',
            'crit_dmg'=> '0',
            'price'=> '100',
        ],[
            'id'=> '77',
            'str'=> '0',
            'int'=> '0',
            'agi'=> '0',
            'crit_chance'=> '0',
            'crit_dmg'=> '0',
            'price'=> '100',
        ],[
            'id'=> '78',
            'str'=> '0',
            'int'=> '0',
            'agi'=> '0',
            'crit_chance'=> '0',
            'crit_dmg'=> '0',
            'price'=> '100',
        ],[
            //COMMON MAGE ARMS
            'id'=> '79',
            'str'=> '0',
            'int'=> '0',
            'agi'=> '0',
            'crit_chance'=> '0',
            'crit_dmg'=> '0',
            'price'=> '20',
        ],[
            //UNCOMMON MAGE ARMS
            'id'=> '80',
            'str'=> '0',
            'int'=> '0',
            'agi'=> '0',
            'crit_chance'=> '0',
            'crit_dmg'=> '0',
            'price'=> '50',
        ],[
            'id'=> '81',
            'str'=> '0',
            'int'=> '0',
            'agi'=> '0',
            'crit_chance'=> '0',
            'crit_dmg'=> '0',
            'price'=> '50',
        ],[
            //RARE MAGE ARMS
            'id'=> '82',
            'str'=> '0',
            'int'=> '0',
            'agi'=> '0',
            'crit_chance'=> '0',
            'crit_dmg'=> '0',
            'price'=> '100',
        ],[
            'id'=> '83',
            'str'=> '0',
            'int'=> '0',
            'agi'=> '0',
            'crit_chance'=> '0',
            'crit_dmg'=> '0',
            'price'=> '100',
        ],[
            //COMMON MAGE TORSO
            'id'=> '84',
            'str'=> '0',
            'int'=> '0',
            'agi'=> '0',
            'crit_chance'=> '0',
            'crit_dmg'=> '0',
            'price'=> '20',
        ],[
            //UNCOMMON MAGE TORSO
            'id'=> '85',
            'str'=> '0',
            'int'=> '0',
            'agi'=> '1',
            'crit_chance'=> '0',
            'crit_dmg'=> '0',
            'price'=> '50',
        ],[
            'id'=> '86',
            'str'=> '0',
            'int'=> '0',
            'agi'=> '1',
            'crit_chance'=> '0',
            'crit_dmg'=> '0',
            'price'=> '50',
        ],[
            //RARE MAGE TORSO
            'id'=> '87',
            'str'=> '0',
            'int'=> '0',
            'agi'=> '2',
            'crit_chance'=> '0',
            'crit_dmg'=> '0',
            'price'=> '100',
        ],[
            'id'=> '88',
            'str'=> '0',
            'int'=> '0',
            'agi'=> '2',
            'crit_chance'=> '0',
            'crit_dmg'=> '0',
            'price'=> '100',
        ],[
            //COMMON MAGE LEGS
            'id'=> '89',
            'str'=> '0',
            'int'=> '0',
            'agi'=> '0',
            'crit_chance'=> '0',
            'crit_dmg'=> '0',
            'price'=> '20',
        ],[
            //UNCOMMON MAGE LEGS
            'id'=> '90',
            'str'=> '0',
            'int'=> '1',
            'agi'=> '0',
            'crit_chance'=> '0',
            'crit_dmg'=> '0',
            'price'=> '50',
        ],[
            'id'=> '91',
            'str'=> '0',
            'int'=> '1',
            'agi'=> '0',
            'crit_chance'=> '0',
            'crit_dmg'=> '0',
            'price'=> '50',
        ],[
            //RARE MAGE LEGS
            'id'=> '92',
            'str'=> '0',
            'int'=> '2',
            'agi'=> '0',
            'crit_chance'=> '0',
            'crit_dmg'=> '0',
            'price'=> '100',
        ],[
            'id'=> '93',
            'str'=> '0',
            'int'=> '2',
            'agi'=> '0',
            'crit_chance'=> '0',
            'crit_dmg'=> '0',
            'price'=> '100',
        ],[
            'id'=> '94',
            'str'=> '0',
            'int'=> '2',
            'agi'=> '0',
            'crit_chance'=> '0',
            'crit_dmg'=> '0',
            'price'=> '100',
        ],[
            //COMMON MAGE FOOTWEAR
            'id'=> '95',
            'str'=> '0',
            'int'=> '0',
            'agi'=> '0',
            'crit_chance'=> '0',
            'crit_dmg'=> '0',
            'price'=> '20',
        ],[
            //UNCOMMON MAGE FOOTWEAR
            'id'=> '96',
            'str'=> '0',
            'int'=> '2',
            'agi'=> '0',
            'crit_chance'=> '0',
            'crit_dmg'=> '0',
            'price'=> '50',
        ],[
            'id'=> '97',
            'str'=> '0',
            'int'=> '2',
            'agi'=> '0',
            'crit_chance'=> '0',
            'crit_dmg'=> '0',
            'price'=> '50',
        ],[
            'id'=> '98',
            'str'=> '0',
            'int'=> '2',
            'agi'=> '0',
            'crit_chance'=> '0',
            'crit_dmg'=> '0',
            'price'=> '50',
        ],[
            //RARE MAGE FOOTWEAR
            'id'=> '99',
            'str'=> '0',
            'int'=> '3',
            'agi'=> '0',
            'crit_chance'=> '0',
            'crit_dmg'=> '0',
            'price'=> '100',
        ],[
            //DEFAULT WARRIOR HEAD
            'id'=> '100',
            'str'=> '0',
            'int'=> '0',
            'agi'=> '0',
            'crit_chance'=> '0',
            'crit_dmg'=> '0',
            'price'=> '0',
        ],[
            //DEFAULT WARRIOR ARMS
            'id'=> '101',
            'str'=> '0',
            'int'=> '0',
            'agi'=> '0',
            'crit_chance'=> '0',
            'crit_dmg'=> '0',
            'price'=> '0',
        ],[
            //DEFAULT WARRIOR TORSO
            'id'=> '102',
            'str'=> '0',
            'int'=> '0',
            'agi'=> '0',
            'crit_chance'=> '0',
            'crit_dmg'=> '0',
            'price'=> '0',
        ],[
            //DEFAULT WARRIOR LEGS
            'id'=> '103',
            'str'=> '0',
            'int'=> '0',
            'agi'=> '0',
            'crit_chance'=> '0',
            'crit_dmg'=> '0',
            'price'=> '0',
        ],[
            //DEFAULT WARRIOR FOOTWEAR
            'id'=> '104',
            'str'=> '0',
            'int'=> '0',
            'agi'=> '0',
            'crit_chance'=> '0',
            'crit_dmg'=> '0',
            'price'=> '0',
        ],[
            //DEFAULT WARRIOR WEAPON
            'id'=> '105',
            'str'=> '2',
            'int'=> '1',
            'agi'=> '3',
            'crit_chance'=> '1',
            'crit_dmg'=> '1',
            'price'=> '0',
        ],[
            //DEFAULT MARKSMAN HEAD
            'id'=> '106',
            'str'=> '0',
            'int'=> '0',
            'agi'=> '0',
            'crit_chance'=> '0',
            'crit_dmg'=> '0',
            'price'=> '0',
        ],[
            //DEFAULT MARKSMAN TORSO
            'id'=> '107',
            'str'=> '0',
            'int'=> '0',
            'agi'=> '0',
            'crit_chance'=> '0',
            'crit_dmg'=> '0',
            'price'=> '0',
        ],[
            //DEFAULT MARKSMAN LEGS
            'id'=> '108',
            'str'=> '0',
            'int'=> '0',
            'agi'=> '0',
            'crit_chance'=> '0',
            'crit_dmg'=> '0',
            'price'=> '0',
        ],[
            //DEFAULT MARKSMAN FOOTWEAR
            'id'=> '109',
            'str'=> '0',
            'int'=> '0',
            'agi'=> '0',
            'crit_chance'=> '0',
            'crit_dmg'=> '0',
            'price'=> '0',
        ],[
            //DEFAULT MARKSMAN WEAPON
            'id'=> '110',
            'str'=> '2',
            'int'=> '2',
            'agi'=> '3',
            'crit_chance'=> '1',
            'crit_dmg'=> '1',
            'price'=> '0',
        ],[
            //DEFAULT MAGE HEAD
            'id'=> '111',
            'str'=> '0',
            'int'=> '0',
            'agi'=> '0',
            'crit_chance'=> '0',
            'crit_dmg'=> '0',
            'price'=> '0',
        ],[
            //DEFAULT MAGE TORSO
            'id'=> '112',
            'str'=> '0',
            'int'=> '0',
            'agi'=> '0',
            'crit_chance'=> '0',
            'crit_dmg'=> '0',
            'price'=> '0',
        ],[
            //DEFAULT MAGE LEGS
            'id'=> '113',
            'str'=> '0',
            'int'=> '0',
            'agi'=> '0',
            'crit_chance'=> '0',
            'crit_dmg'=> '0',
            'price'=> '0',
        ],[
            //DEFAULT MAGE FOOTWEAR
            'id'=> '114',
            'str'=> '0',
            'int'=> '0',
            'agi'=> '0',
            'crit_chance'=> '0',
            'crit_dmg'=> '0',
            'price'=> '0',
        ],[
            //DEFAULT MAGE WEAPON
            'id'=> '115',
            'str'=> '1',
            'int'=> '3',
            'agi'=> '3',
            'crit_chance'=> '2',
            'crit_dmg'=> '1',
            'price'=> '0',
        ]
    ]);
    }
}

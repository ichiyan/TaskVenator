<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class ProductsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('products')->insert(
            array(
                //storing common type warrior weapon
                ['id'=> '1', 'weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '1', 'price'=> 5],
                ['id'=> '2', 'weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '2', 'price'=> 5],
                ['id'=> '3', 'weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '3', 'price'=> 5],
                //uncommon warrior weapon
                ['id'=> '4','weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '4','price'=> 5],
                ['id'=> '5', 'weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '5', 'price'=> 5],
                //rare warrior weapon
                ['id'=> '6', 'weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '6', 'price'=> 5],
                ['id'=> '7', 'weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '7', 'price'=> 5],
                //COMMON MARKSMAN WEAPON
                ['id'=> '8', 'weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '8', 'price'=> 5],
                ['id'=> '9', 'weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '9', 'price'=> 5],
                ['id'=> '10','weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '10', 'price'=> 5],
                //UNCOMMON MARKSMAN WEAPON
                ['id'=> '11', 'weapon'=> NULL,'potion'=> NULL, 'outfit'=> '11', 'price'=> 5],
                ['id'=> '12', 'weapon'=> NULL,'potion'=> NULL, 'outfit'=> '12', 'price'=> 5],
                ['id'=> '13','weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '13','price'=> 5],
                //RARE MARKSMAN WEAPON
                ['id'=> '14', 'weapon'=> NULL,'potion'=> NULL, 'outfit'=> '14', 'price'=> 5],
                //COMMON MAGE WEAPON
                ['id'=> '15', 'weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '15','price'=> 5],
                //UNCOMMON MAGE WEAPON
                ['id'=> '16','weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '16','price'=> 5],
                //RARE MAGE WEAPON
                ['id'=> '17', 'weapon'=> NULL,'potion'=> NULL, 'outfit'=> '17','price'=> 5],
                //COMMON WARRIOR HEAD
                ['id'=> '18','weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '18','price'=> 5],
                ['id'=> '19','weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '19','price'=> 5],
                //UNCOMMON WARRIOR HEAD
                ['id'=> '20', 'weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '20','price'=> 5],
                ['id'=> '21', 'weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '21','price'=> 5],
                //RARE WARRIOR HEAD
                ['id'=> '22', 'weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '22','price'=> 5],
                ['id'=> '23', 'weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '23','price'=> 5],
                ['id'=> '24', 'weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '24', 'price'=> 5],
                //COMMON WARRIOR ARMS
                ['id'=> '25', 'weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '25', 'price'=> 5],
                //UNCOMMON WARRIOR ARMS
                ['id'=> '26', 'weapon'=> NULL,'potion'=> NULL, 'outfit'=> '26','price'=> 5],
                ['id'=> '27', 'weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '27', 'price'=> 5],
                //RARE WARRIOR ARMS
                ['id'=> '28', 'weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '28', 'price'=> 5],
                ['id'=> '29', 'weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '29', 'price'=> 5],
                //COMMON WARRIOR TORSO
                ['id'=> '30', 'weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '30','price'=> 5],
                //UNCOMMON WARRIOR TORSO
                ['id'=> '31','weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '31', 'price'=> 5],
                ['id'=> '32','weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '32', 'price'=> 5],
                //RARE WARRIOR TORSO
                ['id'=> '33','weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '33', 'price'=> 5],
                ['id'=> '34','weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '34', 'price'=> 5],
                ['id'=> '35','weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '35', 'price'=> 5],
                //COMMON WARRIOR LEGS
                ['id'=> '36','weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '36', 'price'=> 5],
                //UNCOMMON WARRIOR LEGS
                ['id'=> '37', 'weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '37', 'price'=> 5],
                ['id'=> '38', 'weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '38', 'price'=> 5],
                ['id'=> '39', 'weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '39', 'price'=> 5],
                //RARE WARRIOR LEGS
                ['id'=> '40', 'weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '40', 'price'=> 5],
                ['id'=> '41', 'weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '41', 'price'=> 5],
                //COMMON WARRIOR FOOTWEAR
                ['id'=> '42', 'weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '42', 'price'=> 5],
                //UNCOMMON WARRIOR FOOTWEAR
                ['id'=> '43', 'weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '43', 'price'=> 5],
                ['id'=> '44', 'weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '44', 'price'=> 5],
                //RARE WARRIOR FOOTWEAR
                ['id'=> '45', 'weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '45', 'price'=> 5],
                //COMMON MARKSMAN HEAD
                ['id'=> '46', 'weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '46', 'price'=> 5],
                //UNCOMMON MARKSMAN HEAD
                ['id'=> '47', 'weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '47', 'price'=> 5],
                ['id'=> '48', 'weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '48', 'price'=> 5],
                //RARE MARKSMAN HEAD
                ['id'=> '49', 'weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '49', 'price'=> 5],
                ['id'=> '50', 'weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '50', 'price'=> 5],
                //COMMON MARKSMAN ARMS
                ['id'=> '51','weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '51', 'price'=> 5],
                //UNCOMMON MARKSMAN ARMS
                ['id'=> '52', 'weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '52', 'price'=> 5],
                ['id'=> '53','weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '53', 'price'=> 5],
                //RARE MARKSMAN ARMS
                ['id'=> '54', 'weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '54', 'price'=> 5],
                ['id'=> '55','weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '55', 'price'=> 5],
                //COMMON MARKSMAN TORSO
                ['id'=> '56','weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '56', 'price'=> 5],
                //UNCOMMON MARKSMAN TORSO
                ['id'=> '57','weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '57', 'price'=> 5],
                ['id'=> '58','weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '58', 'price'=> 5],
                ['id'=> '59','weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '59', 'price'=> 5],
                //RARE MARKSMAN TORSO
                ['id'=> '60','weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '60', 'price'=> 5],
                ['id'=> '61','weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '61','price'=> 5],
                //COMMON MARKSMAN LEGS
                ['id'=> '62','weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '62','price'=> 5],
                //UNCOMMON MARKSMAN LEGS
                ['id'=> '63','weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '63','price'=> 5],
                ['id'=> '64','weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '64','price'=> 5],
                //RARE MARKSMAN LEGS
                ['id'=> '65','weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '65','price'=> 5],
                ['id'=> '66','weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '66','price'=> 5],
                ['id'=> '67','weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '67','price'=> 5],
                //COMMON MARKSMAN FOOTWEAR
                ['id'=> '68','weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '68','price'=> 5],
                //UNCOMMON MARKSMAN FOOTWEAR
                ['id'=> '69','weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '69','price'=> 5],
                ['id'=> '70','weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '70','price'=> 5],
                ['id'=> '71','weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '71','price'=> 5],
                //RARE MARKSMAN FOOTWEAR
                ['id'=> '72','weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '72','price'=> 5],
                //COMMON MAGE HEAD
                ['id'=> '73','weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '73','price'=> 5],
                //UNCOMMON MAGE HEAD
                ['id'=> '74','weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '74','price'=> 5],
                ['id'=> '75','weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '75','price'=> 5],
                //RARE MAGE HEAD
                ['id'=> '76','weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '76','price'=> 5],
                ['id'=> '77','weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '77','price'=> 5],
                ['id'=> '78','weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '78','price'=> 5],
                //COMMON MAGE ARMS
                ['id'=> '79','weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '79','price'=> 5],
                //UNCOMMON MAGE ARMS
                ['id'=> '80','weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '80','price'=> 5],
                ['id'=> '81','weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '81','price'=> 5],
                //RARE MAGE ARMS
                ['id'=> '82','weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '82','price'=> 5],
                ['id'=> '83','weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '83','price'=> 5],
                //COMMON MAGE TORSO
                ['id'=> '84','weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '84','price'=> 5],
                //UNCOMMON MAGE TORSO
                ['id'=> '85','weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '85','price'=> 5],
                ['id'=> '86','weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '86','price'=> 5],
                //RARE MAGE TORSO
                ['id'=> '87','weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '87','price'=> 5],
                ['id'=> '88','weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '88','price'=> 5],
                //COMMON MAGE LEGS
                ['id'=> '89','weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '89','price'=> 5],
                //UNCOMMON MAGE LEGS
                ['id'=> '90','weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '90','price'=> 5],
                ['id'=> '91','weapon'=> NULL, 'potion'=> NULL,'outfit'=> '91','price'=> 5],
                //RARE MAGE LEGS
                ['id'=> '92','weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '92','price'=> 5],
                ['id'=> '93','weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '93','price'=> 5],
                ['id'=> '94','weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '94','price'=> 5],
                //COMMON MARKSMAN FOOTWEAR
                ['id'=> '95','weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '95','price'=> 5],
                //UNCOMMON MARKSMAN FOOTWEAR
                ['id'=> '96','weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '96', 'price'=> 5],
                ['id'=> '97','weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '97','price'=> 5],
                ['id'=> '98','weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '98','price'=> 5],
                //RARE MARKSMAN FOOTWEAR
                ['id'=> '99','weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '99','price'=> 5],
                //HEALING POTIONS
                ['id'=> '100','weapon'=> NULL, 'potion'=> '1', 'outfit'=> NULL,'price'=> 5],
                ['id'=> '101','weapon'=> NULL, 'potion'=> '2', 'outfit'=> NULL,'price'=> 5],
                ['id'=> '102','weapon'=> NULL, 'potion'=> '3', 'outfit'=> NULL,'price'=> 5],
                //POWERUP POTIONS
                ['id'=> '103','weapon'=> NULL, 'potion'=> '4', 'outfit'=> NULL,'price'=> 5],
                ['id'=> '104','weapon'=> NULL, 'potion'=> '5', 'outfit'=> NULL,'price'=> 5],
                ['id'=> '105','weapon'=> NULL, 'potion'=> '6', 'outfit'=> NULL,'price'=> 5],
                //DEFAULT WARRIOR HEAD
                ['id'=> '106','weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '100','price'=> 5],
                //DEFAULT WARRIOR ARMS
                ['id'=> '107','weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '101','price'=> 5],
                //DEFAULT WARRIOR TORSO
                ['id'=> '108','weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '102','price'=> 5],
                //DEFAULT WARRIOR LEGS
                ['id'=> '109','weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '103','price'=> 5],
                //DEFAULT WARRIOR FOOTWEAR
                ['id'=> '110','weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '104','price'=> 5],
                //DEFAULT WARRIOR WEAPON
                ['id'=> '111','weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '105','price'=> 5],
                //DEFAULT MARKSMAN HEAD
                ['id'=> '112','weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '106','price'=> 5],
                //DEFAULT MARKSMAN TORSO
                ['id'=> '113','weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '107','price'=> 5],
                //DEFAULT MARKSMAN LEGS
                ['id'=> '114','weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '108','price'=> 5],
                //DEFAULT MARKSMAN FOOTWEAR
                ['id'=> '115','weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '109','price'=> 5],
                //DEFAULT MARKSMAN WEAPON
                ['id'=> '116','weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '110','price'=> 5],
                //DEFAULT MAGE HEAD
                ['id'=> '117','weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '111','price'=> 5],
                //DEFAULT MAGE TORSO
                ['id'=> '118','weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '112','price'=> 5],
                //DEFAULT MAGE LEGS
                ['id'=> '119','weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '113','price'=> 5],
                //DEFAULT MAGE FOOTWEAR
                ['id'=> '120','weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '114','price'=> 5],
                //DEFAULT MAGE WEAPON
                ['id'=> '121','weapon'=> NULL, 'potion'=> NULL, 'outfit'=> '115','price'=> 5],
            )
        );
  }
}

import React from "react";
import AddOutfitForm from './AddOutfitForm';


function Shop(){

    
return(
    <div className="shop-main_shop">
        <div className="shop-weaponForm"> 
        <AddOutfitForm/> 
    
        </div>
      

        <div className="shop-shopNavigator">
                <div className="button">
                <button  name="Items" className="shop-displayButton">Items</button>
                </div>
                <div className="button">
                <button  name="Potions" className="shop-displayButton">Potions</button>
                </div>
                <div className="button">
                <button name="Outfit" className="shop-displayButton">Outfit</button>
                </div>
                <div className="button">
                <button  name="All" className="shop-displayButton">All</button>
                </div>
         </div>

        {/* <div className="shop-shop">
            <Display 
                outfit={outfit}
                potion={potion}
                item={item}
                bought={bought}
                setBought= {setBought}
                clicked={clicked}
            />
        </div> */}
        
    </div>
    );
}

export default Shop;
import React, { useState } from "react";
import AddItemForm from "./AddItemForm";
import AddOutfitForm from './AddOutfitForm';
import AddPotionForm from './AddPotionForm';
import Display from "./Display";

function Shop(){
    const[clicked, setClicked] =useState("");

    const showItem =(event) =>{
        setClicked(event.target.getAttribute("name"));
        console.log(clicked);
    }

    
return(
    <div className="shop-main_shop">
        <div className="shop-weaponForm"> 
        <AddOutfitForm/> 
        <AddPotionForm/>
        <AddItemForm/>
        </div>
      

        <div className="shop-shopNavigator">
                <div className="button">
                <button  name="Items" onClick={showItem} className="shop-displayButton">All</button>
                </div>
                <div className="button">
                <button  name="Potions" onClick={showItem} className="shop-displayButton">Items</button>
                </div>
                <div className="button">
                <button name="Outfit" onClick={showItem} className="shop-displayButton">Potions</button>
                </div>
                <div className="button">
                <button  name="All" onClick={showItem} className="shop-displayButton">Outfit</button>
                </div>
         </div>

         <div className="shop-shop"> 
            <Display/>
        </div>  
        
    </div>
    );
}

export default Shop;
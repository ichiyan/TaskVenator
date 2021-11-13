import React from "react";
import Form from "./addProductForm";

import Display from "./display";
import { useState } from 'react';
function Shop(){
    const[products, setProducts]= useState([]);
    const[bought, setBought]= useState([]);
    const[clicked, setClicked]= useState("");

    const showItem =(event) =>{
        setClicked(event.target.getAttribute("name"));
    }
return(
    <div className="Shop-main_shop">
        <div className="Shop-weaponForm">
        <Form
            products={products}
            setProducts={setProducts}
        /><hr></hr>
        </div>

        <div className="Shop-shopNavigator">
                <div className="button">
                <button onClick={showItem} name="Items" className="displayButtons">Items</button>
                </div>
                <div className="button">
                <button onClick={showItem} name="Potions" className="displayButtons">Potions</button>
                </div>
                <div className="button">
                <button onClick={showItem} name="Outfit" className="displayButtons">Outfit</button>
                </div>
                <div className="button">
                <button onClick={showItem} name="All" className="displayButtons">All</button>
                </div>
         </div>

        <div className="Shop-shop">
           
            <Display 
                products={products}
                bought={bought}
                setBought= {setBought}
                clicked={clicked}
            />
        </div>
        
        

        
    </div>
    )
}

export default Shop;
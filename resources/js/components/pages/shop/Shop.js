import React, { useEffect, useState } from "react";
import AddOutfitForm from './AddOutfitForm';
import AddPotionForm from './AddPotionForm';
import Display from "./Display";
import Header from "../../layouts/Header";
import AvatarHeader from "../../layouts/AvatarHeader";
import { Link } from "react-router-dom";


function Shop(){
    var hpTotal = 50;
    var xpTotal = 50;
    const [hp, setHp] = useState(50);
    const [xp, setXp] = useState(0);
    const [hpBarWidth, sethpBarWidth] = useState("100");
    const [hpHitWidth, sethpHitWidth] = useState("0");
    const [HpIncreaseWidth, setHPIncreaseWidth] = useState("0");

    const [xpBarWidth, setXPBarWidth] = useState("0");
    const [xpIncreaseWidth, setXPIncreaseWidth] = useState("0");
    const[clicked, setClicked] =useState("");

    const showItem =(event) =>{
        setClicked(event.target.value);
    }
    useEffect(()=>{
        setClicked(clicked);
    },[clicked]);
   

    
return(
    <div className="shop-parentOfAll">
        <Header page="shop"/>
        <AvatarHeader hasParty="true" hp={hp} hpTotal={hpTotal} hpBarWidth={hpBarWidth} hpHitWidth={hpHitWidth} HpIncreaseWidth={HpIncreaseWidth} xp={xp} xpTotal={xpTotal} />

    <div className="shop-main_shop">
        <div className="shop-weaponForm"> 
        <AddOutfitForm/> 
        <AddPotionForm/>
        </div>
        <div className="btn-group btn-group-lg" role="group">
                <button type="button" name="All" onClick={showItem} className="btn btn-secondary" value="All">All</button>
                <button type="button" name="Potions" onClick={showItem} className="btn btn-secondary" value="Potions">Potions</button>
                <button type="button" name="Outfit" onClick={showItem} className="btn btn-secondary" value="Outfit">Outfit</button>
                
        </div>
        <Link to="/all">All</Link>
        <Link to="/potions">Potions</Link>
        <Link to="/weapons">Weapons</Link>
        <Link to="/outfit">Outfit</Link>

         <div className="shop-shop"> 
            <Display
                clicked={clicked}
            />
        </div>  
        
    </div>
    </div>
    );
}

export default Shop;
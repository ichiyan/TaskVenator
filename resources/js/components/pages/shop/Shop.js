import {React,
    useEffect, useState,
    Form, Display } from "../../../index";

const Shop = () => {
    const[products, setProducts]= useState([]);
    const[bought, setBought]= useState([]);
    const[clicked, setClicked]= useState("");

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
        <AddItemForm/>
        </div>


        <div className="btn-group btn-group-lg" role="group">
                <button type="button" name="All" onClick={showItem} className="btn btn-secondary" value="All">All</button>
                <button type="button" name="Potions" onClick={showItem} className="btn btn-secondary" value="Potions">Potions</button>
                <button type="button" name="Outfit" onClick={showItem} className="btn btn-secondary" value="Outfit">Outfit</button>
        </div>


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

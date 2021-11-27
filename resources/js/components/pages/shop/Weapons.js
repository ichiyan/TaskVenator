import React, { useState, useEffect } from "react";
import Header from "../../layouts/Header";
import AvatarHeader from "../../layouts/AvatarHeader";

import Button from "@restart/ui/esm/Button";
import axios from "axios";
import ReactTooltip from 'react-tooltip';
import Swal from 'sweetalert2';
import { Link } from "react-router-dom";

function Weapons(){
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

    const[display1,setDisplay1]=useState({
        potions:[],
  });

  const[display2,setDisplay2]=useState({
        outfit:[],
  });
  
  useEffect(() =>{
     axios.get(`/api/outfit`).then(res =>{
           if(res.data.status===200){
                
                 setDisplay2({
                       outfit:res.data.outfit
                      
                 })
                 
                 
           }
     })
  },[])
  const showItem =(event) =>{
    setClicked(event.target.value);
}
useEffect(()=>{
    setClicked(clicked);
},[clicked]);

  const buttonHandler=(e)=>{
     Swal.fire("You have successfully bought the item");
  }

    return(
        <div className="shop-parentOfAll">
              <Header page="shop"/>
              <AvatarHeader hasParty="true" hp={hp} hpTotal={hpTotal} hpBarWidth={hpBarWidth} hpHitWidth={hpHitWidth} HpIncreaseWidth={HpIncreaseWidth} xp={xp} xpTotal={xpTotal} />
              
              
              <div className="shop-main_shop">
                <div className="btn-group btn-group-lg" role="group">
                    <button type="button" name="All" onClick={showItem} className="btn btn-secondary" value="All">All</button>
                    <button type="button" name="Potions" onClick={showItem} className="btn btn-secondary" value="Potions">Potions</button>
                    <button type="button" name="Outfit" onClick={showItem} className="btn btn-secondary" value="Outfit">Outfit</button>
                    
                </div>
                <div>
        <Link to="/all">All</Link>
        <Link to="/potions">Potions</Link>
        <Link to="/weapons">Weapons</Link>
        <Link to="/outfit">Outfit</Link>
              </div>
              </div>

              <div className="shop-shop"> 
                <div className="shop-filter">
                       <button name="All" className="btn btn-secondary" onClick={showItem} value="All">All</button>
                       <button name="Warrior" className="btn btn-secondary"onClick={showItem} value="Warrior">Warrior</button>
                       <button name="Assassin" className="btn btn-secondary" onClick={showItem} value="Assassin">Assassin</button> 
                       <button name="Mage" className="btn btn-secondary" onClick={showItem} value="Mage">Mage</button> 
                  </div>
                 <div className="shop-category">
                 <div className="shop-categoryName">
                              <p>Weapons</p>
                        </div>
                        {display2.outfit.map((w,index)=>{
                             if(w.outfitType === "Weapon"){
                              return (
                                    <div data-tip data-for={w.name} key={index} className="shop-returnMap">
                                          <div className="shop-items"> 
                                                <div className="shop-itemsImage">
                                                <img src={w.image}></img>
                                                </div>
                                                <div className="shop-itemsInfo">
                                                      <h6>{w.name}</h6>
                                                      <Button onClick={buttonHandler}><img src="assets/images/currency.png"></img>{w.price}<br></br> BUY</Button>
                                                </div>
                                          </div> 
                                          <ReactTooltip id={w.name} place="right" aria-haspopup='true' className="shop-toolTip">
                                                <div className="shop-hide">
                                                      <div className="shop-itemsInfo">
                                                            <div className="shop-weaponInfo">
                                                                  <h5>Attributes</h5>
                                                                  <p>Physical Attack: {w.pAttack}</p>
                                                                  <p>Magical Attack: {w.mAttack}</p>
                                                                  <p>Physical Defense: {w.pDef}</p>
                                                                  <p>Magical Defense: {w.mDef}</p>
                                                                  <p>Strength: {w.str}</p>
                                                                  <p>Agility: {w.agi}</p>
                                                                  <p>Critical: {w.crit}</p>
                                                                  <p>Critical Damage: {w.critDmg}</p>
                                                            </div>
                                                      </div> 
                                                </div>
                                          </ReactTooltip>
                                    </div>     
                                    )
                             }
                          
                        })}
                   </div>
                
              </div>  

         </div>
   
    );
}

export default Weapons;
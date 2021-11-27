import React, { useState, useEffect } from "react";
import Header from "../../layouts/Header";
import AvatarHeader from "../../layouts/AvatarHeader";

import Button from "@restart/ui/esm/Button";
import axios from "axios";
import ReactTooltip from 'react-tooltip';
import Swal from 'sweetalert2';
import { Link } from "react-router-dom";

function Potions(){
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
  
 
  useEffect(()=>{
     axios.get(`/api/potions`).then(res =>{
           if(res.data.status===200){
                 setDisplay1({
                       potions:res.data.potions
                 });
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
                       <button className="btn btn-secondary">All</button>
                       <button className="btn btn-secondary">Health Potion</button>
                       <button className="btn btn-secondary">Powerup Potion</button> 
                  </div>
                 <div className="shop-category">
                        <div className="shop-categoryName">
                              <p>Health Potions</p>
                        </div>
                        {display1.potions.map((p,index)=>{
                               if(p.type === "Hp Potion"){
                              return (
                                    <div key={index} className="shop-returnMap">
                                          <div data-tip data-for={p.name} className="shop-items"> 
                                                <div className="shop-itemsImage">
                                                <img src={p.image}></img>
                                                </div>
                                                <div className="shop-itemsInfo">
                                                      <h6>{p.name}</h6>
                                                      <p>{p.size}</p>
                                                      <Button onClick={buttonHandler}><img src="assets/images/currency.png"></img>{p.price}<br></br> BUY</Button>
                                                </div>
                                          </div> 
                                          <ReactTooltip id={p.name} place="right" aria-haspopup='true' className="shop-toolTip">
                                                <div className="shop-hide">
                                                      <div className="shop-itemsInfo">
                                                            <p>{p.description}</p>
                                                      </div> 
                                                </div>
                                          </ReactTooltip>
                                    </div>
                                   )
                            }
                        })}
                        <div className="shop-categoryName">
                              <p>Powerup Potions</p>
                        </div>
                        {display1.potions.map((p,index)=>{
                               if(p.type === "Powerup Potion"){
                              return (
                                    <div key={index} className="shop-returnMap">
                                          <div data-tip data-for={p.name} className="shop-items"> 
                                                <div className="shop-itemsImage">
                                                <img src={p.image}></img>
                                                </div>
                                                <div className="shop-itemsInfo">
                                                      <h6>{p.name}</h6>
                                                      <p>{p.size}</p>
                                                      <Button onClick={buttonHandler}><img src="assets/images/currency.png"></img>{p.price}<br></br> BUY</Button>
                                                </div>
                                          </div> 
                                          <ReactTooltip id={p.name} place="right" aria-haspopup='true' className="shop-toolTip">
                                                <div className="shop-hide">
                                                      <div className="shop-itemsInfo">
                                                            <p>{p.description}</p>
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

export default Potions;
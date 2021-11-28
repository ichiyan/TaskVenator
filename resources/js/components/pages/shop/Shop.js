
import Button from "@restart/ui/esm/Button";
import {Link, React, useEffect, useState, 
      AddPotionForm, AddOutfitForm, 
      Swal, ReactTooltip,axios } from "../../../index";


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
        <section className="container party-section">
              
            <div className="shop-main_shop">
              <div className="shop-weaponForm"> 
                  <AddOutfitForm/> 
                  <AddPotionForm/>
             </div>
                   <div className="party-nav">
                        <div className="party-nav-item party-active-nav"><Link to="/all">All</Link></div>
                        <div className="party-nav-item"><Link to="/potions">Potions</Link></div>
                        <div className="party-nav-item"><Link to="/weapons">Weapons</Link></div>
                        <div className="party-nav-item "><Link to="/outfit">Outfit</Link></div>
                  </div>
              </div>
              <div className="shop-filtShop">
                      
              <div className="shop-shop"> 
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
                     
                        <div className="shop-categoryName">
                              <p>Costume</p>
                        </div>
                        {display2.outfit.map((w,index)=>{
                             if(w.outfitType === "Costume"){
                              return (
                                    <div data-tip data-for={w.name} key={index} className="shop-returnMap">
                                          <div className="shop-items"> 
                                                <div className="shop-itemsImage">
                                                <img src={w.image}></img>
                                                </div>
                                                <div className="shop-itemsInfo">
                                                      <h6>{w.name}</h6>
                                                      {/* <p>{p.size}</p> */}
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
    </section>
   
    );
}

export default Shop;
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

    const[charClass,setCharClass]=useState("All");
    const[rarity, setRarity]=useState("All");
    

  

  const[display2,setDisplay2]=useState({
        outfit:[],
  });
  
  const rarityHandler=(e)=>{
      setRarity(e.target.value);
   
      
  }
  const classHandler=(e)=>{
        setCharClass(e.target.value);
        
  }
  useEffect(() =>{
     axios.get(`/api/outfit`).then(res =>{
           if(res.data.status===200){
                
                 setDisplay2({
                       outfit:res.data.outfit
                      
                 })
                 
                 
           }
     })
  },[])



  const buttonHandler=(e)=>{
     Swal.fire("You have successfully bought the item");
  }

    return(
      <div className="shop-parentOfAll">
      <Header page="shop"/>
      <AvatarHeader hasParty="false" hp={hp} hpTotal={hpTotal} hpBarWidth={hpBarWidth} hpHitWidth={hpHitWidth} HpIncreaseWidth={HpIncreaseWidth} xp={xp} xpTotal={xpTotal} />
      
      
      <div className="shop-main_shop">
          <div>
                <Link to="/all">All</Link> &nbsp;
                <Link to="/potions">Potions</Link> &nbsp;
                <Link to="/weapons">Weapons</Link> &nbsp;
                <Link to="/outfit">Outfit</Link> &nbsp;
          </div>
      </div>
      <div className="shop-filtShop">
          <div className="shop-filter">
                      <p>Class</p>
                            <select name="class" className="form-select" onChange={classHandler}>
                                  <option value="All">All</option>
                                  <option value="Warrior">Warrior</option>
                                  <option value="Assassin">Assassin</option>
                                  <option value="Mage">Mage</option>
                            </select><br></br>
                            <p>Rarity</p>
                            <select name="class" className="form-select" onChange={rarityHandler}>
                                  <option value="All">All</option>
                                  <option value="Common">Common</option>
                                  <option value="Uncommon">Uncommon</option>
                                  <option value="Rare">Rare</option>
                            </select><br></br>
          </div>

          <div className="shop-shop"> 
             <div className="shop-category">
                      <div className="shop-categoryName">
                            <p>Outfit</p>
                      </div>
                      {display2.outfit.map((w,index)=>{
                            if(charClass==="All" && rarity==="All"){
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
                                                                            <h5>{w.type}&nbsp;Attributes</h5>
                                                                            <p>Class: {w.class}</p>
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
                                        }else if(charClass==="All" && rarity==="Common"){
                                              if(w.outfitType === "Weapon" && rarity===w.type){
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
                                                                                  <h5>{w.type}&nbsp;Attributes</h5>
                                                                                        <p>Class: {w.class}</p>
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
                                        }else if(charClass==="All" && rarity==="Rare"){
                                        if(w.outfitType === "Weapon" && rarity===w.type){
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
                                                                                  <h5>{w.type}&nbsp;Attributes</h5>
                                                                                  <p>Class: {w.class}</p>
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
                                              }else if(charClass==="All" && rarity==="Uncommon"){
                                                    if(w.outfitType === "Weapon" && rarity===w.type){
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
                                                                                              <h5>{w.type}&nbsp;Attributes</h5>
                                                                                              <p>Class: {w.class}</p>
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
                                              }else if(charClass==="Warrior" && rarity==="All"){
                                                    if(w.outfitType === "Weapon" && w.class===charClass){
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
                                                                                              <h5>{w.type}&nbsp;Attributes</h5>
                                                                                              <p>Class: {w.class}</p>
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
                                              }else if(charClass==="Warrior" && rarity==="Common"){
                                                    if(w.outfitType === "Weapon" && w.type===rarity && w.class===charClass){
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
                                                                                              <h5>{w.type}&nbsp;Attributes</h5>
                                                                                              <p>Class: {w.class}</p>
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
                                              }else if(charClass==="Warrior" && rarity==="Uncommon"){
                                                    if(w.outfitType === "Weapon" && w.type===rarity && w.class===charClass){
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
                                                                                              <h5>{w.type}&nbsp;Attributes</h5>
                                                                                              <p>Class: {w.class}</p>
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
                                              }else if(charClass==="Warrior" && rarity==="Rare"){
                                                    if(w.outfitType === "Weapon" && w.type===rarity && w.class===charClass){
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
                                                                                              <h5>{w.type}&nbsp;Attributes</h5>
                                                                                              <p>Class: {w.class}</p>
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
                                              }else if(charClass==="Assassin" && rarity==="All"){
                                                    if(w.outfitType === "Weapon" && w.class===charClass){
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
                                                                                              <h5>{w.type}&nbsp;Attributes</h5>
                                                                                              <p>Class: {w.class}</p>
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
                                              }else if(charClass==="Assassin" && rarity==="Common"){
                                                    if(w.outfitType === "Weapon" && w.type===rarity && w.class===charClass){
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
                                                                                              <h5>{w.type}&nbsp;Attributes</h5>
                                                                                              <p>Class: {w.class}</p>
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
                                              }else if(charClass==="Assassin" && rarity==="Uncommon"){
                                                    if(w.outfitType === "Weapon" && w.type===rarity && w.class===charClass){
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
                                                                                              <h5>{w.type}&nbsp;Attributes</h5>
                                                                                              <p>Class: {w.class}</p>
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
                                              }else if(charClass==="Assassin" && rarity==="Rare"){
                                                    if(w.outfitType === "Weapon" && w.type===rarity && w.class===charClass){
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
                                                                                              <h5>{w.type}&nbsp;Attributes</h5>
                                                                                              <p>Class: {w.class}</p>
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
                                              }else if(charClass==="Mage" && rarity==="All"){
                                                    if(w.outfitType === "Weapon" && w.class===charClass){
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
                                                                                              <h5>{w.type}&nbsp;Attributes</h5>
                                                                                              <p>Class: {w.class}</p>
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
                                              }else if(charClass==="Mage" && rarity==="Common"){
                                                    if(w.outfitType === "Weapon" && w.type===rarity && w.class===charClass){
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
                                                                                              <h5>{w.type}&nbsp;Attributes</h5>
                                                                                              <p>Class: {w.class}</p>
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
                                              }else if(charClass==="Mage" && rarity==="Uncommon"){
                                                    if(w.outfitType === "Weapon" && w.type===rarity && w.class===charClass){
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
                                                                                              <h5>{w.type}&nbsp;Attributes</h5>
                                                                                              <p>Class: {w.class}</p>
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
                                              }else if(charClass==="Mage" && rarity==="Rare"){
                                                    if(w.outfitType === "Weapon" && w.type===rarity && w.class===charClass){
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
                                                                                              <h5>{w.type}&nbsp;Attributes</h5>
                                                                                              <p>Class: {w.class}</p>
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
                                              }
                                        })}
                            </div>
                </div>
          </div>  

 </div>
   
    );
}

export default Weapons;
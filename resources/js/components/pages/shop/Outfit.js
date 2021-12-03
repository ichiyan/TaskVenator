
import Button from "@restart/ui/esm/Button";
import {Link, React, useEffect, useState, 
      AddPotionForm, AddOutfitForm, Swal, ReactTooltip,axios } from "../../../index";

function Outfit(){
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
      console.log(rarity);
      
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
        <section className="container party-section">
          
                  <div className="party-nav">
                        <div className="party-nav-item"><Link to="/all">All</Link></div>
                        <div className="party-nav-item"><Link to="/potions">Potions</Link></div>
                        <div className="party-nav-item"><Link to="/weapons">Weapons</Link></div>
                        <div className="party-nav-item"><Link to="/cards">Cards</Link></div>
                        <div className="party-nav-item party-active-nav"><Link to="/outfit">Outfit</Link></div>
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
                                          if(w.outfitType === "Costume"){
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
                                                      if(w.outfitType === "Costume" && rarity===w.type){
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
                                                if(w.outfitType === "Costume" && rarity===w.type){
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
                                                            if(w.outfitType === "Costume" && rarity===w.type){
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
                                                            if(w.outfitType === "Costume" && w.class===charClass){
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
                                                            if(w.outfitType === "Costume" && w.type===rarity && w.class===charClass){
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
                                                            if(w.outfitType === "Costume" && w.type===rarity && w.class===charClass){
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
                                                            if(w.outfitType === "Costume" && w.type===rarity && w.class===charClass){
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
                                                            if(w.outfitType === "Costume" && w.class===charClass){
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
                                                            if(w.outfitType === "Costume" && w.type===rarity && w.class===charClass){
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
                                                            if(w.outfitType === "Costume" && w.type===rarity && w.class===charClass){
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
                                                            if(w.outfitType === "Costume" && w.type===rarity && w.class===charClass){
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
                                                            if(w.outfitType === "Costume" && w.class===charClass){
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
                                                            if(w.outfitType === "Costume" && w.type===rarity && w.class===charClass){
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
                                                            if(w.outfitType === "Costume" && w.type===rarity && w.class===charClass){
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
                                                            if(w.outfitType === "Costume" && w.type===rarity && w.class===charClass){
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

         </section>
   
    );
}

export default Outfit;
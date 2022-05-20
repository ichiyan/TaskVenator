import Button from "@restart/ui/esm/Button";
import {Link, React, useEffect, useState, 
      AddPotionForm, AddOutfitForm, AddCardForm, Swal, ReactTooltip,axios } from "../../../index";
import InventoryPotionFilter from "./InventoryPotionFilter";
import InventoryWeaponFilter from "./InventoryWeaponFilter";
import InventoryOutfitFilter from "./InventoryOutfitFilter";
function Inventory(){
  
    const[inventoryPotion,setInventoryPotion]=useState({
        potions:[],
    });
    const[inventoryWeapon,setInventoryWeapon]=useState({
        weapons:[],
    });
    const[inventoryArmor,setInventoryArmor]=useState({
        armors:[],
    });
    const[authId, setAuthId]=useState("");
    const[countHealth, setCountHealth]=useState(0);
    const[countPower, setCountPower]=useState(0);
    useEffect(() =>{
        let healPotion =0;
        let powerPotion =0;
        axios.get(`/api/inventory`).then(res =>{
            if(res.data.status===200){
                // console.log(res.data)
                // console.log(res.data.items)
                // console.log(res.data.items[0].user_id)
                // console.log(res.data.items[0].name)
                // console.log(res.data.auth_id)

                setInventoryPotion({
                    potions:res.data.potion
                   
                })
                setInventoryWeapon({
                     weapons:res.data.weapon
               
                })
                setInventoryArmor({
                    armors:res.data.item
           
                })
                setAuthId(res.data.auth_id);
                res.data.potion.map(item=>{
                    if(item.type === "Hp Potion"){
                          healPotion++;
                    }else{
                        powerPotion++;
                 
                    }
              })

              setCountHealth(healPotion);
              setCountPower(powerPotion);
          }
        })
     },[])
    //  useEffect(()=>{
    //     console.log(inventoryArmor);
    //     console.log(inventoryPotion);
    //     console.log(inventoryWeapon);
    //  },[inventoryArmor,inventoryPotion,inventoryWeapon]);
    return(
        <section className="container party-section">
            
              <div className="party-nav">
                <div className="party-nav-item party-active-nav"><Link to="/inventory">All</Link></div>
                <div className="party-nav-item"><Link to="/inventoryPotions">Potions</Link></div>
                <div className="party-nav-item"><Link to="/inventoryWeapons">Weapons</Link></div>   
                <div className="party-nav-item"><Link to="/inventoryOutfit">Outfit</Link></div>
              </div>
           
              <div className="inventory-filtShop">
    
                <div className="inventory-shop">      
                 <div className="inventory-category1">
                            
                          {(inventoryPotion.potions.length!==0 && countHealth!==0)? 
                                    <div className="shop-categoryName">
                                         <h5>Health Potions</h5>
                                  </div> :""}
                              {inventoryPotion.potions.map((p,index)=>{
                                     if(p.inventUserId === authId){
                                          if(p.type==="Hp Potion"){
                                                return (
                                                      <div key={index} className="shop-outfitFilter">
                                                            <InventoryPotionFilter data= {p} value={p.id}/>
                                                      </div> 
                                                )
                                          }
                                        }
                                  })}

                        {(inventoryPotion.potions.length!==0 && countPower!==0)? 
                              <div className="shop-categoryName">
                                    <h5>Powerup Potions</h5>
                              </div> :""}
                              
                              {inventoryPotion.potions.map((p,index)=>{
                                     if(p.inventUserId === authId){
                                          if(p.type==="Powerup Potion"){
                                                return (
                                                      <div key={index} className="shop-outfitFilter">
                                                            <InventoryPotionFilter data= {p} value={p.id}/>
                                                      </div> 
                                                )
                                          }
                                        }
                              })}
                               <div className="shop-categoryName">
                                    <h5>Weapons</h5>
                              </div>
                              {/* <div className="shop-categoryName">
                                 <p>Common</p>
                              </div> */}
                              {inventoryWeapon.weapons.map((w,index)=>{
                             if(w.inventUserId === authId){
                                    // if(w.rarity_type==="Common"){
                                            return (
                                                <div key={index} className="inventory-outfitFilter">
                                                    <InventoryWeaponFilter data= {w} inventory={inventoryWeapon} setInventory={setInventoryWeapon}/>
                                                </div>   
                                            ) 
                                            // }
                                }
                        })}
                         {/* <div className="shop-categoryName">
                                 <p>Uncommon</p>
                              </div>
                              {inventoryWeapon.weapons.map((w,index)=>{
                              if(w.inventUserId === authId){
                                    if(w.rarity_type==="Uncommon"){
                                            return (
                                                <div key={index} className="inventory-outfitFilter">
                                                    <InventoryWeaponFilter data= {w}/>
                                                </div>   
                                            ) 
                                            }
                                }
                        })}
                            <div className="shop-categoryName">
                                 <p>Rare</p>
                              </div>
                              {inventoryWeapon.weapons.map((w,index)=>{
                              if(w.inventUserId === authId){
                                    if(w.rarity_type==="Rare"){
                                            return (
                                                <div key={index} className="inventory-outfitFilter">
                                                    <InventoryWeaponFilter data= {w}/>
                                                </div>   
                                            ) 
                                            }
                                }
                        })} */}
                            <div className="shop-categoryName">
                                 <h5>Armors</h5>
                              </div>    
                              <div className="shop-categoryName">
                            <p>Head</p>
                        </div>
                        {inventoryArmor.armors.map((w,index)=>{
                               if(w.inventUserId === authId){
                                    if(w.body_part==="Head"){
                                            return (
                                                <div key={index} className="inventory-outfitFilter">
                                                    <InventoryOutfitFilter data= {w} inventory={inventoryArmor} setInventory={setInventoryArmor} />
                                                </div>   
                                            ) 
                                    }
                                    }       
                        })}
                        <div className="shop-categoryName">
                            <p>Arms</p>
                        </div>
                        {inventoryArmor.armors.map((w,index)=>{
                               if(w.inventUserId === authId){
                                    if(w.body_part==="Arms"){
                                            return (
                                                <div key={index} className="inventory-outfitFilter">
                                                    <InventoryOutfitFilter data= {w} inventory={inventoryArmor} setInventory={setInventoryArmor} />
                                                </div>   
                                            ) 
                                    }
                                 }       
                        })}
                        <div className="shop-categoryName">
                            <p>Torso</p>
                        </div>
                        {inventoryArmor.armors.map((w,index)=>{
                               if(w.inventUserId === authId){
                                    if(w.body_part==="Torso"){
                                            return (
                                                <div key={index} className="inventory-outfitFilter">
                                                    <InventoryOutfitFilter data= {w} inventory={inventoryArmor} setInventory={setInventoryArmor} />
                                                </div>   
                                            ) 
                                    }
                                }       
                        })}
                        <div className="shop-categoryName">
                            <p>Legs</p>
                        </div>
                        {inventoryArmor.armors.map((w,index)=>{
                               if(w.inventUserId === authId){
                                    if(w.body_part==="Legs"){
                                            return (
                                                <div key={index} className="inventory-outfitFilter">
                                                    <InventoryOutfitFilter data= {w} inventory={inventoryArmor} setInventory={setInventoryArmor}/>
                                                </div>   
                                            ) 
                                    }
                                }       
                        })}
                        <div className="shop-categoryName">
                            <p>Footwear</p>
                        </div>
                        {inventoryArmor.armors.map((w,index)=>{
                               if(w.inventUserId === authId){
                                    if(w.body_part==="Footwear"){
                                            return (
                                                <div key={index} className="inventory-outfitFilter">
                                                    <InventoryOutfitFilter data= {w}  inventory={inventoryArmor} setInventory={setInventoryArmor}/>
                                                </div>   
                                            )
                                    } 
                                 }       
                        })}
                        </div> 
                      
                 </div>  
                 <div className="inventory-preview2">
                     <div className="inventory-equipped1">
                            <div className="inventory-categoryName">
                                <h3>Equipped Items</h3>
                            </div>
                            <div data-tip data-for="test" className="inventory-equippedItemsInfo"> 
                                <div className="inventory-itemsImage">
                                <img></img>
                                </div>
                                <div className="inventory-itemsInfo">
                                    <h6>asdasd</h6>
                                    <p>asdasd</p>
                                </div>
                            </div> 
                            <ReactTooltip id="test" place="right" aria-haspopup='true' className="inventory-toolTip">
                                    <div className="inventory-hide">
                                        <div className="inventory-itemsInfo">
                                                <p>asdasdasd</p>
                                        </div> 
                                    </div>
                            </ReactTooltip>
                            <div className="inventory-categoryName">
                                <h5>Weapon</h5>
                            </div>
                     </div>
                     <div className="inventory-equipped2">
                         <div className="inventory-equipped2Left">
                            <div data-tip data-for="test" className="inventory-equippedItemsInfo"> 
                                <div className="inventory-itemsImage">
                                <img></img>
                                </div>
                                <div className="inventory-itemsInfo">
                                    <h6>asdasd</h6>
                                    <p>asdasd</p>
                                </div>
                            </div> 
                            <ReactTooltip id="test" place="right" aria-haspopup='true' className="inventory-toolTip">
                                    <div className="inventory-hide">
                                        <div className="inventory-itemsInfo">
                                                <p>asdasdasd</p>
                                        </div> 
                                    </div>
                            </ReactTooltip>
                            <div className="inventory-categoryName">
                                <h5>Costume</h5>
                            </div>
                        </div>
                        <div className="inventory-equipped2Right">
                            <div data-tip data-for="test" className="inventory-equippedItemsInfo"> 
                                <div className="inventory-itemsImage">
                                <img></img>
                                </div>
                                <div className="inventory-itemsInfo">
                                    <h6>asdasd</h6>
                                    <p>asdasd</p>
                                </div>
                            </div> 
                            <ReactTooltip id="test" place="right" aria-haspopup='true' className="inventory-toolTip">
                                    <div className="inventory-hide">
                                        <div className="inventory-itemsInfo">
                                                <p>asdasdasd</p>
                                        </div> 
                                    </div>
                            </ReactTooltip>
                            <div className="inventory-categoryName">
                                <h5>Potion</h5>
                            </div>
                        </div>
                     </div>
                </div>
            </div>
      </section>
    );
}
export default Inventory;
import Button from "@restart/ui/esm/Button";
import {Link, React, useEffect, useState, 
      AddPotionForm, AddOutfitForm, AddCardForm, Swal, ReactTooltip,axios } from "../../../index";
import InventoryWeaponFilter from "./InventoryWeaponFilter";
function InventoryWeapons(){
    const[inventory,setInventory]=useState({
        weapons:[],
  });
  const[authId, setAuthId]=useState("");
  const[preview, setPreview]=useState("");
  const[charClass,setCharClass]=useState("All");
  const[rarity, setRarity]=useState("All");
  const[bodyPart, setBodyPart]=useState("All");
    useEffect(() =>{
        axios.get(`/api/inventory`).then(res =>{
            if(res.data.status===200){
             
                console.log(res.data.weapon)
                setInventory({
                    weapons:res.data.weapon
                   
              })
              
              setAuthId(res.data.auth_id);
              
               
                 
          }
        })
     },[])
     useEffect(()=>{
           
            
     },[inventory])

     const previewImage =(event)=>{
        setPreview(event)
   }
   const rarityHandler=(e)=>{
    setRarity(e.target.value);
}
    return(
        <section className="container party-section">
                <div className="party-nav">
                <div className="party-nav-item"><Link to="/inventory">All</Link></div>
                <div className="party-nav-item"><Link to="/inventoryPotions">Potions</Link></div>
                <div className="party-nav-item party-active-nav"><Link to="/inventoryWeapons">Weapons</Link></div>   
                <div className="party-nav-item"><Link to="/inventoryOutfit">Outfit</Link></div>
              </div>

              <div className="inventory-filtShop">
                  <div className="inventory-filter">
                                    <p>Rarity</p>
                                    <select name="class" className="form-select" onChange={rarityHandler}>
                                          <option value="All">All</option>
                                          <option value="Common">Common</option>
                                          <option value="Uncommon">Uncommon</option>
                                          <option value="Rare">Rare</option>
                                    </select><br></br>
                  </div>
                <div className="inventory-shop">      
                 <div className="inventory-category">

                     {/* RARITY:ALL common to rare DISPLAY ALL WEAPONS */}
                        {(rarity==="All")?<div>
                        <div className="shop-categoryName">
                            <h5>Common</h5>
                        </div>
                        {inventory.weapons.map((w,index)=>{
                            if(w.inventUserId === authId){
                                    if(w.rarity_type==="Common"){
                                            return (
                                                <div key={index} className="inventory-outfitFilter">
                                                    <InventoryWeaponFilter data= {w} setPreview={setPreview}/>
                                                </div>   
                                            ) 
                                    }
                                }
                        })}
                            </div>:""
                        }
                          {(rarity==="All")?<div>
                        <div className="shop-categoryName">
                            <h5>Uncommon</h5>
                        </div>
                        {inventory.weapons.map((w,index)=>{
                            if(w.inventUserId === authId){
                                    if(w.rarity_type==="Uncommon"){
                                            return (
                                                <div key={index} className="inventory-outfitFilter">
                                                    <InventoryWeaponFilter data= {w} setPreview={setPreview}/>
                                                </div>   
                                            ) 
                                    }
                                }
                        })}
                            </div>:""
                        }
                          {(rarity==="All")?<div>
                        <div className="shop-categoryName">
                            <h5>Rare</h5>
                        </div>
                        {inventory.weapons.map((w,index)=>{
                            if(w.inventUserId === authId){
                                    if(w.rarity_type==="Rare"){
                                            return (
                                                <div key={index} className="inventory-outfitFilter">
                                                    <InventoryWeaponFilter data= {w} setPreview={setPreview}/>
                                                </div>   
                                            ) 
                                    }
                                }
                        })}
                            </div>:""
                        }
                        {/* RARITY:Common Display Common Weapons */}
                        {(rarity==="Common")?<div>
                        <div className="shop-categoryName">
                            <h5>Common</h5>
                        </div>
                        {inventory.weapons.map((w,index)=>{
                            if(w.inventUserId === authId){
                                    if(w.rarity_type==="Common"){
                                            return (
                                                <div key={index} className="inventory-outfitFilter">
                                                    <InventoryWeaponFilter data= {w} setPreview={setPreview}/>
                                                </div>   
                                            ) 
                                    }
                                }
                        })}
                            </div>:""
                        }
                          {(rarity==="Uncommon")?<div>
                        <div className="shop-categoryName">
                            <h5>Uncommon</h5>
                        </div>
                        {inventory.weapons.map((w,index)=>{
                            if(w.inventUserId === authId){
                                    if(w.rarity_type===rarity){
                                            return (
                                                <div key={index} className="inventory-outfitFilter">
                                                    <InventoryWeaponFilter data= {w} setPreview={setPreview}/>
                                                </div>   
                                            ) 
                                    }
                                }
                        })}
                            </div>:""
                        }
                          {(rarity==="Rare")?<div>
                        <div className="shop-categoryName">
                            <h5>Rare</h5>
                        </div>
                        {inventory.weapons.map((w,index)=>{
                            if(w.inventUserId === authId){
                                    if(w.rarity_type===rarity){
                                            return (
                                                <div key={index} className="inventory-outfitFilter">
                                                    <InventoryWeaponFilter data= {w} setPreview={setPreview}/>
                                                </div>   
                                            ) 
                                    }
                                }
                        })}
                            </div>:""
                        }
                        </div> 
                 </div>  



                 <div className="inventory-preview">
                     <div className="inventory-equipped1">
                            <div className="inventory-categoryName">
                                <h3>Equipped Items</h3>
                            </div>
                            <div data-tip data-for="test" className="inventory-equippedItemsInfo"> 
                                <div className="inventory-itemsImage">
                                <img src={preview}></img>
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
                                <img ></img>
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

export default InventoryWeapons;
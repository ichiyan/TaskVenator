import Button from "@restart/ui/esm/Button";
import {Link, React, useEffect, useState, 
      AddPotionForm, AddOutfitForm, AddCardForm, Swal, ReactTooltip,axios } from "../../../index";
import InventoryPotionFilter from "./InventoryPotionFilter";
function InventoryPotions(){
    const[inventory,setInventory]=useState({
        potions:[],
  });
    const[authId, setAuthId]=useState("");
    const[preview, setPreview]=useState("");
    const[potionType,setPotionType]=useState("All");
    const[size, setSize]=useState("All");
    useEffect(() =>{
        axios.get(`/api/inventory`).then(res =>{
            if(res.data.status===200){
                
                
                setInventory({
                    potions:res.data.potion
                   
              })
              
              setAuthId(res.data.auth_id);
              
               
                 
          }
        })
     },[])
     useEffect(()=>{
            
            console.log(inventory.potions);
     },[inventory])

     const previewImage =(event)=>{
        setPreview(event)
   }
   const potionHandler=(e)=>{
        
    setPotionType(e.target.value);
    
    }
    const sizeHandler=(e)=>{
      setSize(e.target.value);
    }
    return(
        <section className="container party-section">
                <div className="party-nav">
                <div className="party-nav-item"><Link to="/inventory">All</Link></div>
                <div className="party-nav-item party-active-nav"><Link to="/inventoryPotions">Potions</Link></div>
                <div className="party-nav-item"><Link to="/inventoryWeapons">Weapons</Link></div>   
                <div className="party-nav-item"><Link to="/inventoryOutfit">Outfit</Link></div>
              </div>
            
              <div className="inventory-filtShop">
                  <div className="inventory-filter">
                                      <p>Potion Type</p>
                                          <select name="class" className="form-select" onChange={potionHandler}>
                                                <option value="All">All</option>
                                                <option value="Hp Potion">Hp Potion</option>
                                                <option value="Powerup Potion">Powerup Potion</option>
                                          </select><br></br>
                                          <p>Size</p>
                                          <select name="class" className="form-select" onChange={sizeHandler}>
                                                <option value="All">All</option>
                                                <option value="Small">Small</option>
                                                <option value="Medium">Medium</option>
                                                <option value="Large">Large</option>
                                          </select><br></br>
                  </div>
                <div className="inventory-shop">      
                 <div className="inventory-category">
                            
                     {/* POTIONTYPE:ALL SIZE: ALL (DISPLAY ALL POTIONS) */}
                    { (potionType === "All" && size==="All")?
                              <div className="shop-categoryName">
                                    <p>Health Potions</p>
                              </div>:""
                              }
                              {inventory.potions.map((p,index)=>{
                                    if(potionType === "All" && size==="All"){
                                          if(p.type==="Hp Potion"){
                                                return (
                                                      <div key={index} className="shop-outfitFilter">
                                                            <InventoryPotionFilter data= {p} value={p.id}/>
                                                      </div> 
                                                )
                                          }
                                    }
                              })}
                        { (potionType === "All" && size==="All")?
                              <div className="shop-categoryName">
                                    <p>Powerup Potions</p>
                              </div>:""
                              }
                              {inventory.potions.map((p,index)=>{
                                    if(potionType === "All" && size==="All"){
                                          if(p.type==="Powerup Potion"){
                                                return (
                                                      <div key={index} className="shop-outfitFilter">
                                                            <InventoryPotionFilter data= {p} value={p.id}/>
                                                      </div> 
                                                )
                                          }
                                    }
                              })}
                        {/* POTIONTYPE:ALL SIZE: SMALL TO LARGE */}
                    { (potionType === "All" && size==="Small")?
                              <div className="shop-categoryName">
                                    <p>Health Potions</p>
                              </div>:""
                              }
                              {inventory.potions.map((p,index)=>{
                                   if (potionType === "All" && size==="Small"){
                                          if(p.type==="Hp Potion" && p.size===size){
                                                return (
                                                      <div key={index} className="shop-outfitFilter">
                                                            <InventoryPotionFilter data= {p} value={p.id}/>
                                                      </div> 
                                                )
                                                }
                                    }
                              })}
                   { (potionType === "All" && size==="Small")?
                              <div className="shop-categoryName">
                                    <p>Powerup Potions</p>
                              </div>:""
                              }
                              {inventory.potions.map((p,index)=>{
                                   if(potionType === "All" && size==="Small"){
                                          if(p.type==="Powerup Potion" && p.size===size){
                                                return (
                                                      <div key={index} className="shop-outfitFilter">
                                                            <InventoryPotionFilter data= {p} value={p.id}/>
                                                      </div> 
                                                )
                                            }
                                    }
                              })}
                        {/* POTIONTYPE:ALL SIZE: Medium */}
                    { (potionType === "All" && size==="Medium")?
                              <div className="shop-categoryName">
                                    <p>Health Potions</p>
                              </div>:""
                              }
                              {inventory.potions.map((p,index)=>{
                                   if (potionType === "All" && size==="Medium"){
                                          if(p.type==="Hp Potion" && p.size===size){
                                                return (
                                                      <div key={index} className="shop-outfitFilter">
                                                            <InventoryPotionFilter data= {p} value={p.id}/>
                                                      </div> 
                                                )
                                                }
                                    }
                              })}
                   { (potionType === "All" && size==="Medium")?
                              <div className="shop-categoryName">
                                    <p>Powerup Potions</p>
                              </div>:""
                              }
                              {inventory.potions.map((p,index)=>{
                                   if(potionType === "All" && size==="Medium"){
                                          if(p.type==="Powerup Potion" && p.size===size){
                                                return (
                                                      <div key={index} className="shop-outfitFilter">
                                                            <InventoryPotionFilter data= {p} value={p.id}/>
                                                      </div> 
                                                )
                                            }
                                    }
                              })}
                         {/* POTIONTYPE:ALL SIZE: LARGE*/}
                    { (potionType === "All" && size==="Large")?
                              <div className="shop-categoryName">
                                    <p>Health Potions</p>
                              </div>:""
                              }
                              {inventory.potions.map((p,index)=>{
                                   if (potionType === "All" && size==="Large"){
                                          if(p.type==="Hp Potion" && p.size===size){
                                                return (
                                                      <div key={index} className="shop-outfitFilter">
                                                            <InventoryPotionFilter data= {p} value={p.id}/>
                                                      </div> 
                                                )
                                                }
                                    }
                              })}
                   { (potionType === "All" && size==="Large")?
                              <div className="shop-categoryName">
                                    <p>Powerup Potions</p>
                              </div>:""
                              }
                              {inventory.potions.map((p,index)=>{
                                   if(potionType === "All" && size==="Large"){
                                          if(p.type==="Powerup Potion" && p.size===size){
                                                return (
                                                      <div key={index} className="shop-outfitFilter">
                                                            <InventoryPotionFilter data= {p} value={p.id}/>
                                                      </div> 
                                                )
                                            }
                                    }
                              })}
                         {/* POTIONTYPE:ALL SIZE: LARGE*/}
                    { (potionType === "All" && size==="Large")?
                              <div className="shop-categoryName">
                                    <p>Health Potions</p>
                              </div>:""
                              }
                              {inventory.potions.map((p,index)=>{
                                   if (potionType === "All" && size==="Large"){
                                          if(p.type==="Hp Potion" && p.size===size){
                                                return (
                                                      <div key={index} className="shop-outfitFilter">
                                                            <InventoryPotionFilter data= {p} value={p.id}/>
                                                      </div> 
                                                )
                                                }
                                    }
                              })}
                              {/* POTIONTYPE::HPPOTION SIZE:ALL */}
                   { (potionType === "Hp Potion" && size==="All")?
                              <div className="shop-categoryName">
                                    <p>Small</p>
                              </div>:""
                              }
                              {inventory.potions.map((p,index)=>{
                                   if(potionType === "Hp Potion" && size==="All"){
                                          if(p.type==="Hp Potion" && p.size==="Small"){
                                                return (
                                                      <div key={index} className="shop-outfitFilter">
                                                            <InventoryPotionFilter data= {p} value={p.id}/>
                                                      </div> 
                                                )
                                            }
                                    }
                              })}
                               { (potionType === "Hp Potion" && size==="All")?
                              <div className="shop-categoryName">
                                    <p>Medium</p>
                              </div>:""
                              }
                              {inventory.potions.map((p,index)=>{
                                   if(potionType === "Hp Potion" && size==="All"){
                                          if(p.type==="Hp Potion" && p.size==="Medium"){
                                                return (
                                                      <div key={index} className="shop-outfitFilter">
                                                            <InventoryPotionFilter data= {p} value={p.id}/>
                                                      </div> 
                                                )
                                            }
                                    }
                              })}
                                { (potionType === "Hp Potion" && size==="All")?
                              <div className="shop-categoryName">
                                    <p>Large</p>
                              </div>:""
                              }
                              {inventory.potions.map((p,index)=>{
                                   if(potionType === "Hp Potion" && size==="All"){
                                          if(p.type==="Hp Potion" && p.size==="Large"){
                                                return (
                                                      <div key={index} className="shop-outfitFilter">
                                                            <InventoryPotionFilter data= {p} value={p.id}/>
                                                      </div> 
                                                )
                                            }
                                    }
                              })}
                            
                                {/* POTIONTYPE::HPPOTION SIZE:Small down to large */}
                   { (potionType === "Hp Potion" && size==="Small")?
                              <div className="shop-categoryName">
                                    <p>Small</p>
                              </div>:""
                              }
                              {inventory.potions.map((p,index)=>{
                                   if(potionType === "Hp Potion" && size==="Small"){
                                          if(p.type==="Hp Potion" && p.size==="Small"){
                                                return (
                                                      <div key={index} className="shop-outfitFilter">
                                                            <InventoryPotionFilter data= {p} value={p.id}/>
                                                      </div> 
                                                )
                                            }
                                    }
                              })}
                               { (potionType === "Hp Potion" && size==="Medium")?
                              <div className="shop-categoryName">
                                    <p>Medium</p>
                              </div>:""
                              }
                              {inventory.potions.map((p,index)=>{
                                   if(potionType === "Hp Potion" && size==="Medium"){
                                          if(p.type==="Hp Potion" && p.size==="Medium"){
                                                return (
                                                      <div key={index} className="shop-outfitFilter">
                                                            <InventoryPotionFilter data= {p} value={p.id}/>
                                                      </div> 
                                                )
                                            }
                                    }
                              })}
                                { (potionType === "Hp Potion" && size==="Large")?
                              <div className="shop-categoryName">
                                    <p>Large</p>
                              </div>:""
                              }
                              {inventory.potions.map((p,index)=>{
                                   if(potionType === "Hp Potion" && size==="Large"){
                                          if(p.type==="Hp Potion" && p.size==="Large"){
                                                return (
                                                      <div key={index} className="shop-outfitFilter">
                                                            <InventoryPotionFilter data= {p} value={p.id}/>
                                                      </div> 
                                                )
                                            }
                                    }
                              })}

                        {/* POTIONTYPE::POWERUP POTION SIZE:ALL */}
                   { (potionType === "Powerup Potion" && size==="All")?
                              <div className="shop-categoryName">
                                    <p>Small</p>
                              </div>:""
                              }
                              {inventory.potions.map((p,index)=>{
                                   if(potionType === "Powerup Potion" && size==="All"){
                                          if(p.type==="Powerup Potion" && p.size==="Small"){
                                                return (
                                                      <div key={index} className="shop-outfitFilter">
                                                            <InventoryPotionFilter data= {p} value={p.id}/>
                                                      </div> 
                                                )
                                            }
                                    }
                              })}
                               { (potionType === "Powerup Potion" && size==="All")?
                              <div className="shop-categoryName">
                                    <p>Medium</p>
                              </div>:""
                              }
                              {inventory.potions.map((p,index)=>{
                                   if(potionType === "Powerup Potion" && size==="All"){
                                          if(p.type==="Powerup Potion" && p.size==="Medium"){
                                                return (
                                                      <div key={index} className="shop-outfitFilter">
                                                            <InventoryPotionFilter data= {p} value={p.id}/>
                                                      </div> 
                                                )
                                            }
                                    }
                              })}
                                { (potionType === "Powerup Potion" && size==="All")?
                              <div className="shop-categoryName">
                                    <p>Large</p>
                              </div>:""
                              }
                              {inventory.potions.map((p,index)=>{
                                   if(potionType === "Powerup Potion" && size==="All"){
                                          if(p.type==="Powerup Potion" && p.size==="Large"){
                                                return (
                                                      <div key={index} className="shop-outfitFilter">
                                                            <InventoryPotionFilter data= {p} value={p.id}/>
                                                      </div> 
                                                )
                                            }
                                    }
                              })}

                              {/* POTIONTYPE::POWERUP POTION SIZE:Small down to large */}
                   { (potionType === "Powerup Potion" && size==="Small")?
                              <div className="shop-categoryName">
                                    <p>Small</p>
                              </div>:""
                              }
                              {inventory.potions.map((p,index)=>{
                                   if(potionType === "Powerup Potion" && size==="Small"){
                                          if(p.type==="Powerup Potion" && p.size==="Small"){
                                                return (
                                                      <div key={index} className="shop-outfitFilter">
                                                            <InventoryPotionFilter data= {p} value={p.id}/>
                                                      </div> 
                                                )
                                            }
                                    }
                              })}
                               { (potionType === "Powerup Potion" && size==="Medium")?
                              <div className="shop-categoryName">
                                    <p>Medium</p>
                              </div>:""
                              }
                              {inventory.potions.map((p,index)=>{
                                   if(potionType === "Powerup Potion" && size==="Medium"){
                                          if(p.type==="Powerup Potion" && p.size==="Medium"){
                                                return (
                                                      <div key={index} className="shop-outfitFilter">
                                                            <InventoryPotionFilter data= {p} value={p.id}/>
                                                      </div> 
                                                )
                                            }
                                    }
                              })}
                                { (potionType === "Powerup Potion" && size==="Large")?
                              <div className="shop-categoryName">
                                    <p>Large</p>
                              </div>:""
                              }
                              {inventory.potions.map((p,index)=>{
                                   if(potionType === "Powerup Potion" && size==="Large"){
                                          if(p.type==="Powerup Potion" && p.size==="Large"){
                                                return (
                                                      <div key={index} className="shop-outfitFilter">
                                                            <InventoryPotionFilter data= {p} value={p.id}/>
                                                      </div> 
                                                )
                                            }
                                    }
                              })}
                              
                    
                    
                        </div> 
                 </div>  


                 <div className="inventory-preview">
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

export default InventoryPotions;
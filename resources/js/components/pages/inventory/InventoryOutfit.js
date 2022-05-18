import Button from "@restart/ui/esm/Button";
import {Link, React, useEffect, useState, 
      AddPotionForm, AddOutfitForm, AddCardForm, Swal, ReactTooltip,axios } from "../../../index";
import InventoryOutfitFilter from "./InventoryOutfitFilter";

function InventoryOutfit(){
    const[inventory,setInventory]=useState({
        items:[],
  });
    const[head, setHead]=useState({
        head:[],
    })
    const[authId, setAuthId]=useState("");
    const[preview, setPreview]=useState("");
    const[charClass,setCharClass]=useState("All");
    const[rarity, setRarity]=useState("All");
    const[bodyPart, setBodyPart]=useState("All");
    useEffect(() =>{
        axios.get(`/api/inventory`).then(res =>{
            if(res.data.status===200){
     
                setInventory({
                   items:res.data.item
                   
              })
              
              setAuthId(res.data.auth_id);
              
               for(let i; i<inventory.items.length; i++){
                   if(inventory.items[i].body_part === "Head"){
                     
                            console.log(inventory.items)
                       
                   }
               }
                 
          }
        })
     },[])

     useEffect(()=>{
        console.log(inventory.items)
        // console.log(head)
         
     },[inventory])

     const previewImage =(event)=>{
        setPreview(event)
   }
   const rarityHandler=(e)=>{
    setRarity(e.target.value);
}
const classHandler=(e)=>{
      setCharClass(e.target.value);
      
}
const bodyPartHandler=(e)=>{
      setBodyPart(e.target.value);
      
}
    return(
        <section className="container party-section">
            
              <div className="party-nav">
                <div className="party-nav-item"><Link to="/inventory">All</Link></div>
                <div className="party-nav-item"><Link to="/inventoryPotions">Potions</Link></div>
                <div className="party-nav-item"><Link to="/inventoryWeapons">Weapons</Link></div>   
                <div className="party-nav-item party-active-nav"><Link to="/inventoryOutfit">Outfit</Link></div>
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
                                    <p>Body Part</p>
                                    <select name="class" className="form-select" onChange={bodyPartHandler}>
                                          <option value="All">All</option>
                                          <option value="Head">Head</option>
                                          <option value="Arms">Arms</option>
                                          <option value="Torso">Torso</option>
                                          <option value="Legs">Legs</option>
                                          <option value="Footwear">Footwear</option>
                                    </select><br></br>
                  </div>
                <div className="inventory-shop">      
                 <div className="inventory-category">      
                        {/* RARITY: ALL BODYPART: ALL (DISPLAYING ALL ARMORS) */}
                        {(rarity==="All" && bodyPart==="All" )?<div>
                        <div className="shop-categoryName">
                            <h5>Head</h5>
                        </div>
                        {inventory.items.map((w,index)=>{
                            if(w.inventUserId === authId){
                                    if(w.body_part==="Head"){
                                            return (
                                                <div key={index} className="inventory-outfitFilter">
                                                    <InventoryOutfitFilter data= {w} setPreview={setPreview}/>
                                                </div>   
                                            ) 
                                    }
                                }
                        })}
                            </div>:""
                        }
                        {(rarity==="All" && bodyPart==="All" )?<div>
                        <div className="shop-categoryName">
                            <h5>Arms</h5>
                        </div>
                        {inventory.items.map((w,index)=>{
                            if(w.inventUserId === authId){
                                    if(w.body_part==="Arms"){
                                        return (
                                            <div key={index} className="inventory-outfitFilter">
                                                <InventoryOutfitFilter data= {w} setPreview={setPreview}/>
                                            </div>   
                                        ) 
                                }
                            }
                        })}
                            </div>:""
                        }
                        {(rarity==="All" && bodyPart==="All" )?<div>
                        <div className="shop-categoryName">
                            <h5>Torso</h5>
                        </div>
                        {inventory.items.map((w,index)=>{
                            if(w.inventUserId === authId){
                                    if(w.body_part==="Torso"){
                                        return (
                                            <div key={index} className="inventory-outfitFilter">
                                                <InventoryOutfitFilter data= {w} setPreview={setPreview}/>
                                            </div>   
                                        ) 
                                }
                            }
                        })}
                            </div>:""
                        }
                        {(rarity==="All" && bodyPart==="All" )?<div>
                        <div className="shop-categoryName">
                            <h5>Legs</h5>
                        </div>
                        {inventory.items.map((w,index)=>{
                            if(w.inventUserId === authId){
                                    if(w.body_part==="Legs"){
                                        return (
                                            <div key={index} className="inventory-outfitFilter">
                                                <InventoryOutfitFilter data= {w} setPreview={setPreview}/>
                                            </div>   
                                        ) 
                                }
                            }
                        })}
                            </div>:""
                        }
                        {(rarity==="All" && bodyPart==="All" )?<div>
                        <div className="shop-categoryName">
                            <h5>Footwear</h5>
                        </div>
                        {inventory.items.map((w,index)=>{
                            if(w.inventUserId === authId){
                                    if(w.body_part==="Footwear"){
                                        return (
                                            <div key={index} className="inventory-outfitFilter">
                                                <InventoryOutfitFilter data= {w} setPreview={setPreview}/>
                                            </div>   
                                        ) 
                                }
                            }
                        })}
                            </div>:""
                        }

                        {/* RARITY: ALL BODYPART:HEAD to FOOTWEAR */}
                        {(rarity==="All" && bodyPart==="Head" )?<div>
                              <div className="shop-categoryName">
                                    <p>Head</p>
                              </div>
                              {inventory.items.map((w,index)=>{
                                   if(w.inventUserId === authId){
                                          if( w.body_part==="Head"){
                                                return (
                                                <div key={index} className="inventory-outfitFilter">
                                                    <InventoryOutfitFilter data= {w} setPreview={setPreview}/>
                                                </div>     
                                          ) 
                                     }
                                    }
                                })}
                                    </div>:""
                              }
                            {(rarity==="All" && bodyPart==="Arms" )?<div>
                              <div className="shop-categoryName">
                                    <p>Arms</p>
                              </div>
                              {inventory.items.map((w,index)=>{
                                   if(w.inventUserId === authId){
                                          if(w.body_part==="Arms"){
                                                return (
                                                <div key={index} className="inventory-outfitFilter">
                                                    <InventoryOutfitFilter data= {w} setPreview={setPreview}/>
                                                </div>     
                                          ) 
                                     }
                                    }
                                })}
                                    </div>:""
                              }
                                  {(rarity==="All" && bodyPart==="Torso" )?<div>
                              <div className="shop-categoryName">
                                    <p>Torso</p>
                              </div>
                              {inventory.items.map((w,index)=>{
                                   if(w.inventUserId === authId){
                                          if(w.body_part==="Torso"){
                                                return (
                                                <div key={index} className="inventory-outfitFilter">
                                                    <InventoryOutfitFilter data= {w} setPreview={setPreview}/>
                                                </div>     
                                          ) 
                                     }
                                    }
                                })}
                                    </div>:""
                              }
                                  {(rarity==="All" && bodyPart==="Legs" )?<div>
                              <div className="shop-categoryName">
                                    <p>Legs</p>
                              </div>
                              {inventory.items.map((w,index)=>{
                                   if(w.inventUserId === authId){
                                          if(w.body_part==="Legs"){
                                                return (
                                                <div key={index} className="inventory-outfitFilter">
                                                    <InventoryOutfitFilter data= {w} setPreview={setPreview}/>
                                                </div>     
                                          ) 
                                     }
                                    }
                                })}
                                    </div>:""
                              }
                                  {(rarity==="All" && bodyPart==="Footwear" )?<div>
                              <div className="shop-categoryName">
                                    <p>Footwear</p>
                              </div>
                              {inventory.items.map((w,index)=>{
                                   if(w.inventUserId === authId){
                                          if(w.body_part==="Footwear"){
                                                return (
                                                <div key={index} className="inventory-outfitFilter">
                                                    <InventoryOutfitFilter data= {w} setPreview={setPreview}/>
                                                </div>     
                                          ) 
                                     }
                                    }
                                })}
                                    </div>:""
                              }
                        {/* RARITY: COMMON BODYPART: ALL (DISPLAY EVERY COMMON PART) */}
                        {(rarity==="Common" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Head</p>
                              </div>
                              {inventory.items.map((w,index)=>{
                                   if(w.inventUserId === authId){
                                          if( w.rarity_type===rarity && w.body_part==="Head"){
                                                return (
                                                <div key={index} className="inventory-outfitFilter">
                                                    <InventoryOutfitFilter data= {w} setPreview={setPreview}/>
                                                </div>     
                                          ) 
                                     }
                                    }
                                })}
                                    </div>:""
                              }
                            {(rarity==="Common" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Arms</p>
                              </div>
                              {inventory.items.map((w,index)=>{
                                   if(w.inventUserId === authId){
                                          if(w.rarity_type===rarity && w.body_part==="Arms"){
                                                return (
                                                <div key={index} className="inventory-outfitFilter">
                                                    <InventoryOutfitFilter data= {w} setPreview={setPreview}/>
                                                </div>     
                                          ) 
                                     }
                                    }
                                })}
                                    </div>:""
                              }
                                  {(rarity==="Common" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Torso</p>
                              </div>
                              {inventory.items.map((w,index)=>{
                                   if(w.inventUserId === authId){
                                          if(w.rarity_type===rarity && w.body_part==="Torso"){
                                                return (
                                                <div key={index} className="inventory-outfitFilter">
                                                    <InventoryOutfitFilter data= {w} setPreview={setPreview}/>
                                                </div>     
                                          ) 
                                     }
                                    }
                                })}
                                    </div>:""
                              }
                                  {(rarity==="Common" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Legs</p>
                              </div>
                              {inventory.items.map((w,index)=>{
                                   if(w.inventUserId === authId){
                                          if(w.rarity_type===rarity && w.body_part==="Legs"){
                                                return (
                                                <div key={index} className="inventory-outfitFilter">
                                                    <InventoryOutfitFilter data= {w} setPreview={setPreview}/>
                                                </div>     
                                          ) 
                                     }
                                    }
                                })}
                                    </div>:""
                              }
                                  {(rarity==="Common" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Footwear</p>
                              </div>
                              {inventory.items.map((w,index)=>{
                                   if(w.inventUserId === authId){
                                          if(w.rarity_type===rarity && w.body_part==="Footwear"){
                                                return (
                                                <div key={index} className="inventory-outfitFilter">
                                                    <InventoryOutfitFilter data= {w} setPreview={setPreview}/>
                                                </div>     
                                          ) 
                                     }
                                    }
                                })}
                                    </div>:""
                              }
                        {/* RARITY: COMMON BODYPART:HEAD TO FOOTWEAR DISPLAY */}
                        {(rarity==="Common" && bodyPart==="Head" )?<div>
                              <div className="shop-categoryName">
                                    <p>Head</p>
                              </div>
                              {inventory.items.map((w,index)=>{
                                   if(w.inventUserId === authId){
                                          if(w.rarity_type===rarity && w.body_part===bodyPart){
                                                return (
                                                <div key={index} className="inventory-outfitFilter">
                                                    <InventoryOutfitFilter data= {w} setPreview={setPreview}/>
                                                </div>     
                                          ) 
                                     }
                                    }
                                })}
                                    </div>:""
                              }
                        {(rarity==="Common" && bodyPart==="Arms" )?<div>
                              <div className="shop-categoryName">
                                    <p>Arms</p>
                              </div>
                              {inventory.items.map((w,index)=>{
                                   if(w.inventUserId === authId){
                                          if(w.rarity_type===rarity && w.body_part===bodyPart){
                                                return (
                                                <div key={index} className="inventory-outfitFilter">
                                                    <InventoryOutfitFilter data= {w} setPreview={setPreview}/>
                                                </div>     
                                          ) 
                                     }
                                    }
                                })}
                                    </div>:""
                              }
                              {(rarity==="Common" && bodyPart==="Torso" )?<div>
                              <div className="shop-categoryName">
                                    <p>Torso</p>
                              </div>
                              {inventory.items.map((w,index)=>{
                                   if(w.inventUserId === authId){
                                          if(w.rarity_type===rarity && w.body_part===bodyPart){
                                                return (
                                                <div key={index} className="inventory-outfitFilter">
                                                    <InventoryOutfitFilter data= {w} setPreview={setPreview}/>
                                                </div>     
                                          ) 
                                     }
                                    }
                                })}
                                    </div>:""
                              }
                              {(rarity==="Common" && bodyPart==="Legs" )?<div>
                              <div className="shop-categoryName">
                                    <p>Legs</p>
                              </div>
                              {inventory.items.map((w,index)=>{
                                   if(w.inventUserId === authId){
                                          if(w.rarity_type===rarity && w.body_part===bodyPart){
                                                return (
                                                <div key={index} className="inventory-outfitFilter">
                                                    <InventoryOutfitFilter data= {w} setPreview={setPreview}/>
                                                </div>     
                                          ) 
                                     }
                                    }
                                })}
                                    </div>:""
                              }
                              {(rarity==="Common" && bodyPart==="Footwear" )?<div>
                              <div className="shop-categoryName">
                                    <p>Footwear</p>
                              </div>
                              {inventory.items.map((w,index)=>{
                                   if(w.inventUserId === authId){
                                          if(w.rarity_type===rarity && w.body_part===bodyPart){
                                                return (
                                                <div key={index} className="inventory-outfitFilter">
                                                    <InventoryOutfitFilter data= {w} setPreview={setPreview}/>
                                                </div>     
                                          ) 
                                     }
                                    }
                                })}
                                    </div>:""
                              }
                            {/* RARITY:UNCOMMON BODYPART:ALL (DISPLAY ALL ARMORS) */}
                            {(rarity==="Uncommon" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Head</p>
                              </div>
                              {inventory.items.map((w,index)=>{
                                   if(w.inventUserId === authId){
                                          if( w.rarity_type===rarity && w.body_part==="Head"){
                                                return (
                                                <div key={index} className="inventory-outfitFilter">
                                                    <InventoryOutfitFilter data= {w} setPreview={setPreview}/>
                                                </div>     
                                          ) 
                                     }
                                    }
                                })}
                                    </div>:""
                              }
                            {(rarity==="Uncommon" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Arms</p>
                              </div>
                              {inventory.items.map((w,index)=>{
                                   if(w.inventUserId === authId){
                                          if(w.rarity_type===rarity && w.body_part==="Arms"){
                                                return (
                                                <div key={index} className="inventory-outfitFilter">
                                                    <InventoryOutfitFilter data= {w} setPreview={setPreview}/>
                                                </div>     
                                          ) 
                                     }
                                    }
                                })}
                                    </div>:""
                              }
                                  {(rarity==="Uncommon" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Torso</p>
                              </div>
                              {inventory.items.map((w,index)=>{
                                   if(w.inventUserId === authId){
                                          if(w.rarity_type===rarity && w.body_part==="Torso"){
                                                return (
                                                <div key={index} className="inventory-outfitFilter">
                                                    <InventoryOutfitFilter data= {w} setPreview={setPreview}/>
                                                </div>     
                                          ) 
                                     }
                                    }
                                })}
                                    </div>:""
                              }
                                  {(rarity==="Uncommon" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Legs</p>
                              </div>
                              {inventory.items.map((w,index)=>{
                                   if(w.inventUserId === authId){
                                          if(w.rarity_type===rarity && w.body_part==="Legs"){
                                                return (
                                                <div key={index} className="inventory-outfitFilter">
                                                    <InventoryOutfitFilter data= {w} setPreview={setPreview}/>
                                                </div>     
                                          ) 
                                     }
                                    }
                                })}
                                    </div>:""
                              }
                                  {(rarity==="Uncommon" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Footwear</p>
                              </div>
                              {inventory.items.map((w,index)=>{
                                   if(w.inventUserId === authId){
                                          if(w.rarity_type===rarity && w.body_part==="Footwear"){
                                                return (
                                                <div key={index} className="inventory-outfitFilter">
                                                    <InventoryOutfitFilter data= {w} setPreview={setPreview}/>
                                                </div>     
                                          ) 
                                     }
                                    }
                                })}
                                    </div>:""
                              }
                            {/* RARITY:UNCOMMON BODYPART:HEAD TO FOOTWEAR (DISPLAY ALL ARMORS) */}
                            {(rarity==="Uncommon" && bodyPart==="Head" )?<div>
                              <div className="shop-categoryName">
                                    <p>Head</p>
                              </div>
                              {inventory.items.map((w,index)=>{
                                   if(w.inventUserId === authId){
                                          if(w.rarity_type===rarity && w.body_part===bodyPart){
                                                return (
                                                <div key={index} className="inventory-outfitFilter">
                                                    <InventoryOutfitFilter data= {w} setPreview={setPreview}/>
                                                </div>     
                                          ) 
                                     }
                                    }
                                })}
                                    </div>:""
                              }
                        {(rarity==="Uncommon" && bodyPart==="Arms" )?<div>
                              <div className="shop-categoryName">
                                    <p>Arms</p>
                              </div>
                              {inventory.items.map((w,index)=>{
                                   if(w.inventUserId === authId){
                                          if(w.rarity_type===rarity && w.body_part===bodyPart){
                                                return (
                                                <div key={index} className="inventory-outfitFilter">
                                                    <InventoryOutfitFilter data= {w} setPreview={setPreview}/>
                                                </div>     
                                          ) 
                                     }
                                    }
                                })}
                                    </div>:""
                              }
                              {(rarity==="Uncommon" && bodyPart==="Torso" )?<div>
                              <div className="shop-categoryName">
                                    <p>Torso</p>
                              </div>
                              {inventory.items.map((w,index)=>{
                                   if(w.inventUserId === authId){
                                          if(w.rarity_type===rarity && w.body_part===bodyPart){
                                                return (
                                                <div key={index} className="inventory-outfitFilter">
                                                    <InventoryOutfitFilter data= {w} setPreview={setPreview}/>
                                                </div>     
                                          ) 
                                     }
                                    }
                                })}
                                    </div>:""
                              }
                              {(rarity==="Uncommon" && bodyPart==="Legs" )?<div>
                              <div className="shop-categoryName">
                                    <p>Legs</p>
                              </div>
                              {inventory.items.map((w,index)=>{
                                   if(w.inventUserId === authId){
                                          if(w.rarity_type===rarity && w.body_part===bodyPart){
                                                return (
                                                <div key={index} className="inventory-outfitFilter">
                                                    <InventoryOutfitFilter data= {w} setPreview={setPreview}/>
                                                </div>     
                                          ) 
                                     }
                                    }
                                })}
                                    </div>:""
                              }
                              {(rarity==="Uncommon" && bodyPart==="Footwear" )?<div>
                              <div className="shop-categoryName">
                                    <p>Footwear</p>
                              </div>
                              {inventory.items.map((w,index)=>{
                                   if(w.inventUserId === authId){
                                          if(w.rarity_type===rarity && w.body_part===bodyPart){
                                                return (
                                                <div key={index} className="inventory-outfitFilter">
                                                    <InventoryOutfitFilter data= {w} setPreview={setPreview}/>
                                                </div>     
                                          ) 
                                     }
                                    }
                                })}
                                    </div>:""
                              }
                             {/* RARITY:UNCOMMON BODYPART:ALL (DISPLAY ALL ARMORS) */}
                             {(rarity==="Rare" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Head</p>
                              </div>
                              {inventory.items.map((w,index)=>{
                                   if(w.inventUserId === authId){
                                          if( w.rarity_type===rarity && w.body_part==="Head"){
                                                return (
                                                <div key={index} className="inventory-outfitFilter">
                                                    <InventoryOutfitFilter data= {w} setPreview={setPreview}/>
                                                </div>     
                                          ) 
                                     }
                                    }
                                })}
                                    </div>:""
                              }
                            {(rarity==="Rare" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Arms</p>
                              </div>
                              {inventory.items.map((w,index)=>{
                                   if(w.inventUserId === authId){
                                          if(w.rarity_type===rarity && w.body_part==="Arms"){
                                                return (
                                                <div key={index} className="inventory-outfitFilter">
                                                    <InventoryOutfitFilter data= {w} setPreview={setPreview}/>
                                                </div>     
                                          ) 
                                     }
                                    }
                                })}
                                    </div>:""
                              }
                                  {(rarity==="Rare" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Torso</p>
                              </div>
                              {inventory.items.map((w,index)=>{
                                   if(w.inventUserId === authId){
                                          if(w.rarity_type===rarity && w.body_part==="Torso"){
                                                return (
                                                <div key={index} className="inventory-outfitFilter">
                                                    <InventoryOutfitFilter data= {w} setPreview={setPreview}/>
                                                </div>     
                                          ) 
                                     }
                                    }
                                })}
                                    </div>:""
                              }
                                  {(rarity==="Rare" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Legs</p>
                              </div>
                              {inventory.items.map((w,index)=>{
                                   if(w.inventUserId === authId){
                                          if(w.rarity_type===rarity && w.body_part==="Legs"){
                                                return (
                                                <div key={index} className="inventory-outfitFilter">
                                                    <InventoryOutfitFilter data= {w} setPreview={setPreview}/>
                                                </div>     
                                          ) 
                                     }
                                    }
                                })}
                                    </div>:""
                              }
                            {(rarity==="Rare" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Footwear</p>
                              </div>
                              {inventory.items.map((w,index)=>{
                                   if(w.inventUserId === authId){
                                          if(w.rarity_type===rarity && w.body_part==="Footwear"){
                                                return (
                                                <div key={index} className="inventory-outfitFilter">
                                                    <InventoryOutfitFilter data= {w} setPreview={setPreview}/>
                                                </div>     
                                          ) 
                                     }
                                    }
                                })}
                                    </div>:""
                              }
                              {/* RARITY: RARE BODYPART: HEAD TO FOOTWEAR DISPLAY EACH */}
                              {(rarity==="Rare" && bodyPart==="Head" )?<div>
                              <div className="shop-categoryName">
                                    <p>Head</p>
                              </div>
                              {inventory.items.map((w,index)=>{
                                   if(w.inventUserId === authId){
                                          if(w.rarity_type===rarity && w.body_part===bodyPart){
                                                return (
                                                <div key={index} className="inventory-outfitFilter">
                                                    <InventoryOutfitFilter data= {w} setPreview={setPreview}/>
                                                </div>     
                                          ) 
                                     }
                                    }
                                })}
                                    </div>:""
                              }
                        {(rarity==="Rare" && bodyPart==="Arms" )?<div>
                              <div className="shop-categoryName">
                                    <p>Arms</p>
                              </div>
                              {inventory.items.map((w,index)=>{
                                   if(w.inventUserId === authId){
                                          if(w.rarity_type===rarity && w.body_part===bodyPart){
                                                return (
                                                <div key={index} className="inventory-outfitFilter">
                                                    <InventoryOutfitFilter data= {w} setPreview={setPreview}/>
                                                </div>     
                                          ) 
                                     }
                                    }
                                })}
                                    </div>:""
                              }
                              {(rarity==="Rare" && bodyPart==="Torso" )?<div>
                              <div className="shop-categoryName">
                                    <p>Torso</p>
                              </div>
                              {inventory.items.map((w,index)=>{
                                   if(w.inventUserId === authId){
                                          if(w.rarity_type===rarity && w.body_part===bodyPart){
                                                return (
                                                <div key={index} className="inventory-outfitFilter">
                                                    <InventoryOutfitFilter data= {w} setPreview={setPreview}/>
                                                </div>     
                                          ) 
                                     }
                                    }
                                })}
                                    </div>:""
                              }
                              {(rarity==="Rare" && bodyPart==="Legs" )?<div>
                              <div className="shop-categoryName">
                                    <p>Legs</p>
                              </div>
                              {inventory.items.map((w,index)=>{
                                   if(w.inventUserId === authId){
                                          if(w.rarity_type===rarity && w.body_part===bodyPart){
                                                return (
                                                <div key={index} className="inventory-outfitFilter">
                                                    <InventoryOutfitFilter data= {w} setPreview={setPreview}/>
                                                </div>     
                                          ) 
                                     }
                                    }
                                })}
                                    </div>:""
                              }
                              {(rarity==="Rare" && bodyPart==="Footwear" )?<div>
                              <div className="shop-categoryName">
                                    <p>Footwear</p>
                              </div>
                              {inventory.items.map((w,index)=>{
                                   if(w.inventUserId === authId){
                                          if(w.rarity_type===rarity && w.body_part===bodyPart){
                                                return (
                                                <div key={index} className="inventory-outfitFilter">
                                                    <InventoryOutfitFilter data= {w} setPreview={setPreview}/>
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
export default InventoryOutfit;
import Button from "@restart/ui/esm/Button";
import {Link, React, useEffect, useState,
      AddPotionForm, AddOutfitForm, AddCardForm, Swal, ReactTooltip,axios } from "../../../index";
import InventoryOutfitFilter from "./InventoryOutfitFilter";

function InventoryOutfit({updateAvatarPreview, updateAvatarItems}){
    const[inventory,setInventory]=useState({
        armors:[],
  });
    const[head, setHead]=useState({
        head:[],
    })
    const[commonArms, setCommonArms]=useState(0);

    const[uncommonHead, setUncommonHead]=useState(0);
    const[uncommonArms, setUncommonArms]=useState(0);
    const[uncommonTorso, setUncommonTorso]=useState(0);
    const[uncommonLegs, setUncommonLegs]=useState(0);
    const[uncommonFootwear, setUncommonFootwear]=useState(0);

    const[rareHead, setRareHead]=useState(0);
    const[rareArms, setRareArms]=useState(0);
    const[rareTorso, setRareTorso]=useState(0);
    const[rareLegs, setRareLegs]=useState(0);
    const[rareFootwear, setRareFootwear]=useState(0);

    const[authId, setAuthId]=useState("");
    const[preview, setPreview]=useState("");
    const[charClass,setCharClass]=useState("All");
    const[rarity, setRarity]=useState("All");
    const[bodyPart, setBodyPart]=useState("All");
    useEffect(() =>{
        let c_arms=0;

        let uc_head=0;
        let uc_arms=0;
        let uc_torso=0;
        let uc_legs=0;
        let uc_footwear=0;

        let r_head=0;
        let r_arms=0;
        let r_torso=0;
        let r_legs=0;
        let r_footwear=0;

        axios.get(`/api/inventory`).then(res =>{
            if(res.data.status===200){
                setInventory({
                   armors:res.data.item
              })
              setAuthId(res.data.auth_id);

              res.data.item.map(item=>{
                if(item.rarity_type === "Common" && item.body_part ==="Arms"){
                    c_arms++;
                }else if(item.rarity_type === "Uncommon" && item.body_part ==="Head"){
                      uc_head++;
                }else if(item.rarity_type === "Uncommon" && item.body_part ==="Arms"){
                    uc_arms++;
                }else if(item.rarity_type === "Uncommon" && item.body_part ==="Torso"){
                    uc_torso++;
                }else if(item.rarity_type === "Uncommon" && item.body_part ==="Legs"){
                    uc_legs++;
                }else if(item.rarity_type === "Uncommon" && item.body_part ==="Footwear"){
                    uc_footwear++;
                }else if(item.rarity_type === "Rare" && item.body_part ==="Head"){
                    r_head++;
                }else if(item.rarity_type === "Rare" && item.body_part ==="Arms"){
                    r_arms++;
                }else if(item.rarity_type === "Rare" && item.body_part ==="Torso"){
                    r_torso++;
                }else if(item.rarity_type === "Rare" && item.body_part ==="Legs"){
                    r_legs++;
                }else if(item.rarity_type === "Rare" && item.body_part ==="Footwear"){
                    r_footwear++;
                }
             })

             setCommonArms(c_arms);

             setUncommonHead(uc_head);
             setUncommonArms(uc_arms);
             setUncommonTorso(uc_torso);
             setUncommonLegs(uc_legs);
             setUncommonFootwear(uc_footwear);

             setRareHead(r_head);
             setRareArms(r_arms);
             setRareTorso(r_torso);
             setRareLegs(r_legs);
             setRareFootwear(r_footwear);

          }
        })

     },[])

     useEffect(()=>{
        console.log(inventory.armors)
        // console.log(head)
        console.log(rareLegs);
     },[inventory, rareLegs])

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
                                          <option value="Footwear">Feet</option>
                                    </select><br></br>
                  </div>
                <div className="inventory-shop">
                 <div className="inventory-category">
                        {/* RARITY: ALL BODYPART: ALL (DISPLAYING ALL ARMORS) */}
                        {(rarity==="All" && bodyPart==="All" )?<div>
                        <div className="shop-categoryName">
                            <h5>Head</h5>
                        </div>
                        {inventory.armors.map((w,index)=>{
                            if(w.inventUserId === authId){
                                    if(w.bodyPart==="Head"){
                                            return (
                                                <div key={index} className="inventory-outfitFilter">
                                                    <InventoryOutfitFilter data= {w} inventory={inventory} setInventory={setInventory} setPreview={setPreview} updateAvatarPreview={updateAvatarPreview} updateAvatarItems={updateAvatarItems}/>
                                                </div>
                                            )
                                    }
                                }
                        })}
                            </div>:""
                        }
                        {(rarity==="All" && bodyPart==="All")?<div>
                        <div className="shop-categoryName">
                            <h5>Arms</h5>
                        </div>
                        {inventory.armors.map((w,index)=>{
                            if(w.inventUserId === authId){
                                    if(w.bodyPart==="Arms"){
                                        return (
                                            <div key={index} className="inventory-outfitFilter">
                                                <InventoryOutfitFilter data= {w} inventory={inventory} setInventory={setInventory} setPreview={setPreview} updateAvatarPreview={updateAvatarPreview} updateAvatarItems={updateAvatarItems}/>
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
                        {inventory.armors.map((w,index)=>{
                            if(w.inventUserId === authId){
                                    if(w.bodyPart==="Torso"){
                                        return (
                                            <div key={index} className="inventory-outfitFilter">
                                                <InventoryOutfitFilter data= {w} inventory={inventory} setInventory={setInventory} setPreview={setPreview} updateAvatarPreview={updateAvatarPreview} updateAvatarItems={updateAvatarItems}/>
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
                        {inventory.armors.map((w,index)=>{
                            if(w.inventUserId === authId){
                                    if(w.bodyPart==="Legs"){
                                        return (
                                            <div key={index} className="inventory-outfitFilter">
                                                <InventoryOutfitFilter data= {w} inventory={inventory} setInventory={setInventory} setPreview={setPreview} updateAvatarPreview={updateAvatarPreview} updateAvatarItems={updateAvatarItems}/>
                                            </div>
                                        )
                                }
                            }
                        })}
                            </div>:""
                        }
                        {(rarity==="All" && bodyPart==="All" )?<div>
                        <div className="shop-categoryName">
                            <h5>Feet</h5>
                        </div>
                        {inventory.armors.map((w,index)=>{
                            if(w.inventUserId === authId){
                                    if(w.bodyPart==="Footwear"){
                                        return (
                                            <div key={index} className="inventory-outfitFilter">
                                                <InventoryOutfitFilter data= {w} inventory={inventory} setInventory={setInventory} setPreview={setPreview} updateAvatarPreview={updateAvatarPreview} updateAvatarItems={updateAvatarItems}/>
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
                              {inventory.armors.map((w,index)=>{
                                   if(w.inventUserId === authId){
                                          if( w.bodyPart==="Head"){
                                                return (
                                                <div key={index} className="inventory-outfitFilter">
                                                    <InventoryOutfitFilter data= {w} inventory={inventory} setInventory={setInventory} setPreview={setPreview} updateAvatarPreview={updateAvatarPreview} updateAvatarItems={updateAvatarItems}/>
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
                              {inventory.armors.map((w,index)=>{
                                   if(w.inventUserId === authId){
                                          if(w.bodyPart==="Arms"){
                                                return (
                                                <div key={index} className="inventory-outfitFilter">
                                                    <InventoryOutfitFilter data= {w} inventory={inventory} setInventory={setInventory} setPreview={setPreview} updateAvatarPreview={updateAvatarPreview} updateAvatarItems={updateAvatarItems}/>
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
                              {inventory.armors.map((w,index)=>{
                                   if(w.inventUserId === authId){
                                          if(w.bodyPart==="Torso"){
                                                return (
                                                <div key={index} className="inventory-outfitFilter">
                                                    <InventoryOutfitFilter data= {w} inventory={inventory} setInventory={setInventory} setPreview={setPreview} updateAvatarPreview={updateAvatarPreview} updateAvatarItems={updateAvatarItems}/>
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
                              {inventory.armors.map((w,index)=>{
                                   if(w.inventUserId === authId){
                                          if(w.bodyPart==="Legs"){
                                                return (
                                                <div key={index} className="inventory-outfitFilter">
                                                    <InventoryOutfitFilter data= {w} inventory={inventory} setInventory={setInventory} setPreview={setPreview} updateAvatarPreview={updateAvatarPreview} updateAvatarItems={updateAvatarItems}/>
                                                </div>
                                          )
                                     }
                                    }
                                })}
                                    </div>:""
                              }
                                  {(rarity==="All" && bodyPart==="Footwear" )?<div>
                              <div className="shop-categoryName">
                                    <p>Feet</p>
                              </div>
                              {inventory.armors.map((w,index)=>{
                                   if(w.inventUserId === authId){
                                          if(w.bodyPart==="Footwear"){
                                                return (
                                                <div key={index} className="inventory-outfitFilter">
                                                    <InventoryOutfitFilter data= {w} inventory={inventory} setInventory={setInventory} setPreview={setPreview} updateAvatarPreview={updateAvatarPreview} updateAvatarItems={updateAvatarItems}/>
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
                              {inventory.armors.map((w,index)=>{
                                   if(w.inventUserId === authId){
                                          if( w.rarity_type===rarity && w.bodyPart==="Head"){
                                                return (
                                                <div key={index} className="inventory-outfitFilter">
                                                    <InventoryOutfitFilter data= {w} inventory={inventory} setInventory={setInventory} setPreview={setPreview} updateAvatarPreview={updateAvatarPreview} updateAvatarItems={updateAvatarItems}/>
                                                </div>
                                          )
                                     }
                                    }
                                })}
                                    </div>:""
                              }
                            {(rarity==="Common" && bodyPart==="All")?<div>
                              <div className="shop-categoryName">
                                    <p>Arms</p>
                              </div>
                              {inventory.armors.map((w,index)=>{
                                   if(w.inventUserId === authId){
                                          if(w.rarity_type===rarity && w.bodyPart==="Arms"){
                                                return (
                                                <div key={index} className="inventory-outfitFilter">
                                                    <InventoryOutfitFilter data= {w} inventory={inventory} setInventory={setInventory} setPreview={setPreview} updateAvatarPreview={updateAvatarPreview} updateAvatarItems={updateAvatarItems}/>
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
                              {inventory.armors.map((w,index)=>{
                                   if(w.inventUserId === authId){
                                          if(w.rarity_type===rarity && w.bodyPart==="Torso"){
                                                return (
                                                <div key={index} className="inventory-outfitFilter">
                                                    <InventoryOutfitFilter data= {w} inventory={inventory} setInventory={setInventory} setPreview={setPreview} updateAvatarPreview={updateAvatarPreview} updateAvatarItems={updateAvatarItems}/>
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
                              {inventory.armors.map((w,index)=>{
                                   if(w.inventUserId === authId){
                                          if(w.rarity_type===rarity && w.bodyPart==="Legs"){
                                                return (
                                                <div key={index} className="inventory-outfitFilter">
                                                    <InventoryOutfitFilter data= {w} inventory={inventory} setInventory={setInventory} setPreview={setPreview} updateAvatarPreview={updateAvatarPreview} updateAvatarItems={updateAvatarItems}/>
                                                </div>
                                          )
                                     }
                                    }
                                })}
                                    </div>:""
                              }
                                  {(rarity==="Common" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Feet</p>
                              </div>
                              {inventory.armors.map((w,index)=>{
                                   if(w.inventUserId === authId){
                                          if(w.rarity_type===rarity && w.bodyPart==="Footwear"){
                                                return (
                                                <div key={index} className="inventory-outfitFilter">
                                                    <InventoryOutfitFilter data= {w} inventory={inventory} setInventory={setInventory} setPreview={setPreview} updateAvatarPreview={updateAvatarPreview} updateAvatarItems={updateAvatarItems}/>
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
                              {inventory.armors.map((w,index)=>{
                                   if(w.inventUserId === authId){
                                          if(w.rarity_type===rarity && w.bodyPart===bodyPart){
                                                return (
                                                <div key={index} className="inventory-outfitFilter">
                                                    <InventoryOutfitFilter data= {w} inventory={inventory} setInventory={setInventory} setPreview={setPreview} updateAvatarPreview={updateAvatarPreview} updateAvatarItems={updateAvatarItems}/>
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
                              {inventory.armors.map((w,index)=>{
                                   if(w.inventUserId === authId){
                                          if(w.rarity_type===rarity && w.bodyPart===bodyPart){
                                                return (
                                                <div key={index} className="inventory-outfitFilter">
                                                    <InventoryOutfitFilter data= {w} inventory={inventory} setInventory={setInventory} setPreview={setPreview} updateAvatarPreview={updateAvatarPreview} updateAvatarItems={updateAvatarItems}/>
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
                              {inventory.armors.map((w,index)=>{
                                   if(w.inventUserId === authId){
                                          if(w.rarity_type===rarity && w.bodyPart===bodyPart){
                                                return (
                                                <div key={index} className="inventory-outfitFilter">
                                                    <InventoryOutfitFilter data= {w} inventory={inventory} setInventory={setInventory} setPreview={setPreview} updateAvatarPreview={updateAvatarPreview} updateAvatarItems={updateAvatarItems}/>
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
                              {inventory.armors.map((w,index)=>{
                                   if(w.inventUserId === authId){
                                          if(w.rarity_type===rarity && w.bodyPart===bodyPart){
                                                return (
                                                <div key={index} className="inventory-outfitFilter">
                                                    <InventoryOutfitFilter data= {w} inventory={inventory} setInventory={setInventory} setPreview={setPreview} updateAvatarPreview={updateAvatarPreview} updateAvatarItems={updateAvatarItems}/>
                                                </div>
                                          )
                                     }
                                    }
                                })}
                                    </div>:""
                              }
                              {(rarity==="Common" && bodyPart==="Footwear" )?<div>
                              <div className="shop-categoryName">
                                    <p>Feet</p>
                              </div>
                              {inventory.armors.map((w,index)=>{
                                   if(w.inventUserId === authId){
                                          if(w.rarity_type===rarity && w.bodyPart===bodyPart){
                                                return (
                                                <div key={index} className="inventory-outfitFilter">
                                                    <InventoryOutfitFilter data= {w} inventory={inventory} setInventory={setInventory} setPreview={setPreview} updateAvatarPreview={updateAvatarPreview} updateAvatarItems={updateAvatarItems}/>
                                                </div>
                                          )
                                     }
                                    }
                                })}
                                    </div>:""
                              }
                            {/* RARITY:UNCOMMON BODYPART:ALL (DISPLAY ALL ARMORS) */}
                            {(rarity==="Uncommon" && bodyPart==="All")?<div>
                              <div className="shop-categoryName">
                                    <p>Head</p>
                              </div>
                              {inventory.armors.map((w,index)=>{
                                   if(w.inventUserId === authId){
                                          if( w.rarity_type===rarity && w.bodyPart==="Head"){
                                                return (
                                                <div key={index} className="inventory-outfitFilter">
                                                    <InventoryOutfitFilter data= {w} inventory={inventory} setInventory={setInventory} setPreview={setPreview} updateAvatarPreview={updateAvatarPreview} updateAvatarItems={updateAvatarItems}/>
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
                              {inventory.armors.map((w,index)=>{
                                   if(w.inventUserId === authId){
                                          if(w.rarity_type===rarity && w.bodyPart==="Arms"){
                                                return (
                                                <div key={index} className="inventory-outfitFilter">
                                                    <InventoryOutfitFilter data= {w} inventory={inventory} setInventory={setInventory} setPreview={setPreview} updateAvatarPreview={updateAvatarPreview} updateAvatarItems={updateAvatarItems}/>
                                                </div>
                                          )
                                     }
                                    }
                                })}
                                    </div>:""
                              }
                                  {(rarity==="Uncommon" && bodyPart==="All")?<div>
                              <div className="shop-categoryName">
                                    <p>Torso</p>
                              </div>
                              {inventory.armors.map((w,index)=>{
                                   if(w.inventUserId === authId){
                                          if(w.rarity_type===rarity && w.bodyPart==="Torso"){
                                                return (
                                                <div key={index} className="inventory-outfitFilter">
                                                    <InventoryOutfitFilter data= {w} inventory={inventory} setInventory={setInventory} setPreview={setPreview} updateAvatarPreview={updateAvatarPreview} updateAvatarItems={updateAvatarItems}/>
                                                </div>
                                          )
                                     }
                                    }
                                })}
                                    </div>:""
                              }
                                  {(rarity==="Uncommon" && bodyPart==="All")?<div>
                              <div className="shop-categoryName">
                                    <p>Legs</p>
                              </div>
                              {inventory.armors.map((w,index)=>{
                                   if(w.inventUserId === authId){
                                          if(w.rarity_type===rarity && w.bodyPart==="Legs"){
                                                return (
                                                <div key={index} className="inventory-outfitFilter">
                                                    <InventoryOutfitFilter data= {w} inventory={inventory} setInventory={setInventory} setPreview={setPreview} updateAvatarPreview={updateAvatarPreview} updateAvatarItems={updateAvatarItems}/>
                                                </div>
                                          )
                                     }
                                    }
                                })}
                                    </div>:""
                              }
                                  {(rarity==="Uncommon" && bodyPart==="All")?<div>
                              <div className="shop-categoryName">
                                    <p>Feet</p>
                              </div>
                              {inventory.armors.map((w,index)=>{
                                   if(w.inventUserId === authId){
                                          if(w.rarity_type===rarity && w.bodyPart==="Footwear"){
                                                return (
                                                <div key={index} className="inventory-outfitFilter">
                                                    <InventoryOutfitFilter data= {w} inventory={inventory} setInventory={setInventory} setPreview={setPreview} updateAvatarPreview={updateAvatarPreview} updateAvatarItems={updateAvatarItems}/>
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
                              {inventory.armors.map((w,index)=>{
                                   if(w.inventUserId === authId){
                                          if(w.rarity_type===rarity && w.bodyPart===bodyPart){
                                                return (
                                                <div key={index} className="inventory-outfitFilter">
                                                    <InventoryOutfitFilter data= {w} inventory={inventory} setInventory={setInventory} setPreview={setPreview} updateAvatarPreview={updateAvatarPreview} updateAvatarItems={updateAvatarItems}/>
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
                              {inventory.armors.map((w,index)=>{
                                   if(w.inventUserId === authId){
                                          if(w.rarity_type===rarity && w.bodyPart===bodyPart){
                                                return (
                                                <div key={index} className="inventory-outfitFilter">
                                                    <InventoryOutfitFilter data= {w} inventory={inventory} setInventory={setInventory} setPreview={setPreview} updateAvatarPreview={updateAvatarPreview} updateAvatarItems={updateAvatarItems}/>
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
                              {inventory.armors.map((w,index)=>{
                                   if(w.inventUserId === authId){
                                          if(w.rarity_type===rarity && w.bodyPart===bodyPart){
                                                return (
                                                <div key={index} className="inventory-outfitFilter">
                                                    <InventoryOutfitFilter data= {w} inventory={inventory} setInventory={setInventory} setPreview={setPreview} updateAvatarPreview={updateAvatarPreview} updateAvatarItems={updateAvatarItems}/>
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
                              {inventory.armors.map((w,index)=>{
                                   if(w.inventUserId === authId){
                                          if(w.rarity_type===rarity && w.bodyPart===bodyPart){
                                                return (
                                                <div key={index} className="inventory-outfitFilter">
                                                    <InventoryOutfitFilter data= {w} inventory={inventory} setInventory={setInventory} setPreview={setPreview} updateAvatarPreview={updateAvatarPreview} updateAvatarItems={updateAvatarItems}/>
                                                </div>
                                          )
                                     }
                                    }
                                })}
                                    </div>:""
                              }
                              {(rarity==="Uncommon" && bodyPart==="Footwear" )?<div>
                              <div className="shop-categoryName">
                                    <p>Feet</p>
                              </div>
                              {inventory.armors.map((w,index)=>{
                                   if(w.inventUserId === authId){
                                          if(w.rarity_type===rarity && w.bodyPart===bodyPart){
                                                return (
                                                <div key={index} className="inventory-outfitFilter">
                                                    <InventoryOutfitFilter data= {w} inventory={inventory} setInventory={setInventory} setPreview={setPreview} updateAvatarPreview={updateAvatarPreview} updateAvatarItems={updateAvatarItems}/>
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
                              {inventory.armors.map((w,index)=>{
                                   if(w.inventUserId === authId){
                                          if( w.rarity_type===rarity && w.bodyPart==="Head"){
                                                return (
                                                <div key={index} className="inventory-outfitFilter">
                                                    <InventoryOutfitFilter data= {w} inventory={inventory} setInventory={setInventory} setPreview={setPreview} updateAvatarPreview={updateAvatarPreview} updateAvatarItems={updateAvatarItems}/>
                                                </div>
                                          )
                                     }
                                    }
                                })}
                                    </div>:""
                              }
                            {(rarity==="Rare" && bodyPart==="All")?<div>
                              <div className="shop-categoryName">
                                    <p>Arms</p>
                              </div>
                              {inventory.armors.map((w,index)=>{
                                   if(w.inventUserId === authId){
                                          if(w.rarity_type===rarity && w.bodyPart==="Arms"){
                                                return (
                                                <div key={index} className="inventory-outfitFilter">
                                                    <InventoryOutfitFilter data= {w} inventory={inventory} setInventory={setInventory}setPreview={setPreview} updateAvatarPreview={updateAvatarPreview} updateAvatarItems={updateAvatarItems}/>
                                                </div>
                                          )
                                     }
                                    }
                                })}
                                    </div>:""
                              }
                                  {(rarity==="Rare" && bodyPart==="All")?<div>
                              <div className="shop-categoryName">
                                    <p>Torso</p>
                              </div>
                              {inventory.armors.map((w,index)=>{
                                   if(w.inventUserId === authId){
                                          if(w.rarity_type===rarity && w.bodyPart==="Torso"){
                                                return (
                                                <div key={index} className="inventory-outfitFilter">
                                                    <InventoryOutfitFilter data= {w} inventory={inventory} setInventory={setInventory} setPreview={setPreview} updateAvatarPreview={updateAvatarPreview} updateAvatarItems={updateAvatarItems}/>
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
                              {inventory.armors.map((w,index)=>{
                                   if(w.inventUserId === authId){
                                          if(w.rarity_type===rarity && w.bodyPart==="Legs"){
                                                return (
                                                <div key={index} className="inventory-outfitFilter">
                                                    <InventoryOutfitFilter data= {w} inventory={inventory} setInventory={setInventory} setPreview={setPreview} updateAvatarPreview={updateAvatarPreview} updateAvatarItems={updateAvatarItems}/>
                                                </div>
                                          )
                                     }
                                    }
                                })}
                                    </div>:""
                              }
                            {(rarity==="Rare" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Feet</p>
                              </div>
                              {inventory.armors.map((w,index)=>{
                                   if(w.inventUserId === authId){
                                          if(w.rarity_type===rarity && w.bodyPart==="Footwear"){
                                                return (
                                                <div key={index} className="inventory-outfitFilter">
                                                    <InventoryOutfitFilter data= {w} inventory={inventory} setInventory={setInventory} setPreview={setPreview} updateAvatarPreview={updateAvatarPreview} updateAvatarItems={updateAvatarItems}/>
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
                              {inventory.armors.map((w,index)=>{
                                   if(w.inventUserId === authId){
                                          if(w.rarity_type===rarity && w.bodyPart===bodyPart){
                                                return (
                                                <div key={index} className="inventory-outfitFilter">
                                                    <InventoryOutfitFilter data= {w} inventory={inventory} setInventory={setInventory} setPreview={setPreview} updateAvatarPreview={updateAvatarPreview} updateAvatarItems={updateAvatarItems}/>
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
                              {inventory.armors.map((w,index)=>{
                                   if(w.inventUserId === authId){
                                          if(w.rarity_type===rarity && w.bodyPart===bodyPart){
                                                return (
                                                <div key={index} className="inventory-outfitFilter">
                                                    <InventoryOutfitFilter data= {w} inventory={inventory} setInventory={setInventory} setPreview={setPreview} updateAvatarPreview={updateAvatarPreview} updateAvatarItems={updateAvatarItems}/>
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
                              {inventory.armors.map((w,index)=>{
                                   if(w.inventUserId === authId){
                                          if(w.rarity_type===rarity && w.bodyPart===bodyPart){
                                                return (
                                                <div key={index} className="inventory-outfitFilter">
                                                    <InventoryOutfitFilter data= {w} inventory={inventory} setInventory={setInventory} setPreview={setPreview} updateAvatarPreview={updateAvatarPreview} updateAvatarItems={updateAvatarItems}/>
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
                              {inventory.armors.map((w,index)=>{
                                   if(w.inventUserId === authId){
                                          if(w.rarity_type===rarity && w.bodyPart===bodyPart){
                                                return (
                                                <div key={index} className="inventory-outfitFilter">
                                                    <InventoryOutfitFilter data= {w} inventory={inventory} setInventory={setInventory} setPreview={setPreview} updateAvatarPreview={updateAvatarPreview} updateAvatarItems={updateAvatarItems}/>
                                                </div>
                                          )
                                     }
                                    }
                                })}
                                    </div>:""
                              }
                              {(rarity==="Rare" && bodyPart==="Footwear" )?<div>
                              <div className="shop-categoryName">
                                    <p>Feet</p>
                              </div>
                              {inventory.armors.map((w,index)=>{
                                   if(w.inventUserId === authId){
                                          if(w.rarity_type===rarity && w.bodyPart===bodyPart){
                                                return (
                                                <div key={index} className="inventory-outfitFilter">
                                                    <InventoryOutfitFilter data= {w} inventory={inventory} setInventory={setInventory} setPreview={setPreview} updateAvatarPreview={updateAvatarPreview} updateAvatarItems={updateAvatarItems}/>
                                                </div>
                                          )
                                     }
                                    }
                                })}
                                    </div>:""
                              }
                        </div>
                 </div>
            </div>
    );
}
export default InventoryOutfit;

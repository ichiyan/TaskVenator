import Button from "@restart/ui/esm/Button";
import {Link, React, useEffect, useState,
      AddPotionForm, AddOutfitForm, AddCardForm, Swal, ReactTooltip,axios } from "../../../index";
import InventoryWeaponFilter from "./InventoryWeaponFilter";

function InventoryWeapons({updateAvatarPreview, updateAvatarItems}){

    const[inventory,setInventory]=useState({
        weapons:[],
    });

    const[countWeaponCommon, setCountWeaponCommon]=useState(0);
    const[countWeaponUncommon, setCountWeaponUncommon]=useState(0);
    const[countWeaponRare, setCountWeaponRare]=useState(0);
    const[authId, setAuthId]=useState("");
    const[avatarClass, setAvatarClass]= useState("");
    const[preview, setPreview]=useState("");
    const[charClass,setCharClass]=useState("All");
    const[rarity, setRarity]=useState("All");
    const[bodyPart, setBodyPart]=useState("All");

    useEffect(() =>{
        let common =0;
        let uncommon =0;
        let rare=0;
        axios.get(`/api/inventory`).then(res =>{
            if(res.data.status===200){
                // console.log(res.data.class[0].name)
                console.log(res.data.weapon)
                setInventory({
                    weapons:res.data.weapon
                })
                setAuthId(res.data.auth_id);
                setAvatarClass(res.data.class[0].name);
                // res.data.weapon.map(item=>{
                //     if(item.class === avatarClass && item.inventUserId === authId ){
                //         setInventory({
                //             weapons:item
                //         })
                //     }
                // })

                res.data.weapon.map(item=>{
                    if(item.rarity_type === "Common"){
                          common++;
                    }else if (item.rarity_type === "Uncommon"){
                        uncommon++;
                    }else{
                        rare++;
                    }
              })
              setCountWeaponCommon(common);
              setCountWeaponUncommon(uncommon);
              setCountWeaponRare(rare);

            }
            // console.log(inventory);
        })
     },[])

     useEffect(()=>{
        console.log(inventory);
        // console.log(Object.keys(display2.armors).length);
    },[inventory])

    const previewImage =(event)=>{
        setPreview(event)
    }

    const rarityHandler=(e)=>{
            setRarity(e.target.value);
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
                                                    <InventoryWeaponFilter data= {w} inventory={inventory} setInventory={setInventory} setPreview={setPreview} updateAvatarPreview={updateAvatarPreview} updateAvatarItems={updateAvatarItems}/>
                                                </div>
                                            )
                                    }
                                }
                        })}

                            </div>:""
                        }


                          {(rarity==="All" && countWeaponUncommon !==0)?<div>
                        <div className="shop-categoryName">
                            <h5>Uncommon</h5>
                        </div>
                        {inventory.weapons.map((w,index)=>{
                            if(w.inventUserId === authId){
                                    if(w.rarity_type==="Uncommon"){
                                            return (
                                                <div key={index} className="inventory-outfitFilter">
                                                    <InventoryWeaponFilter data= {w} inventory={inventory} setInventory={setInventory} setPreview={setPreview} updateAvatarPreview={updateAvatarPreview} updateAvatarItems={updateAvatarItems}/>
                                                </div>
                                            )
                                    }
                                }
                        })}
                            </div>:""
                        }
                          {(rarity==="All" &&countWeaponRare!==0)?<div>
                        <div className="shop-categoryName">
                            <h5>Rare</h5>
                        </div>
                        {inventory.weapons.map((w,index)=>{
                            if(w.inventUserId === authId){
                                    if(w.rarity_type==="Rare"){
                                            return (
                                                <div key={index} className="inventory-outfitFilter">
                                                    <InventoryWeaponFilter data= {w} inventory={inventory} setInventory={setInventory} setPreview={setPreview} updateAvatarPreview={updateAvatarPreview} updateAvatarItems={updateAvatarItems}/>
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
                                                    <InventoryWeaponFilter data= {w} inventory={inventory} setInventory={setInventory} setPreview={setPreview} updateAvatarPreview={updateAvatarPreview} updateAvatarItems={updateAvatarItems}/>
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
                                                    <InventoryWeaponFilter data= {w} inventory={inventory} setInventory={setInventory} setPreview={setPreview} updateAvatarPreview={updateAvatarPreview} updateAvatarItems={updateAvatarItems}/>
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
                                                    <InventoryWeaponFilter data= {w} inventory={inventory} setInventory={setInventory} setPreview={setPreview} updateAvatarPreview={updateAvatarPreview} updateAvatarItems={updateAvatarItems}/>
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

export default InventoryWeapons;

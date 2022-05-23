import {Link, React, useEffect, useState,
    AddPotionForm, AddOutfitForm, InventoryPotionFilter, InventoryWeaponFilter, InventoryOutfitFilter,
    AddCardForm, Swal, ReactTooltip,axios } from "../../../index";


const InventoryAll = ({updateAvatarPreview, updateAvatarItems}) => {

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
                console.log(res.data)
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
            //   console.log(inventoryWeapon.weapons)
          }
        })
     },[])


     return(
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

                        {inventoryWeapon.weapons.map((w,index)=>{
                        if(w.inventUserId === authId){
                                return (
                                    <div key={index} className="inventory-outfitFilter">
                                        <InventoryWeaponFilter data= {w} inventory={inventoryWeapon} setInventory={setInventoryWeapon} updateAvatarPreview={updateAvatarPreview} updateAvatarItems={updateAvatarItems}/>
                                    </div>
                                )
                            }
                    })}
                        <div className="shop-categoryName">
                            <h5>Armors</h5>
                        </div>
                        <div className="shop-categoryName">
                        <p>Head</p>
                    </div>
                    {inventoryArmor.armors.map((w,index)=>{
                        if(w.inventUserId === authId){
                                if(w.bodyPart==="Head"){
                                        return (
                                            <div key={index} className="inventory-outfitFilter">
                                                <InventoryOutfitFilter data= {w} inventory={inventoryArmor} setInventory={setInventoryArmor} updateAvatarPreview={updateAvatarPreview} updateAvatarItems={updateAvatarItems} />
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
                                if(w.bodyPart==="Arms"){
                                        return (
                                            <div key={index} className="inventory-outfitFilter">
                                                <InventoryOutfitFilter data= {w} inventory={inventoryArmor} setInventory={setInventoryArmor} updateAvatarPreview={updateAvatarPreview} updateAvatarItems={updateAvatarItems} />
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
                                if(w.bodyPart==="Torso"){
                                        return (
                                            <div key={index} className="inventory-outfitFilter">
                                                <InventoryOutfitFilter data= {w} inventory={inventoryArmor} setInventory={setInventoryArmor} updateAvatarPreview={updateAvatarPreview} updateAvatarItems={updateAvatarItems} />
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
                                if(w.bodyPart==="Legs"){
                                        return (
                                            <div key={index} className="inventory-outfitFilter">
                                                <InventoryOutfitFilter data= {w} inventory={inventoryArmor} setInventory={setInventoryArmor} updateAvatarPreview={updateAvatarPreview} updateAvatarItems={updateAvatarItems}/>
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
                                if(w.bodyPart==="Footwear"){
                                        return (
                                            <div key={index} className="inventory-outfitFilter">
                                                <InventoryOutfitFilter data= {w}  inventory={inventoryArmor} setInventory={setInventoryArmor} updateAvatarPreview={updateAvatarPreview} updateAvatarItems={updateAvatarItems}/>
                                            </div>
                                        )
                                }
                            }
                    })}
                    </div>

            </div>
        </div>

     );

}

export default InventoryAll;

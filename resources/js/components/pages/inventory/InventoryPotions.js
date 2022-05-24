import Button from "@restart/ui/esm/Button";
import {Link, React, useEffect, useState,
      AddPotionForm, AddOutfitForm, AddCardForm, Swal, ReactTooltip,axios } from "../../../index";
import InventoryPotionFilter from "./InventoryPotionFilter";
function InventoryPotions(){
    const[inventory,setInventory]=useState({
        potions:[],
  });
   const[countHealth, setCountHealth]=useState(0);
   const[countPower, setCountPower]=useState(0);
   const[countHealSmall, setCountHealSmall]=useState(0);
   const[countHealMedium, setCountHealMedium]=useState(0);
   const[countHealLarge, setCountHealLarge]=useState(0);
   const[countPowerSmall, setCountPowerSmall]=useState(0);
   const[countPowerMedium, setCountPowerMedium]=useState(0);
   const[countPowerLarge, setCountPowerLarge]=useState(0);
    const[authId, setAuthId]=useState("");
    const[preview, setPreview]=useState("");
    const[potionType,setPotionType]=useState("All");
    const[size, setSize]=useState("All");
    useEffect(() =>{
          let healPotion =0;
          let powerPotion =0;

          let p_small=0;
          let p_medium=0;
          let p_large=0;

          let h_small=0;
          let h_medium=0;
          let h_large=0;
        axios.get(`/api/inventory`).then(res =>{
            if(res.data.status===200){

                console.log(res.data.potion)
                setInventory({
                    potions:res.data.potion

              })
            //   console.log(inventory.potions.length)

              setAuthId(res.data.auth_id);

            //    for(var i; i<res.data.potion.length; i++){
            //          if(res.data.potion[0].type === "Hp Potion"){
            //               console.log("yes")
            //          }
            //    }
              res.data.potion.map(item=>{
                    if(item.type === "Hp Potion"){
                          healPotion++;
                        if(item.size === "Small"){
                              h_small++
                        }else if(item.size === "Medium"){
                              h_medium++;
                        }else{
                              h_large++;
                        }
                    }else{
                        powerPotion++;
                        if(item.size === "Small"){
                              p_small++
                        }else if(item.size === "Medium"){
                              p_medium++;
                        }else{
                              p_large++;
                        }

                    }
              })

            //   console.log(count);

              setCountHealth(healPotion);
              setCountHealSmall(h_small);
              setCountHealMedium(h_medium);
              setCountHealLarge(h_large);

              setCountPower(powerPotion);
              setCountPowerSmall(p_small);
              setCountPowerMedium(p_medium);
              setCountPowerLarge(p_large);
            //   console.log(countHealth);
          }
        })
     },[])
     useEffect(()=>{
      // console.log(inventory.potions.length)
            // console.log(inventory.potions[0]);
            console.log(countHealth);
            console.log(countPower);
     },[countHealth, countPower, inventory])

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
                {(inventory.potions.length!==0)?
                 <div className="inventory-category">
                     {/* POTIONTYPE:ALL SIZE: ALL (DISPLAY ALL POTIONS) */}
                    { (potionType === "All" && size==="All" && countHealth!==0)?
                              <div className="shop-categoryName">
                                    <p>Health Potions</p>
                              </div>:""
                              }
                              {inventory.potions.map((p,index)=>{
                                    if(potionType === "All" && size==="All"){
                                      if(p.inventUserId === authId){
                                          if(p.type==="Hp Potion"){
                                                return (
                                                      <div key={index} className="shop-outfitFilter">
                                                            <InventoryPotionFilter data= {p} value={p.id} inventory={inventory} setInventory={setInventory}/>
                                                      </div>
                                                )
                                          }
                                      }
                                    }
                              })}
                        { (potionType === "All" && size==="All" && countPower!==0)?
                              <div className="shop-categoryName">
                                    <p>Powerup Potions</p>
                              </div>:""
                              }
                              {inventory.potions.map((p,index)=>{
                                    if(potionType === "All" && size==="All"){
                                      if(p.inventUserId === authId){
                                          if(p.type==="Powerup Potion"){
                                                return (
                                                      <div key={index} className="shop-outfitFilter">
                                                            <InventoryPotionFilter data= {p} value={p.id} inventory={inventory} setInventory={setInventory}/>
                                                      </div>
                                                )
                                          }
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
                                    if(p.inventUserId === authId){
                                          if(p.type==="Hp Potion" && p.size===size){
                                                return (
                                                      <div key={index} className="shop-outfitFilter">
                                                            <InventoryPotionFilter data= {p} value={p.id} inventory={inventory} setInventory={setInventory}/>
                                                      </div>
                                                )
                                          }
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
                                     if(p.inventUserId === authId){
                                          if(p.type==="Powerup Potion" && p.size===size){
                                                return (
                                                      <div key={index} className="shop-outfitFilter">
                                                            <InventoryPotionFilter data= {p} value={p.id} inventory={inventory} setInventory={setInventory}/>
                                                      </div>
                                                )
                                            }
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
                                    if(p.inventUserId === authId){
                                          if(p.type==="Hp Potion" && p.size===size){
                                                return (
                                                      <div key={index} className="shop-outfitFilter">
                                                            <InventoryPotionFilter data= {p} value={p.id} inventory={inventory} setInventory={setInventory}/>
                                                      </div>
                                                )
                                           }
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
                                    if(p.inventUserId === authId){
                                          if(p.type==="Powerup Potion" && p.size===size){
                                                return (
                                                      <div key={index} className="shop-outfitFilter">
                                                            <InventoryPotionFilter data= {p} value={p.id} inventory={inventory} setInventory={setInventory}/>
                                                      </div>
                                                )
                                            }
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
                                    if(p.inventUserId === authId){
                                          if(p.type==="Hp Potion" && p.size===size){
                                                return (
                                                      <div key={index} className="shop-outfitFilter">
                                                            <InventoryPotionFilter data= {p} value={p.id} inventory={inventory} setInventory={setInventory}/>
                                                      </div>
                                                )
                                           }
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
                                    if(p.inventUserId === authId){
                                          if(p.type==="Powerup Potion" && p.size===size){
                                                return (
                                                      <div key={index} className="shop-outfitFilter">
                                                            <InventoryPotionFilter data= {p} value={p.id} inventory={inventory} setInventory={setInventory}/>
                                                      </div>
                                                )
                                            }
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
                                    if(p.inventUserId === authId){
                                          if(p.type==="Hp Potion" && p.size===size){
                                                return (
                                                      <div key={index} className="shop-outfitFilter">
                                                            <InventoryPotionFilter data= {p} value={p.id} inventory={inventory} setInventory={setInventory}/>
                                                      </div>
                                                )
                                          }
                                      }
                                    }
                              })}
                              {/* POTIONTYPE::HPPOTION SIZE:ALL */}
                   { (potionType === "Hp Potion" && size==="All" && countHealSmall!==0)?
                              <div className="shop-categoryName">
                                    <p>Small</p>
                              </div>:""
                              }
                              {inventory.potions.map((p,index)=>{
                                   if(potionType === "Hp Potion" && size==="All"){
                                    if(p.inventUserId === authId){
                                          if(p.type==="Hp Potion" && p.size==="Small"){
                                                return (
                                                      <div key={index} className="shop-outfitFilter">
                                                            <InventoryPotionFilter data= {p} value={p.id} inventory={inventory} setInventory={setInventory}/>
                                                      </div>
                                                )
                                            }
                                          }
                                    }
                              })}
                               { (potionType === "Hp Potion" && size==="All" && countHealMedium!=0)?
                              <div className="shop-categoryName">
                                    <p>Medium</p>
                              </div>:""
                              }
                              {inventory.potions.map((p,index)=>{
                                   if(potionType === "Hp Potion" && size==="All"){
                                    if(p.inventUserId === authId){
                                          if(p.type==="Hp Potion" && p.size==="Medium"){
                                                return (
                                                      <div key={index} className="shop-outfitFilter">
                                                            <InventoryPotionFilter data= {p} value={p.id} inventory={inventory} setInventory={setInventory}/>
                                                      </div>
                                                )
                                            }
                                      }
                                    }
                              })}
                                { (potionType === "Hp Potion" && size==="All" && countHealLarge!=0)?
                              <div className="shop-categoryName">
                                    <p>Large</p>
                              </div>:""
                              }
                              {inventory.potions.map((p,index)=>{
                                   if(potionType === "Hp Potion" && size==="All"){
                                    if(p.inventUserId === authId){
                                          if(p.type==="Hp Potion" && p.size==="Large"){
                                                return (
                                                      <div key={index} className="shop-outfitFilter">
                                                            <InventoryPotionFilter data= {p} value={p.id} inventory={inventory} setInventory={setInventory}/>
                                                      </div>
                                                )
                                            }
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
                                    if(p.inventUserId === authId){
                                          if(p.type==="Hp Potion" && p.size==="Small"){
                                                return (
                                                      <div key={index} className="shop-outfitFilter">
                                                            <InventoryPotionFilter data= {p} value={p.id} inventory={inventory} setInventory={setInventory}/>
                                                      </div>
                                                )
                                            }
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
                                    if(p.inventUserId === authId){
                                          if(p.type==="Hp Potion" && p.size==="Medium"){
                                                return (
                                                      <div key={index} className="shop-outfitFilter">
                                                            <InventoryPotionFilter data= {p} value={p.id} inventory={inventory} setInventory={setInventory}/>
                                                      </div>
                                                )
                                            }
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
                                    if(p.inventUserId === authId){
                                          if(p.type==="Hp Potion" && p.size==="Large"){
                                                return (
                                                      <div key={index} className="shop-outfitFilter">
                                                            <InventoryPotionFilter data= {p} value={p.id} inventory={inventory} setInventory={setInventory}/>
                                                      </div>
                                                )
                                            }
                                       }
                                    }
                              })}

                        {/* POTIONTYPE::POWERUP POTION SIZE:ALL */}
                   { (potionType === "Powerup Potion" && size==="All" && countPowerSmall!==0 )?
                              <div className="shop-categoryName">
                                    <p>Small</p>
                              </div>:""
                              }
                              {inventory.potions.map((p,index)=>{
                                   if(potionType === "Powerup Potion" && size==="All"){
                                    if(p.inventUserId === authId){
                                          if(p.type==="Powerup Potion" && p.size==="Small"){
                                                return (
                                                      <div key={index} className="shop-outfitFilter">
                                                            <InventoryPotionFilter data= {p} value={p.id} inventory={inventory} setInventory={setInventory}/>
                                                      </div>
                                                )
                                            }
                                          }
                                    }
                              })}
                               { (potionType === "Powerup Potion" && size==="All" && countPowerMedium!==0)?
                              <div className="shop-categoryName">
                                    <p>Medium</p>
                              </div>:""
                              }
                              {inventory.potions.map((p,index)=>{
                                   if(potionType === "Powerup Potion" && size==="All"){
                                    if(p.inventUserId === authId){
                                          if(p.type==="Powerup Potion" && p.size==="Medium"){
                                                return (
                                                      <div key={index} className="shop-outfitFilter">
                                                            <InventoryPotionFilter data= {p} value={p.id} inventory={inventory} setInventory={setInventory}/>
                                                      </div>
                                                )
                                            }
                                       }
                                    }
                              })}
                                { (potionType === "Powerup Potion" && size==="All" &&countPowerLarge!==0)?
                              <div className="shop-categoryName">
                                    <p>Large</p>
                              </div>:""
                              }
                              {inventory.potions.map((p,index)=>{
                                   if(potionType === "Powerup Potion" && size==="All"){
                                    if(p.inventUserId === authId){
                                          if(p.type==="Powerup Potion" && p.size==="Large"){
                                                return (
                                                      <div key={index} className="shop-outfitFilter">
                                                            <InventoryPotionFilter data= {p} value={p.id} inventory={inventory} setInventory={setInventory}/>
                                                      </div>
                                                )
                                            }
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
                                    if(p.inventUserId === authId){
                                          if(p.type==="Powerup Potion" && p.size==="Small"){
                                                return (
                                                      <div key={index} className="shop-outfitFilter">
                                                            <InventoryPotionFilter data= {p} value={p.id} inventory={inventory} setInventory={setInventory}/>
                                                      </div>
                                                )
                                            }
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
                                    if(p.inventUserId === authId){
                                          if(p.type==="Powerup Potion" && p.size==="Medium"){
                                                return (
                                                      <div key={index} className="shop-outfitFilter">
                                                            <InventoryPotionFilter data= {p} value={p.id} inventory={inventory} setInventory={setInventory}/>
                                                      </div>
                                                )
                                            }
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
                                    if(p.inventUserId === authId){
                                          if(p.type==="Powerup Potion" && p.size==="Large"){
                                                return (
                                                      <div key={index} className="shop-outfitFilter">
                                                            <InventoryPotionFilter data= {p} value={p.id} inventory={inventory} setInventory={setInventory}/>
                                                      </div>
                                                )
                                            }
                                          }
                                    }
                              })}

                        </div> :""}
                 </div>
            </div>
    );
}

export default InventoryPotions;

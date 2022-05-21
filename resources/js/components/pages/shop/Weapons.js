
import Button from "@restart/ui/esm/Button";
import {Link, React, useEffect, useState, AddPotionForm,
       AddOutfitForm, ReactTooltip,axios } from "../../../index";
import Swal from 'sweetalert2';
import WeaponFilter from "./WeaponFilter";

function Weapons({setGems, updatePreview}){
    var hpTotal = 50;
    var xpTotal = 50;
    const [hp, setHp] = useState(50);
    const [xp, setXp] = useState(0);



    const [hpBarWidth, sethpBarWidth] = useState("100");
    const [hpHitWidth, sethpHitWidth] = useState("0");
    const [HpIncreaseWidth, setHPIncreaseWidth] = useState("0");

    const[charClass,setCharClass]=useState("All");
    const[rarity, setRarity]=useState("All");
    const[avatarClass, setAvatarClass]=useState("");



  const[display2,setDisplay2]=useState({
        weapons:[],
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
                       weapons:res.data.weapon
                 })

                 if(res.data.avatar[0].name === "warrior"){
                  setAvatarClass("Warrior");
                }else if(res.data.avatar[0].name === "marksman"){
                      setAvatarClass("Marksman");
                }else{
                      setAvatarClass("Mage")
                }
           }
           console.log(res.data.weapon)
     })

  },[])
//   const countType=()=>{
// //      for(let i=0; i<e.weapons.length;i++){
// //            if(e.weapons[i].sex=="None"){
// //                  count++;
// //            }
// //      }
// //      console.log(display2.weapons);
//   }
  useEffect(()=>{
      console.log(display2.weapons)
      // console.log(Object.keys(display2.weapons).length);
      // console.log(count);
  },[display2])



  const buttonHandler=(e)=>{
     Swal.fire("You have successfully bought the item");
  }

    return(
      <div className="shop-filtShop">
          <div className="shop-filter">
                      <p>Class</p>
                            <select name="class" className="form-select" onChange={classHandler}>
                                  <option value="All">All</option>
                                  <option value="Warrior">Warrior</option>
                                  <option value="Marksman">Marksman</option>
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
                   {/* { (Object.keys(display2.weapons).length != 0)?
                        <div className="shop-categoryName">
                        <p>Weapons</p>
                       </div>:""

                   } */}

                   {(charClass==="All" && rarity==="All")?<div>
                   <div className="shop-categoryName">
                        <p>Warrior</p>
                  </div>
                      {display2.weapons.map((w,index)=>{
                                  if(w.class==="Warrior"){
                                    return (
                                    <div key={index} className="shop-outfitFilter">
                                    <WeaponFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} updatePreview={updatePreview}/>
                                    </div>
                                  )
                          }
                        })}
                        </div>:""
                  }
                   {(charClass==="All" && rarity==="All")?<div>
                   <div className="shop-categoryName">
                        <p>Marksman</p>
                  </div>
                      {display2.weapons.map((w,index)=>{
                                  if(w.class==="Marksman"){
                                    return (
                                    <div key={index} className="shop-outfitFilter">
                                   <WeaponFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems}/>
                                    </div>
                                  )
                          }
                        })}
                        </div>:""
                    }
                     {(charClass==="All" && rarity==="All")?<div>
                     <div className="shop-categoryName">
                     <p>Mage</p>
                     </div>
                      {display2.weapons.map((w,index)=>{

                                  if(w.class==="Mage"){
                                    return (
                                    <div key={index} className="shop-outfitFilter">
                                    <WeaponFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems}/>
                                    </div>
                                  )
                                }

                        })}
                      </div>:""
                    }
                  {(charClass==="All" && rarity==="Common")?<div>
                   <div className="shop-categoryName">
                        <p>Warrior</p>
                  </div>
                      {display2.weapons.map((w,index)=>{
                                  if(w.class==="Warrior" && w.rarity_type===rarity){
                                    return (
                                    <div key={index} className="shop-outfitFilter">
                                    <WeaponFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems}/>
                                    </div>
                                  )
                          }
                        })}
                        </div>:""
                  }
                    {(charClass==="All" && rarity==="Common")?<div>
                   <div className="shop-categoryName">
                        <p>Marksman</p>
                  </div>
                      {display2.weapons.map((w,index)=>{
                                  if(w.class==="Marksman" && w.rarity_type===rarity){
                                    return (
                                    <div key={index} className="shop-outfitFilter">
                                    <WeaponFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems}/>
                                    </div>
                                  )
                          }
                        })}
                        </div>:""
                  }
                     {(charClass==="All" && rarity==="Common")?<div>
                   <div className="shop-categoryName">
                        <p>Mage</p>
                  </div>
                      {display2.weapons.map((w,index)=>{
                                  if(w.class==="Mage" && w.rarity_type===rarity){
                                    return (
                                    <div key={index} className="shop-outfitFilter">
                                    <WeaponFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems}/>
                                    </div>
                                  )
                          }
                        })}
                        </div>:""
                  }
                    {(charClass==="All" && rarity==="Uncommon")?<div>
                   <div className="shop-categoryName">
                        <p>Warrior</p>
                  </div>
                      {display2.weapons.map((w,index)=>{
                                  if(w.class==="Warrior" && w.rarity_type===rarity){
                                    return (
                                    <div key={index} className="shop-outfitFilter">
                                    <WeaponFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems}/>
                                    </div>
                                  )
                          }
                        })}
                        </div>:""
                  }
                    {(charClass==="All" && rarity==="Uncommon")?<div>
                   <div className="shop-categoryName">
                        <p>Marksman</p>
                  </div>
                      {display2.weapons.map((w,index)=>{
                                  if(w.class==="Marksman" && w.rarity_type===rarity){
                                    return (
                                    <div key={index} className="shop-outfitFilter">
                                    <WeaponFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems}/>
                                    </div>
                                  )
                          }
                        })}
                        </div>:""
                  }
                     {(charClass==="All" && rarity==="Uncommon")?<div>
                   <div className="shop-categoryName">
                        <p>Mage</p>
                  </div>
                      {display2.weapons.map((w,index)=>{
                                  if(w.class==="Mage" && w.rarity_type===rarity){
                                    return (
                                    <div key={index} className="shop-outfitFilter">
                                    <WeaponFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems}/>
                                    </div>
                                  )
                          }
                        })}
                        </div>:""
                  }
                    {(charClass==="All" && rarity==="Rare")?<div>
                   <div className="shop-categoryName">
                        <p>Warrior</p>
                  </div>
                      {display2.weapons.map((w,index)=>{
                                  if(w.class==="Warrior" && w.rarity_type===rarity){
                                    return (
                                    <div key={index} className="shop-outfitFilter">
                                    <WeaponFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems}/>
                                    </div>
                                  )
                          }
                        })}
                        </div>:""
                  }
                    {(charClass==="All" && rarity==="Rare")?<div>
                   <div className="shop-categoryName">
                        <p>Marksman</p>
                  </div>
                      {display2.weapons.map((w,index)=>{
                                  if(w.class==="Marksman" && w.rarity_type===rarity){
                                    return (
                                    <div key={index} className="shop-outfitFilter">
                                    <WeaponFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems}/>
                                    </div>
                                  )
                          }
                        })}
                        </div>:""
                  }
                     {(charClass==="All" && rarity==="Rare")?<div>
                   <div className="shop-categoryName">
                        <p>Mage</p>
                  </div>
                      {display2.weapons.map((w,index)=>{
                                  if(w.class==="Mage" && w.rarity_type===rarity){
                                    return (
                                    <div key={index} className="shop-outfitFilter">
                                    <WeaponFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems}/>
                                    </div>
                                  )
                          }
                        })}
                        </div>:""
                  }
                    {(charClass==="Warrior" && rarity==="All")?<div>
                   <div className="shop-categoryName">
                        <p>Warrior</p>
                  </div>
                      {display2.weapons.map((w,index)=>{
                                  if(w.class==="Warrior"){
                                    return (
                                    <div key={index} className="shop-outfitFilter">
                                    <WeaponFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems}/>
                                    </div>
                                  )
                          }
                        })}
                        </div>:""
                  }
                    {(charClass==="Marksman" && rarity==="All")?<div>
                   <div className="shop-categoryName">
                        <p>Marksman</p>
                  </div>
                      {display2.weapons.map((w,index)=>{
                                  if(w.class==="Marksman"){
                                    return (
                                    <div key={index} className="shop-outfitFilter">
                                    <WeaponFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems}/>
                                    </div>
                                  )
                          }
                        })}
                        </div>:""
                  }
                     {(charClass==="Mage" && rarity==="All")?<div>
                   <div className="shop-categoryName">
                        <p>Mage</p>
                  </div>
                      {display2.weapons.map((w,index)=>{
                                  if(w.class==="Mage"){
                                    return (
                                    <div key={index} className="shop-outfitFilter">
                                    <WeaponFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems}/>
                                    </div>
                                  )
                          }
                        })}
                        </div>:""
                  }
                  {(charClass==="Warrior" && rarity==="Common")?<div>
                   <div className="shop-categoryName">
                        <p>Warrior</p>
                  </div>
                      {display2.weapons.map((w,index)=>{
                                  if(w.class==="Warrior" && w.rarity_type===rarity){
                                    return (
                                    <div key={index} className="shop-outfitFilter">
                                    <WeaponFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems}/>
                                    </div>
                                  )
                          }
                        })}
                        </div>:""
                  }
                    {(charClass==="Marksman" && rarity==="Common")?<div>
                   <div className="shop-categoryName">
                        <p>Marksman</p>
                  </div>
                      {display2.weapons.map((w,index)=>{
                                  if(w.class==="Marksman" && w.rarity_type===rarity){
                                    return (
                                    <div key={index} className="shop-outfitFilter">
                                    <WeaponFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems}/>
                                    </div>
                                  )
                          }
                        })}
                        </div>:""
                  }
                     {(charClass==="Mage" && rarity==="Common")?<div>
                   <div className="shop-categoryName">
                        <p>Mage</p>
                  </div>
                      {display2.weapons.map((w,index)=>{
                                  if(w.class==="Mage" && w.rarity_type===rarity){
                                    return (
                                    <div key={index} className="shop-outfitFilter">
                                    <WeaponFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems}/>
                                    </div>
                                  )
                          }
                        })}
                        </div>:""
                  }
                   {(charClass==="Warrior" && rarity==="Uncommon")?<div>
                   <div className="shop-categoryName">
                        <p>Warrior</p>
                  </div>
                      {display2.weapons.map((w,index)=>{
                                  if(w.class==="Warrior" && w.rarity_type===rarity){
                                    return (
                                    <div key={index} className="shop-outfitFilter">
                                    <WeaponFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems}/>
                                    </div>
                                  )
                          }
                        })}
                        </div>:""
                  }
                    {(charClass==="Marksman" && rarity==="Uncommon")?<div>
                   <div className="shop-categoryName">
                        <p>Marksman</p>
                  </div>
                      {display2.weapons.map((w,index)=>{
                                  if(w.class==="Marksman" && w.rarity_type===rarity){
                                    return (
                                    <div key={index} className="shop-outfitFilter">
                                    <WeaponFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems}/>
                                    </div>
                                  )
                          }
                        })}
                        </div>:""
                  }
                     {(charClass==="Mage" && rarity==="Uncommon")?<div>
                   <div className="shop-categoryName">
                        <p>Mage</p>
                  </div>
                      {display2.weapons.map((w,index)=>{
                                  if(w.class==="Mage" && w.rarity_type===rarity){
                                    return (
                                    <div key={index} className="shop-outfitFilter">
                                    <WeaponFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems}/>
                                    </div>
                                  )
                          }
                        })}
                        </div>:""
                  }
                   {(charClass==="Warrior" && rarity==="Rare")?<div>
                   <div className="shop-categoryName">
                        <p>Warrior</p>
                  </div>
                      {display2.weapons.map((w,index)=>{
                                  if(w.class==="Warrior" && w.rarity_type===rarity){
                                    return (
                                    <div key={index} className="shop-outfitFilter">
                                    <WeaponFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems}/>
                                    </div>
                                  )
                          }
                        })}
                        </div>:""
                  }
                    {(charClass==="Marksman" && rarity==="Rare")?<div>
                   <div className="shop-categoryName">
                        <p>Marksman</p>
                  </div>
                      {display2.weapons.map((w,index)=>{
                                  if(w.class==="Marksman" && w.rarity_type===rarity){
                                    return (
                                    <div key={index} className="shop-outfitFilter">
                                    <WeaponFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems}/>
                                    </div>
                                  )
                          }
                        })}
                        </div>:""
                  }
                     {(charClass==="Mage" && rarity==="Rare")?<div>
                   <div className="shop-categoryName">
                        <p>Mage</p>
                  </div>
                      {display2.weapons.map((w,index)=>{
                                  if(w.class==="Mage" && w.rarity_type===rarity){
                                    return (
                                    <div key={index} className="shop-outfitFilter">
                                    <WeaponFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems}/>
                                    </div>
                                  )
                          }
                        })}
                        </div>:""
                  }

                        </div>
                </div>
          </div>


    );
}

export default Weapons;

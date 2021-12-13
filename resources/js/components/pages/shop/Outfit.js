
import Button from "@restart/ui/esm/Button";
import {Link, React, useEffect, useState, 
      AddPotionForm, AddOutfitForm, ReactTooltip,axios } from "../../../index";
import Swal from 'sweetalert2';
import OutfitFilter from "./OutfitFilter";

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
            //      console.log(res.data.outfit);
            //      console.log(res.data.product);
            //      console.log(res.data.user_id);
            //      console.log(res.data.items);
                 setDisplay2({
                       outfit:res.data.product
                      
                 })
             
               
                
           }
        
     })
  },[])
  useEffect(()=>{
    setDisplay2(display2);
    console.log(display2.outfit);
  },[display2])
  


  const buttonHandler=(e)=>{
     Swal.fire("You have successfully bought the item");
  }

    return(
        <section className="container party-section">
          
                  <div className="party-nav">
                        <div className="party-nav-item "><Link to="/all">All</Link></div>
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
                              <div className="shop-categoryName">
                                    <p>Outfit</p>
                              </div>
                              {display2.outfit.map((w,index)=>{
                                    if(charClass==="All" && rarity==="All"){
                                          if(w.features_outfit.outfitType=== "Costume"){
                                                return (
                                                      <div key={index} className="shop-outfitFilter">
                                                      <OutfitFilter data= {w.features_outfit} value={w.id}/>
                                                      </div>    
                                                      )
                                                  }
                                                }else if(charClass==="All" && rarity==="Common"){
                                                      if(w.features_outfit.outfitType === "Costume" && rarity===w.features_outfit.type){
                                                            return (
                                                                  <div key={index} className="shop-outfitFilter">
                                                                        <OutfitFilter data= {w.features_outfit} value={w.id}/>
                                                                  </div>    
                                                                  )
                                                            }
                                                }else if(charClass==="All" && rarity==="Rare"){
                                                if(w.features_outfit.outfitType === "Costume" && rarity===w.features_outfit.type){
                                                      return (
                                                            <div key={index} className="shop-outfitFilter">
                                                                  <OutfitFilter data= {w.features_outfit} value={w.id}/>
                                                            </div> 
                                                            )
                                                            }
                                                      }else if(charClass==="All" && rarity==="Uncommon"){
                                                            if(w.features_outfit.outfitType === "Costume" && rarity===w.features_outfit.type){
                                                                  return (
                                                                        <div key={index} className="shop-outfitFilter">
                                                                        <OutfitFilter data= {w.features_outfit} value={w.id}/>
                                                                        </div>  
                                                                  )
                                                            }
                                                      }else if(charClass==="Warrior" && rarity==="All"){
                                                            if(w.features_outfit.outfitType === "Costume" && w.features_outfit.class===charClass){
                                                                  return (
                                                                        <div key={index} className="shop-outfitFilter">
                                                                        <OutfitFilter data= {w.features_outfit} value={w.id}/>
                                                                        </div> 
                                                                  )
                                                            }
                                                      }else if(charClass==="Warrior" && rarity==="Common"){
                                                            if(w.features_outfit.outfitType === "Costume" && w.features_outfit.type===rarity && w.features_outfit.class===charClass){
                                                                  return (
                                                                        <div key={index} className="shop-outfitFilter">
                                                                        <OutfitFilter data= {w.features_outfit} value={w.id}/>
                                                                        </div> 
                                                                  )
                                                            }
                                                      }else if(charClass==="Warrior" && rarity==="Uncommon"){
                                                            if(w.features_outfit.outfitType === "Costume" && w.features_outfit.type===rarity && w.features_outfit.class===charClass){
                                                                  return (
                                                                        <div key={index} className="shop-outfitFilter">
                                                                        <OutfitFilter data= {w.features_outfit} value={w.id}/>
                                                                        </div> 
                                                                  )
                                                            }
                                                      }else if(charClass==="Warrior" && rarity==="Rare"){
                                                            if(w.features_outfit.outfitType === "Costume" && w.features_outfit.type===rarity && w.features_outfit.class===charClass){
                                                                  return (
                                                                        <div key={index} className="shop-outfitFilter">
                                                                        <OutfitFilter data= {w.features_outfit} value={w.id}/>
                                                                        </div> 
                                                                  )
                                                            }
                                                      }else if(charClass==="Marksman" && rarity==="All"){
                                                            if(w.features_outfit.outfitType === "Costume" && w.features_outfit.class===charClass){
                                                                  return (
                                                                        <div key={index} className="shop-outfitFilter">
                                                                        <OutfitFilter data= {w.features_outfit} value={w.id}/>
                                                                        </div> 
                                                                  )
                                                            }
                                                      }else if(charClass==="Marksman" && rarity==="Common"){
                                                            if(w.features_outfit.outfitType === "Costume" && w.features_outfit.type===rarity && w.features_outfit.class===charClass){
                                                                  return (
                                                                        <div key={index} className="shop-outfitFilter">
                                                                        <OutfitFilter data= {w.features_outfit} value={w.id}/>
                                                                        </div> 
                                                                  )
                                                            }
                                                      }else if(charClass==="Marksman" && rarity==="Uncommon"){
                                                            if(w.features_outfit.outfitType === "Costume" && w.features_outfit.type===rarity && w.features_outfit.class===charClass){
                                                                  return (
                                                                        <div key={index} className="shop-outfitFilter">
                                                                        <OutfitFilter data= {w.features_outfit} value={w.id}/>
                                                                        </div>   
                                                                  )
                                                            }
                                                      }else if(charClass==="Marksman" && rarity==="Rare"){
                                                            if(w.features_outfit.outfitType === "Costume" && w.features_outfit.type===rarity && w.features_outfit.class===charClass){
                                                                  return (
                                                                        <div key={index} className="shop-outfitFilter">
                                                                        <OutfitFilter data= {w.features_outfit} value={w.id}/>
                                                                        </div> 
                                                                  )
                                                            }
                                                      }else if(charClass==="Mage" && rarity==="All"){
                                                            if(w.features_outfit.outfitType === "Costume" && w.features_outfit.class===charClass){
                                                                  return (
                                                                        <div key={index} className="shop-outfitFilter">
                                                                        <OutfitFilter data= {w.features_outfit} value={w.id}/>
                                                                        </div> 
                                                                  )
                                                            }
                                                      }else if(charClass==="Mage" && rarity==="Common"){
                                                            if(w.features_outfit.outfitType === "Costume" && w.features_outfit.type===rarity && w.features_outfit.class===charClass){
                                                                  return (
                                                                        <div key={index} className="shop-outfitFilter">
                                                                        <OutfitFilter data= {w.features_outfit} value={w.id}/>
                                                                        </div> 
                                                                  )
                                                            }
                                                      }else if(charClass==="Mage" && rarity==="Uncommon"){
                                                            if(w.features_outfit.outfitType === "Costume" && w.features_outfit.type===rarity && w.features_outfit.class===charClass){
                                                                  return (
                                                                        <div key={index} className="shop-outfitFilter">
                                                                        <OutfitFilter data= {w.features_outfit} value={w.id}/>
                                                                        </div> 
                                                                  )
                                                            }
                                                      }else if(charClass==="Mage" && rarity==="Rare"){
                                                            if(w.features_outfit.outfitType === "Costume" && w.features_outfit.type===rarity && w.features_outfit.class===charClass){
                                                                  return (
                                                                        <div key={index} className="shop-outfitFilter">
                                                                        <OutfitFilter data= {w.features_outfit} value={w.id}/>
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
import Button from "@restart/ui/esm/Button";
import {Link, React, useEffect, useState, AddPotionForm,
      AddOutfitForm, ReactTooltip,axios } from "../../../index";
import Swal from 'sweetalert2';
import PotionFilter from "./PotionFilter";

function Potions({setGems,gems}){
    var hpTotal = 50;
    var xpTotal = 50;
    const [hp, setHp] = useState(50);
    const [xp, setXp] = useState(0);
    const [hpBarWidth, sethpBarWidth] = useState("100");
    const [hpHitWidth, sethpHitWidth] = useState("0");
    const [HpIncreaseWidth, setHPIncreaseWidth] = useState("0");


    const[potionType,setPotionType]=useState("All");
    const[size, setSize]=useState("All");
    const[display1,setDisplay1]=useState({
        potions:[],
  });



  const potionHandler=(e)=>{

      setPotionType(e.target.value);




  }
  const sizeHandler=(e)=>{
        setSize(e.target.value);
  }
  useEffect(()=>{
     axios.get(`/api/potions`).then(res =>{
           if(res.data.status===200){

                 setDisplay1({
                       potions:res.data.potion
                 });
           }

     })
  },[])
  useEffect(()=>{
      //console.log(display1.potions)
      // console.log(Object.keys(display2.armors).length);
  },[display1])



  const buttonHandler=(e)=>{
     Swal.fire("You have successfully bought the item");
  }

    return(

              <div className="shop-filtShop">
                        <div className="shop-filter">
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
            <div className="shop-shop">
                  <div className="shop-category">

                                   { (potionType === "All" && size==="All")?
                              <div className="shop-categoryName">
                                    <p>Health Potions</p>
                              </div>:""
                              }
                              {display1.potions.map((p,index)=>{
                                    if(potionType === "All" && size==="All"){
                                          if(p.features_potion.type==="Hp Potion"){
                                                return (
                                                      <div key={index} className="shop-outfitFilter">
                                                            <PotionFilter data= {p.features_potion} value={p.id} setGems={setGems} gems={gems}/>
                                                      </div>
                                                )
                                          }
                                    }
                              })}

                                    { (potionType === "All" && size==="Small")?
                                    <div className="shop-categoryName">
                                          <p>Health Potions</p>
                                    </div>:""
                                    }
                                    {display1.potions.map((p,index)=>{
                                          if(potionType === "All" && size==="Small"){
                                                if(p.features_potion.type==="Hp Potion" && p.features_potion.size=== size){
                                                      return (
                                                            <div key={index} className="shop-outfitFilter">
                                                                  <PotionFilter data= {p.features_potion} value={p.id} setGems={setGems} gems={gems}/>
                                                            </div>
                                                      )
                                                }
                                          }
                                    })}
                                    { (potionType === "All" && size==="Medium")?
                                    <div className="shop-categoryName">
                                          <p>Health Potions</p>
                                    </div>:""
                                    }
                                    {display1.potions.map((p,index)=>{
                                          if(potionType === "All" && size==="Medium"){
                                                if(p.features_potion.type==="Hp Potion" && p.features_potion.size=== size){
                                                      return (
                                                            <div key={index} className="shop-outfitFilter">
                                                                  <PotionFilter data= {p.features_potion} value={p.id} setGems={setGems} gems={gems}/>
                                                            </div>
                                                      )
                                                }
                                          }
                                    })}
                                    { (potionType === "All" && size==="Large")?
                                    <div className="shop-categoryName">
                                          <p>Health Potions</p>
                                    </div>:""
                                    }
                                    {display1.potions.map((p,index)=>{
                                          if(potionType === "All" && size==="Large"){
                                                if(p.features_potion.type==="Hp Potion" && p.features_potion.size=== size){
                                                      return (
                                                            <div key={index} className="shop-outfitFilter">
                                                                  <PotionFilter data= {p.features_potion} value={p.id} setGems={setGems} gems={gems}/>
                                                            </div>
                                                      )
                                                }
                                          }
                                    })}

                  { (potionType === "All" && size==="All")?
                              <div className="shop-categoryName">
                                    <p>Powerup Potion</p>
                              </div>:""
                              }
                              {display1.potions.map((p,index)=>{
                                    if(potionType === "All" && size==="All"){
                                          if(p.features_potion.type==="Powerup Potion"){
                                                return (
                                                      <div key={index} className="shop-outfitFilter">
                                                            <PotionFilter data= {p.features_potion} value={p.id} setGems={setGems} gems={gems}/>
                                                      </div>
                                                )
                                          }
                                    }
                              })}

                                    { (potionType === "All" && size==="Small")?
                                    <div className="shop-categoryName">
                                          <p>Powerup Potion</p>
                                    </div>:""
                                    }
                                    {display1.potions.map((p,index)=>{
                                          if(potionType === "All" && size==="Small"){
                                                if(p.features_potion.type==="Powerup Potion" && p.features_potion.size=== size){
                                                      return (
                                                            <div key={index} className="shop-outfitFilter">
                                                                  <PotionFilter data= {p.features_potion} value={p.id} setGems={setGems} gems={gems}/>
                                                            </div>
                                                      )
                                                }
                                          }
                                    })}
                                    { (potionType === "All" && size==="Medium")?
                                    <div className="shop-categoryName">
                                          <p>Powerup Potion</p>
                                    </div>:""
                                    }
                                    {display1.potions.map((p,index)=>{
                                          if(potionType === "All" && size==="Medium"){
                                                if(p.features_potion.type==="Powerup Potion" && p.features_potion.size=== size){
                                                      return (
                                                            <div key={index} className="shop-outfitFilter">
                                                                  <PotionFilter data= {p.features_potion} value={p.id} setGems={setGems} gems={gems}/>
                                                            </div>
                                                      )
                                                }
                                          }
                                    })}
                                    { (potionType === "All" && size==="Large")?
                                    <div className="shop-categoryName">
                                          <p>Powerup Potion</p>
                                    </div>:""
                                    }
                                    {display1.potions.map((p,index)=>{
                                          if(potionType === "All" && size==="Large"){
                                                if(p.features_potion.type==="Powerup Potion" && p.features_potion.size=== size){
                                                      return (
                                                            <div key={index} className="shop-outfitFilter">
                                                                  <PotionFilter data= {p.features_potion} value={p.id} setGems={setGems} gems={gems}/>
                                                            </div>
                                                      )
                                                }
                                          }
                                    })}

                                    {/* HP POTION - ALL DOWN TO LARGE SIZE FILTER */}
                               { (potionType === "Hp Potion" && size==="All")?
                              <div className="shop-categoryName">
                                    <p>Hp Potion</p>
                              </div>:""
                              }
                              {display1.potions.map((p,index)=>{
                                    if(potionType === "Hp Potion" && size==="All"){
                                          if(p.features_potion.type==="Hp Potion"){
                                                return (
                                                      <div key={index} className="shop-outfitFilter">
                                                            <PotionFilter data= {p.features_potion} value={p.id} setGems={setGems} gems={gems}/>
                                                      </div>
                                                )
                                          }
                                    }
                              })}

                        { (potionType === "Hp Potion" && size==="Small")?
                              <div className="shop-categoryName">
                                    <p>Hp Potion</p>
                              </div>:""
                              }
                              {display1.potions.map((p,index)=>{
                                    if(potionType === "Hp Potion" && size==="Small"){
                                          if(p.features_potion.type==="Hp Potion" && p.features_potion.size==="Small"){
                                                return (
                                                      <div key={index} className="shop-outfitFilter">
                                                            <PotionFilter data= {p.features_potion} value={p.id} setGems={setGems} gems={gems}/>
                                                      </div>
                                                )
                                          }
                                    }
                              })}

                        { (potionType === "Hp Potion" && size==="Medium")?
                              <div className="shop-categoryName">
                                    <p>Hp Potion</p>
                              </div>:""
                              }
                              {display1.potions.map((p,index)=>{
                                    if(potionType === "Hp Potion" && size==="Medium"){
                                          if(p.features_potion.type==="Hp Potion" && p.features_potion.size==="Medium"){
                                                return (
                                                      <div key={index} className="shop-outfitFilter">
                                                            <PotionFilter data= {p.features_potion} value={p.id} setGems={setGems} gems={gems}/>
                                                      </div>
                                                )
                                          }
                                    }
                              })}

                  { (potionType === "Hp Potion" && size==="Large")?
                              <div className="shop-categoryName">
                                    <p>Hp Potion</p>
                              </div>:""
                              }
                              {display1.potions.map((p,index)=>{
                                    if(potionType === "Hp Potion" && size==="Large"){
                                          if(p.features_potion.type==="Hp Potion" && p.features_potion.size==="Large"){
                                                return (
                                                      <div key={index} className="shop-outfitFilter">
                                                            <PotionFilter data= {p.features_potion} value={p.id} setGems={setGems} gems={gems}/>
                                                      </div>
                                                )
                                          }
                                    }
                              })}

                               {/* Powerup Potion - ALL DOWN TO LARGE SIZE FILTER */}

                               { (potionType === "Powerup Potion" && size==="All")?
                              <div className="shop-categoryName">
                                    <p>Powerup Potion</p>
                              </div>:""
                              }
                              {display1.potions.map((p,index)=>{
                                    if(potionType === "Powerup Potion" && size==="All"){
                                          if(p.features_potion.type==="Powerup Potion"){
                                                return (
                                                      <div key={index} className="shop-outfitFilter">
                                                            <PotionFilter data= {p.features_potion} value={p.id} setGems={setGems} gems={gems}/>
                                                      </div>
                                                )
                                          }
                                    }
                              })}

                        { (potionType === "Powerup Potion" && size==="Small")?
                              <div className="shop-categoryName">
                                    <p>Powerup Potion</p>
                              </div>:""
                              }
                              {display1.potions.map((p,index)=>{
                                    if(potionType === "Powerup Potion" && size==="Small"){
                                          if(p.features_potion.type==="Powerup Potion" && p.features_potion.size==="Small"){
                                                return (
                                                      <div key={index} className="shop-outfitFilter">
                                                            <PotionFilter data= {p.features_potion} value={p.id} setGems={setGems} gems={gems}/>
                                                      </div>
                                                )
                                          }
                                    }
                              })}

                        { (potionType === "Powerup Potion" && size==="Medium")?
                              <div className="shop-categoryName">
                                    <p>Powerup Potion</p>
                              </div>:""
                              }
                              {display1.potions.map((p,index)=>{
                                    if(potionType === "Powerup Potion" && size==="Medium"){
                                          if(p.features_potion.type==="Powerup Potion" && p.features_potion.size==="Medium"){
                                                return (
                                                      <div key={index} className="shop-outfitFilter">
                                                            <PotionFilter data= {p.features_potion} value={p.id} setGems={setGems} gems={gems}/>
                                                      </div>
                                                )
                                          }
                                    }
                              })}

                  { (potionType === "Powerup Potion" && size==="Large")?
                              <div className="shop-categoryName">
                                    <p>Powerup Potion</p>
                              </div>:""
                              }
                              {display1.potions.map((p,index)=>{
                                    if(potionType === "Powerup Potion" && size==="Large"){
                                          if(p.features_potion.type==="Powerup Potion" && p.features_potion.size==="Large"){
                                                return (
                                                      <div key={index} className="shop-outfitFilter">
                                                            <PotionFilter data= {p.features_potion} value={p.id} setGems={setGems} gems={gems}/>
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

export default Potions;

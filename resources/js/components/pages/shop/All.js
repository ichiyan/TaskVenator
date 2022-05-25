import Button from "@restart/ui/esm/Button";
import {Link, React, useEffect, useState,
      AddPotionForm, AddOutfitForm, AddCardForm, ReactTooltip,axios } from "../../../index";
import Swal from 'sweetalert2';
import WeaponFilter from "./WeaponFilter";
import OutfitFilter from "./OutfitFilter";
function All({setGems,gems, updatePreview}){
    var hpTotal = 50;
    var xpTotal = 50;
    const [hp, setHp] = useState(50);
    const [xp, setXp] = useState(0);
    const [hpBarWidth, sethpBarWidth] = useState("100");
    const [hpHitWidth, sethpHitWidth] = useState("0");
    const [HpIncreaseWidth, setHPIncreaseWidth] = useState("0");

    const [xpBarWidth, setXPBarWidth] = useState("0");
    const [xpIncreaseWidth, setXPIncreaseWidth] = useState("0");
    const[clicked, setClicked] =useState("");
    const[preview, setPreview]=useState("");

    const[display1,setDisplay1]=useState({
        potions:[],
  });

  const[display2,setDisplay2]=useState({
        weapons:[],
  });
  const[display3,setDisplay3]=useState({
      armors:[],
});
var avatarClass= "Warrior";

  useEffect(()=>{
     axios.get(`/api/potions`).then(res =>{
           if(res.data.status===200){
                 setDisplay1({
                       potions:res.data.potion
                 });

           }
     })
  },[])

    useEffect(() =>{
     axios.get(`/api/outfit`).then(res =>{
           if(res.data.status===200){
                 setDisplay2({
                       weapons:res.data.weapon

                 })


           }
     })
  },[])
  useEffect(() =>{
      axios.get(`/api/outfit`).then(res =>{
            if(res.data.status===200){

                  setDisplay3({
                        armors:res.data.armor

                  })


            }
      })
   },[])
  const showItem =(event) =>{
    setClicked(event.target.value);
}
useEffect(()=>{
//     setClicked(clicked);
},[display3]);

const buttonHandler=(e)=>{
      Swal.fire("You have successfully bought the item");
}

const previewImage =(event)=>{
     setPreview(event)
}

const [passProductId, setPassProductId]= useState({
      product: '',
      amount :'',
});

 const submitToHandler=(e)=>{
      e.preventDefault();
      setPassProductId({
              product:e.target.product.value,
              amount: e.target.amount.value,
      });

 }

 useEffect(() => {
      const data={
            product: passProductId.product,
            amount: passProductId.amount,
      }
      if(data.product === "" || data.amount===""){
            // console.log("empty")
      }else if((gems-data.amount)>=0){
            axios.post(`/api/addBought`, data).then(res =>{
                  if(res.data.status === 200){
                        setGems(res.data.gems);
                        Swal.fire("You have successfully bought the item");
                  }else {
                    // setPotion({...potion,error_list:res.data.errors});
                  }
                });
      }else{
            Swal.fire("Not Enough Gems :(");
      }
 }, [passProductId])



    return(
            <div className="shop-filtShop">
                <div className="shop-shop">
                   <div className="shop-category">
                        <div className="shop-categoryName">
                              <h5>Health Potions</h5>
                        </div>
                        {display1.potions.map((p,index)=>{
                               if(p.features_potion.type === "Hp Potion"){
                                    return (
                                        <div key={index} className="shop-returnMap">
                                            <div data-tip data-for={p.features_potion.name} className="shop-items">
                                                    <div className="shop-itemsImage">
                                                    <img onClick={() => {previewImage(p.image)}} src={p.features_potion.image} ></img>
                                                    </div>
                                                    <div className="shop-itemsInfo">
                                                        <h6>{p.features_potion.name}</h6>

                                                        <form onSubmit={submitToHandler}>
                                                                <input name="product" type="hidden" value={p.features_potion.id}/>
                                                                <input name="amount" type="hidden" value={p.features_potion.price}/>
                                                                <Button type="submit"><img src="assets/images/currency.png"></img>{p.features_potion.price}<br></br></Button>
                                                        </form>
                                                    </div>
                                            </div>
                                            <ReactTooltip id={p.features_potion.name} place="right" aria-haspopup='true' className="shop-toolTip">
                                                    <div className="shop-hide">
                                                        <div className="shop-itemsInfo">
                                                                <p>{p.features_potion.size}</p>
                                                                <p>{p.features_potion.description}</p>
                                                        </div>
                                                    </div>
                                            </ReactTooltip>
                                        </div>
                                    )
                                }
                        })}
                        <div className="shop-categoryName">
                              <p>Powerup Potions</p>
                        </div>
                        {display1.potions.map((p,index)=>{
                               if(p.features_potion.type === "Powerup Potion"){
                              return (
                                    <div key={index} className="shop-returnMap">
                                          <div data-tip data-for={p.features_potion.name} className="shop-items">
                                                <div className="shop-itemsImage">
                                                <img src={p.features_potion.image}></img>
                                                </div>
                                                {/* <div className="shop-itemsInfo">
                                                      <h6>{p.features_potion.name}</h6>
                                                      <p>{p.features_potion.size}</p>
                                                      <Button onClick={buttonHandler}><img src="assets/images/currency.png"></img>{p.features_potion.price}<br></br> BUY</Button>
                                                </div> */}
                                          <div className="shop-itemsInfo">
                                                <h6>{p.features_potion.name}</h6>
                                                <div>
                                                      <form onSubmit={submitToHandler}>
                                                            <input name="product" type="hidden" value={p.features_potion.id}/>
                                                            <input name="amount" type="hidden" value={p.features_potion.price}/>
                                                            <Button type="submit"><img src="assets/images/currency.png"></img>{p.features_potion.price}<br></br></Button>
                                                      </form>
                                                </div>
                                          </div>
                                          </div>
                                          <ReactTooltip id={p.features_potion.name} place="right" aria-haspopup='true' className="shop-toolTip">
                                                <div className="shop-hide">
                                                      <div className="shop-itemsInfo">
                                                            <p>{p.features_potion.size}</p>
                                                            <p>{p.features_potion.description}</p>
                                                      </div>
                                                </div>
                                          </ReactTooltip>
                                    </div>
                               )
                            }
                        })}
                        <div className="shop-categoryName">
                            <h5>Weapons</h5>
                        </div>
                        <div className="shop-categoryName">
                            <p>Warrior</p>
                        </div>
                        {display2.weapons.map((w,index)=>{
                                    if(w.class==="Warrior"){
                                        return (
                                        <div key={index} className="shop-outfitFilter">
                                        <WeaponFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview={updatePreview}/>
                                        </div>
                                    )
                            }
                            })}

                        <div className="shop-categoryName">
                            <p>Marksman</p>
                        </div>
                        {display2.weapons.map((w,index)=>{
                                    if(w.class==="Marksman"){
                                        return (
                                        <div key={index} className="shop-outfitFilter">
                                    <WeaponFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview={updatePreview}/>
                                        </div>
                                    )
                            }
                            })}
                        <div className="shop-categoryName">
                            <p>Mage</p>
                        </div>
                        {display2.weapons.map((w,index)=>{

                                    if(w.class==="Mage"){
                                        return (
                                        <div key={index} className="shop-outfitFilter">
                                        <WeaponFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview={updatePreview}/>
                                        </div>
                                    )
                                    }

                            })}
                        <div className="shop-categoryName">
                                <h5>Outfit</h5>
                        </div>
                        <div className="shop-categoryName">
                                <p>Warrior</p>
                        </div>
                        <div className="shop-categoryName">
                              <p>Head</p>
                        </div>
                              {display3.armors.map((w,index)=>{
                                    if(w.class==="Warrior" && w.bodyPart==="Head"){
                                          return (
                                          <div key={index} className="shop-outfitFilter">
                                          <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview={updatePreview}/>
                                          </div>
                                          )
                                    }
                              })}
                        <div className="shop-categoryName">
                              <p>Arms</p>
                        </div>
                              {display3.armors.map((w,index)=>{
                                    if(w.class==="Warrior" && w.bodyPart==="Arms"){
                                          return (
                                          <div key={index} className="shop-outfitFilter">
                                          <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview={updatePreview}/>
                                          </div>
                                          )
                                    }
                              })}
                        <div className="shop-categoryName">
                              <p>Torso</p>
                        </div>
                              {display3.armors.map((w,index)=>{
                                    if(w.class==="Warrior" && w.bodyPart==="Torso"){
                                          return (
                                          <div key={index} className="shop-outfitFilter">
                                          <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview={updatePreview}/>
                                          </div>
                                          )
                                    }
                              })}
                        <div className="shop-categoryName">
                              <p>Legs</p>
                        </div>
                              {display3.armors.map((w,index)=>{
                                    if(w.class==="Warrior" && w.bodyPartt==="Legs"){
                                          return (
                                          <div key={index} className="shop-outfitFilter">
                                          <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview={updatePreview}/>
                                          </div>
                                          )
                                    }
                              })}
                         <div className="shop-categoryName">
                              <p>Feet</p>
                        </div>
                              {display3.armors.map((w,index)=>{
                                    if(w.class==="Warrior" && w.bodyPart==="Footwear"){
                                          return (
                                          <div key={index} className="shop-outfitFilter">
                                          <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview={updatePreview}/>
                                          </div>
                                          )
                                    }
                              })}
                        <div className="shop-categoryName">
                            <p>Marksman</p>
                        </div>
                        <div className="shop-categoryName">
                              <p>Head</p>
                        </div>
                              {display3.armors.map((w,index)=>{
                                    if(w.class==="Marksman" && w.bodyPart==="Head"){
                                          return (
                                          <div key={index} className="shop-outfitFilter">
                                          <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview={updatePreview}/>
                                          </div>
                                          )
                                    }
                              })}
                        <div className="shop-categoryName">
                              <p>Arms</p>
                        </div>
                              {display3.armors.map((w,index)=>{
                                    if(w.class==="Marksman" && w.bodyPart==="Arms"){
                                          return (
                                          <div key={index} className="shop-outfitFilter">
                                          <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview={updatePreview}/>
                                          </div>
                                          )
                                    }
                              })}
                        <div className="shop-categoryName">
                              <p>Torso</p>
                        </div>
                              {display3.armors.map((w,index)=>{
                                    if(w.class==="Marksman" && w.bodyPart==="Torso"){
                                          return (
                                          <div key={index} className="shop-outfitFilter">
                                          <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview={updatePreview}/>
                                          </div>
                                          )
                                    }
                              })}
                        <div className="shop-categoryName">
                              <p>Legs</p>
                        </div>
                              {display3.armors.map((w,index)=>{
                                    if(w.class==="Marksman" && w.bodyPart==="Legs"){
                                          return (
                                          <div key={index} className="shop-outfitFilter">
                                          <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview={updatePreview}/>
                                          </div>
                                          )
                                    }
                              })}
                        <div className="shop-categoryName">
                            <p>Feet</p>
                        </div>
                              {display3.armors.map((w,index)=>{
                                    if(w.class==="Marksman" && w.bodyPart==="Footwear"){
                                          return (
                                          <div key={index} className="shop-outfitFilter">
                                          <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview={updatePreview}/>
                                          </div>
                                          )
                                    }
                              })}
                        <div className="shop-categoryName">
                            <p>Mage</p>
                        </div>
                        <div className="shop-categoryName">
                              <p>Head</p>
                        </div>
                              {display3.armors.map((w,index)=>{
                                    if(w.class==="Mage" && w.bodyPart==="Head"){
                                          return (
                                          <div key={index} className="shop-outfitFilter">
                                          <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview={updatePreview}/>
                                          </div>
                                          )
                                    }
                              })}
                        <div className="shop-categoryName">
                              <p>Arms</p>
                        </div>
                              {display3.armors.map((w,index)=>{
                                    if(w.class==="Mage" && w.bodyPart==="Arms"){
                                          return (
                                          <div key={index} className="shop-outfitFilter">
                                          <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview={updatePreview}/>
                                          </div>
                                          )
                                    }
                              })}
                        <div className="shop-categoryName">
                              <p>Torso</p>
                        </div>
                              {display3.armors.map((w,index)=>{
                                    if(w.class==="Mage" && w.bodyPart==="Torso"){
                                          return (
                                          <div key={index} className="shop-outfitFilter">
                                          <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview={updatePreview}/>
                                          </div>
                                          )
                                    }
                              })}
                        <div className="shop-categoryName">
                            <p>Legs</p>
                        </div>
                              {display3.armors.map((w,index)=>{
                                    if(w.class==="Mage" && w.bodyPart==="Legs"){
                                          return (
                                          <div key={index} className="shop-outfitFilter">
                                          <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview={updatePreview}/>
                                          </div>
                                          )
                                    }
                              })}
                        <div className="shop-categoryName">
                            <p>Feet</p>
                        </div>
                              {display3.armors.map((w,index)=>{
                                    if(w.class==="Mage" && w.bodyPart==="Footwear"){
                                          return (
                                          <div key={index} className="shop-outfitFilter">
                                          <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview={updatePreview}/>
                                          </div>
                                          )
                                    }
                              })}
                    </div>
                </div>
         </div>
    );
}

export default All;

import React, { useState, useEffect } from "react";
import Header from "../../layouts/Header";
import AvatarHeader from "../../layouts/AvatarHeader";

import Button from "@restart/ui/esm/Button";
import axios from "axios";
import ReactTooltip from 'react-tooltip';
import Swal from 'sweetalert2';
import { Link } from "react-router-dom";
import { nodeName } from "jquery";

function Potions(){
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
                       potions:res.data.potions
                 });
           }
           
     })
  },[])
  


  const buttonHandler=(e)=>{
     Swal.fire("You have successfully bought the item");
  }

    return(
        <div className="shop-parentOfAll">
              <Header page="shop"/>
              <AvatarHeader hasParty="true" hp={hp} hpTotal={hpTotal} hpBarWidth={hpBarWidth} hpHitWidth={hpHitWidth} HpIncreaseWidth={HpIncreaseWidth} xp={xp} xpTotal={xpTotal} />
              
            
              <div className="shop-main_shop">
                  <div className="shop-nav">
                        <div className="shop-nav-item"><Link to="/all">All</Link></div>
                        <div className="shop-nav-item shop-active-nav"><Link to="/potions">Potions</Link></div>
                        <div className="shop-nav-item"><Link to="/weapons">Weapons</Link></div>
                        <div className="shop-nav-item"><Link to="/outfit">Outfit</Link></div>
                  </div>
              </div>
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
                              <div className="shop-categoryName">
                                    <p>Health Potions</p>
                              </div>
                              {display1.potions.map((p,index)=>{
                                    if(potionType === "All" && size==="All"){
                                          if(p.type==="Hp Potion"){
                                                return (
                                                      <div key={index} className="shop-returnMap">
                                                            <div data-tip data-for={p.name} className="shop-items"> 
                                                                  <div className="shop-itemsImage">
                                                                  <img src={p.image}></img>
                                                                  </div>
                                                                  <div className="shop-itemsInfo">
                                                                        <h6>{p.name}</h6>
                                                                        <p>{p.size}</p>
                                                                        <Button onClick={buttonHandler}><img src="assets/images/currency.png"></img>{p.price}<br></br> BUY</Button>
                                                                  </div>
                                                            </div> 
                                                            <ReactTooltip id={p.name} place="right" aria-haspopup='true' className="shop-toolTip">
                                                                  <div className="shop-hide">
                                                                        <div className="shop-itemsInfo">
                                                                              <p>{p.description}</p>
                                                                        </div> 
                                                                  </div>
                                                            </ReactTooltip>
                                                      </div>
                                                )
                                          }
                                    }else if(potionType === "All" && size==="Small"){
                                          if(p.type==="Hp Potion" && p.size=== size){
                                                return (
                                                      <div key={index} className="shop-returnMap">
                                                            <div data-tip data-for={p.name} className="shop-items"> 
                                                                  <div className="shop-itemsImage">
                                                                  <img src={p.image}></img>
                                                                  </div>
                                                                  <div className="shop-itemsInfo">
                                                                        <h6>{p.name}</h6>
                                                                        <p>{p.size}</p>
                                                                        <Button onClick={buttonHandler}><img src="assets/images/currency.png"></img>{p.price}<br></br> BUY</Button>
                                                                  </div>
                                                            </div> 
                                                            <ReactTooltip id={p.name} place="right" aria-haspopup='true' className="shop-toolTip">
                                                                  <div className="shop-hide">
                                                                        <div className="shop-itemsInfo">
                                                                              <p>{p.description}</p>
                                                                        </div> 
                                                                  </div>
                                                            </ReactTooltip>
                                                      </div>
                                                )
                                          }
                                    }else if(potionType === "All" && size==="Medium"){
                                          if(p.type==="Hp Potion" && p.size=== size){
                                                return (
                                                      <div key={index} className="shop-returnMap">
                                                            <div data-tip data-for={p.name} className="shop-items"> 
                                                                  <div className="shop-itemsImage">
                                                                  <img src={p.image}></img>
                                                                  </div>
                                                                  <div className="shop-itemsInfo">
                                                                        <h6>{p.name}</h6>
                                                                        <p>{p.size}</p>
                                                                        <Button onClick={buttonHandler}><img src="assets/images/currency.png"></img>{p.price}<br></br> BUY</Button>
                                                                  </div>
                                                            </div> 
                                                            <ReactTooltip id={p.name} place="right" aria-haspopup='true' className="shop-toolTip">
                                                                  <div className="shop-hide">
                                                                        <div className="shop-itemsInfo">
                                                                              <p>{p.description}</p>
                                                                        </div> 
                                                                  </div>
                                                            </ReactTooltip>
                                                      </div>
                                                )
                                          }
                                    }else if(potionType === "All" && size==="Large"){
                                          if(p.type==="Hp Potion" && p.size=== size){
                                                return (
                                                      <div key={index} className="shop-returnMap">
                                                            <div data-tip data-for={p.name} className="shop-items"> 
                                                                  <div className="shop-itemsImage">
                                                                  <img src={p.image}></img>
                                                                  </div>
                                                                  <div className="shop-itemsInfo">
                                                                        <h6>{p.name}</h6>
                                                                        <p>{p.size}</p>
                                                                        <Button onClick={buttonHandler}><img src="assets/images/currency.png"></img>{p.price}<br></br> BUY</Button>
                                                                  </div>
                                                            </div> 
                                                            <ReactTooltip id={p.name} place="right" aria-haspopup='true' className="shop-toolTip">
                                                                  <div className="shop-hide">
                                                                        <div className="shop-itemsInfo">
                                                                              <p>{p.description}</p>
                                                                        </div> 
                                                                  </div>
                                                            </ReactTooltip>
                                                      </div>
                                                )
                                          }
                                    }else if(potionType === "Hp Potion" && size==="All"){
                                          if(p.type==="Hp Potion"){
                                                return (
                                                      <div key={index} className="shop-returnMap">
                                                            <div data-tip data-for={p.name} className="shop-items"> 
                                                                  <div className="shop-itemsImage">
                                                                  <img src={p.image}></img>
                                                                  </div>
                                                                  <div className="shop-itemsInfo">
                                                                        <h6>{p.name}</h6>
                                                                        <p>{p.size}</p>
                                                                        <Button onClick={buttonHandler}><img src="assets/images/currency.png"></img>{p.price}<br></br> BUY</Button>
                                                                  </div>
                                                            </div> 
                                                            <ReactTooltip id={p.name} place="right" aria-haspopup='true' className="shop-toolTip">
                                                                  <div className="shop-hide">
                                                                        <div className="shop-itemsInfo">
                                                                              <p>{p.description}</p>
                                                                        </div> 
                                                                  </div>
                                                            </ReactTooltip>
                                                      </div>
                                                )
                                          }
                                    }else if(potionType === "Hp Potion" && size==="Small"){
                                          if(p.type==="Hp Potion" && p.size===size){
                                                return (
                                                      <div key={index} className="shop-returnMap">
                                                            <div data-tip data-for={p.name} className="shop-items"> 
                                                                  <div className="shop-itemsImage">
                                                                  <img src={p.image}></img>
                                                                  </div>
                                                                  <div className="shop-itemsInfo">
                                                                        <h6>{p.name}</h6>
                                                                        <p>{p.size}</p>
                                                                        <Button onClick={buttonHandler}><img src="assets/images/currency.png"></img>{p.price}<br></br> BUY</Button>
                                                                  </div>
                                                            </div> 
                                                            <ReactTooltip id={p.name} place="right" aria-haspopup='true' className="shop-toolTip">
                                                                  <div className="shop-hide">
                                                                        <div className="shop-itemsInfo">
                                                                              <p>{p.description}</p>
                                                                        </div> 
                                                                  </div>
                                                            </ReactTooltip>
                                                      </div>
                                                )
                                          }
                                    }else if(potionType === "Hp Potion" && size==="Medium"){
                                          if(p.type==="Hp Potion" && p.size===size){
                                                return (
                                                      <div key={index} className="shop-returnMap">
                                                            <div data-tip data-for={p.name} className="shop-items"> 
                                                                  <div className="shop-itemsImage">
                                                                  <img src={p.image}></img>
                                                                  </div>
                                                                  <div className="shop-itemsInfo">
                                                                        <h6>{p.name}</h6>
                                                                        <p>{p.size}</p>
                                                                        <Button onClick={buttonHandler}><img src="assets/images/currency.png"></img>{p.price}<br></br> BUY</Button>
                                                                  </div>
                                                            </div> 
                                                            <ReactTooltip id={p.name} place="right" aria-haspopup='true' className="shop-toolTip">
                                                                  <div className="shop-hide">
                                                                        <div className="shop-itemsInfo">
                                                                              <p>{p.description}</p>
                                                                        </div> 
                                                                  </div>
                                                            </ReactTooltip>
                                                      </div>
                                                )
                                          }
                                    }else if(potionType === "Hp Potion" && size==="Large"){
                                          if(p.type==="Hp Potion" && p.size===size){
                                                return (
                                                      <div key={index} className="shop-returnMap">
                                                            <div data-tip data-for={p.name} className="shop-items"> 
                                                                  <div className="shop-itemsImage">
                                                                  <img src={p.image}></img>
                                                                  </div>
                                                                  <div className="shop-itemsInfo">
                                                                        <h6>{p.name}</h6>
                                                                        <p>{p.size}</p>
                                                                        <Button onClick={buttonHandler}><img src="assets/images/currency.png"></img>{p.price}<br></br> BUY</Button>
                                                                  </div>
                                                            </div> 
                                                            <ReactTooltip id={p.name} place="right" aria-haspopup='true' className="shop-toolTip">
                                                                  <div className="shop-hide">
                                                                        <div className="shop-itemsInfo">
                                                                              <p>{p.description}</p>
                                                                        </div> 
                                                                  </div>
                                                            </ReactTooltip>
                                                      </div>
                                                )
                                          }
                                    }
                               })}
                               <div  className="shop-categoryName">
                                    <p>Powerup Potion</p>
                              </div>
                              {display1.potions.map((p,index)=>{
                                    if(potionType === "All" && size==="All"){
                                          if(p.type==="Powerup Potion"){
                                                return (
                                                      <div key={index} className="shop-returnMap">
                                                            <div data-tip data-for={p.name} className="shop-items"> 
                                                                  <div className="shop-itemsImage">
                                                                  <img src={p.image}></img>
                                                                  </div>
                                                                  <div className="shop-itemsInfo">
                                                                        <h6>{p.name}</h6>
                                                                        <p>{p.size}</p>
                                                                        <Button onClick={buttonHandler}><img src="assets/images/currency.png"></img>{p.price}<br></br> BUY</Button>
                                                                  </div>
                                                            </div> 
                                                            <ReactTooltip id={p.name} place="right" aria-haspopup='true' className="shop-toolTip">
                                                                  <div className="shop-hide">
                                                                        <div className="shop-itemsInfo">
                                                                              <p>{p.description}</p>
                                                                        </div> 
                                                                  </div>
                                                            </ReactTooltip>
                                                      </div>
                                                )
                                          }
                                    }else if(potionType === "All" && size==="Small"){
                                          if(p.type==="Powerup Potion" && p.size=== size){
                                                return (
                                                      <div key={index} className="shop-returnMap">
                                                            <div data-tip data-for={p.name} className="shop-items"> 
                                                                  <div className="shop-itemsImage">
                                                                  <img src={p.image}></img>
                                                                  </div>
                                                                  <div className="shop-itemsInfo">
                                                                        <h6>{p.name}</h6>
                                                                        <p>{p.size}</p>
                                                                        <Button onClick={buttonHandler}><img src="assets/images/currency.png"></img>{p.price}<br></br> BUY</Button>
                                                                  </div>
                                                            </div> 
                                                            <ReactTooltip id={p.name} place="right" aria-haspopup='true' className="shop-toolTip">
                                                                  <div className="shop-hide">
                                                                        <div className="shop-itemsInfo">
                                                                              <p>{p.description}</p>
                                                                        </div> 
                                                                  </div>
                                                            </ReactTooltip>
                                                      </div>
                                                )
                                          }
                                    }else if(potionType === "All" && size==="Medium"){
                                          if(p.type==="Powerup Potion" && p.size=== size){
                                                return (
                                                      <div key={index} className="shop-returnMap">
                                                            <div data-tip data-for={p.name} className="shop-items"> 
                                                                  <div className="shop-itemsImage">
                                                                  <img src={p.image}></img>
                                                                  </div>
                                                                  <div className="shop-itemsInfo">
                                                                        <h6>{p.name}</h6>
                                                                        <p>{p.size}</p>
                                                                        <Button onClick={buttonHandler}><img src="assets/images/currency.png"></img>{p.price}<br></br> BUY</Button>
                                                                  </div>
                                                            </div> 
                                                            <ReactTooltip id={p.name} place="right" aria-haspopup='true' className="shop-toolTip">
                                                                  <div className="shop-hide">
                                                                        <div className="shop-itemsInfo">
                                                                              <p>{p.description}</p>
                                                                        </div> 
                                                                  </div>
                                                            </ReactTooltip>
                                                      </div>
                                                )
                                          }
                                    }else if(potionType === "All" && size==="Large"){
                                          if(p.type==="Powerup Potion" && p.size=== size){
                                                return (
                                                      <div key={index} className="shop-returnMap">
                                                            <div data-tip data-for={p.name} className="shop-items"> 
                                                                  <div className="shop-itemsImage">
                                                                  <img src={p.image}></img>
                                                                  </div>
                                                                  <div className="shop-itemsInfo">
                                                                        <h6>{p.name}</h6>
                                                                        <p>{p.size}</p>
                                                                        <Button onClick={buttonHandler}><img src="assets/images/currency.png"></img>{p.price}<br></br> BUY</Button>
                                                                  </div>
                                                            </div> 
                                                            <ReactTooltip id={p.name} place="right" aria-haspopup='true' className="shop-toolTip">
                                                                  <div className="shop-hide">
                                                                        <div className="shop-itemsInfo">
                                                                              <p>{p.description}</p>
                                                                        </div> 
                                                                  </div>
                                                            </ReactTooltip>
                                                      </div>
                                                )
                                          }
                                    }else if(potionType === "Powerup Potion" && size==="All"){
                                          if(p.type==="Powerup Potion"){
                                                return (
                                                      <div key={index} className="shop-returnMap">
                                                            <div data-tip data-for={p.name} className="shop-items"> 
                                                                  <div className="shop-itemsImage">
                                                                  <img src={p.image}></img>
                                                                  </div>
                                                                  <div className="shop-itemsInfo">
                                                                        <h6>{p.name}</h6>
                                                                        <p>{p.size}</p>
                                                                        <Button onClick={buttonHandler}><img src="assets/images/currency.png"></img>{p.price}<br></br> BUY</Button>
                                                                  </div>
                                                            </div> 
                                                            <ReactTooltip id={p.name} place="right" aria-haspopup='true' className="shop-toolTip">
                                                                  <div className="shop-hide">
                                                                        <div className="shop-itemsInfo">
                                                                              <p>{p.description}</p>
                                                                        </div> 
                                                                  </div>
                                                            </ReactTooltip>
                                                      </div>
                                                )
                                          }
                                    }else if(potionType === "Powerup Potion" && size==="Small"){
                                          if(p.type==="Powerup Potion" && p.size===size){
                                                return (
                                                      <div key={index} className="shop-returnMap">
                                                            <div data-tip data-for={p.name} className="shop-items"> 
                                                                  <div className="shop-itemsImage">
                                                                  <img src={p.image}></img>
                                                                  </div>
                                                                  <div className="shop-itemsInfo">
                                                                        <h6>{p.name}</h6>
                                                                        <p>{p.size}</p>
                                                                        <Button onClick={buttonHandler}><img src="assets/images/currency.png"></img>{p.price}<br></br> BUY</Button>
                                                                  </div>
                                                            </div> 
                                                            <ReactTooltip id={p.name} place="right" aria-haspopup='true' className="shop-toolTip">
                                                                  <div className="shop-hide">
                                                                        <div className="shop-itemsInfo">
                                                                              <p>{p.description}</p>
                                                                        </div> 
                                                                  </div>
                                                            </ReactTooltip>
                                                      </div>
                                                )
                                          }
                                    }else if(potionType === "Powerup Potion" && size==="Medium"){
                                          if(p.type==="Powerup Potion" && p.size===size){
                                                return (
                                                      <div key={index} className="shop-returnMap">
                                                            <div data-tip data-for={p.name} className="shop-items"> 
                                                                  <div className="shop-itemsImage">
                                                                  <img src={p.image}></img>
                                                                  </div>
                                                                  <div className="shop-itemsInfo">
                                                                        <h6>{p.name}</h6>
                                                                        <p>{p.size}</p>
                                                                        <Button onClick={buttonHandler}><img src="assets/images/currency.png"></img>{p.price}<br></br> BUY</Button>
                                                                  </div>
                                                            </div> 
                                                            <ReactTooltip id={p.name} place="right" aria-haspopup='true' className="shop-toolTip">
                                                                  <div className="shop-hide">
                                                                        <div className="shop-itemsInfo">
                                                                              <p>{p.description}</p>
                                                                        </div> 
                                                                  </div>
                                                            </ReactTooltip>
                                                      </div>
                                                )
                                          }
                                    }else if(potionType === "Powerup Potion" && size==="Large"){
                                          if(p.type==="Powerup Potion" && p.size===size){
                                                return (
                                                      <div key={index} className="shop-returnMap">
                                                            <div data-tip data-for={p.name} className="shop-items"> 
                                                                  <div className="shop-itemsImage">
                                                                  <img src={p.image}></img>
                                                                  </div>
                                                                  <div className="shop-itemsInfo">
                                                                        <h6>{p.name}</h6>
                                                                        <p>{p.size}</p>
                                                                        <Button onClick={buttonHandler}><img src="assets/images/currency.png"></img>{p.price}<br></br> BUY</Button>
                                                                  </div>
                                                            </div> 
                                                            <ReactTooltip id={p.name} place="right" aria-haspopup='true' className="shop-toolTip">
                                                                  <div className="shop-hide">
                                                                        <div className="shop-itemsInfo">
                                                                              <p>{p.description}</p>
                                                                        </div> 
                                                                  </div>
                                                            </ReactTooltip>
                                                      </div>
                                                )
                                          }
                                    }
                               })}
                       
                            
                              
                        </div>
                  </div>
            </div>
      </div>  

       
   
    );
}

export default Potions;
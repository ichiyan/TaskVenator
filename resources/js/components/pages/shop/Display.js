import Button from "@restart/ui/esm/Button";
import axios from "axios";
import React, { useState, useEffect } from "react";
import ReactTooltip from 'react-tooltip';

function Display ({clicked}){
   const[display1,setDisplay1]=useState({
         potions:[],
   });

   const[display2,setDisplay2]=useState({
         outfit:[],
   });
   
   useEffect(() =>{
      axios.get(`/api/outfit`).then(res =>{
            if(res.data.status===200){
                 
                  setDisplay2({
                        outfit:res.data.outfit
                       
                  })
                  
                  
            }
      })
   },[])
   useEffect(()=>{
      axios.get(`/api/potions`).then(res =>{
            if(res.data.status===200){
                  setDisplay1({
                        potions:res.data.potions
                  });
            }
            
      })
   },[])

   
   
  
    if(clicked === "Potions"){
                return (
                  <div className="shop-category">
                        <div className="shop-categoryName">
                              <h3>Health Potions</h3>
                        </div>
                        {display1.potions.map((p,index)=>{
                               if(p.type === "Hp Potion"){
                              return (
                              <div key={index} className="shop-returnMap">
                                    <div data-tip data-for='testing' className="shop-items"> 
                                          <div className="shop-itemsImage">
                                             <img src={p.image}></img>
                                           </div>
                                           <div className="shop-itemsInfo">
                                                <h6>{p.name}</h6>
                                                <p>{p.size}</p>
                                                <Button><img src="assets/images/currency.png"></img>{p.price}<br></br> BUY</Button>
                                          </div>
                                    </div> 
                                    <ReactTooltip id='testing' place="right" aria-haspopup='true'>
                                    <div className="shop-hide">
                                          <div className="shop-itemsInfo">
                                          <h6>{p.description}</h6>
                                          </div> 
                                     </div>
                                     </ReactTooltip>
                               </div>
                                    
                              )
                            }
                        })}

                        <div className="shop-categoryName">
                              <h3>Powerup Potions</h3>
                        </div>
                        {display1.potions.map((p,index)=>{
                               if(p.type === "Powerup Potion"){
                              return (
                                    <div  key={index} className="shop-returnMap">
                                    <div className="shop-items"> 
                                          <div className="shop-itemsImage">
                                             <img src={p.image}></img>
                                           </div>
                                           <div className="shop-itemsInfo">
                                                <h6>{p.name}</h6>
                                                <p>{p.size}</p>
                                                <Button> <img src="assets/images/currency.png"></img>{p.price}<br></br> BUY</Button>
                                          </div>
                                    </div> 
                                    <div className="shop-hide">
                                          <div className="shop-itemsInfo">
                                          <h6>{p.description}</h6>
                                          </div> 
                                     </div>
                                    </div>
                                    
                              )
                            }
                        })}

                   </div>
              );
      }else if(clicked==="Outfit"){
            return(
                  <div className="shop-category">
                        <div className="shop-categoryName">
                              <h3>Weapons</h3>
                        </div>
                        {display2.outfit.map((w,index)=>{
                             if(w.outfitType === "Weapon"){
                              return (
                                    <div key={index} className="shop-returnMap">
                                    <div className="shop-items"> 
                                          <div className="shop-itemsImage">
                                             <img src={w.image}></img>
                                           </div>
                                           <div className="shop-itemsInfo">
                                                <h6>{w.name}</h6>
                                                {/* <p>{p.size}</p> */}
                                                <Button><img src="assets/images/currency.png"></img>{w.price}<br></br> BUY</Button>
                                          </div>
                                    </div> 
                                    <div className="shop-hide">
                                          <div className="shop-itemsInfo">
                                                      <div>
                                                            <h5>Attributes</h5>
                                                      </div>
                                                      <p>Physical Attack: {w.pAttack}</p>
                                                      <p>Magical Attack: {w.mAttack}</p>
                                                      <p>Physical Defense: {w.pDef}</p>
                                                      <p>Magical Defense: {w.mDef}</p>
                                                      <p>Strength: {w.str}</p>
                                                      <p>Agility: {w.agi}</p>
                                                      <p>Critical: {w.crit}</p>
                                                      <p>Critical Damage: {w.critDmg}</p>
                                          </div> 
                                     </div>
                                    </div>
                                    
                              )
                             }
                          
                        })}
                        <div className="shop-categoryName">
                              <h3>Costume</h3>
                        </div>
                        {display2.outfit.map((w,index)=>{
                             if(w.outfitType === "Costume"){
                              return (
                                    <div key={index} className="shop-returnMap">
                                    <div className="shop-items"> 
                                          <div className="shop-itemsImage">
                                             <img src={w.image}></img>
                                           </div>
                                           <div className="shop-itemsInfo">
                                                <h6>{w.name}</h6>
                                                {/* <p>{p.size}</p> */}
                                                <Button><img src="assets/images/currency.png"></img>{w.price}<br></br> BUY</Button>
                                          </div>
                                    </div> 
                                    <div className="shop-hide">
                                          <div className="shop-itemsInfo">
                                                <div>
                                                      <h5>Attributes</h5>
                                                </div>
                                                <p>Physical Attack: {w.pAttack}</p>
                                                <p>Magical Attack: {w.mAttack}</p>
                                                <p>Physical Defense: {w.pDef}</p>
                                                <p>Magical Defense: {w.mDef}</p>
                                                <p>Strength: {w.str}</p>
                                                <p>Agility: {w.agi}</p>
                                                <p>Critical: {w.crit}</p>
                                                <p>Critical Damage: {w.critDmg}</p>
                                           </div> 
                                     </div>
                                    </div>
                                    
                              )
                             }
                          
                        })}
                  </div>
                  
            );
      }else{
            return(
                  <div className="shop-category">
                        <div className="shop-categoryName">
                              <h3>Health Potions</h3>
                        </div>
                        {display1.potions.map((p,index)=>{
                               if(p.type === "Hp Potion"){
                              return (
                                    <div key={index} className="shop-returnMap">
                                    <div className="shop-items"> 
                                          <div className="shop-itemsImage">
                                             <img src={p.image}></img>
                                           </div>
                                           <div className="shop-itemsInfo">
                                                <h6>{p.name}</h6>
                                                <p>{p.size}</p>
                                                <Button><img src="assets/images/currency.png"></img>{p.price}<br></br> BUY</Button>
                                          </div>
                                    </div> 
                                    <div className="shop-hide">
                                          <div className="shop-itemsInfo">
                                          <h6>{p.description}</h6>
                                          </div> 
                                     </div>
                                    </div>
                                    
                              )
                            }
                        })}

                        <div className="shop-categoryName">
                              <h3>Powerup Potions</h3>
                        </div>
                        {display1.potions.map((p,index)=>{
                               if(p.type === "Powerup Potion"){
                              return (
                                    <div  key={index} className="shop-returnMap">
                                    <div className="shop-items"> 
                                          <div className="shop-itemsImage">
                                             <img src={p.image}></img>
                                           </div>
                                           <div className="shop-itemsInfo">
                                                <h6>{p.name}</h6>
                                                <p>{p.size}</p>
                                                <Button> <img src="assets/images/currency.png"></img>{p.price}<br></br> BUY</Button>
                                          </div>
                                    </div> 
                                    <div className="shop-hide">
                                          <div className="shop-itemsInfo">
                                          <h6>{p.description}</h6>
                                          </div> 
                                     </div>
                                    </div>
                                    
                              )
                            }
                        })}
                         <div className="shop-categoryName">
                              <h3>Weapons</h3>
                        </div>
                        {display2.outfit.map((w,index)=>{
                             if(w.outfitType === "Weapon"){
                              return (
                                    <div key={index} className="shop-returnMap">
                                    <div className="shop-items"> 
                                          <div className="shop-itemsImage">
                                             <img src={w.image}></img>
                                           </div>
                                           <div className="shop-itemsInfo">
                                                <h6>{w.name}</h6>
                                                {/* <p>{p.size}</p> */}
                                                <Button><img src="assets/images/currency.png"></img>{w.price}<br></br> BUY</Button>
                                          </div>
                                    </div> 
                                    <div className="shop-hide">
                                          <div className="shop-itemsInfo">
                                                <div>
                                                      <h5>Attributes</h5>
                                                </div>
                                                {/* <p>Physical Attack: {w.pAttack}</p>
                                                <p>Magical Attack: {w.mAttack}</p> */}
                                                {/* <p>Physical Defense: {w.pDef}</p>
                                                <p>Magical Defense: {w.mDef}</p>
                                                <p>Strength: {w.str}</p>
                                                <p>Agility: {w.agi}</p>
                                                <p>Critical: {w.crit}</p>
                                                <p>Critical Damage: {w.critDmg}</p> */}
                                           </div> 
                                     </div>
                                    </div>
                                    
                              )
                             }
                          
                        })}
                     
                        <div className="shop-categoryName">
                              <h3>Costume</h3>
                        </div>
                        {display2.outfit.map((w,index)=>{
                             if(w.outfitType === "Costume"){
                              return (
                                    <div key={index} className="shop-returnMap">
                                    <div className="shop-items"> 
                                          <div className="shop-itemsImage">
                                             <img src={w.image}></img>
                                           </div>
                                           <div className="shop-itemsInfo">
                                                <h6>{w.name}</h6>
                                                {/* <p>{p.size}</p> */}
                                                <Button><img src="assets/images/currency.png"></img>{w.price}<br></br> BUY</Button>
                                          </div>
                                    </div> 
                                    <div className="shop-hide">
                                          <div className="shop-itemsInfo">
                                                <div>
                                                      <h5>Attributes</h5>
                                                </div>
                                                {/* <p>Physical Attack: {w.pAttack}</p>
                                                <p>Magical Attack: {w.mAttack}</p> */}
                                                {/* <p>Physical Defense: {w.pDef}</p>
                                                <p>Magical Defense: {w.mDef}</p>
                                                <p>Strength: {w.str}</p>
                                                <p>Agility: {w.agi}</p>
                                                <p>Critical: {w.crit}</p>
                                                <p>Critical Damage: {w.critDmg}</p> */}
                                           </div> 
                                     </div>
                                    </div>
                                    
                              )
                             }
                          
                        })}

                   </div>
                
            );
      }
}
export default Display;
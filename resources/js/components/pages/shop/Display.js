import Button from "@restart/ui/esm/Button";
import axios from "axios";
import React, { useState, useEffect } from "react";

function Display ({clicked}){
   const[display,setDisplay]=useState({
         products:[],
   });

   useEffect(()=>{
      axios.get(`/api/potions`).then(res =>{
            if(res.data.status===200){
                  setDisplay({
                        products:res.data.potions
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
                        {display.products.map((p,index)=>{
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
                            }else{
                                  return(
                                        <div classNmae="shop-category">

                                        </div>
                                  )
                            }
                        })}

                        <div className="shop-categoryName">
                              <h3>Powerup Potions</h3>
                        </div>
                        {display.products.map((p,index)=>{
                               if(p.type === "Powerup Potion"){
                              return (
                                    <div key={index} className="shop-returnMap">
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
                            }else{
                                  return(
                                        <div classNmae="shop-category">

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
          <div className="shop-items">
                <div className="shop-itemsImage">
                  <img src="assets/images/ak47.png"></img>
                </div>
                <div className="shop-itemsInfo">
                <h6>Small Potion</h6>
                <p>Add stuns for 0.5 seconds</p>
                <Button>12 <br></br> BUY</Button>
                </div> 
          </div>
          <div className="shop-hide">
                <div className="shop-itemsInfo">
                <h6>Medium Potion</h6>
                <p>Heals 70hp</p>
                </div> 
          </div>
          <div className="shop-categoryName">
                <h3>Outfit</h3>
          </div>
          <div className="shop-items">
                <div className="shop-itemsImage">
                  <img src="assets/images/ak47.png"></img>
                </div>
                <div className="shop-itemsInfo">
                <h6>Small Potion</h6>
                <p>Add stuns for 0.5 seconds</p>
                <Button>12 <br></br> BUY</Button>
                </div> 
          </div>
          <div className="shop-hide">
                <div className="shop-itemsInfo">
                <h6>Medium Potion</h6>
                <p>Heals 70hp</p>
                </div> 
          </div>
        </div>
      );
    }else{
      return(
        <div className="shop-category">
          <div className="shop-items">
                <div className="shop-itemsImage">
                  <h3>image</h3>
                </div>
                <div className="shop-itemsInfo">
                  <h6>Small Potion</h6>
                  <p>asdasd</p>
                  <Button>12 <br></br> BUY</Button>
                </div> 
            </div>
          <div className="shop-hide">
                  <div className="shop-itemsInfo">
                  <h6>Medium Potion</h6>
                  <p>Heals 70hp</p>
                  </div> 
            </div>
      </div>
      );
    }
}
export default Display;
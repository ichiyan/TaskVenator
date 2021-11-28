import Button from "@restart/ui/esm/Button";
import axios from "axios";
import ReactTooltip from 'react-tooltip';
import Swal from 'sweetalert2';
import {React} from "../../../index";

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

   const buttonHandler=(e)=>{
      Swal.fire("You have successfully bought the item");
   }


   
   
  
    if(clicked === "Potions"){
                return (
                  <div className="shop-category">
                        <div className="shop-categoryName">
                              <p>Health Potions</p>
                        </div>
                        {display1.potions.map((p,index)=>{
                               if(p.type === "Hp Potion"){
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
                              
                        })}
                        <div className="shop-categoryName">
                              <p>Powerup Potions</p>
                        </div>
                        {display1.potions.map((p,index)=>{
                               if(p.type === "Powerup Potion"){
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
                        })}

                   </div>
              );
      }else if(clicked==="Outfit"){
            return(
                  <div className="shop-category">
                        <div className="shop-categoryName">
                              <p>Weapons</p>
                        </div>
                        {display2.outfit.map((w,index)=>{
                             if(w.outfitType === "Weapon"){
                              return (
                                    <div data-tip data-for={w.name} key={index} className="shop-returnMap">
                                          <div className="shop-items"> 
                                                <div className="shop-itemsImage">
                                                <img src={w.image}></img>
                                                </div>
                                                <div className="shop-itemsInfo">
                                                      <h6>{w.name}</h6>
                                                      <Button onClick={buttonHandler}><img src="assets/images/currency.png"></img>{w.price}<br></br> BUY</Button>
                                                </div>
                                          </div> 
                                          <ReactTooltip id={w.name} place="right" aria-haspopup='true' className="shop-toolTip">
                                                <div className="shop-hide">
                                                      <div className="shop-itemsInfo">
                                                            <div className="shop-weaponInfo">
                                                                  <h5>Attributes</h5>
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
                                          </ReactTooltip>
                                    </div>
                                    
                              )
                             }
                          
                        })}
                        <div className="shop-categoryName">
                              <p>Costume</p>
                        </div>
                        {display2.outfit.map((w,index)=>{
                             if(w.outfitType === "Costume"){
                              return (
                                    <div data-tip data-for={w.name} key={index} className="shop-returnMap">
                                          <div className="shop-items"> 
                                                <div className="shop-itemsImage">
                                                <img src={w.image}></img>
                                                </div>
                                                <div className="shop-itemsInfo">
                                                      <h6>{w.name}</h6>
                                                      {/* <p>{p.size}</p> */}
                                                      <Button onClick={buttonHandler}><img src="assets/images/currency.png"></img>{w.price}<br></br> BUY</Button>
                                                </div>
                                          </div> 
                                          <ReactTooltip id={w.name} place="right" aria-haspopup='true' className="shop-toolTip">
                                                <div className="shop-hide">
                                                      <div className="shop-itemsInfo">
                                                            <div className="shop-weaponInfo">
                                                                  <h5>Attributes</h5>
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
                                          </ReactTooltip>
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
                              <p>Health Potions</p>
                        </div>
                        {display1.potions.map((p,index)=>{
                               if(p.type === "Hp Potion"){
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
                        })}

                        <div className="shop-categoryName">
                              <p>Powerup Potions</p>
                        </div>
                        {display1.potions.map((p,index)=>{
                               if(p.type === "Powerup Potion"){
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
                        })}
                         <div className="shop-categoryName">
                              <p>Weapons</p>
                        </div>
                        {display2.outfit.map((w,index)=>{
                             if(w.outfitType === "Weapon"){
                              return (
                                    <div data-tip data-for={w.name} key={index} className="shop-returnMap">
                                          <div className="shop-items"> 
                                                <div className="shop-itemsImage">
                                                <img src={w.image}></img>
                                                </div>
                                                <div className="shop-itemsInfo">
                                                      <h6>{w.name}</h6>
                                                      <Button onClick={buttonHandler}><img src="assets/images/currency.png"></img>{w.price}<br></br> BUY</Button>
                                                </div>
                                          </div> 
                                          <ReactTooltip id={w.name} place="right" aria-haspopup='true' className="shop-toolTip">
                                                <div className="shop-hide">
                                                      <div className="shop-itemsInfo">
                                                            <div className="shop-weaponInfo">
                                                                  <h5>Attributes</h5>
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
                                          </ReactTooltip>
                                    </div>     
                                    )
                             }
                          
                        })}
                     
                        <div className="shop-categoryName">
                              <p>Costume</p>
                        </div>
                        {display2.outfit.map((w,index)=>{
                             if(w.outfitType === "Costume"){
                              return (
                                    <div data-tip data-for={w.name} key={index} className="shop-returnMap">
                                          <div className="shop-items"> 
                                                <div className="shop-itemsImage">
                                                <img src={w.image}></img>
                                                </div>
                                                <div className="shop-itemsInfo">
                                                      <h6>{w.name}</h6>
                                                      {/* <p>{p.size}</p> */}
                                                      <Button onClick={buttonHandler}><img src="assets/images/currency.png"></img>{w.price}<br></br> BUY</Button>
                                                </div>
                                          </div> 
                                          <ReactTooltip id={w.name} place="right" aria-haspopup='true' className="shop-toolTip">
                                                <div className="shop-hide">
                                                      <div className="shop-itemsInfo">
                                                            <div className="shop-weaponInfo">
                                                                  <h5>Attributes</h5>
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
                                          </ReactTooltip>
                                    </div> 
                              )
                             }
                          
                        })}

                   </div>
                
            );
      }
}
export default Display;

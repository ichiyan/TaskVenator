import Button from "@restart/ui/esm/Button";
import {Link, React, useEffect, useState, 
      AddPotionForm, AddOutfitForm, AddCardForm, Swal, ReactTooltip,axios } from "../../../index";

function Inventory(){
    const[display2,setDisplay2]=useState({
        outfit:[],
  });
    useEffect(() =>{
        axios.get(`/api/inventory`).then(res =>{
              if(res.data.status===200){
    
                    console.log(res.data);

                  
                    
              }
        })
     },[])
    return(
        <section className="container party-section">
              <div className="shop-Form">
                  <AddOutfitForm/> 
                  <AddPotionForm/>
                  <AddCardForm/>
              </div>
            
              <div className="party-nav">
                        <div className="party-nav-item party-active-nav"><Link to="/all">All</Link></div>
                        <div className="party-nav-item"><Link to="/potions">Potions</Link></div>
                        <div className="party-nav-item"><Link to="/weapons">Weapons</Link></div>
                        <div className="party-nav-item"><Link to="/cards">Cards</Link></div>
                        <div className="party-nav-item"><Link to="/outfit">Outfit</Link></div>
              </div>
           
              <div className="inventory-filtShop">
                  <div className="inventory-filter">
                              <p>Class</p>
                                    <select name="class" className="form-select">
                                          <option value="All">All</option>
                                          <option value="Warrior">Warrior</option>
                                          <option value="Assassin">Assassin</option>
                                          <option value="Mage">Mage</option>
                                    </select><br></br>
                                    <p>Rarity</p>
                                    <select name="class" className="form-select" >
                                          <option value="All">All</option>
                                          <option value="Common">Common</option>
                                          <option value="Uncommon">Uncommon</option>
                                          <option value="Rare">Rare</option>
                                    </select><br></br>
                  </div>
                <div className="inventory-shop">      
                 <div className="inventory-category">
                            <div className="shop-categoryName">
                                <p>Health Potions</p>
                            </div>
                            <div className="inventory-returnMap">
                                <div data-tip data-for="test" className="shop-items"> 
                                        <div className="inventory-itemsImage">
                                        <img></img>
                                        </div>
                                        <div className="inventory-itemsInfo">
                                            <h6>asdasd</h6>
                                            <p>asdasd</p>
                                            <Button>Equip</Button>
                                        </div>
                                </div> 
                                <ReactTooltip id="test" place="right" aria-haspopup='true' className="inventory-toolTip">
                                        <div className="inventory-hide">
                                            <div className="inventory-itemsInfo">
                                                    <p>asdasdasd</p>
                                            </div> 
                                        </div>
                                </ReactTooltip>
                            </div>
                            <div className="inventory-returnMap">
                                <div data-tip data-for="test" className="inventory-items"> 
                                        <div className="inventory-itemsImage">
                                        <img></img>
                                        </div>
                                        <div className="inventory-itemsInfo">
                                            <h6>asdasd</h6>
                                            <p>asdasd</p>
                                            <Button>Equip</Button>
                                        </div>
                                </div> 
                                <ReactTooltip id="test" place="right" aria-haspopup='true' className="inventory-toolTip">
                                        <div className="inventory-hide">
                                            <div className="inventory-itemsInfo">
                                                    <p>asdasdasd</p>
                                            </div> 
                                        </div>
                                </ReactTooltip>
                            </div>
                            <div className="inventory-returnMap">
                                <div data-tip data-for="test" className="inventory-items"> 
                                        <div className="inventory-itemsImage">
                                        <img></img>
                                        </div>
                                        <div className="inventory-itemsInfo">
                                            <h6>asdasd</h6>
                                            <p>asdasd</p>
                                            <Button>Equip</Button>
                                        </div>
                                </div> 
                                <ReactTooltip id="test" place="right" aria-haspopup='true' className="inventory-toolTip">
                                        <div className="inventory-hide">
                                            <div className="inventory-itemsInfo">
                                                    <p>asdasdasd</p>
                                            </div> 
                                        </div>
                                </ReactTooltip>
                            </div>
                            <div className="inventory-returnMap">
                                <div data-tip data-for="test" className="inventory-items"> 
                                        <div className="inventory-itemsImage">
                                        <img></img>
                                        </div>
                                        <div className="inventory-itemsInfo">
                                            <h6>asdasd</h6>
                                            <p>asdasd</p>
                                            <Button>Equip</Button>
                                        </div>
                                </div> 
                                <ReactTooltip id="test" place="right" aria-haspopup='true' className="inventory-toolTip">
                                        <div className="inventory-hide">
                                            <div className="inventory-itemsInfo">
                                                    <p>asdasdasd</p>
                                            </div> 
                                        </div>
                                </ReactTooltip>
                            </div>
                            <div className="inventory-returnMap">
                                <div data-tip data-for="test" className="inventory-items"> 
                                        <div className="inventory-itemsImage">
                                        <img></img>
                                        </div>
                                        <div className="inventory-itemsInfo">
                                            <h6>asdasd</h6>
                                            <p>asdasd</p>
                                            <Button>Equip</Button>
                                        </div>
                                </div> 
                                <ReactTooltip id="test" place="right" aria-haspopup='true' className="inventory-toolTip">
                                        <div className="inventory-hide">
                                            <div className="inventory-itemsInfo">
                                                    <p>asdasdasd</p>
                                            </div> 
                                        </div>
                                </ReactTooltip>
                            </div>
                            <div className="inventory-returnMap">
                                <div data-tip data-for="test" className="inventory-items"> 
                                        <div className="inventory-itemsImage">
                                        <img></img>
                                        </div>
                                        <div className="inventory-itemsInfo">
                                            <h6>asdasd</h6>
                                            <p>asdasd</p>
                                            <Button>Equip</Button>
                                        </div>
                                </div> 
                                <ReactTooltip id="test" place="right" aria-haspopup='true' className="inventory-toolTip">
                                        <div className="inventory-hide">
                                            <div className="inventory-itemsInfo">
                                                    <p>asdasdasd</p>
                                            </div> 
                                        </div>
                                </ReactTooltip>
                            </div>
                            <div className="inventory-returnMap">
                                <div data-tip data-for="test" className="inventory-items"> 
                                        <div className="inventory-itemsImage">
                                        <img></img>
                                        </div>
                                        <div className="inventory-itemsInfo">
                                            <h6>asdasd</h6>
                                            <p>asdasd</p>
                                            <Button>Equip</Button>
                                        </div>
                                </div> 
                                <ReactTooltip id="test" place="right" aria-haspopup='true' className="inventory-toolTip">
                                        <div className="inventory-hide">
                                            <div className="inventory-itemsInfo">
                                                    <p>asdasdasd</p>
                                            </div> 
                                        </div>
                                </ReactTooltip>
                            </div>
                        </div> 
                 </div>  
                 <div className="inventory-preview">
                     <div className="inventory-equipped1">
                            <div className="inventory-categoryName">
                                <h3>Equipped Items</h3>
                            </div>
                            <div data-tip data-for="test" className="inventory-equippedItemsInfo"> 
                                <div className="inventory-itemsImage">
                                <img></img>
                                </div>
                                <div className="inventory-itemsInfo">
                                    <h6>asdasd</h6>
                                    <p>asdasd</p>
                                </div>
                            </div> 
                            <ReactTooltip id="test" place="right" aria-haspopup='true' className="inventory-toolTip">
                                    <div className="inventory-hide">
                                        <div className="inventory-itemsInfo">
                                                <p>asdasdasd</p>
                                        </div> 
                                    </div>
                            </ReactTooltip>
                            <div className="inventory-categoryName">
                                <h5>Weapon</h5>
                            </div>
                     </div>
                     <div className="inventory-equipped2">
                         <div className="inventory-equipped2Left">
                            <div data-tip data-for="test" className="inventory-equippedItemsInfo"> 
                                <div className="inventory-itemsImage">
                                <img></img>
                                </div>
                                <div className="inventory-itemsInfo">
                                    <h6>asdasd</h6>
                                    <p>asdasd</p>
                                </div>
                            </div> 
                            <ReactTooltip id="test" place="right" aria-haspopup='true' className="inventory-toolTip">
                                    <div className="inventory-hide">
                                        <div className="inventory-itemsInfo">
                                                <p>asdasdasd</p>
                                        </div> 
                                    </div>
                            </ReactTooltip>
                            <div className="inventory-categoryName">
                                <h5>Costume</h5>
                            </div>
                        </div>
                        <div className="inventory-equipped2Right">
                            <div data-tip data-for="test" className="inventory-equippedItemsInfo"> 
                                <div className="inventory-itemsImage">
                                <img></img>
                                </div>
                                <div className="inventory-itemsInfo">
                                    <h6>asdasd</h6>
                                    <p>asdasd</p>
                                </div>
                            </div> 
                            <ReactTooltip id="test" place="right" aria-haspopup='true' className="inventory-toolTip">
                                    <div className="inventory-hide">
                                        <div className="inventory-itemsInfo">
                                                <p>asdasdasd</p>
                                        </div> 
                                    </div>
                            </ReactTooltip>
                            <div className="inventory-categoryName">
                                <h5>Potion</h5>
                            </div>
                        </div>
                     </div>
                </div>
            </div>
      </section>
    );
}
export default Inventory;
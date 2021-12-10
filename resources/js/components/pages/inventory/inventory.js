import Button from "@restart/ui/esm/Button";
import {Link, React, useEffect, useState, 
      AddPotionForm, AddOutfitForm, AddCardForm, Swal, ReactTooltip,axios } from "../../../index";

function Inventory(){
    return(
        <section className="container party-section">
            <div className="party-nav">
                        <div className="party-nav-item"><Link to="/all">All</Link></div>
                        <div className="party-nav-item"><Link to="/potions">Potions</Link></div>
                        <div className="party-nav-item"><Link to="/weapons">Weapons</Link></div>
                        <div className="party-nav-item"><Link to="/cards">Cards</Link></div>
                        <div className="party-nav-item"><Link to="/outfit">Outfit</Link></div>
              </div>
              <div className="inventory-filtShop">
                    <div className="inventory-filter">
                                <p>Potion Type</p>
                                        <select name="class" className="form-select" >
                                            <option value="All">All</option>
                                            <option value="Hp Potion">Hp Potion</option>
                                            <option value="Powerup Potion">Powerup Potion</option>
                                        </select><br></br>
                                        <p>Size</p>
                                        <select name="class" className="form-select">
                                            <option value="All">All</option>
                                            <option value="Small">Small</option>
                                            <option value="Medium">Medium</option>
                                            <option value="Large">Large</option>
                                        </select><br></br>
                    </div>
                    <div className="inventory-shop">
                        <div className="inventory-category">
                            <div className="inventory-categoryName">
                                <p>Health Potions</p>
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
                        <div className="inventory-category">
                            <div className="inventory-categoryName">
                                <p>Health Potions</p>
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
                        <div className="inventory-category">
                            <div className="inventory-categoryName">
                                <p>Health Potions</p>
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
                        <div className="inventory-category">
                            <div className="inventory-categoryName">
                                <p>Health Potions</p>
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
                        
                    <div className="inventory-preview">
                        <div>asdasdasd</div>
                    </div>
              </div>
            </div>
        </section>
    );
}
export default Inventory;
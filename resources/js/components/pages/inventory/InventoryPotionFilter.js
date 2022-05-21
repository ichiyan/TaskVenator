import Button from "@restart/ui/esm/Button";
import {Link, React, useEffect, useState, 
    AddPotionForm, AddOutfitForm, ReactTooltip,axios } from "../../../index";
import Swal from 'sweetalert2';
import InventoryOutfit from "./InventoryOutfit";
function InventoryPotionFilter({data}){
    return(
        <div className="inventory-returnMap">
        <div data-tip data-for={data.name} className="inventory-items"> 
              <div className="inventory-itemsImage">
              <img src={data.image}></img>
              </div>
              <div className="inventory-potionsInfo">
                    <h6>{data.name}</h6>
                    {/* <p>{data.size}</p> */}
                    <Button type="submit"style={{backgroundColor: "yellow"}}>Use</Button>
                    <div>
                        
                    </div>
              </div>
        </div> 
        <ReactTooltip id={data.name} place="right" aria-haspopup='true' className="inventory-toolTip">
              <div className="inventory-hide">
                    <div className="inventory-itemsInfo">
                          <p>{data.description}</p>
                    </div> 
              </div>
        </ReactTooltip>
  </div>
    );
}
export default InventoryPotionFilter;
import Button from "@restart/ui/esm/Button";
import {Link, React, useEffect, useState, 
    AddPotionForm, AddOutfitForm, ReactTooltip,axios } from "../../../index";
import Swal from 'sweetalert2';

function PotionFilter({data, value}){
    const [bought, setBought]=useState("");
   
    const buttonHandler=(e)=>{
        console.log(e.target.value);
        setBought(e.target.value);
        Swal.fire("You have successfully bought the item" + '' + e.target.value);
     }

      
    

    return(
        <div className="shop-returnMap">
        <div data-tip data-for={data.name} className="shop-items"> 
              <div className="shop-itemsImage">
              <img src={data.image}></img>
              </div>
              <div className="shop-itemsInfo">
                    <h6>{data.name}</h6>
                    <p>{data.size}</p>
                    <Button value={value} onClick={buttonHandler}><img src="assets/images/currency.png"></img>{data.price}<br></br> BUY</Button>
              </div>
        </div> 
        <ReactTooltip id={data.name} place="right" aria-haspopup='true' className="shop-toolTip">
              <div className="shop-hide">
                    <div className="shop-itemsInfo">
                          <p>{data.description}</p>
                    </div> 
              </div>
        </ReactTooltip>
  </div>
    );
}

export default PotionFilter;
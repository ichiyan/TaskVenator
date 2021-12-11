import Button from "@restart/ui/esm/Button";
import {Link, React, useEffect, useState, 
    AddPotionForm, AddOutfitForm, ReactTooltip,axios } from "../../../index";
import Swal from 'sweetalert2';


function WeaponFilter({data, value}){
    const buttonHandler=(e)=>{
        Swal.fire("You have successfully bought the item" + e.target.value);
     }
    return(
        <div data-tip data-for={data.name}  className="shop-returnMap">
        <div className="shop-items"> 
              <div className="shop-itemsImage">
              <img src={data.image}></img>
              </div>
              <div className="shop-itemsInfo">
                    <h6>{data.name}</h6>
                    <Button value={value} onClick={buttonHandler}><img src="assets/images/currency.png"></img>{data.price}<br></br> BUY</Button>
              </div>
        </div> 
        <ReactTooltip id={data.name} place="right" aria-haspopup='true' className="shop-toolTip">
              <div className="shop-hide">
                    <div className="shop-itemsInfo">
                          <div className="shop-weaponInfo">
                                <h5>{data.type}&nbsp;Attributes</h5>
                                <p>Class: {data.class}</p>
                                <p>Physical Attack: {data.pAttack}</p>
                                <p>Magical Attack: {data.mAttack}</p>
                                <p>Physical Defense: {data.pDef}</p>
                                <p>Magical Defense: {data.mDef}</p>
                                <p>Strength: {data.str}</p>
                                <p>Agility: {data.agi}</p>
                                <p>Critical: {data.crit}</p>
                                <p>Critical Damage: {data.critDmg}</p>
                          </div>
                    </div> 
              </div>
        </ReactTooltip>
  </div>  
    );
}

export default WeaponFilter;
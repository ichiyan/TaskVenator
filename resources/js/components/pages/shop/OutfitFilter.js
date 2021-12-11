import Button from "@restart/ui/esm/Button";
import {Link, React, useEffect, useState, 
    AddPotionForm, AddOutfitForm, ReactTooltip,axios } from "../../../index";
import Swal from 'sweetalert2';

function OutfitFilter({data, value}){
    const [id, setId]= useState({
        id: ''
    });
    const buttonHandler=(e)=>{
        setId(e.target.value);
        Swal.fire("You have successfully bought the item" + id);
      
        axios.post(`/api/addBought`, id).then(res =>{
            if(res.data.status === 200){
               console.log(res.data.message);
            }else {
              // setPotion({...potion,error_list:res.data.errors});
            }
          });
  
     }
     const submitHandler=(e)=>{
        // axios.post(`/api/addBought`, id).then(res =>{
        //     if(res.data.status === 200){
        //        console.log(res.data.message);
        //     }else {
        //       // setPotion({...potion,error_list:res.data.errors});
        //     }
        //   });
       
     }
    return(
        <div data-tip data-for={data.name}  className="shop-returnMap">
        <div className="shop-items"> 
              <div className="shop-itemsImage">
              <img src={data.image}></img>
              </div>
              <div className="shop-itemsInfo">
                    <h6>{data.name}</h6>
                    <div>
                        <form onSubmit={submitHandler}>
                            <input type="hidden" value={value}></input>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
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

export default OutfitFilter;
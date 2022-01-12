import Button from "@restart/ui/esm/Button";
import {Link, React, useEffect, useState, 
    AddPotionForm, AddOutfitForm, ReactTooltip,axios } from "../../../index";
import Swal from 'sweetalert2';

function OutfitFilter({data, value, avatarClass}){
    const [passProductId, setPassProductId]= useState({
          product: '',
          amount :'',
    });
    
     const submitToHandler=(e)=>{
      e.preventDefault();
      //     Swal.fire("You have successfully bought the item");
          if(e.target.class.value===avatarClass){
            Swal.fire("You have successfully bought the item");
            setPassProductId({
                    product:e.target.product.value,
                    amount: e.target.amount.value,
            });
      }else{
            Swal.fire("Failed to buy Item - Class Restriction");
      }
          
          
         

     }
     useEffect(() => {
      const data={
            product: passProductId.product,
            amount: passProductId.amount,
      }
      if(data.product === "" && data.amount===""){
            console.log("empty")
      }else{
            axios.post(`/api/addBought`, data).then(res =>{
                  if(res.data.status === 200){
                     console.log(res.data.message);
                  }else {
                    // setPotion({...potion,error_list:res.data.errors});
                  }
                });
      }
     
      
     }, [passProductId])
 
    
    return(
        <div data-tip data-for={data.name}  className="shop-returnMap">
        <div className="shop-items"> 
            <div className="shop-itemsImage">
              {
              (data.sex==="None" || data.sex==="Male")? <img src={data.male_image}></img>:<img src={data.female_image}></img>
             }
              </div>
              <div className="shop-itemsInfo">
                    <h6>{data.name}</h6>
                    <div>
                        <form onSubmit={submitToHandler}>
                              <input name="product" type="hidden" value={value}/>
                              <input name="amount" type="hidden" value="0"/>
                              <input name="class" type="hidden" value={data.class}/>
                              <Button type="submit"><img src="assets/images/currency.png"></img>{data.price}<br></br>Submit</Button>
                        </form>
                    </div>
                    
              </div>
        </div> 
        <ReactTooltip id={data.name} place="right" aria-haspopup='true' className="shop-toolTip">
              <div className="shop-hide">
                    <div className="shop-itemsInfo">
                          <div className="shop-weaponInfo">
                                <h5>{data.type}&nbsp;Attributes</h5>
                                <p>Class: {data.class}</p>
                                <p>Physical Attack: {data.p_attack}</p>
                                <p>Magical Attack: {data.m_attack}</p>
                                <p>Physical Defense: {data.p_def}</p>
                                <p>Magical Defense: {data.m_def}</p>
                                <p>Strength: {data.str}</p>
                                <p>Agility: {data.agi}</p>
                                <p>Critical: {data.crit}</p>
                                <p>Critical Damage: {data.crit_dmg}</p>
                          </div>
                    </div> 
              </div>
        </ReactTooltip>
  </div>  
    );
}

export default OutfitFilter;
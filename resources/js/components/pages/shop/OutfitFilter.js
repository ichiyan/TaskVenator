import Button from "@restart/ui/esm/Button";
import {Link, React, useEffect, useState, 
    AddPotionForm, AddOutfitForm, ReactTooltip,axios } from "../../../index";
import Swal from 'sweetalert2';

function OutfitFilter({data, value}){
    const [passProductId, setPassProductId]= useState({
          product: '',
          amount :'',
    });
    const[Id, setId]=useState("");
    
     const submitToHandler=(e)=>{
           e.preventDefault();
           setId(e.target.value);
        Swal.fire("You have successfully bought the item" + Id);
          setPassProductId({
                  product:e.target.product.value,
                  amount: e.target.amount.value,
          });
        
      
         

     }
     useEffect(() => {
      const data={
            product: passProductId.product,
            amount: passProductId.amount,
      }
      axios.post(`/api/addBought`, data).then(res =>{
            if(res.data.status === 200){
               console.log(res.data.message);
            }else {
              // setPotion({...potion,error_list:res.data.errors});
            }
          });
      
     }, [passProductId])
 
    
    return(
        <div data-tip data-for={data.name}  className="shop-returnMap">
        <div className="shop-items"> 
              <div className="shop-itemsImage">
              <img src={data.image}></img>
              </div>
              <div className="shop-itemsInfo">
                    <h6>{data.name}</h6>
                    <div>
                        <form onSubmit={submitToHandler}>
                              <input name="product" type="hidden" value={value}/>
                              <input name="amount" type="hidden" value="0"/>
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
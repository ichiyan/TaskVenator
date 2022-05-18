import Button from "@restart/ui/esm/Button";
import {Link, React, useEffect, useState,
    AddPotionForm, AddOutfitForm, ReactTooltip,axios } from "../../../index";
import Swal from 'sweetalert2';

function OutfitFilter({data, value, avatarClass,setGems}){
    const [passProductId, setPassProductId]= useState({
          product: '',
          amount :'',
          outfit_type: '',
          body_part: ''
    });

     const submitToHandler=(e)=>{
      e.preventDefault();
      //     Swal.fire("You have successfully bought the item");
          if(e.target.class.value===avatarClass){
            Swal.fire("You have successfully bought the item");
            setPassProductId({
                    product:e.target.product.value,
                    amount: e.target.amount.value,
                    outfit_type: e.target.outfit_type.value,
                    body_part: e.target.body_part.value,
            });
      }else{
            Swal.fire("Failed to buy Item - Class Restriction");
      }




     }
     
     useEffect(() => {
      const data={
            product: passProductId.product,
            amount: passProductId.amount,
            outfit_type: passProductId.outfit_type,
            body_part: passProductId.body_part,
      }
      if(data.product === "" || data.amount===""){
            console.log("empty")
      }else{
            axios.post(`/api/addBought`, data).then(res =>{
                  if(res.data.status === 200){
                     setGems(res.data.gems)   
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
                              <input name="amount" type="hidden" value={data.price}/>
                              <input name="class" type="hidden" value={data.class}/>
                              <input name="outfit_type" type="hidden" value={data.outfit_type}/>
                              <input name="body_part" type="hidden" value={data.body_part}/>
                              <Button type="submit"><img src="assets/images/currency.png"></img>{data.price}<br></br>Buy</Button>
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
                                <p>Physical Defense: {data.p_def}</p>
                                <p>Magical Defense: {data.m_def}</p>
                                <p>Strength: {data.str}</p>
                                <p>Agility: {data.agi}</p>
                          </div>
                    </div>
              </div>
        </ReactTooltip>
  </div>
    );
}

export default OutfitFilter;

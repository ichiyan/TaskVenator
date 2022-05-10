import Button from "@restart/ui/esm/Button";
import {Link, React, useEffect, useState, 
    AddPotionForm, AddOutfitForm, ReactTooltip,axios } from "../../../index";
import Swal from 'sweetalert2';

function PotionFilter({data, value}){
      const [passProductId, setPassProductId]= useState({
            product: '',
            amount :'',
      });
      
       const submitToHandler=(e)=>{
             e.preventDefault();
          Swal.fire("You have successfully bought the item");
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
        <div className="shop-returnMap">
        <div data-tip data-for={data.name} className="shop-items"> 
              <div className="shop-itemsImage">
              <img src={data.image}></img>
              </div>
              <div className="shop-itemsInfo">
                    <h6>{data.name}</h6>
                    <p>{data.size}</p>
                    <div>
                        <form onSubmit={submitToHandler}>
                              <input name="product" type="hidden" value={value}/>
                              <input name="amount" type="hidden" value="0"/>
                              <Button type="submit"><img src="assets/images/currency.png"></img>{data.price}<br></br>Buy</Button>
                        </form>
                    </div>
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
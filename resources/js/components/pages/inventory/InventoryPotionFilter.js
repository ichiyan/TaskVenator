import Button from "@restart/ui/esm/Button";
import {Link, React, useEffect, useState, 
    AddPotionForm, AddOutfitForm, ReactTooltip,axios } from "../../../index";
import Swal from 'sweetalert2';
import InventoryOutfit from "./InventoryOutfit";
function InventoryPotionFilter({data, inventory, setInventory}){
      const [passProductId, setPassProductId]= useState({
            inventoryId:'',
            effect:'',
      });

      const submitToHandler=(e)=>{
            e.preventDefault();
            setPassProductId({
                inventoryId: e.target.inventoryId.value,
                effect: e.target.effect.value,
            })
            // console.log(passProductId)
    }

    useEffect(() => {
      console.log(passProductId)
      const data={
          inventoryId: passProductId.inventoryId,
          effect: passProductId.effect,
      }
      if(data.inventoryId === ""){
              console.log("empty")
      }else{
          axios.post(`/api/use_potion`, data).then(res =>{
              if(res.data.status === 200){
                  console.log(res.data.id);
                  console.log("ivnentory");
                  console.log(inventory);
                  setInventory({
                        potions: inventory.potions.filter(item=>{
                              item.id != res.data.id
                        })
                  })

                  console.log("ivnentory");
                  console.log(inventory);
              }
          });
      }
  },[passProductId])

    return(
        <div className="inventory-returnMap">
        <div data-tip data-for={data.name} className="inventory-items"> 
              <div className="inventory-itemsImage">
              <img src={data.image}></img>
              </div>
              <div className="inventory-potionsInfo">
                    <h6>{data.name}</h6>
                    <form onSubmit={submitToHandler}>
                         <input name="inventoryId" type="hidden" value={data.id}/>
                        <input name="effect" type="hidden" value={data.effect}/>
                         <Button type="submit"style={{backgroundColor: "yellow"}}>Use</Button>
                    </form>
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
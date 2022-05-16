import Button from "@restart/ui/esm/Button";
import {Link, React, useEffect, useState, 
    AddPotionForm, AddOutfitForm, ReactTooltip,axios } from "../../../index";
import Swal from 'sweetalert2';
import InventoryOutfit from "./InventoryOutfit";
function InventoryOutfitFilter({setPreview,data}){
    const [passProductId, setPassProductId]= useState({
        directory: '',
        spriteName:'',
  });
    const submitToHandler=(e)=>{
        e.preventDefault();
 //     Swal.fire("You have successfully bought the item");
        setPassProductId({
            directory: e.target.directory.value,
            spriteName:e.target.spriteName.value,
        })
        
      

  }
  useEffect(() => {
    console.log(passProductId);
  },[passProductId])
    return(
        <div data-tip data-for={data.name}  className="inventory-returnMap">
                    <div className="inventory-items"> 
                            {/* <div className="inventory-itemsImage">
                            <img onClick={() => {previewImage(w.image)}} src={data.image}></img>
                            </div> */}
                            <div className="shop-itemsImage">
                             {
                                 (data.sex==="None" || data.sex==="Male")? 
                                                    <img onClick={() => {setPreview(data.male_image)}} src={data.male_image}></img>
                                                    :<img onClick={() => {setPreview(data.female_image)}} src={data.female_image}></img>
                             }
                            </div>
                            <div className="inventory-itemsInfo">
                                <h6>{data.name}</h6>
                                <form onSubmit={submitToHandler}>
                              <input name="directory" type="hidden" value={data.directory}/>
                              <input name="spriteName" type="hidden" value={data.spritesheet_img_name}/>
                              <Button type="submit">Equip</Button>
                        </form>
                            </div>
                    </div> 
                    <ReactTooltip id={data.name} place="right" aria-haspopup='true' className="inventory-toolTip">
                            <div className="inventory-hide">
                                <div className="inventory-itemsInfo">
                                        <div className="inventory-weaponInfo">
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

export default InventoryOutfitFilter;
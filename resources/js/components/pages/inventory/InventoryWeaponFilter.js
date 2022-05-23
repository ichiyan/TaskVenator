import Button from "@restart/ui/esm/Button";
import {Link, React, useEffect, useState,
    AddPotionForm, AddOutfitForm, ReactTooltip,axios } from "../../../index";
import Swal from 'sweetalert2';
import InventoryOutfit from "./InventoryOutfit";

function InventoryWeaponFilter({setPreview, inventory, setInventory, data, updateAvatarPreview, updateAvatarItems}){

    const [passProductId, setPassProductId]= useState({
            directory: '',
            spriteName:'',
            inventoryId:'',
            status: '',
            OutfitType: ''
    });

    const submitToHandler=(e)=>{
            e.preventDefault();
    //     Swal.fire("You have successfully bought the item");
            setPassProductId({
                directory: e.target.directory.value,
                spriteName:e.target.spriteName.value,
                inventoryId: e.target.inventoryId.value,
                status: e.target.status.value,
                OutfitType: e.target.OutfitType.value,
            })

            // if(passProductId.status === 1){

            // }
            console.log(passProductId)
    }

    useEffect(() => {
        console.log(passProductId)
        const data={
            directory: passProductId.directory,
            spriteName: passProductId.spriteName,
            inventoryId: passProductId.inventoryId,
            status: passProductId.status,
            OutfitType: passProductId.OutfitType,
        }
        if(data.directory === "" || data.spriteName==="" || data.inventoryId === ""){
                // console.log("empty")
        }else{
            axios.post(`/api/update`, data).then(res =>{
                if(res.data.status === 200){
                     //if there is a currently equipped item that needs to be unequipped
                     console.log(res.data)
                    if(res.data.id !== 0){
                        if(inventory != undefined){
                            setInventory({
                                weapons: inventory.weapons.map(item => {
                                    if(item.id == res.data.id || item.id == data.inventoryId){
                                        return {
                                            ...item, status: item.status == 0? 1: 0,
                                        }
                                    }
                                    return item;
                                })
                            })
                        }
                    }else{
                        setInventory({
                            weapons: inventory.weapons.map(item => {
                                if(item.id == data.inventoryId){
                                    return {
                                        ...item, status: item.status == 0? 1: 0,
                                    }
                                }
                                return item;
                            })
                        })
                    }
                }
            });
        }
    },[passProductId])


    const execUpdateAvatarPreview = () => {
        console.log(data)

        var clickedItem = inventory.weapons.filter(item => item.id == data.id)

        console.log("CLICKED ITEM")
        console.log(clickedItem)

        updateAvatarPreview({
            item_type: "weapon",
            status: clickedItem[0].status,
            body_part:  data.bodyPart,
            sex: data.sex.toLowerCase(),
            base_src: 'assets/images/spritesheets/' + data.directory,
            img_name: data.spritesheet_img_name,
            zPos: data.zPos,
        });
    }

    const equipUnequip = () => {
        execUpdateAvatarPreview()
        updateAvatarItems()
    }


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
                              <input name="inventoryId" type="hidden" value={data.id}/>
                              <input name="OutfitType" type="hidden" value={data.OutfitType}/>
                              <input name="directory" type="hidden" value={data.directory}/>
                              <input name="spriteName" type="hidden" value={data.spritesheet_img_name}/>
                              <input name="status" type="hidden" value={data.status}/>
                              {/* <h1>{data.status}</h1> */}
                              {
                                  (data.status === 1)?
                                   <Button  onClick={equipUnequip} type="submit" style={{backgroundColor: "#C0C034"}}>Unequip</Button>
                                  :<Button onClick={equipUnequip} type="submit"style={{backgroundColor: "yellow"}}>Equip</Button>
                              }
                        </form>
                </div>
        </div>
        <ReactTooltip id={data.name} place="right" aria-haspopup='true' className="inventory-toolTip">
                <div className="inventory-hide">
                    <div className="inventory-itemsInfo">
                            <div className="inventory-weaponInfo">
                                <h5>{data.type}&nbsp;Attributes</h5>
                                <p>Class: {data.class}</p>
                                <p>Strength: {data.str}</p>
                                <p>Intelligence: {data.int}</p>
                                <p>Agility: {data.agi}</p>
                                <p>Critical Chance: {data.crit_chance}</p>
                                <p>Critical Damage: {data.crit_dmg}</p>
                            </div>
                    </div>
                </div>
        </ReactTooltip>
    </div>
    );
}

export default InventoryWeaponFilter;

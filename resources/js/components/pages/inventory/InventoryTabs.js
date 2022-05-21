import {InventoryAll, InventoryPotions, InventoryOutfit, InventoryWeapons} from "../../../index";

const InventoryTabs = ({tab, updateAvatarPreview}) => {
    if(tab == 'all'){
        return <InventoryAll updateAvatarPreview={updateAvatarPreview}></InventoryAll>
    }else if(tab == 'potions'){
        return <InventoryPotions updateAvatarPreview={updateAvatarPreview}></InventoryPotions>
    }else if (tab == 'weapons'){
        return <InventoryWeapons updateAvatarPreview={updateAvatarPreview}></InventoryWeapons>
    }else if(tab == 'outfit'){
        return <InventoryOutfit updateAvatarPreview={updateAvatarPreview}></InventoryOutfit>
    }
}

export default InventoryTabs;

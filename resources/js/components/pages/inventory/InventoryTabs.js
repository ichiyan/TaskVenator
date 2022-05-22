import {InventoryAll, InventoryPotions, InventoryOutfit, InventoryWeapons} from "../../../index";

const InventoryTabs = ({tab, updateAvatarPreview, updateAvatarItems}) => {
    if(tab == 'all'){
        return <InventoryAll updateAvatarPreview={updateAvatarPreview} updateAvatarItems={updateAvatarItems}></InventoryAll>
    }else if(tab == 'potions'){
        return <InventoryPotions updateAvatarPreview={updateAvatarPreview} updateAvatarItems={updateAvatarItems}></InventoryPotions>
    }else if (tab == 'weapons'){
        return <InventoryWeapons updateAvatarPreview={updateAvatarPreview} updateAvatarItems={updateAvatarItems}></InventoryWeapons>
    }else if(tab == 'outfit'){
        return <InventoryOutfit updateAvatarPreview={updateAvatarPreview} updateAvatarItems={updateAvatarItems}></InventoryOutfit>
    }
}

export default InventoryTabs;


import {React, All, Outfit, Potions, Weapons} from '../../../index';

const ShopTabs = ({tab, setGems, updatePreview})=>{
    if(tab == 'all'){
        return <All setGems={setGems} updatePreview={updatePreview}></All>;
    }else if(tab == 'potions'){
        return <Potions setGems={setGems} updatePreview={updatePreview}></Potions>
    }else if (tab == 'weapons'){
        return <Weapons setGems={setGems} updatePreview={updatePreview}></Weapons>
    }else if(tab == 'outfit'){
        return <Outfit setGames={setGems} updatePreview={updatePreview}></Outfit>
    }
}

export default ShopTabs;

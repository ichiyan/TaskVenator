
import {React, All, Outfit, Potions, Weapons} from '../../../index';

const ShopTabs = ({tab, setGems,gems, updatePreview})=>{
    if(tab == 'all'){
        return <All setGems={setGems} gems={gems} updatePreview={updatePreview}></All>;
    }else if(tab == 'potions'){
        return <Potions setGems={setGems} gems={gems}></Potions>
    }else if (tab == 'weapons'){
        return <Weapons setGems={setGems} gems={gems} updatePreview={updatePreview}></Weapons>
    }else if(tab == 'outfit'){
        return <Outfit setGames={setGems}  gems={gems} updatePreview={updatePreview}></Outfit>
    }
}

export default ShopTabs;

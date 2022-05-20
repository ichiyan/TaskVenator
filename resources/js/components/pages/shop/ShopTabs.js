
import {React, All, Outfit, Potions, Weapons} from '../../../index';

const ShopTabs = ({tab, setGems})=>{
    if(tab == 'all'){
        return <All setGems={setGems}></All>;
    }else if(tab == 'potions'){
        return <Potions setGems={setGems}></Potions>
    }else if (tab == 'weapons'){
        return <Weapons setGems={setGems}></Weapons>
    }else if(tab == 'outfit'){
        return <Outfit setGames={setGems}></Outfit>
    }
}

export default ShopTabs;

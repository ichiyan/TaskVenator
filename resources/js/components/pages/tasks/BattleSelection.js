import {React, useEffect, useState, TaskItem} from "../../../index";
import '../../../../../public/css/party_tasks.css';

const BattleSelection = () => {

    return(
    <div className="battle_selection">
        <div className="monster_image">
        
        </div>
        <div className="monster_info">
            <div className="name">
                <p>Monster</p>
            </div>
            <div className="description">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="battle_button">
                <button className="battle_btn btn w-50 text-light">Battle</button>
            </div>
        </div>
    </div>
    )

}

export default BattleSelection;

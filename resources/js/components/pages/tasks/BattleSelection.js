import {React, useEffect, useState, TaskItem} from "../../../index";
import '../../../../../public/css/party_tasks.css';

const BattleSelection = ({name}) => {

    const monster_picture = "assets/images/monsters/"+name+".gif"

    return(
    <div className="battle_selection">
        <div className="monster_image">
            <div className="image">
                <img src={monster_picture} />
            </div>
            <div className="hp">
                <span>
                    <img src="assets/images/health-icon.png"/> <p>100</p>
                </span>
            </div>
        </div>
        <div className="monster_info">
            <div className="name">
                <p>{name}</p>
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


import {Link, React, useEffect, useState,
    AddPotionForm, AddOutfitForm, ReactTooltip,axios } from "../../../index";
import '../../../../../public/css/party_tasks.css';
import { join } from "lodash";

const BattleSelection = ({name,hp,id,setShow,setInbattle}) => {

    const monster_picture = "assets/images/monsters/"+name+".gif"

    const [monsterinfo,setMonsterinfo] = useState({
        monsterhp: '',
        monsterid: '',
    });

    const [flag,setFlag] = useState(0);

    const join = () =>{
        setMonsterinfo({
            monsterhp: hp,
            monsterid: id,
        })
        setFlag(1);
    }

 
    useEffect(() => {
        const data={
            monsterhp: monsterinfo.monsterhp,
            monsterid: monsterinfo.monsterid,
        }
        console.log(data);
        if(flag === 1){
            if(monsterinfo.monsterhp === '' && monsterinfo.monsterid === ''){
                
            }else{
                axios.post(`/api/joinBattle`, data).then(res =>{
                    if(res.data.status === 200){
                        console.log(res.data.message);
                        setInbattle(true);
                        setFlag(0);
                        setShow(false);
                    }else {
                }});
            }
        }
    });


    return(
    <div className="battle_selection">
        <div className="monster_image">
            <div className="image">
                <img src={monster_picture} />
            </div>
            <div className="hp">
                <span>
                    <img src="assets/images/health-icon.png"/> <p>{hp}</p>
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
                    <input name="monsterid" type="hidden" value={id}/>
                    <input name="monsterhp" type="hidden" value={hp}/> 
                    <button onClick={()=>{join()}} className="battle_btn btn w-50 text-light close">Battle</button>
            </div>
        </div>
    </div>
    )

}

export default BattleSelection;

import React, { useEffect } from "react";
import { useRef, useState } from "react";
import { Party } from "../..";
import AvatarHeader from "../layouts/AvatarHeader";
import Header from "../layouts/Header";
import Shop from "./shop/shop";

const Tasks = ({tab}) => {

    var hpTotal = 50;
    var xpTotal = 50;
    const [hp, setHp] = useState(50);
    const [xp, setXp] = useState(0);
    const [hpBarWidth, sethpBarWidth] = useState("100");
    const [hpHitWidth, sethpHitWidth] = useState("0");
    const [HpIncreaseWidth, setHPIncreaseWidth] = useState("0");

    const [xpBarWidth, setXPBarWidth] = useState("0");
    const [xpIncreaseWidth, setXPIncreaseWidth] = useState("0");

    useEffect( () => {
        document.body.classList.add('internal-pages');
    });

    const hitHandler = () => {
        let updatedHp;

        if(hp == 0){
            updatedHp = 50;
        }else{
            updatedHp = hp - 10;
        }
        setHp(updatedHp);

        const newhpBarWidth = updatedHp / hpTotal * 100;
        const newhpHitWidth = 10 / hp * 100;

        sethpHitWidth(newhpHitWidth);

        setTimeout(function(){
            sethpHitWidth(0);
            setHPIncreaseWidth(newhpBarWidth);
            sethpBarWidth(newhpBarWidth);
        }, 500);
    }

    const healHandler = () => {
        let updatedHp;
        let newHPBarWidth;

        if(hp == hpTotal){
            //    full health modal or sumn
            updatedHp = hpTotal;
        }else{
            updatedHp = hp + 10;
            newHPBarWidth = updatedHp / hpTotal * 100;
        }
        setHp(updatedHp);

        setHPIncreaseWidth(newHPBarWidth);

        setTimeout(function(){
            sethpBarWidth(newHPBarWidth);
        }, 500);
    }

    const addXPHandler = () => {
        let updatedXp = 0;
        let newXPBarWidth;
        if(xp == xpTotal){
            newXPBarWidth = 0;
        }else{
            updatedXp = xp + 10;
            newXPBarWidth = updatedXp / xpTotal * 100;
        }
        setXp(updatedXp);

        setXPIncreaseWidth(newXPBarWidth);

        setTimeout(function(){
            setXPBarWidth(newXPBarWidth);
        }, 500);

    }

    var renderTab = '';
    if  (tab === "party"){
        renderTab =   <Party/>
    }else if (tab === "shop"){
        renderTab = <Shop/>
    }



    return (
        <div>
            <Header page="tasks"/>
            <AvatarHeader hasParty="true" hp={hp} hpTotal={hpTotal} hpBarWidth={hpBarWidth} hpHitWidth={hpHitWidth} HpIncreaseWidth={HpIncreaseWidth} xp={xp} xpTotal={xpTotal} xpBarWidth={xpBarWidth} xpIncreaseWidth={xpIncreaseWidth}/>
            <div style={{marginTop: 15 + "%"}}>
                 {/* <p style={{color: "white"}}>TEST</p>
                <button style={{margin: 10 + "px"}} className="btn btn-danger" onClick={hitHandler}>damage</button>
                <button  style={{margin: 10 + "px"}} className="btn btn-success" onClick={healHandler}>heal</button>
                <button  style={{margin: 10 + "px"}} className="btn btn-primary" onClick={addXPHandler}>add XP</button> */}
                 {renderTab}
            </div>
        </div>
    );
}

export default Tasks;

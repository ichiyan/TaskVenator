import { faBahai, faHeart, faKhanda } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { set } from "lodash";
import React, { useRef, useState } from "react";
import AvatarHeaderInfo from "./AvatarHeaderInfo";

const AvatarHeader = () => {

    var hpTotal = 50;
    var xpTotal = 50;
    const [hp, setHp] = useState(50);
    const [xp, setXp] = useState(0);
    const [hpBarWidth, sethpBarWidth] = useState("100");
    const [hpHitWidth, sethpHitWidth] = useState("0");
    const [HpIncreaseWidth, setHPIncreaseWidth] = useState("0");

    const [xpBarWidth, setXPBarWidth] = useState("0");
    const [xpIncreaseWidth, setXPIncreaseWidth] = useState("0");

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

    return (
        <div className="avatar-header d-flex">
            <div className="container avatar d-flex">
                <div className="row align-self-center justify-content-start align-items-center">
                    <div className="col-1 avatar-img-space d-flex">
                        <img className="avatar-img align-self-center" src="assets/images/avatar-male-warrior.png"/>
                    </div>
                    <div className="col avatar-header-info align-self-start">
                        <div className="first-row">
                            <span className="circle-icon">
                                <img className="class-icon" src="assets/images/warrior-class-icon.png"></img>
                            </span>
                            <span className="username">username<p className="class">lvl 1 warrior</p></span>
                        </div>
                        <div className="health-section">
                            <span> <img className="health-icon" src="assets/images/health-icon.png"></img></span>
                            <span className="health-bar" data-total={hpTotal} data-value={hp}>
                                <div className="hp bar" style={{width: hpBarWidth + "%"}}>
                                    <div className="transition decrease" style={{width: hpHitWidth + "%"}}></div>
                                </div>
                                <div className="transition increase" style={{width: HpIncreaseWidth + "%"}}></div>
                            </span>
                            <span className="hp-txt">{hp}/{hpTotal}</span>
                        </div>
                        <div className="xp-section">
                            <span> <img className="health-icon" src="assets/images/xp-icon.png"></img></span>
                            <span className="xp-bar" data-total={xpTotal} data-value={xp}>
                                <div className="xp bar"style={{width: xpBarWidth + "%"}}> </div>
                                <div className="transition increase" style={{width: xpIncreaseWidth + "%"}}></div>
                            </span>
                            <span className="xp-txt">{xp}/{xpTotal}</span>
                        </div>
                    </div>
                </div>
                <br/><br/>
                {/* TESTING */}
                <button className="btn btn-danger" onClick={hitHandler}>damage</button>
                <button className="btn btn-success" onClick={healHandler}>heal</button>
                <button className="btn btn-primary" onClick={addXPHandler}>add XP</button>
            </div>
        </div>
    );
}

export default AvatarHeader;

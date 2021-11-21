import { faBahai, faHeart, faKhanda } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";
import AvatarHeaderInfo from "./AvatarHeaderInfo";

const AvatarHeader = () => {

    var hpTotal = 50;
    const [hp, setHp] = useState(50);
    const [barWidth, setBarWidth] = useState("100");
    const [hitWidth, setHitWidth] = useState("0");

    const hitHandler = () => {
        const updatedHp = hp - 10;
        if(updatedHp == 0){
            console.log("dead");
            setHp(50);
            console.log("revived");
            console.log(hp);
        }else{
            setHp(updatedHp);
        }
        console.log(hp);

        const newBarWidth = updatedHp / hpTotal * 100;
        const newHitWidth = 10 / hp * 100;

        setHitWidth(newHitWidth);

        setTimeout(function(){
            setHitWidth(0);
            setBarWidth(newBarWidth);
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
                                <div className="hp bar" style={{width: barWidth + "%"}}>
                                    <div className="hit" style={{width: hitWidth + "%"}}></div>
                                </div>
                            </span>
                            <span className="hp-txt">{hp}/{hpTotal}</span>
                        </div>
                        <div className="xp-section">
                            <span> <img className="health-icon" src="assets/images/xp-icon.png"></img></span>
                            <span className="xp-bar" data-total="1000" data-value="1000">
                                <div className="xp bar">
                                    <div className=""></div>
                                </div>
                            </span>
                            <span className="xp-txt">50/50</span>
                        </div>
                    </div>
                </div>
                <br/><br/>
                <button className="damage random btn btn-primary" onClick={hitHandler}>damage</button>
                 {/* <button className="reset btn btn-secondary">reset</button> */}
            </div>
        </div>
    );
}

export default AvatarHeader;

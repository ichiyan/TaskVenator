import { faBahai, faHeart, faKhanda } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import AvatarHeaderInfo from "./AvatarHeaderInfo";

const AvatarHeader = () => {

    const [hp, setHp] = useState();




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
                            <span class="health-bar" data-total="1000" data-value="1000">
                                <div class="hp bar">
                                    <div class="hit"></div>
                                </div>
                            </span>
                            <span className="hp-txt">50/50</span>
                        </div>
                        <div className="xp-section">
                            <span> <img className="health-icon" src="assets/images/xp-icon.png"></img></span>
                            <span class="xp-bar" data-total="1000" data-value="1000">
                                <div class="xp bar">
                                    <div class=""></div>
                                </div>
                            </span>
                            <span className="xp-txt">50/50</span>
                        </div>
                    </div>
                </div>
                <br/><br/>
                <button class="damage random btn btn-primary" onClick={hitHandler}>hit random</button>
                 <button class="reset btn btn-secondary">reset</button>
            </div>
        </div>
    );
}

export default AvatarHeader;

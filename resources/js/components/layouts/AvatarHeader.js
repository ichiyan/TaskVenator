import { faBahai, faHeart, faKhanda } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import AvatarHeaderInfo from "./AvatarHeaderInfo";

const AvatarHeader = () => {
    return (
        <div className="avatar-header d-flex">
            <div className="container avatar d-flex">
                <div className="row align-self-center justify-content-start align-items-center">
                    <div className="col-1 avatar-img-space d-flex">
                        <img className="avatar-img align-self-center" src="assets/images/avatar-male-warrior.png"/>
                    </div>
                    <div className="col avatar-header-info">
                        <div className="row justify-content-start">
                            <div className="col-1 icons">
                                <FontAwesomeIcon icon={faKhanda} className="circle-icon"></FontAwesomeIcon>
                            </div>
                            <div className="col-4 info">
                                <h1 className="username">username</h1>
                                <p className="class">lvl 1 Warrior</p>
                            </div>
                        </div>
                        <div className="row justify-content-start">
                            <div className="col-1 icons">
                                <FontAwesomeIcon icon={faHeart} className="health-icon"></FontAwesomeIcon>
                            </div>
                            <div className="col-4 info">
                                {/* <span className="username">username</span> */}
                                <span className="health">50/50</span>
                            </div>
                        </div>
                        <div className="row justify-content-start">
                            <div className="col-1 icons">
                                <FontAwesomeIcon icon={faBahai} className="xp-icon"></FontAwesomeIcon>
                            </div>
                            <div className="col-4 info">
                                {/* <span className="username">username</span> */}
                                <span className="xp">50/50</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AvatarHeader;

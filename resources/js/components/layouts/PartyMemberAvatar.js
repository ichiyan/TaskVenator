import React from "react";
import ReactTooltip from 'react-tooltip';

const PartyMemberAvatar = ({username}) => {

    const avatarHandler = () => {
        console.log("test");
    }

    return(
       <span>
           {/* value for data-for should be unique since it is referring to id */}
            <a data-tip data-for={username} data-event='click focus' className="avatar-img-space d-flex" onClick={avatarHandler}>
                <span className="party-member">
                    <span className="party-member-username">{username}</span>
                    <span><img className="avatar-img align-self-center" src="assets/images/avatar-male-warrior.png"/></span>
                </span>
            </a>
            <ReactTooltip id={username} aria-haspopup='true' globalEventOff='click' place="bottom" className="party-avatar-info">
                <div className="col avatar-header-info align-self-center">
                    <div className="first-row">
                        <span className="circle-icon">
                            <img className="class-icon" src="assets/images/warrior-class-icon.png"></img>
                        </span>
                        <span className="username">{username}<p className="class">lvl 1 warrior</p></span>
                    </div>
                     <div className="health-section">
                        <span> <img className="health-icon" src="assets/images/health-icon.png"></img></span>
                        <span className="health-bar" data-total="50" data-value="50">
                            <div className="hp bar" style={{width: "100%"}}>
                                <div className="transition decrease" style={{width: "0%"}}></div>
                            </div>
                            <div className="transition increase" style={{width: "0%"}}></div>
                        </span>
                        <span className="hp-txt">50/50</span>
                    </div>
                    <div className="xp-section">
                        <span> <img className="health-icon" src="assets/images/xp-icon.png"></img></span>
                        <span className="xp-bar" data-total="50" data-value="50">
                            <div className="xp bar" style={{width: "100%"}}> </div>
                            <div className="transition increase" style={{width: "0%"}}></div>
                        </span>
                        <span className="xp-txt">50/50</span>
                    </div>
                </div>
            </ReactTooltip>
       </span>
    );
}

export default PartyMemberAvatar;

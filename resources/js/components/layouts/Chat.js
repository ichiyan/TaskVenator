import {React, Fragment, $, useState, useEffect, FontAwesomeIcon, faPaperPlane, faCommentDots, faCircle} from "../../index";
import { io } from "socket.io-client";

const Chat = () => {

    const chatPopUpHandler = () => {
        $(".chat-box").slideToggle("slow");
    }

    return (
        <div className="chat-popup">
            <div className="chat-box">
                <div className="client">
                    <div className="client-info">
                        <h1 className="party-name">Party Name</h1>
                        <p className="sub-info">4/5 online</p>
                    </div>
                </div>
                <div className="chats">
                    <div className="client-chat">
                       <p className="client-username">username</p>
                       <div className="client-message">
                           Test party member
                       </div>
                       <p className="time-elapsed">5m ago</p>
                    </div>
                    <div className="user-chat">
                        <div className="user-message text-right">
                            Test user
                        </div>
                    </div>
                    <p className="user-time-elapsed text-left">5m ago</p>
                </div>

                <div className="chat-input">
                    <input type="text" placeholder="Enter Message"/>
                    <span className="send-btn fa-stack fa-1x">
                        <FontAwesomeIcon icon={faCircle} className="send-icon-circle fa-stack-2x"></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faPaperPlane} className="send-icon fa-stack-1x"></FontAwesomeIcon>
                    </span>
                </div>
            </div>
            <div className="chat-btn">
                <span className="send-btn fa-stack fa-2x" onClick={chatPopUpHandler}>
                    <FontAwesomeIcon icon={faCircle} className="chat-icon-circle fa-stack-2x"></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faCommentDots} className="chat-icon fa-stack-1x"></FontAwesomeIcon>
                </span>
            </div>
        </div>

    );
}

export default Chat;

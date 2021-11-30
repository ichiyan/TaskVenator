import {React, Fragment, $, axios, io, useState, useEffect, FontAwesomeIcon, faPaperPlane, faCommentDots, faCircle} from "../../index";

const Chat = () => {

    const [partyName, setPartyName] = useState('');
    const [message, setMessage] = useState('');
    const [onlineCount, setOnlineCount] = useState(0);
    const [receiverId, setReceiverId] = useState(0);

    useEffect( () => {

        axios.get(`api/get_party_info`).then(res => {
            if(res.data.status === 200){
                setPartyName(res.data.data.party_name);
            }
        });

        axios.get(`api/participants`).then( res => {
            if(res.data.status === 200){
                 var user_id = res.data.auth_user_info.id;
                 var chat_user_id = res.data.chat_user_info.id;

                 setReceiverId(chat_user_id);

                 var onlineCtr = 0;

                 var ip_address = '127.0.0.1';
                 var socket_port = '8005';
                 var socket = io(ip_address + ':' + socket_port);

                 socket.on('connect', function() {
                    socket.emit('user_connected', user_id);
                });

                socket.on('updateUserStatus', (data) => {
                    onlineCtr = 0;
                    $.each(data, function (key, val) {
                        //add condition to check if authUser status is not set to 'appear offline'
                        if(val !== null && val !==0 ){
                            onlineCtr++;
                        }
                    });
                    setOnlineCount(onlineCtr);
                });

                socket.on("private-channel:App\\Events\\PrivateMessageEvent", function(msg){
                    //append message here from sender
                    console.log("test");
                });

            }
        });

    });
    //test socket

    const messageHandler = (e) => {
        e.persist();
        setMessage(e.target.value);
        if(e.key === "Enter"){
            sendMessageHandler();
            e.target.value = '';
        }
    }

    const sendMessageHandler = () => {
        const data = {
            message: message,
            receiver_id: receiverId,
        }

        axios.post(`api/send_message`, data).then(res => {
            if(res.data.status === 200){
                console.log(res.data.data);
                var sentMessageRender = '<Fragment>' +
                                            '<div className="user-chat">' +
                                                '<div className="user-message text-right">' +
                                                    'Test user' +
                                                '</div>' +
                                            '</div>' +
                                            '<p className="user-time-elapsed text-left">5m ago</p>' +
                                        '</Fragment>';
                // setSentMessage(sentMessageRender);
                $( ".chats" ).append(sentMessageRender);
            }
        });
    }

    const chatPopUpHandler = () => {
        $(".chat-box").slideToggle("slow");
    }

    return (
        <div className="chat-popup">
            <div className="chat-box">
                <div className="client">
                    <div className="client-info">
                        <h1 className="party-name">{partyName}</h1>
                        <p className="sub-info">{onlineCount}/5 online</p>
                    </div>
                </div>
                <div className="chats">
                    {/* <div className="client-chat">
                       <p className="client-username">username</p>
                       <div className="client-message">
                           Test party member
                       </div>
                       <p className="time-elapsed">5m ago</p>
                    </div> */}
                    {/* <div className="user-chat">
                        <div className="user-message text-right">
                            Test user
                        </div>
                    </div>
                    <p className="user-time-elapsed text-left">5m ago</p> */}

                    {/* {sentMessage} */}
                </div>

                <div className="chat-input">
                    <input onKeyPress={messageHandler} name="message" type="text" placeholder="Enter Message"/>
                    <span onClick={sendMessageHandler} className="send-btn fa-stack fa-1x">
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

import {React, Fragment, $, axios, io, useState, useEffect, FontAwesomeIcon, faPaperPlane, faCommentDots, faCircle} from "../../index";

const Chat = () => {

    //party name, party count should be broadcasted
    const [partyName, setPartyName] = useState();
    const [partyId, setPartyId] = useState();
    const [partyCount, setPartyCount] = useState();
    const [partyMembersId, setPartyMembersId] = useState([]);  //separated for easy checking if elem exists; idk if this is safe
    const [partyMembers, setPartyMembers] = useState(); //other info, contains username only for now

    const [userId, setUserId] = useState();
    const [onlineCount, setOnlineCount] = useState(0);
    const [message, setMessage] = useState('');

    useEffect( () => {

        axios.get(`api/auth_user`).then( res => {
            if(res.data.status === 200){

                var user_id = res.data.user_id;
                setUserId(user_id);

                var partyMemId = [];

                axios.get(`api/get_party_info`).then(res => {
                    if(res.data.status === 200){
                        var data = res.data.data;
                        setPartyId(data.party.id);
                        setPartyName(data.party.party_name);
                        setPartyCount(data.party_members_count);
                        var members = data.party_members;
                        Object.keys(members).forEach( key => {
                            var val = members[key];
                            partyMemId.push(val.id);
                        });
                        setPartyMembersId(partyMemId);

                        var ip_address = '127.0.0.1';
                        var socket_port = '8005';
                        var socket = io(ip_address + ':' + socket_port);

                        socket.on('connect', function() {
                            socket.emit('user_connected', user_id);
                        });

                        socket.on('updateUserStatus', (data) => {
                            var onlineCtr = 0;
                            console.log(data);
                            $.each(data, function (key, val) {
                                if(val !== null && val !==0 && partyMemId.includes(key)){
                                    onlineCtr++;
                                }
                            });
                            setOnlineCount(onlineCtr);
                        });

                    }
                });
            }
        });

    }, []);


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
                // var sentMessageRender = '<Fragment>' +
                //                             '<div className="user-chat">' +
                //                                 '<div className="user-message text-right">' +
                //                                     'Test user' +
                //                                 '</div>' +
                //                             '</div>' +
                //                             '<p className="user-time-elapsed text-left">5m ago</p>' +
                //                         '</Fragment>';
                // // setSentMessage(sentMessageRender);
                // $( ".chats" ).append(sentMessageRender);
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
                        <p className="sub-info">{onlineCount}/{partyCount} online</p>
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

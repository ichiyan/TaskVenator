import {React, Fragment, $, axios, io, useState, useEffect, timeFormat, FontAwesomeIcon, faPaperPlane, faCommentDots, faCircle} from "../../index";

const Chat = () => {

    //party name, party count should be broadcasted
    const [partyName, setPartyName] = useState();
    const [partyId, setPartyId] = useState();
    const [partyCount, setPartyCount] = useState();
    const [partyMembersId, setPartyMembersId] = useState([]);  //separated for easy checking if elem exists; idk if this is safe

    const [userId, setUserId] = useState();
    const [onlineCount, setOnlineCount] = useState(0);
    const [messages, setMessages] = useState([]);

    useEffect( () => {

        axios.get(`api/auth_user`).then( res => {
            if(res.data.status === 200){

                var user_id = res.data.user_id;
                setUserId(user_id);

                var partyMemId = [];

                axios.get(`api/get_previous_messages`).then(res => {
                    if(res.data.status === 200){
                        res.data.data.forEach(item => {
                            setMessages(
                                messages => [
                                    ...messages,
                                    {
                                        sender_id: item.sender_id,
                                        sender_name: item.name,
                                        content: item.message,
                                        message_id: item.id,
                                        message_created: item.created_at,
                                    }
                                ]
                            );
                        });
                    }
                });


                axios.get(`api/get_party_info`).then(res => {
                    if(res.data.status === 200){
                        var data = res.data.data;
                        var party_id = data.party.id;
                        setPartyId(party_id);
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
                            let chat_data = {
                                party_id: party_id,
                                user_id: user_id,
                                chat_room: "party" + party_id,
                            }
                            socket.emit('user_connected', user_id);
                            socket.emit('party_chat', chat_data);
                        });

                        socket.on('updateUserStatus', (data) => {
                            var onlineCtr = 0;
                            $.each(data, function (key, val) {
                                if(val !== null && val !==0 && partyMemId.includes(key)){
                                    onlineCtr++;
                                }
                            });
                            setOnlineCount(onlineCtr);
                        });

                        socket.on("partyMessage", function(msg){
                            console.log(msg);
                            if(msg.sender_id !== user_id){
                                setMessages(
                                    messages => [
                                        ...messages,
                                        {
                                            sender_id: msg.sender_id,
                                            sender_name: msg.sender_name,
                                            content: msg.content,
                                            message_id: msg.message_id,
                                            message_created: msg.created_at,
                                        }
                                    ]
                                );
                            }
                        });

                    }
                });
            }
        });

        return () => socket.close();

    }, []);

    var msg = '';
    const messageHandler = (e) => {
        e.persist();
        msg = e.target.value;
        if(e.key === "Enter"){
            sendMessageHandler();
            e.target.value = '';
        }
    }

    const sendMessageHandler = () => {
        const data = {
            message: msg,
            party_id: partyId,
        }

        axios.post(`api/send_party_message`, data).then(res => {
            if(res.data.status === 200){
                console.log("data");
                console.log(res.data.data);
                var data = res.data.data;
                setMessages(
                    messages => [
                        ...messages,
                        {
                            sender_id: data.sender_id,
                            sender_name: data.sender_name,
                            content: data.content,
                            message_id: data.message_id,
                            message_created: data.created_at,
                        }
                    ]
                );
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
                    {
                        messages.map(message => (
                            message.sender_id == userId
                            ?
                                <React.Fragment key={message.message_id}>
                                   <div className="user-chat">
                                        <div className="user-message text-right">
                                            {message.content}
                                        </div>
                                    </div>
                                    <p className="user-time-elapsed text-left">{ timeFormat(message.message_created) }</p>
                                </React.Fragment>
                            :
                                <React.Fragment key={message.message_id}>
                                    <div className="client-chat">
                                        <p className="client-username">{message.sender_name}</p>
                                        <div className="client-message">
                                            {message.content}
                                        </div>
                                         <p className="time-elapsed">{ timeFormat(message.message_created) }</p>
                                    </div>
                                </React.Fragment>
                        ))
                    }
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

import {React, Fragment, $, axios, io, useState, useEffect, useCallback, useRef, timeFormat, getCurrentDateTime, dateTimeWithSecondsFormat, FontAwesomeIcon, faPaperPlane, faCommentDots, faCircle} from "../../index";

// TO DO: make messages[], unreadMessagesCount, and ReadMessagesCount accessible by header,
//        before logout, set messages starting at ndx readMessagesCount until
//        messages at ndx messages.length - unreadMessagesCount - 1 to seen


const Chat = () => {

    //party name, party count should be broadcasted
    const [partyName, setPartyName] = useState();
    const [partyId, setPartyId] = useState();
    const [partyCount, setPartyCount] = useState();
    const [partyMembersId, setPartyMembersId] = useState([]);

    const [userId, setUserId] = useState();
    const [onlineCount, setOnlineCount] = useState(0);
    const [messages, setMessages] = useState([]);

    const inputRef = useRef(null);

    const isChatOpen = useRef(false);

    const lastMessageRef = useCallback( node => {
        if(node){
            node.scrollIntoView({ smooth: true });
        }
    }, []);

    const [unreadMessagesCount, setUnreadMessagesCount ] = useState(0);
    const [prevUnreadMessagesCount, setPrevMessagesCount] = useState(0);

    useEffect( () => {

        axios.get(`api/auth_user`).then( res => {
            if(res.data.status === 200){

                var user_id = res.data.user_id;
                setUserId(user_id);

                var partyMemId = [];
                var unread_count = 0;

                axios.get(`api/get_previous_messages`).then(res => {
                    if(res.data.status === 200){
                        //remove last opened chat once is seen is implemented
                        var last_opened_chat = localStorage.getItem("last_opened_chat");
                        console.log("inside get prev msg")
                        console.log(last_opened_chat)
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
                            //change condition to if message is not seen (db) => if using this implementation, no need to store last opened chat in db
                            if( item.sender_id != user_id && new Date(dateTimeWithSecondsFormat(item.created_at)) > new Date(last_opened_chat)){
                                unread_count++;
                            }
                            // else set number of read messages count
                        });
                        setUnreadMessagesCount(unread_count);
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
                                if( isChatOpen.current === false ){
                                    var last_opened = localStorage.getItem("last_opened_chat");
                                    var date = new Date(msg.created_at);
                                    if( new Date(dateTimeWithSecondsFormat(date)) > new Date(last_opened)){
                                       unread_count++;
                                       setUnreadMessagesCount(unread_count);
                                    }
                                }else{
                                    unread_count = 0;
                                    setUnreadMessagesCount(unread_count);
                                }
                            }
                        });
                    }
                });
            }
        });

        return () => socket.close();

    }, []);


    const messageHandler = (e) => {
        e.persist();
        if(e.key === "Enter"){
            sendMessageHandler();
        }
    }

    const sendMessageHandler = () => {
        const data = {
            message: inputRef.current.value,
            party_id: partyId,
        }

        inputRef.current.value = '';

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
        localStorage.setItem("last_opened_chat", getCurrentDateTime());
        if( $(".chat-box").is(":hidden") ){
            isChatOpen.current = true;
            setPrevMessagesCount(unreadMessagesCount);
            setUnreadMessagesCount(0);
        }else{
            isChatOpen.current = false;
        }
        console.log(isChatOpen.current);
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
                    <ins>
                        {
                            messages.map( (message, index) => (
                                message.sender_id == userId
                                ?
                                    <ins key={message.message_id} ref={ messages.length - 1 === index ? lastMessageRef : null } >
                                    <div className="user-chat">
                                            <div className="user-message text-right">
                                                {message.content}
                                            </div>
                                        </div>
                                        <p className="user-time-elapsed text-left">{ timeFormat(message.message_created) }</p>
                                    </ins>
                                :
                                    <ins key={message.message_id} ref={ messages.length - prevUnreadMessagesCount === index ? lastMessageRef : null }>
                                        <div className="client-chat">
                                            <p className="client-username">{message.sender_name}</p>
                                            <div className="client-message">
                                                {message.content}
                                            </div>
                                            <p className="time-elapsed">{ timeFormat(message.message_created) }</p>
                                        </div>
                                    </ins>
                            ))
                        }
                    </ins>
                </div>

                <div className="chat-input">
                    <input onKeyPress={messageHandler} ref={inputRef} name="message" type="text" placeholder="Enter Message"/>
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
                    <span className="badge translate-middle bg-danger unread-messages" style={{ display: unreadMessagesCount != 0 ? 'inline-block' : 'none' }} >{unreadMessagesCount}</span>
                </span>
            </div>
        </div>

    );
}

export default Chat;

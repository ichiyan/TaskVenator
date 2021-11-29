import {Link, React, Fragment, Chat, useEffect, useState, axios, io, $} from "../../../index";
import '../../../../../public/css/party_tasks.css';


const Party = () => {

    const [onlineCount, setOnlineCount] = useState(0);


    useEffect( () => {

        axios.get(`api/message`).then( res => {
            if(res.data.status === 200){
                 var user_id = res.data.authUserInfo.id;
                 var onlineCtr = 0;

                 var ip_address = '127.0.0.1';
                 var socket_port = '8005';
                 var socket = io(ip_address + ':' + socket_port);

                 socket.on('connect', function() {
                    console.log(user_id);
                    socket.emit('user_connected', user_id);
                });

                socket.on('updateUserStatus', (data) => {
                    onlineCtr = 0;
                    $.each(data, function (key, val) {
                        if(val !== null && val !==0 ){
                            onlineCtr++;
                        }
                    });
                    console.log("TEST 1 " + onlineCtr);
                    setOnlineCount(onlineCtr);
                });
            }
        });

    });

    return(
        <Fragment>
            <section className="container party-section">
                <div className="party-nav">
                    <div className="party-nav-item party-active-nav"><Link to="/party">Party</Link></div>
                    <div className="party-nav-item"><Link to="/group_tasks">Group Tasks</Link></div>
                </div>
                <div className="party-content" >
                    <h1>PARTY LANDING PAGE</h1>
                    <h1>PARTY LANDING PAGE</h1>
                    <h1>PARTY LANDING PAGE</h1>
                    <h1>PARTY LANDING PAGE</h1>
                    <h1>PARTY LANDING PAGE</h1>
                    <h1>PARTY LANDING PAGE</h1>
                    <h1>PARTY LANDING PAGE</h1>
                    <h1>PARTY LANDING PAGE</h1>
                    <h1>PARTY LANDING PAGE</h1>
                </div>
            </section>
            <Chat onlineCount={onlineCount}/>
        </Fragment>
    )
}

export default Party;

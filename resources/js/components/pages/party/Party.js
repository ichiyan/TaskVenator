import {Link, React, Fragment, Chat, FontAwesomeIcon,useEffect, useState, useRef, axios, io, $} from "../../../index";
import '../../../../../public/css/party_tasks.css';
import {
    faUsers,
    faChessKing,
    faChessKnight,
    faDiceD20,
    faClock,
    faCheckCircle,
    faTimesCircle
} from '@fortawesome/free-solid-svg-icons'


const Party = ({socket, setHasPartyUpdates, hasPartyUpdates, partyInfo}) => {

    const placeholder_dir = 'assets/images/party_images/party_image_placeholder.png'

    // const sender = useRef()

    const [joinPartyRequests, setJoinPartyRequests] = useState([])

    const sender_id = useRef()

    useEffect(() => {
        socket.on("get_request", data => {
            // setJoinPartyRequests((prev) => [...prev, data])
            const id = data.sender_id
            axios.post(`/api/get_other_user_info`, {id}).then(res => {
               if(res.data.status == 200){
                   let data = res.data
                   sender_id.current = id
                   setJoinPartyRequests((prev) => [...prev, {
                       sender_id: id,
                       username: data.username,
                       level: data.level,
                       class: data.class.name,
                       avatar_img: data.avatar_img,
                   }])
               }
            })
        })
    }, [socket])


    const acceptJoin = () => {
        let data = {
            user_id: sender_id.current,
            party_id: partyInfo.party_id,
        }
        axios.post(`/api/update_has_party`, data).then(res => {
            if(res.data.status == 200){
                setHasPartyUpdates(!hasPartyUpdates)
                setJoinPartyRequests(
                    joinPartyRequests.filter( request => request.sender_id != sender_id.current)
               )
               socket.emit("notify_acceptance", {
                   receiver_id: sender_id.current,
                   party_id: partyInfo.party_id,
               })
            }
        })
    }

    const rejectJoin = () => {
       setJoinPartyRequests(
            joinPartyRequests.filter( request => request.sender_id != sender_id.current)
       )
    }

    return(
        <Fragment>
            <section className="container party-section">
                <div className="party-nav mb-5">
                    <div className="party-nav-item party-active-nav"><Link to="/party">Party</Link></div>
                    <div className="party-nav-item"><Link to="/group_tasks">Group Tasks</Link></div>
                </div>
                <div className="party-wrapper">
                    <div className="content-left">
                        <div className="p-4 gradient-bg">
                            <div className="row justify-content-center align-items-center">
                                <img className="m-2 col" src={partyInfo.party_image} width="100" height="100" alt="guild_logo"></img>
                                <h4 className="col text-white m-1">{partyInfo.party_name}</h4>
                            </div>
                            <hr className='bg-secondary' />
                            <h4 className='text-white'><FontAwesomeIcon icon={faChessKing} className="me-1" />{partyInfo.founder_username}</h4>
                            <span className="d-flex justify-content-between">
                                <p className='text-white'><FontAwesomeIcon icon={faClock} className="me-1" />{partyInfo.founded_on}</p>
                                <p className='text-white'><FontAwesomeIcon icon={faUsers} className="me-1" /> {partyInfo.total_members}/{partyInfo.max_members}</p>
                                <p className='text-white'><FontAwesomeIcon icon={faChessKnight} className="me-1" /> {partyInfo.battles_won}/{partyInfo.battles_lost}</p>
                            </span>
                            <hr className='bg-secondary' />
                            <div>
                                <h4 className='text-white'>Party Motto</h4>
                                <p className='text-white'>{partyInfo.party_motto}</p>
                            </div>
                            <hr className='bg-secondary' />
                            <h4 className="text-white mb-4">Requests to Join</h4>
                            <div>
                                {
                                    joinPartyRequests.map( (request, index) => {
                                        return (
                                            request.hasOwnProperty('username') ?
                                                <div key={index} className="d-flex align-items-center justify-content-between">
                                                    <div className='me-2 mb-2'>
                                                        <img src={request.avatar_img} alt="Avatar" className='avatar-circle' />
                                                    </div>
                                                    <div>
                                                        <p className="text-white mx-2">{request.username}<br/><span className="text-uppercase" style={{color: "#9580FF"}}>LVL {request.level} {request.class}</span></p>
                                                    </div>
                                                    <div>
                                                    <FontAwesomeIcon onClick={acceptJoin} icon={faCheckCircle} className="mx-1 fa-2x accept-icon" style={{cursor: "pointer"}}/>
                                                    <FontAwesomeIcon onClick={rejectJoin} icon={faTimesCircle} className="mx-1 fa-2x reject-icon" style={{cursor: "pointer"}}/>
                                                    </div>
                                                </div>
                                            : ''
                                        );

                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="content-right">
                        <h2 className="text-white ms-5">Quests</h2>
                        <div className="monster-cards">
                            <div className="monster-card-6">
                                <img src="https://3263vihaxx3jy9zn2ikegau7-wpengine.netdna-ssl.com/wp-content/uploads/2020/05/Managarm.gif" width="400" className="img img-responsive"></img>
                                <div className="monster-name">Managarm
                                    <br/>Mon
                                </div>
                                <div className="monster-position">Lorem Ipsum Donor</div>
                                <div className="monster-overview">
                                    <div className="monster-overview">

                                        <div className="d-flex justify-content-around text-center">
                                            <div className="col-xs-4">
                                                <h3>5</h3>
                                                <p>Engaging</p>
                                            </div>
                                            <div className="col-xs-4">
                                                <h3>50</h3>
                                                <p>Sumn</p>
                                            </div>
                                            <div className="col-xs-4">
                                                <h3>35</h3>
                                                <p>Idk</p>
                                            </div>
                                        </div>
                                        <div className='pt-2 me-4 d-flex justify-content-end'>
                                            <button type="button" className="btn-custom-primary join-battle-btn">Join Battle</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="monster-card-6">
                                <img src="https://3263vihaxx3jy9zn2ikegau7-wpengine.netdna-ssl.com/wp-content/uploads/2020/05/Managarm.gif" width="400" className="img img-responsive"></img>
                                <div className="monster-name">Managarm
                                    <br/>Mon
                                </div>
                                <div className="monster-position">Lorem Ipsum Donor</div>
                                <div className="monster-overview">
                                    <div className="monster-overview">

                                        <div className="d-flex justify-content-around text-center">
                                            <div className="col-xs-4">
                                                <h3>5</h3>
                                                <p>Engaging</p>
                                            </div>
                                            <div className="col-xs-4">
                                                <h3>50</h3>
                                                <p>Sumn</p>
                                            </div>
                                            <div className="col-xs-4">
                                                <h3>35</h3>
                                                <p>Idk</p>
                                            </div>
                                        </div>
                                        <div className='pt-2 me-4 d-flex justify-content-end'>
                                            <button type="button" className="btn-custom-primary join-battle-btn">Join Battle</button>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="monster-card-6">
                                <img src="https://3263vihaxx3jy9zn2ikegau7-wpengine.netdna-ssl.com/wp-content/uploads/2020/05/Managarm.gif" width="400" className="img img-responsive"></img>
                                <div className="monster-name">Managarm
                                    <br/>Mon
                                </div>
                                <div className="monster-position">Lorem Ipsum Donor</div>
                                <div className="monster-overview">
                                    <div className="monster-overview">

                                        <div className="d-flex justify-content-around text-center">
                                            <div className="col-xs-4">
                                                <h3>5</h3>
                                                <p>Engaging</p>
                                            </div>
                                            <div className="col-xs-4">
                                                <h3>50</h3>
                                                <p>Sumn</p>
                                            </div>
                                            <div className="col-xs-4">
                                                <h3>35</h3>
                                                <p>Idk</p>
                                            </div>
                                        </div>
                                        <div className='pt-2 me-4 d-flex justify-content-end'>
                                            <button type="button" className="btn-custom-primary join-battle-btn">Join Battle</button>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="filling-empty-space-childs "></div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <Chat socket={socket}/> */}
        </Fragment>
    )
}

export default Party;

import {Link, React, Fragment, Chat, FontAwesomeIcon,useEffect, useState, axios, io, $} from "../../../index";
import '../../../../../public/css/party_tasks.css';
import {
    faUsers,
    faChessKing,
    faChessKnight,
    faDiceD20,
    faClock
} from '@fortawesome/free-solid-svg-icons'


const Party = () => {

    const placeholder_dir = 'assets/images/party_images/party_image_placeholder.png'

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
                                <img className="m-2 col" src={placeholder_dir} width="100" height="100" alt="guild_logo"></img>
                                <h3 className="col text-white m-1">Party Name</h3>
                            </div>
                            <hr className='bg-secondary' />
                            <h4 className='text-white'><FontAwesomeIcon icon={faChessKing} className="me-1" />Ichiyan</h4>
                            <span className="d-flex justify-content-between">
                                <p className='text-white'><FontAwesomeIcon icon={faClock} className="me-1" /> 2022-1-12</p>
                                <p className='text-white'><FontAwesomeIcon icon={faUsers} className="me-1" /> 5/5</p>
                                <p className='text-white'><FontAwesomeIcon icon={faChessKnight} className="me-1" /> 5/5</p>
                            </span>
                            <hr className='bg-secondary' />
                            <div>
                                <h4 className='text-white'>Party Motto</h4>
                                <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt!</p>
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
            <Chat/>
        </Fragment>
    )
}

export default Party;

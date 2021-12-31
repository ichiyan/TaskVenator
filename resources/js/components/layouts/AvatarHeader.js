import { React, Fragment, axios, useRef, useState, useEffect,
         FontAwesomeIcon, faInfoCircle,
         Carousel, PartyMemberAvatar } from '../../index';

const AvatarHeader = ({hp, hpTotal, hpBarWidth, hpHitWidth, HpIncreaseWidth,
                       xp, xpTotal, xpBarWidth, xpIncreaseWidth, hasParty}) => {


    const breakPoints = [
        { width: 1, itemsToShow: 1},
        { width: 150, itemsToShow: 2},
        { width: 200, itemsToShow: 3},
        { width: 500, itemsToShow: 4},
    ];

    const [username, setUsername] = useState('');
    const [level, setLevel] = useState('');
    const [avatarClass, setAvatarClass] = useState('');

    const avatarCanvasRef = useRef();
    const avatarCtx = useRef();
    const [CANVAS_WIDTH, setCanvasWidth] = useState(120);
    const [CANVAS_HEIGHT, setCanvasHeight] = useState(120);

    useEffect(() => {
        axios.get(`api/get_user_info`).then(res => {
            var data = res.data;
            setUsername(data.username);
            setLevel(data.level);
            setAvatarClass(data.class);
        });
    }, [])

    return (
        <div className="avatar-header d-flex">
            <div className="container avatar d-flex">
                <div className="row align-self-center justify-content-between align-items-center">
                    <div className="col-1 avatar-img-space d-flex">
                        {/* <img className="avatar-img align-self-center" src="assets/images/avatar-male-warrior.png"/> */}
                        <canvas ref={avatarCanvasRef}></canvas>
                    </div>
                    <div className="col avatar-header-info align-self-start">
                        <div className="first-row">
                            <span className="circle-icon">
                                <img className="class-icon" src="assets/images/warrior-class-icon.png"></img>
                            </span>
                            <span className="username">{username}<p className="class">lvl {level} {avatarClass}</p></span>
                        </div>
                         <div className="health-section">
                            <span> <img className="health-icon" src="assets/images/health-icon.png"></img></span>
                            <span className="health-bar" data-total={hpTotal} data-value={hp}>
                                <div className="hp bar" style={{width: hpBarWidth + "%"}}>
                                    <div className="transition decrease" style={{width: hpHitWidth + "%"}}></div>
                                </div>
                                <div className="transition increase" style={{width: HpIncreaseWidth + "%"}}></div>
                            </span>
                            <span className="hp-txt">{hp}/{hpTotal}</span>
                        </div>
                        <div className="xp-section">
                            <span> <img className="health-icon" src="assets/images/xp-icon.png"></img></span>
                            <span className="xp-bar" data-total={xpTotal} data-value={xp}>
                                <div className="xp bar"style={{width: xpBarWidth + "%"}}> </div>
                                <div className="transition increase" style={{width: xpIncreaseWidth + "%"}}></div>
                            </span>
                            <span className="xp-txt">{xp}/{xpTotal}</span>
                        </div>
                    </div>
                    { hasParty === "true"
                        ?   <Fragment>
                                <div className="col-7 party-carousel">
                                    <Carousel itemsToShow={4} pagination={false} breakPoints={breakPoints}>
                                        {/* pass props */}
                                        <PartyMemberAvatar username="username"/>
                                        <PartyMemberAvatar username="asdfeeeeeeeeeeeeeeeeeeeeeeeee"/>
                                        <PartyMemberAvatar username="zxcvby"/>
                                        <PartyMemberAvatar username="qwerty"/>
                                        <PartyMemberAvatar username="lkjhgf"/>
                                    </Carousel>
                                </div>
                                <div className="col-1">
                                    <button className="btn btn-primary btn-custom-primary party-info-btn"><FontAwesomeIcon icon={faInfoCircle} className="info-icon"/>Party</button>
                                </div>
                            </Fragment>
                        :   <Fragment>
                                <div className="col-7 text-center">
                                    <p className="prompt">Tired of completing tasks and battling monsters alone?</p>
                                    <button className="btn btn-primary btn-custom-primary">Form a Party</button>
                                    <span>
                                        <button className="btn btn-outline-primary btn-custom-outline-primary">Join a Party</button>
                                    </span>
                                </div>
                            </Fragment>
                    }
                </div>
            </div>
        </div>
    );
}

export default AvatarHeader;

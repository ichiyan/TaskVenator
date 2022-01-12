import { React, useEffect, useRef, useState } from "../../index";
import ReactTooltip from 'react-tooltip';



const PartyMemberAvatar = ({member}) => {

    const avatarClass = useRef();
    const elemID = "id-" + member.id;

    const avatar = member.avatar;
    const bgColor = useRef(avatar.background_color);
    const sex = useRef();
    const isFemale = useRef(avatar.sex);
    const skinTone = useRef(avatar.skin_tone);
    const frameX = useRef(4);
    const frameY = useRef();

    const avatarCanvasRef = useRef();
    const avatarCtx = useRef();
    const [CANVAS_WIDTH, setCanvasWidth] = useState(120);
    const [CANVAS_HEIGHT, setCanvasHeight] = useState(120);
    const avatarImage = useRef();

    const baseDir = 'assets/images/spritesheets/';
    const spriteWidth = 64;
    const spriteHeight = 64;

    const [items, setItems] = useState();
    const selections = useRef(avatar.items);

    useEffect(() => {
       animate();
    }, [])


    const animate = () => {
        var canvas = avatarCanvasRef.current;
        avatarCtx.current = canvas.getContext('2d');
        canvas.width = canvas.height = 120;

        avatarImage.current = new Image();
        avatarImage.current.src = isFemale.current ? baseDir + 'body/female/human/' + skinTone.current + '.png' : baseDir + 'body/male/human/' + skinTone.current + '.png';

        var role = member.avatar.class_id;
        if(role == 1){
            avatarClass.current = 'warrior';
            frameY.current = 14;
        }else if(role == 2){
            avatarClass.current = 'mage';
            frameY.current = 2;
        }else{
            avatarClass.current = 'marksman';
            frameY.current = 18;
            frameX.current = 2;
        }

        avatarCtx.current.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        avatarCtx.current.fillStyle = bgColor.current;
        avatarCtx.current.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        avatarImage.current.onload = () => {
            avatarCtx.current.drawImage(avatarImage.current, frameX.current * spriteWidth, frameY.current * spriteHeight, spriteWidth, spriteHeight, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
            selections.current.sort( (a, b) => (a.zPos > b.zPos) ? 1: -1 );
            selections.current.forEach(selection => {
                var selectionImg = new Image();
                if ( selection.sex === "unisex" ){
                    sex.current = isFemale.current ? "female" : "male";
                }else{
                    sex.current = selection.sex;
                }
                if (sex.current === "none"){
                    selectionImg.src = selection.base_src + selection.img_name;
                }else{
                    selectionImg.src = selection.base_src + sex.current + "/" + selection.img_name;
                }
                selectionImg.onload = () => {
                    avatarCtx.current.drawImage(selectionImg, frameX.current * spriteWidth, frameY.current * spriteHeight, spriteWidth, spriteHeight, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
                 }
            });
         }
     }

    return(
       <span>
           {/* value for data-for should be unique since it is referring to id */}
            <a data-tip data-for={elemID} data-event='click focus' className="avatar-img-space d-flex">
                <span className="party-member">
                    <span className="party-member-username">{member.username}</span>
                    <span>
                        {/* <img className="avatar-img align-self-center" src="assets/images/avatar-male-warrior.png"/> */}
                        <canvas ref={avatarCanvasRef}></canvas>
                    </span>
                </span>
            </a>
            <ReactTooltip id={elemID} aria-haspopup='true' globalEventOff='click' place="bottom" className="party-avatar-info">
                <div className="col avatar-header-info align-self-center">
                    <div className="first-row">
                        <span className="circle-icon">
                            <img className="class-icon" src={'assets/images/' + avatarClass.current  +'-class-icon.png'}></img>
                        </span>
                        <span className="username">{member.username}<p className="class">lvl {member.avatar.level} {avatarClass.current}</p></span>
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

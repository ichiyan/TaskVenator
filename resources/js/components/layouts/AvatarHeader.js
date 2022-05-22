import { React, Fragment, axios, useRef, useState, useEffect,
    FontAwesomeIcon, faInfoCircle,
    Carousel, PartyMemberAvatar } from '../../index';
import JoinPartyModal from '../modals/JoinParty'
import FormPartyModal from '../modals/FormParty'

const AvatarHeader = ({hp, hpTotal, hpBarWidth, hpHitWidth, HpIncreaseWidth,
                  xp, xpTotal, xpBarWidth, xpIncreaseWidth}) => {


const breakPoints = [
   { width: 1, itemsToShow: 1},
   { width: 150, itemsToShow: 2},
   { width: 200, itemsToShow: 3},
   { width: 500, itemsToShow: 4},
];

const [username, setUsername] = useState('');
const [level, setLevel] = useState('');
const [avatarClass, setAvatarClass] = useState('');
const charClass = useRef();
const bgColor = useRef();
const sex = useRef();
const isFemale = useRef();
const skinTone = useRef();
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
const selections = useRef([]);

const hasParty = useRef(0);
const [partyMembers, setPartyMembers] = useState([]);

useEffect(() => {

   axios.get(`api/get_user_info`).then(res => {
       var data = res.data;
       hasParty.current = data.has_party;
       setUsername(data.username);
       setLevel(data.level);
       setAvatarClass(data.class);
       setItems(data.items);

       charClass.current = data.class;
       bgColor.current = data.background_color;
       isFemale.current = data.sex;
       skinTone.current = data.skin_tone;
       selections.current = data.items;

       animate();

       if(data.has_party == 1){
            axios.get(`api/get_party_info`).then(res => {
                if(res.data.status == 200){
                    setPartyMembers(res.data.members);
                }
            });
       }
   });

}, []);

const animate = () => {
   var canvas = avatarCanvasRef.current;
   avatarCtx.current = canvas.getContext('2d');
   canvas.width = canvas.height = 120;

   avatarImage.current = new Image();
   avatarImage.current.src = isFemale.current ? baseDir + 'body/female/human/' + skinTone.current + '.png' : baseDir + 'body/male/human/' + skinTone.current + '.png';

   var chClass = charClass.current;
   if(chClass === "warrior"){
       frameY.current = 14;
   }else if(chClass === "mage"){
       frameY.current = 2;
   }else if(chClass === "marksman"){
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
                           <img className="class-icon" src={"assets/images/" + avatarClass + "-class-icon.png"}></img>
                       </span>
                       <span className="username">{username}<p className="class">lvl 12312312{level} {avatarClass}</p></span>
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
               { hasParty.current === 1
                   ?   <Fragment>
                           <div className="col-7 party-carousel">
                               <Carousel itemsToShow={4} pagination={false} breakPoints={breakPoints}>
                                   {
                                       partyMembers.map( member => (
                                            <PartyMemberAvatar key={member.id} member={member}/>
                                       ))
                                   }
                               </Carousel>
                           </div>
                           <div className="col-1">
                               <button className="btn btn-primary btn-custom-primary party-info-btn"><FontAwesomeIcon icon={faInfoCircle} className="info-icon"/>Party</button>
                           </div>
                       </Fragment>
                   :   <Fragment>
                           <div className="col-7 text-center">
                               <p className="prompt">Tired of completing tasks and battling monsters alone?</p>
                               <button className="btn btn-primary btn-custom-primary avatar-header-btn" data-bs-toggle="modal" data-bs-target="#form-a-party">Form a Party</button>
                               <span>
                                   <button className="btn btn-outline-primary btn-custom-outline-primary avatar-header-btn" data-bs-toggle="modal" data-bs-target="#join-a-party">Join a Party</button>
                               </span>
                           </div>
                       </Fragment>
               }
           </div>
       </div>


       {/* Modals */}
       <JoinPartyModal></JoinPartyModal>
       <FormPartyModal></FormPartyModal>


   </div>
);
}

export default AvatarHeader;

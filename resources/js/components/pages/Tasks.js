import axios from "axios";
import '../../../../public/css/form_party.css'
import {Header, React, io,
    useEffect, useState, useRef, GroupTasks,TasksTab,
    AvatarHeader, Shop, Party, Outfit, All,
    Weapons, Potions, Cards, Inventory, InventoryOutfit, InventoryWeapons, InventoryPotions, dateTimeWithSecondsFormat} from "../../index";

    import { Button, Modal } from 'react-bootstrap';
import { set } from "lodash";
 const Tasks = ({tab}) => {

    const [hp, setHp] = useState();
    const [xp, setXp] = useState(0);
    const [hpTotal, setHpTotal] = useState();
    const [xpTotal, setXpTotal] = useState();
    const [dailyHp, setDailyHp]= useState("0");
    const bonusHP =useRef();

    const[lastReceivedHp, setLastReceivedHp]= useState();

    const health = useRef();
    const healthTotal = useRef();

    const [hpBarWidth, sethpBarWidth] = useState();
    const [hpHitWidth, sethpHitWidth] = useState("0");
    const [HpIncreaseWidth, setHPIncreaseWidth] = useState("0");

    const [xpBarWidth, setXPBarWidth] = useState("0");
    const [xpIncreaseWidth, setXPIncreaseWidth] = useState("0");
    const [gems, setGems]= useState();

    const [username, setUsername] = useState('');
    const [hasBattle, setHasBattle] = useState('');
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

    const [hasParty, setHasParty] = useState();
    const [partyMembers, setPartyMembers] = useState([]);
    const [partyInfo, setPartyInfo] = useState({});

    const [hasUpdates, setHasUpdates] = useState(false);

    const ip_address = '127.0.0.1';
    const socket_port = '8005';
    const socket = io(ip_address + ':' + socket_port);

    const id = useRef();
    const [hasPartyUpdates, setHasPartyUpdates] = useState(false)
    const[showModal, setShowModal] = useState(false);



    useEffect(()=>{
        axios.get(`/api/gems`).then(res =>{
              if(res.data.status===200){
                setGems(res.data.gems);
              }
        });
     },[])

    useEffect( () => {
        document.body.classList.add('internal-pages');
    }, []);

    useEffect( () => {
        console.log("HEEEREE")
        socket?.on("update_header", data => {
            console.log(data)
            setHasPartyUpdates(!hasPartyUpdates)
        })
    }, [socket])

    useEffect(() => {
        axios.get(`api/get_user_info`).then(res => {
            var data = res.data;
            // console.log(data);
            var dailyHp;
            setUsername(data.username);
            setLevel(data.level);
            setAvatarClass(data.class);
            setItems(data.items);

            setHp(data.curr_hp);
            sethpBarWidth(data.curr_hp);
            setXp(data.curr_xp);
            setHpTotal(data.max_hp);
            setXpTotal(data.max_xp);
            setHasBattle(data.is_in_battle);
            setLastReceivedHp(data.last_received_daily_hp);

            healthTotal.current = data.max_hp;
            health.current = data.curr_hp;


            // setDailyHp( 2 * (2 + (data.level * 0.1)));

            // console.log(dailyHp)
            if(data.has_party == 1){
                setHasParty(1);
                 axios.get(`/api/get_party_info`).then(res => {
                     if(res.data.status == 200){
                         let data = res.data;
                         setPartyInfo({
                                party_id: data.party_id,
                                party_name: data.party_name,
                                party_image: data.party_image,
                                total_members: data.total_members,
                                max_members: data.max_members,
                                party_motto: data.party_motto,
                                founded_on: data.founded_on,
                                founder_username: data.founder_username,
                                battles_won: data.battles_won,
                                battles_lost: data.battles_lost,
                         })
                         setPartyMembers(res.data.members);
                     }
                 });
            }

            let today = new Date();
            if(new Date(dateTimeWithSecondsFormat(data.last_received_daily_hp)) < today.setDate(today.getDate() - 1)){
                // display modal => clicking confirmation btn calls receiveDailyBonusHP
                receiveDailyBonusHP(data.curr_hp, data.max_hp)

                setShowModal(true);

                console.log("asdasd")

            }

            console.log(socket)

            id.current = data.user_id;
            console.log("here")
            console.log(id.current)

            let user_data = {
                user_id: data.user_id,
                has_party: data.has_party,
            }

            console.log(user_data)

            // socket.on('connect', function() {
                socket.emit('user_connected', user_data);
                if(data.has_party == 1){
                    socket.emit('update_online_status')
                }
            // });
        });
    }, [hasPartyUpdates]);


    useEffect(() => {

        axios.get(`api/get_user_info`).then(res => {
            var data = res.data;
            setItems(data.items);
            charClass.current = data.class;
            bgColor.current = data.background_color;
            isFemale.current = data.sex;
            skinTone.current = data.skin_tone;
            selections.current = data.items;

            animate();

        });

     }, [hasUpdates]);


    const receiveDailyBonusHP = (current, total) => {
        if(current < total){
            bonusHP.current = 2 * (2 + (level * 0.1));
            // console.log(bonusHP);
            // healHandler(bonusHP);
        }else{
            //no display modal if zero
            bonusHP.current=0;

        }
        axios.post(`/api/update_last_received_daily_hp`).then(res =>{
            if(res.data.message === 200){
                console.log(res.data);
            }
        });
    }

    const hitHandler = () => {
        let updatedHp;

        if(hp === 0){
            updatedHp = 50;
        }else{
            updatedHp = hp - 10;
        }
        setHp(updatedHp);

        const newhpBarWidth = updatedHp / hpTotal * 100;
        const newhpHitWidth = 10 / hp * 100;

        sethpHitWidth(newhpHitWidth);

        setTimeout(function(){
            sethpHitWidth(0);
            setHPIncreaseWidth(newhpBarWidth);
            sethpBarWidth(newhpBarWidth);
        }, 500);
    }

    const healHandler = (added_hp) => {
        let updatedHp;
        let newHPBarWidth;

        if(health.current === healthTotal.current || (health.current + added_hp) > healthTotal.current){
            updatedHp = healthTotal.current;
        }else{
            updatedHp = health.current + added_hp;
            newHPBarWidth = updatedHp / healthTotal.current * 100;
        }

        setHp(updatedHp);
        health.current = updatedHp;

        setHPIncreaseWidth(newHPBarWidth);
        setTimeout(function(){
            sethpBarWidth(newHPBarWidth);
        }, 500);

        updateHealthDB()
    }

    const updateHealthDB = () => {

        const data = {
            curr_hp: health.current,
            max_hp: healthTotal.current,
        }

        axios.post(`/api/update_health`, data).then(res => {
            if(res.data.status === 200){
                console.log(res.data.message)
            }
        })

    }

    const addXPHandler = () => {
        let updatedXp = 0;
        let newXPBarWidth;
        if(xp === xpTotal){
            newXPBarWidth = 0;
        }else{
            updatedXp = xp + 10;
            newXPBarWidth = updatedXp / xpTotal * 100;
        }
        setXp(updatedXp);

        setXPIncreaseWidth(newXPBarWidth);

        setTimeout(function(){
            setXPBarWidth(newXPBarWidth);
        }, 500);

    }

    //closing modal and add daily hp
    const handleClose =() =>{
        setShowModal(false);
        healHandler(bonusHP.current)
    }

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


    let renderTab = '';
    if  (tab === "party"){
        renderTab =   <Party socket={socket} setHasPartyUpdates={setHasPartyUpdates} hasPartyUpdates={hasPartyUpdates} partyInfo={partyInfo}/>;
    }else if (tab === "group_tasks"){
        renderTab = <GroupTasks/>;
    }else if (tab === "tasks"){
        renderTab = <TasksTab/>;
    }else if (tab === "shop"){
        renderTab = <Shop setGems={setGems} gems={gems}/>;
    }else if(tab ==="inventory"){
        renderTab =<Inventory hasUpdates={hasUpdates} setHasUpdates={setHasUpdates}/>;
    }

    return (
        // <SocketProvider>
            <div>
                <Header page={tab} gems={gems}/>
                <AvatarHeader socket={socket} id={id.current} hp={hp} hpTotal={hpTotal} hpBarWidth={hpBarWidth} hpHitWidth={hpHitWidth} HpIncreaseWidth={HpIncreaseWidth} xp={xp} xpTotal={xpTotal} xpBarWidth={xpBarWidth} xpIncreaseWidth={xpIncreaseWidth}
                              avatarCanvasRef={avatarCanvasRef} avatarClass={avatarClass} username={username} level={level} hasParty={hasParty} partyMembers={partyMembers}/>
                <div className="main-section">

                 <div className={"modal fade" + (showModal ? " show d-block" : " d-none")} id="test" show="1">
                    <div className="modal-dialog modal-lg modal-dialog-centered">
                        <div className="modal-content internal-pages">
                            <div className="modal-header" style={{ borderBottom: "1px solid #2A2C37" }}>
                                <h5 className="modal-title text-white">Daily Report</h5>
                            </div>
                            <div className="modal-body bg-gradient">
                                    <div className="battle-main-container">

                                       <div className="battle-info-container">
                                            <div className="battle-left-container">
                                                <div className="d-flex justify-content-left">
                                                    <div className="position-relative">
                                                        <img src="assets/images/giphy.gif" height="150" width="150" style={{ minHeight: "150px", minWidth: "150px" }} />
                                                    </div>
                                                </div>
                                                <div className="battle-rewardsInfo">
                                                    <h6 style={{color: "white"}}>Rewards</h6>
                                                    <p style={{color: "white"}}><img src="assets/images/health-icon.png" style={{width: "20px",height: "20px", marginLeft: "5px", marginRight: "5px"}}></img>+ {bonusHP.current}</p>
                                                </div>
                                            </div>

                                            <div className="battle-right-container">
                                                <div className="d-flex justify-content-left">
                                                    <div className="position-relative">
                                                        <img src="assets/images/giphy.gif" height="150" width="150" style={{ minHeight: "150px", minWidth: "150px" }} />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="432">
                                                        <label htmlFor="party-name" className="form-label text-white">Deduction</label>
                                                        <h1>You received: task</h1>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='pt-2  d-flex justify-content-end'>
                                            <button type="submit" className="btn-custom-primary join-form-party-btn"  onClick={handleClose}>Close</button>
                                        </div>
                                    </div>

                            </div>
                        </div>
                </div>
            </div>
                {/* <Modal show={showModal} onHide={handleClose} size="lg">
                    <Modal.Header className="modal-content internal-pages"style={{ color:"white", marginLeft: "-1px", width: "800px", marginTop: "-1px" , borderRadius: "0px"}}>
                        <Modal.Title>Modal heading</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="modal-body internal-pages" style={{ marginLeft: "-0.5px", width: "795px", marginTop: "-1px" , borderRadius: "0px"}}>
                            <div className="asd bg-gradient" style={{alignContent:"left"}}>
                                <div>asdasdasdasd</div>
                                <div>asdasdasdasd</div>
                            </div>
                            </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                        </Button>
                        </Modal.Footer>
                </Modal> */}
                    {
                        tab == "tasks"
                        ?
                            <div className="container">
                                <p style={{color: "white"}}>TEST</p>
                                <button style={{margin: 10 + "px"}} className="btn btn-danger" onClick={hitHandler}>damage</button>
                                <button  style={{margin: 10 + "px"}} className="btn btn-success" onClick={() => healHandler(5)}>heal</button>
                                <button  style={{margin: 10 + "px"}} className="btn btn-primary" onClick={addXPHandler}>add XP</button>
                            </div>
                        : null
                    }
                    {renderTab}
                </div>
            </div>
    //   </SocketProvider>
    );
}

export default Tasks;

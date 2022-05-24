import axios from "axios";
import {Header, React, io,
    useEffect, useState, useRef, GroupTasks,TasksTab,
    AvatarHeader, Shop, Party, Outfit, All,
    Weapons, Potions, Cards, Inventory, InventoryOutfit, InventoryWeapons, InventoryPotions} from "../../index";


 const Tasks = ({tab}) => {

    const [hp, setHp] = useState();
    const [xp, setXp] = useState(0);
    const [hpTotal, setHpTotal] = useState();
    const [xpTotal, setXpTotal] = useState();

    const health = useRef();
    const healthTotal = useRef();

    const [hpBarWidth, sethpBarWidth] = useState();
    const [hpHitWidth, sethpHitWidth] = useState("0");
    const [HpIncreaseWidth, setHPIncreaseWidth] = useState("0");

    const [xpBarWidth, setXPBarWidth] = useState("0");
    const [xpIncreaseWidth, setXPIncreaseWidth] = useState("0");
    const [gems, setGems]= useState();

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

    const [hasParty, setHasParty] = useState();
    const [partyMembers, setPartyMembers] = useState([]);
    const [partyInfo, setPartyInfo] = useState({});

    const [hasUpdates, setHasUpdates] = useState(false);

    const ip_address = '127.0.0.1';
    const socket_port = '8005';
    const socket = io(ip_address + ':' + socket_port);

    const id = useRef();
    const [hasPartyUpdates, setHasPartyUpdates] = useState(false)


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
            setUsername(data.username);
            setLevel(data.level);
            setAvatarClass(data.class);
            setItems(data.items);

            setHp(data.curr_hp);
            sethpBarWidth(data.curr_hp);
            setXp(data.curr_xp);
            setHpTotal(data.max_hp);
            setXpTotal(data.max_xp);

            healthTotal.current = data.max_hp;
            health.current = data.curr_hp;

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
            if(data.last_received_daily_hp < today.setDate(today.getDate() - 1)){
                receiveDailyBonusHP(data.curr_hp, data.max_hp)
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
            let bonusHP = 2 * (2 + (level * 0.1))

            //open modal (after computing for gains/deductions based on tasks)
            //then call heal/hit handlers (only heal handler has been adjusted)
            healHandler(bonusHP)
        }

        // axios.post(`/api/update_last_received_daily_hp`).then(res => {

        // })

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

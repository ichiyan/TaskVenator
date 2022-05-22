import axios from "axios";
import {Header, React,
    useEffect, useState, useRef, GroupTasks,TasksTab,
    AvatarHeader, Shop, Party, Outfit, All,
    Weapons, Potions, Cards, Inventory, InventoryOutfit, InventoryWeapons, InventoryPotions} from "../../index";


 const Tasks = ({tab}) => {

    var hpTotal = 50;
    var xpTotal = 50;
    const [hp, setHp] = useState(50);
    const [xp, setXp] = useState(0);
    const [hpBarWidth, sethpBarWidth] = useState("100");
    const [hpHitWidth, sethpHitWidth] = useState("0");
    const [HpIncreaseWidth, setHPIncreaseWidth] = useState("0");

    const [xpBarWidth, setXPBarWidth] = useState("0");
    const [xpIncreaseWidth, setXPIncreaseWidth] = useState("0");
    const [gems, setGems]= useState();

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

    const healHandler = () => {
        let updatedHp;
        let newHPBarWidth;

        if(hp === hpTotal){
            //    full health modal or sumn
            updatedHp = hpTotal;
        }else{
            updatedHp = hp + 10;
            newHPBarWidth = updatedHp / hpTotal * 100;
        }
        setHp(updatedHp);

        setHPIncreaseWidth(newHPBarWidth);

        setTimeout(function(){
            sethpBarWidth(newHPBarWidth);
        }, 500);
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

    const [hasUpdates, setHasUpdates] = useState(false);

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

    }, [hasUpdates]);

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
        renderTab =   <Party/>;
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
                <AvatarHeader hp={hp} hpTotal={hpTotal} hpBarWidth={hpBarWidth} hpHitWidth={hpHitWidth} HpIncreaseWidth={HpIncreaseWidth} xp={xp} xpTotal={xpTotal} xpBarWidth={xpBarWidth} xpIncreaseWidth={xpIncreaseWidth}
                              avatarCanvasRef={avatarCanvasRef} avatarClass={avatarClass} username={username} level={level} hasParty={hasParty} partyMembers={partyMembers}/>
                <div className="main-section">
                    {
                        tab == "tasks"
                        ?
                            <div className="container">
                                <p style={{color: "white"}}>TEST</p>
                                <button style={{margin: 10 + "px"}} className="btn btn-danger" onClick={hitHandler}>damage</button>
                                <button  style={{margin: 10 + "px"}} className="btn btn-success" onClick={healHandler}>heal</button>
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

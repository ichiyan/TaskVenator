import Button from "@restart/ui/esm/Button";
import {Link, React, useEffect, useState, useRef,
      AddPotionForm, AddOutfitForm, AddCardForm, ReactTooltip,axios, ShopTabs } from "../../../index";
import Swal from 'sweetalert2';
import WeaponFilter from "./WeaponFilter";
import OutfitFilter from "./OutfitFilter";

function Shop({setGems}){

    const [tab, setTab] = useState('all');

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


    useEffect(()=>{
        document.querySelector('.party-nav-item.party-active-nav').classList.remove('party-active-nav');
        document.getElementById(tab).classList.add('party-active-nav');
    }, [tab])

    useEffect(() => {

        axios.get(`api/get_user_info`).then(res => {
            var data = res.data;
            setAvatarClass(data.class);
            setItems(data.items);

            charClass.current = data.class;
            bgColor.current = data.background_color;
            isFemale.current = data.sex;
            skinTone.current = data.skin_tone;
            selections.current = data.items;

            console.log("SELECTIONS")
            console.log(selections.current)
            animate();
        });

     }, []);

    // const animate = () => {
    //     avatarCtx.current.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    //     avatarCtx.current.fillStyle = bgColor.current;
    //     avatarCtx.current.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    //     avatarCtx.current.drawImage(previewImage.current, frameX.current * spriteWidth, frameY.current * spriteHeight, spriteWidth, spriteHeight, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    //     selections.sort( (a, b) => (a.zPos > b.zPos) ? 1: -1 );
    //     selections.forEach(selection => {
    //         if ( selection.sex === "unisex" ){
    //             sex.current = isFemale.current ? "female" : "male";
    //         }else{
    //             sex.current = selection.sex;
    //         }
    //         if (sex.current === "none"){
    //             selection.image.src = selection.base_src + selection.img_name;
    //         }else{
    //             selection.image.src = selection.base_src + sex.current + "/" + selection.img_name;
    //         }
    //         avatarCtx.current.drawImage(selection.image, frameX.current * spriteWidth, frameY.current * spriteHeight, spriteWidth, spriteHeight, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    //     });
    //     if (frameX.current < cycles.current) frameX.current += 1;
    //     else frameX.current = 0 ;
    //     setTimeout(animate, 1000 / 8);
    // }

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

    const updatePreview = (item) => {

    }


    return(
        <section className="container shop-wrapper">

            <div className="shop-left">
                <div className="party-nav">
                    <div onClick={() => setTab('all')}  id='all' className="party-nav-item party-active-nav" ><Link to="">All</Link></div>
                    <div onClick={() => setTab('potions')} id='potions' className="party-nav-item" ><Link to="">Potions</Link></div>
                    <div onClick={() => setTab('weapons')} id='weapons'  className="party-nav-item" ><Link to="">Weapons</Link></div>
                    <div onClick={() => setTab('outfit')} id='outfit' className="party-nav-item" ><Link to="">Outfit</Link></div>
                </div>

                <ShopTabs tab={tab} setGems={setGems} updatePreview={updatePreview}></ShopTabs>
            </div>

            <section id="shop-avatar-preview shop-right">
                {/* <div id='char-cust-header'>
                    <div className="text-center"></div>
                </div> */}
                <div id="shop-preview-animations-box">
                    <canvas ref={avatarCanvasRef} id="previewAnimations"></canvas>
                </div>
            </section>



        </section>

    );
}

export default Shop;

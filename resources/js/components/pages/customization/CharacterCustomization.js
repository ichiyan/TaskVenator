import { React, $, useEffect, useState, useRef, Fragment, SelectionTab,
         FontAwesomeIcon, faSquareFull, faEye, faMale, faCut } from '../../../index';

const CharacterCustomization = () => {

    const [username, setUsername] = useState('');
    const [tab, setTab] = useState('general');

    const canvasRef = useRef();
    const ctx = useRef();
    const [CANVAS_WIDTH, setCanvasWidth] = useState(200);
    const [CANVAS_HEIGHT, setCanvasHeight] = useState(200);
    const previewImage = useRef();
    const hairStyleImg = useRef();
    const eyeColorImg = useRef();

    const baseDir = 'assets/images/spritesheets/';
    const spriteWidth = 64;         // 832px / 13 cols
    const spriteHeight = 64;        // 1344px / 21 rows
    const frameY = useRef(10);      // walking anim starts at the 11th row
    const frameX = useRef(0);       // starts at top left of frameY
    const cycles = useRef(8);       // walking anim has 9 cycles

    const SEL_CANVAS_SIZE = 64;

    const isFemale = useRef(false);
    const sex = useRef();
    const bgColor = useRef("white");
    var baseBodyColorDir;
    var hairStyle = "pixie";
    var hairColor = "ash";

    const [selected, setSelected] = useState([]);
    var selections = selected;

    //warrior default items
    var legArmorImg, chainmailImg, plateImg, armsImg, shoulderPlateImg, glovesImg, shoesArmorImg, shieldImg, slashWeaponImg, helmetImg;
    var warriorDefaultItems = {
        legArmor: legArmorImg,
        chainmail: chainmailImg,
        plate: plateImg,
        arms: armsImg,
        shoulderPlate: shoulderPlateImg,
        gloves: glovesImg,
        shoes: shoesArmorImg,
        shield: shieldImg,
        slashWeapon: slashWeaponImg,
        helmet: helmetImg,
    }

    //mage default items
    var legPantsImg, shoesImg, ivernessCloakImg, capeImg, scarfImg, weaponImg, hatImg;
    var mageDefaultItems = {
        legPants: legPantsImg,
        shoes: shoesImg,
        cloak: ivernessCloakImg,
        cape: capeImg,
        scarf: scarfImg,
        weapon: weaponImg,
        hat: hatImg,
    }

    //marksman default items
    var legPantsImg2, shoesImg2, shirtImg, armorImg, bauldronImg, hatLeatherImg, quiverImg, bowWeaponImg, ammoImg;
    var marksmanDefaultItems = {
        legPants: legPantsImg2,
        shoes: shoesImg2,
        shirt: shirtImg,
        armor: armorImg,
        bauldron: bauldronImg,
        hat: hatLeatherImg,
        quiver: quiverImg,
        weapon: bowWeaponImg,
        ammo: ammoImg,
    }

    useEffect( () => {
        document.querySelector('.tab-icon.selected').classList.remove('selected');
        document.getElementById(tab).classList.add('selected');
        setSelected(selections);
        if(tab === "hair"){
            var selectionPreviews = document.querySelectorAll(".selection-preview");
            selectionPreviews.forEach( preview => {
                preview.width = preview.height = SEL_CANVAS_SIZE;
                var selectionCtx = preview.getContext('2d');
                var selectionPrevImg = new Image();
                selectionPrevImg.src = baseDir + preview.dataset.image;
                console.log(selectionPrevImg)
                selectionPrevImg.onload = () => {
                    selectionCtx.drawImage(selectionPrevImg, frameX.current * spriteWidth, frameY.current * spriteHeight, spriteWidth, spriteHeight, -15, 0, SEL_CANVAS_SIZE * 1.5, SEL_CANVAS_SIZE * 1.5);
                }
            });
        }
    }, [tab]);

    useEffect(() => {
        var canvas = canvasRef.current;
        ctx.current = canvas.getContext('2d');
        canvas.width = canvas.height = 200;
        setCanvasWidth(200);
        setCanvasHeight(200);

        previewImage.current = new Image();
        previewImage.current.src = baseDir + 'body/male/human/light.png';

        hairStyleImg.current = new Image();
        eyeColorImg.current = new Image();

        animate();

    }, []);

    const animate = () => {
        ctx.current.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        ctx.current.fillStyle = bgColor.current;
        ctx.current.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        ctx.current.drawImage(previewImage.current, frameX.current * spriteWidth, frameY.current * spriteHeight, spriteWidth, spriteHeight, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        selections.sort( (a, b) => (a.zPos > b.zPos) ? 1: -1 );
        selections.forEach(selection => {
            if ( selection.sex === "unisex" ){
                sex.current = isFemale.current ? "female" : "male";
            }else{
                sex.current = selection.sex;
            }
            if (sex.current === "none"){
                selection.image.src = selection.base_src + selection.img_name;
            }else{
                selection.image.src = selection.base_src + sex.current + "/" + selection.img_name;
            }
            ctx.current.drawImage(selection.image, frameX.current * spriteWidth, frameY.current * spriteHeight, spriteWidth, spriteHeight, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        });
        if (frameX.current < cycles.current) frameX.current += 1;
        else frameX.current = 0 ;
        setTimeout(animate, 1000 / 8);
    }


    const inputHandler = (e) => {
        e.persist();
        setUsername(e.target.value);
    }

    const getBodyType = (e) => {
        e.preventDefault();
        var color, strArray;
        var id = e.currentTarget.id

        document.querySelector('.sex-option.selected').classList.remove('selected');
        document.getElementById(id).firstChild.classList.add('selected');

        if (baseBodyColorDir != null){
            strArray = baseBodyColorDir.split("/");
            color = strArray[strArray.length - 1];
        }else{
            color = "light.png";
        }
        if(id === "sex-female"){
            isFemale.current = true;
            previewImage.current.src = baseDir + 'body/female/human/' + color;
        }else if (id === "sex-male"){
            isFemale.current = false;
            previewImage.current.src = baseDir + 'body/male/human/' + color;
        }
    }

    const getBodyColor = (e) => {

        document.querySelector('.color-preview-box.selected').classList.remove('selected');
        document.getElementById(e.target.id).parentNode.classList.add('selected');

       var baseBodyDir = (isFemale.current === true) ? baseDir + 'body/female/human/' : baseDir + 'body/male/human/';
       baseBodyColorDir = previewImage.current.src = baseBodyDir + e.target.id + ".png";
    }

    const getEyeColor = (e) => {
        var eyeColor = e.target.id.slice(4);
        var ndx = selections.map( selection => selection.name).indexOf("eye color");
        if (ndx > -1){
            selections.splice(ndx, 1);
        }
        selections.push(
            {
                name: 'eye color',
                sex: "unisex",
                image: eyeColorImg.current,
                img_name: eyeColor + '.png',
                base_src: baseDir + 'eyes/',
                zPos: 20,
            }
        );
    }

    const getHairStyle = (e) => {
        var id = e.target.id;
        if(id.startsWith("hair-color")){
            hairColor = id.slice(11);
        }else{
            hairStyle = id;
        }
        var ndx = selections.map( selection => selection.name).indexOf("hair style");
        if (ndx > -1){
            selections.splice(ndx, 1);
        }
        selections.push(
            {
                name: 'hair style',
                sex: "unisex",
                image: hairStyleImg.current,
                img_name: hairColor + '.png',
                base_src: baseDir + 'hair/' + hairStyle + '/',
                zPos: 120,
            }
        );
    }

    const getClass = (e) => {

        console.log(e.target.id)

        var role = document.querySelector('.class-preview.selected');
        if(role != null){
            role.classList.remove('selected');
        }
        document.getElementById(e.target.id).classList.add('selected');

        if (e.target.id === "warrior"){

            frameY.current = 14;
            cycles.current = 5;

            for (var ndx = selections.length - 1; ndx >= 0; ndx--){
                if (selections[ndx].hasOwnProperty('class') && selections[ndx].class != "warrior"){
                    selections.splice(ndx, 1);
                }
            }

            Object.keys(warriorDefaultItems).forEach( key => {
                warriorDefaultItems[key] = new Image();
            });

            selections.push(
                {
                    class: 'warrior',
                    name: 'legArmor',
                    sex: "unisex",
                    image: warriorDefaultItems.legArmor,
                    img_name: '7.png',
                    base_src: baseDir + 'legs/armour/',
                    zPos: 20,
                },
                {
                    class: 'warrior',
                    name: 'chainmail',
                    sex: "unisex",
                    image: warriorDefaultItems.chainmail,
                    img_name: 'gray.png',
                    base_src: baseDir + 'torso/chainmail/',
                    zPos: 50,
                },
                {
                    class: 'warrior',
                    name: 'plate',
                    sex: "unisex",
                    image: warriorDefaultItems.plate,
                    img_name: '11.png',
                    base_src: baseDir + 'torso/armour/plate/',
                    zPos: 60,
                },
                {
                    class: 'warrior',
                    name: 'arms',
                    sex: "unisex",
                    image: warriorDefaultItems.arms,
                    img_name: '1.png',
                    base_src: baseDir + 'arms/',
                    zPos: 60,
                },
                {
                    class: 'warrior',
                    name: 'shoulderPlate',
                    sex: "unisex",
                    image: warriorDefaultItems.shoulderPlate,
                    img_name: '7.png',
                    base_src: baseDir + 'shoulders/plate/',
                    zPos: 60,
                },
                {
                    class: 'warrior',
                    name: 'gloves',
                    sex: "unisex",
                    image: warriorDefaultItems.gloves,
                    img_name: '1.png',
                    base_src: baseDir + 'gloves/',
                    zPos: 70,
                },
                {
                    class: 'warrior',
                    name: 'shoes',
                    sex: "unisex",
                    image: warriorDefaultItems.shoes,
                    img_name: '4.png',
                    base_src: baseDir + 'feet/armor/',
                    zPos: 15,
                },
                {
                    class: 'warrior',
                    name: 'shield',
                    sex: "unisex",
                    image: warriorDefaultItems.shield,
                    img_name: 'round_brown.png',
                    base_src: baseDir + 'shield/',
                    zPos: 110,
                },
                {
                    class: 'warrior',
                    name: 'slashWeapon',
                    sex: "unisex",
                    image: warriorDefaultItems.slashWeapon,
                    img_name: 'dagger.png',
                    base_src: baseDir + 'weapon/slash/',
                    zPos: 140,
                },
                {
                    class: 'warrior',
                    name: 'helmet',
                    sex: "unisex",
                    image: warriorDefaultItems.helmet,
                    img_name: 'norman.png',
                    base_src: baseDir + 'hat/helmet/',
                    zPos: 130,
                },
            );
        }else if (e.target.id === "mage" ){

            frameY.current = 2;
            cycles.current = 6;

            for (var ndx = selections.length - 1; ndx >= 0; ndx--){
                if (selections[ndx].hasOwnProperty('class') && selections[ndx].class != "mage"){
                    selections.splice(ndx, 1);
                }
            }

            Object.keys(mageDefaultItems).forEach( key => {
                mageDefaultItems[key] = new Image();
            });

            selections.push(
                {
                    class: 'mage',
                    name: 'legPants',
                    sex: "unisex",
                    image: mageDefaultItems.legPants,
                    img_name: 'navy.png',
                    base_src: baseDir + 'legs/pants/',
                    zPos: 20,
                },
                {
                    class: 'mage',
                    name: 'shoes',
                    sex: "unisex",
                    image: mageDefaultItems.shoes,
                    img_name: 'black.png',
                    base_src: baseDir + 'feet/shoes/',
                    zPos: 15,
                },
                {
                    class: 'mage',
                    name: 'cloak',
                    sex: "male",
                    image: mageDefaultItems.cloak,
                    img_name: 'black.png',
                    base_src: baseDir + 'torso/jacket/iverness/',
                    zPos: 55,
                },
                {
                    class: 'mage',
                    name: 'cape',
                    sex: "unisex",
                    image: mageDefaultItems.cape,
                    img_name: 'black.png',
                    base_src: baseDir + 'cape/solid/',
                    zPos: 85,
                },
                {
                    class: 'mage',
                    name: 'scarf',
                    sex: "none",
                    image: mageDefaultItems.scarf,
                    img_name: 'blue.png',
                    base_src: baseDir + 'neck/scarf/',
                    zPos: 90,
                },
                {
                    class: 'mage',
                    name: 'hat',
                    sex: "unisex",
                    image: mageDefaultItems.hat,
                    img_name: 'black.png',
                    base_src: baseDir + 'hat/magic/',
                    zPos: 130,
                },
                {
                    class: 'mage',
                    name: 'weapon',
                    sex: "unisex",
                    image: mageDefaultItems.weapon,
                    img_name: 'simple_staff.png',
                    base_src: baseDir + 'weapon/thrust/',
                    zPos: 140,
                },
            );
        }else if (e.target.id === "marksman"){

            frameY.current = 18;
            cycles.current = 12;

            for (var ndx = selections.length - 1; ndx >= 0; ndx--){
                if (selections[ndx].hasOwnProperty('class') && selections[ndx].class != "marksman"){
                    selections.splice(ndx, 1);
                }
            }

            Object.keys(marksmanDefaultItems).forEach( key => {
                marksmanDefaultItems[key] = new Image();
            });

            selections.push(
                {
                    class: 'marksman',
                    name: 'legPants',
                    sex: "unisex",
                    image: marksmanDefaultItems.legPants,
                    img_name: 'green.png',
                    base_src: baseDir + 'legs/pants/',
                    zPos: 20,
                },
                {
                    class: 'marksman',
                    name: 'shoes',
                    sex: "unisex",
                    image: marksmanDefaultItems.shoes,
                    img_name: 'black.png',
                    base_src: baseDir + 'feet/shoes/',
                    zPos: 15,
                },
                {
                    class: 'marksman',
                    name: 'shirt',
                    sex: "unisex",
                    image: marksmanDefaultItems.shirt,
                    img_name: 'green.png',
                    base_src: baseDir + 'torso/clothes/longsleeve/',
                    zPos: 35,
                },
                {
                    class: 'marksman',
                    name: 'armor',
                    sex: "unisex",
                    image: marksmanDefaultItems.armor,
                    img_name: 'brown.png',
                    base_src: baseDir + 'torso/armour/leather/',
                    zPos: 60,
                },
                 {
                    class: 'marksman',
                    name: 'bauldron',
                    sex: "unisex",
                    image: marksmanDefaultItems.bauldron,
                    img_name: 'brown.png',
                    base_src: baseDir + 'bauldron/',
                    zPos: 65,
                },
                {
                    class: 'marksman',
                    name: 'quiver',
                    sex: "none",
                    image: marksmanDefaultItems.quiver,
                    img_name: 'quiver.png',
                    base_src: baseDir + 'quiver/',
                    zPos: 100,
                },
                {
                    class: 'marksman',
                    name: 'hat',
                    sex: "unisex",
                    image: marksmanDefaultItems.hat,
                    img_name: 'leather.png',
                    base_src: baseDir + 'hat/cloth/',
                    zPos: 130,
                },
                {
                    class: 'marksman',
                    name: 'weapon',
                    sex: "none",
                    image: marksmanDefaultItems.weapon,
                    img_name: 'normal.png',
                    base_src: baseDir + 'weapon/bow/',
                    zPos: 140,
                },
                {
                    class: 'marksman',
                    name: 'ammo',
                    sex: "none",
                    image: marksmanDefaultItems.ammo,
                    img_name: 'arrow.png',
                    base_src: baseDir + 'ammo/',
                    zPos: 150,
                },
            );
        }
        console.log(selections)
    }

    const getBackgroundColor = (e) => {
        bgColor.current = e.target.id.slice(9);
    }

    const submitHandler = () => {

    }

    const test = (e) => {
        e.preventDefault()
        console.log("selected")
        console.log(selected)
    }

    return (
        <Fragment>
             <form>
            <div className='container wrapper'>
                <section id="preview">
                    <div id='char-cust-header'>
                        <div className="text-center">Character Creation</div>
                    </div>
                    <div id="previewAnimationsBox">
                        <canvas ref={canvasRef} id="previewAnimations"></canvas>
                    </div>
                    <center>
                        <input type="submit" name="submit" id="submit" className="btn-custom-primary" value="Create Character"/>
                        <button onClick={test}>test</button>
                    </center>
                </section>
                <div className="container char-customization">
                    <div>
                        <div className='tabs-wrapper'>
                           <center>
                               <div className='tabs'>
                                    <span onClick={() => setTab('general')} className='fa-stack icon-stack'>
                                            <FontAwesomeIcon icon={faSquareFull}  className='fa-stack-2x tab-square'></FontAwesomeIcon>
                                            <FontAwesomeIcon icon={faMale} id='general' className='fa-stack-1x selected tab-icon'></FontAwesomeIcon>
                                    </span>
                                    <span onClick={() => setTab('eye')} className='fa-stack icon-stack'>
                                            <FontAwesomeIcon icon={faSquareFull}  className='fa-stack-2x tab-square'></FontAwesomeIcon>
                                            <FontAwesomeIcon icon={faEye} id='eye' className='fa-stack-1x tab-icon'></FontAwesomeIcon>
                                    </span>
                                    <span onClick={() => setTab('hair')} className='fa-stack icon-stack'>
                                            <FontAwesomeIcon icon={faSquareFull}  className='fa-stack-2x tab-square'></FontAwesomeIcon>
                                            <FontAwesomeIcon icon={faCut} id='hair' className='fa-stack-1x tab-icon'></FontAwesomeIcon>
                                    </span>
                               </div>
                           </center>
                        </div>

                        <SelectionTab tab={tab} username={username} inputHandler={inputHandler} getClass={getClass} getBodyType={getBodyType} getBodyColor={getBodyColor} getEyeColor={getEyeColor} getHairStyle={getHairStyle} getBackgroundColor={getBackgroundColor}></SelectionTab>

                    </div>
                </div>
            </div>
            </form>
       </Fragment>
    );
}

export default CharacterCustomization;

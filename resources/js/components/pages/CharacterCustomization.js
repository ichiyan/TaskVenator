import { React, $, useEffect, useState, useRef } from '../../index';

const CharacterCustomization = () => {

    var canvas, ctx, CANVAS_WIDTH, CANVAS_HEIGHT, previewImage;
    const baseDir = 'assets/images/spritesheets/';
    const spriteWidth = 64;     // 832px / 13 cols
    const spriteHeight = 64;    // 1344px / 21 rows
    var frameY = 10;            // walking anim starts at the 11th row
    var frameX = 0;             // starts at top left of frameY
    var cycles = 8;             // walking anim has 9 cycles

    var isFemale = false;
    var sex;
    var baseBodyColorDir;
    var eyeColorImg;
    var hairStyleImg;
    var hairStyle = "pixie";
    var hairColor = "ash";

    // var items = [];
    var selections = [];

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


    useEffect(() => {

        canvas = $("#previewAnimations").get(0);
        ctx = canvas.getContext('2d');
        CANVAS_WIDTH = canvas.width = 200;
        CANVAS_HEIGHT = canvas.height = 200;

        previewImage = new Image();
        previewImage.src = baseDir + 'body/male/human/light.png';

        animate();

        var SEL_CANVAS_SIZE = 64;

        var selectionPreviews = document.querySelectorAll(".selection-preview");
        selectionPreviews.forEach( preview => {
            preview.width = preview.height = SEL_CANVAS_SIZE;
            var selectionCtx = preview.getContext('2d');
            var selectionPrevImg = new Image();
            selectionPrevImg.src = baseDir + preview.dataset.image;
            selectionPrevImg.onload = () => {
                selectionCtx.drawImage(selectionPrevImg, frameX * spriteWidth, frameY * spriteHeight, spriteWidth, spriteHeight, -15, 0, SEL_CANVAS_SIZE * 1.5, SEL_CANVAS_SIZE * 1.5);
            }
        });

    }, []);

    const animate = () => {
        ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        ctx.drawImage(previewImage, frameX * spriteWidth, frameY * spriteHeight, spriteWidth, spriteHeight, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        selections.sort( (a, b) => (a.zPos > b.zPos) ? 1: -1 );
        selections.forEach(selection => {
            if ( selection.sex === "unisex" ){
                sex = isFemale ? "female" : "male";
            }else{
                sex = selection.sex;
            }
            if (sex === "none"){
                selection.image.src = selection.base_src + selection.img_name;
            }else{
                selection.image.src = selection.base_src + sex + "/" + selection.img_name;
            }
            ctx.drawImage(selection.image, frameX * spriteWidth, frameY * spriteHeight, spriteWidth, spriteHeight, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        });
        if (frameX < cycles) frameX++;
        else frameX = 0;
        setTimeout(animate, 1000 / 8);
    }

    const toggleDisplay = (e) => {
        if(e.target.nodeName === "SPAN"){
            $(e.target).toggleClass("condensed").toggleClass("expanded");
            var $ul = $(e.target).siblings("ul");
            $ul.toggle('slow').promise().done();
            e.stopPropagation();
        }
    }

    const getBodyType = (e) => {
        var color, strArray;
        if (baseBodyColorDir != null){
            strArray = baseBodyColorDir.split("/");
            color = strArray[strArray.length - 1];
        }else{
            color = "light.png";
        }
        if(e.target.id === "sex-female"){
            isFemale = true;
            previewImage.src = baseDir + 'body/female/human/' + color;
        }else if (e.target.id === "sex-male"){
            isFemale = false;
            previewImage.src = baseDir + 'body/male/human/' + color;
        }

    }

    const getBodyColor = (e) => {
       var baseBodyDir = (isFemale === true) ? baseDir + 'body/female/human/' : baseDir + 'body/male/human/';
       baseBodyColorDir = previewImage.src = baseBodyDir + e.target.id + ".png";
    }

    const getEyeColor = (e) => {
        var eyeColor = e.target.id.slice(4);
        eyeColorImg = new Image();
        var ndx = selections.map( selection => selection.name).indexOf("eye color");
        if (ndx > -1){
            selections.splice(ndx, 1);
        }
        selections.push(
            {
                name: 'eye color',
                sex: "unisex",
                image: eyeColorImg,
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
        hairStyleImg = new Image();
        var ndx = selections.map( selection => selection.name).indexOf("hair style");
        if (ndx > -1){
            selections.splice(ndx, 1);
        }
        selections.push(
            {
                name: 'hair style',
                sex: "unisex",
                image: hairStyleImg,
                img_name: hairColor + '.png',
                base_src: baseDir + 'hair/' + hairStyle + '/',
                zPos: 120,
            }
        );
    }

    const getClass = (e) => {

        if (e.target.id === "warrior"){

            frameY = 14;
            cycles = 5;

            for (var ndx = selections.length - 1; ndx >= 0; ndx--){
                if (selections[ndx].hasOwnProperty('class') && selections[ndx].class != "warrior"){
                    selections.splice(ndx, 1);
                }
            }

            Object.keys(warriorDefaultItems).forEach( key => {
                warriorDefaultItems[key] = new Image();
            });

            // to do: add z-pos property and sort array
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

            frameY = 2;
            cycles = 6;

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

            frameY = 18;
            cycles = 12;

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

    return (
       <div className="container char-customization">
            <div className="card char-cust-card">
                <h3 className="text-center">Character Customization</h3>
                <section id="preview">
                    <div id="previewAnimationsBox">
                        <canvas id="previewAnimations"></canvas>
                    </div>
                </section>
                <section id="chooser">
                    <ul>
                        <li onClick={toggleDisplay}>
                            {/* Class */}
                            <span className="condensed">Class</span>
                            <ul className="ul-block">
                                <li className="noPreview">
                                    <input onChange={getClass}  type="radio" id="warrior" name="class"/>
                                    <label htmlFor="class-warrior">Warrior</label>
                                </li>
                                <li className="noPreview">
                                    <input onChange={getClass}  type="radio" id="mage" name="class"/>
                                    <label htmlFor="class-mage">Mage</label>
                                </li>
                                <li className="noPreview">
                                    <input onChange={getClass}  type="radio" id="marksman" name="class"/>
                                    <label htmlFor="class-marksman">Marksman</label>
                                </li>
                            </ul>
                        </li>
                        <li onClick={toggleDisplay}>
                            {/* Sex */}
                            <span className="condensed">Body Type</span>
                            <ul className="ul-block">
                                <li className="noPreview">
                                    <input onChange={getBodyType}  type="radio" id="sex-male" name="sex" defaultChecked/>
                                    <label htmlFor="sex-male">Male</label>
                                </li>
                                <li className="noPreview">
                                    <input onChange={getBodyType} type="radio" id="sex-female" name="sex"/>
                                    <label htmlFor="sex-female">Female</label>
                                </li>
                            </ul>
                        </li>
                        <li onClick={toggleDisplay}>
                            {/* Body Color */}
                            <span className="condensed">Body Color</span>
                            <ul className="ul-block">
                                <li className="noPreview">
                                    <input onChange={getBodyColor}  type="radio" id="white" name="body-color"/>
                                    <label htmlFor="color">White</label>
                                </li>
                                <li className="noPreview">
                                    <input onChange={getBodyColor} type="radio" id="black" name="body-color"/>
                                    <label htmlFor="color">Black</label>
                                </li>
                                <li className="noPreview">
                                    <input onChange={getBodyColor} type="radio" id="olive" name="body-color"/>
                                    <label htmlFor="color">Olive</label>
                                </li>
                                <li className="noPreview">
                                    <input onChange={getBodyColor} type="radio" id="brown" name="body-color"/>
                                    <label htmlFor="color">Brown</label>
                                </li>
                                <li className="noPreview">
                                    <input onChange={getBodyColor} type="radio" id="peach" name="body-color"/>
                                    <label htmlFor="color">Peach</label>
                                </li>
                                <li className="noPreview">
                                    <input onChange={getBodyColor} type="radio" id="light" name="body-color"/>
                                    <label htmlFor="color">Light</label>
                                </li>
                                <li className="noPreview">
                                    <input onChange={getBodyColor} type="radio" id="dark" name="body-color"/>
                                    <label htmlFor="color">Dark</label>
                                </li>
                                <li className="noPreview">
                                    <input onChange={getBodyColor} type="radio" id="dark_2" name="body-color"/>
                                    <label htmlFor="color">Dark 2</label>
                                </li>
                                <li className="noPreview">
                                    <input onChange={getBodyColor} type="radio" id="tanned" name="body-color"/>
                                    <label htmlFor="color">Tanned</label>
                                </li>
                                <li className="noPreview">
                                    <input onChange={getBodyColor} type="radio" id="tanned_2" name="body-color"/>
                                    <label htmlFor="color">Tanned 2</label>
                                </li>
                                <li className="noPreview">
                                    <input onChange={getBodyColor} type="radio" id="darkelf" name="body-color"/>
                                    <label htmlFor="color">Dark Elf</label>
                                </li>
                                <li className="noPreview">
                                    <input onChange={getBodyColor} type="radio" id="darkelf_2" name="body-color"/>
                                    <label htmlFor="color">Dark Elf 2</label>
                                </li>
                                <li className="noPreview">
                                    <input onChange={getBodyColor} type="radio" id="zombie" name="body-color"/>
                                    <label htmlFor="color">Zombie</label>
                                </li>
                            </ul>
                        </li>
                        <li onClick={toggleDisplay}>
                            {/* Eye Color */}
                            <span className="condensed">Eye Color</span>
                            <ul className="ul-block">
                                <li className="noPreview">
                                    <input onChange={getEyeColor}  type="radio" id="eye-blue" name="eye-color"/>
                                    <label htmlFor="eye-color">Blue</label>
                                </li>
                                <li className="noPreview">
                                    <input onChange={getEyeColor} type="radio" id="eye-brown" name="eye-color"/>
                                    <label htmlFor="eye-color">Brown</label>
                                </li>
                                <li className="noPreview">
                                    <input onChange={getEyeColor} type="radio" id="eye-gray" name="eye-color"/>
                                    <label htmlFor="eye-color">Gray</label>
                                </li>
                                <li className="noPreview">
                                    <input onChange={getEyeColor} type="radio" id="eye-green" name="eye-color"/>
                                    <label htmlFor="eye-color">Green</label>
                                </li>
                                <li className="noPreview">
                                    <input onChange={getEyeColor} type="radio" id="eye-purple" name="eye-color"/>
                                    <label htmlFor="eye-color">Purple</label>
                                </li>
                                <li className="noPreview">
                                    <input onChange={getEyeColor} type="radio" id="eye-red" name="eye-color"/>
                                    <label htmlFor="eye-color">Red</label>
                                </li>
                            </ul>
                        </li>
                        <li onClick={toggleDisplay}>
                            {/* Hair Style */}
                            <span className="condensed">Hair Style</span>
                            <ul className="ul-block ul-hasPreview">
                                <div className="selections">
                                    <li className="hasPreview">
                                        <center>
                                            <canvas className='selection-preview' data-image='hair/dreadlocks_short/male/ash.png'></canvas>
                                        </center>
                                        <input onChange={getHairStyle}  type="radio" id="dreadlocks_short" name="hair-style"/>
                                        <label htmlFor="hair-style">Dreadlocks</label>
                                    </li>
                                    <li className="hasPreview">
                                        <center>
                                            <canvas className='selection-preview' data-image='hair/shorthawk/male/ash.png'></canvas>
                                        </center>
                                        <input onChange={getHairStyle} type="radio" id="shorthawk" name="hair-style"/>
                                        <label htmlFor="hair-style">Shorthawk</label>
                                    </li>
                                    <li className="hasPreview">
                                        <center>
                                            <canvas className='selection-preview' data-image='hair/curtains/male/ash.png'></canvas>
                                        </center>
                                        <input onChange={getHairStyle} type="radio" id="curtains" name="hair-style"/>
                                        <label htmlFor="hair-style">Curtains</label>
                                    </li>
                                    <li className="hasPreview">
                                        <center>
                                            <canvas className='selection-preview' data-image='hair/idol/male/ash.png'></canvas>
                                        </center>
                                        <input onChange={getHairStyle} type="radio" id="idol" name="hair-style"/>
                                        <label htmlFor="hair-style">Idol</label>
                                    </li>
                                    <li className="hasPreview">
                                        <center>
                                            <canvas className='selection-preview' data-image='hair/pixie/male/ash.png'></canvas>
                                        </center>
                                        <input onChange={getHairStyle} type="radio" id="pixie" name="hair-style"/>
                                        <label htmlFor="hair-style">Pixie</label>
                                    </li>
                                    <li className="hasPreview">
                                        <center>
                                            <canvas className='selection-preview' data-image='hair/cowlick/male/ash.png'></canvas>
                                        </center>
                                        <input onChange={getHairStyle} type="radio" id="cowlick" name="hair-style"/>
                                        <label htmlFor="hair-style">Cowlick</label>
                                    </li>
                                    <li className="hasPreview">
                                        <center>
                                            <canvas className='selection-preview' data-image='hair/spiked_liberty/male/ash.png'></canvas>
                                        </center>
                                        <input onChange={getHairStyle} type="radio" id="spiked_liberty" name="hair-style"/>
                                        <label htmlFor="hair-style">Spiked Liberty</label>
                                    </li>
                                    <li className="hasPreview">
                                        <center>
                                            <canvas className='selection-preview' data-image='hair/spiked_beehive/male/ash.png'></canvas>
                                        </center>
                                        <input onChange={getHairStyle} type="radio" id="spiked_beehive" name="hair-style"/>
                                        <label htmlFor="hair-style">Spiked Beehive</label>
                                    </li>
                                    <li className="hasPreview">
                                        <center>
                                            <canvas className='selection-preview' data-image='hair/halfmessy/male/ash.png'></canvas>
                                        </center>
                                        <input onChange={getHairStyle} type="radio" id="halfmessy" name="hair-style"/>
                                        <label htmlFor="hair-style">Half Messy</label>
                                    </li>
                                    <li className="hasPreview">
                                        <center>
                                            <canvas className='selection-preview' data-image='hair/pigtails/male/ash.png'></canvas>
                                        </center>
                                        <input onChange={getHairStyle} type="radio" id="pigtails" name="hair-style"/>
                                        <label htmlFor="hair-style">Pigtails</label>
                                    </li>
                                    <li className="hasPreview">
                                        <center>
                                            <canvas className='selection-preview' data-image='hair/ponytail2/male/ash.png'></canvas>
                                        </center>
                                        <input onChange={getHairStyle} type="radio" id="ponytail2" name="hair-style"/>
                                        <label htmlFor="hair-style">Ponytail</label>
                                    </li>
                                    <li className="hasPreview">
                                        <center>
                                            <canvas className='selection-preview' data-image='hair/braid/male/ash.png'></canvas>
                                        </center>
                                        <input onChange={getHairStyle} type="radio" id="braid" name="hair-style"/>
                                        <label htmlFor="hair-style">Braid</label>
                                    </li>
                                    <li className="hasPreview">
                                        <center>
                                            <canvas className='selection-preview' data-image='hair/bangslong2/male/ash.png'></canvas>
                                        </center>
                                        <input onChange={getHairStyle} type="radio" id="bangslong2" name="hair-style"/>
                                        <label htmlFor="hair-style">Long with Bangs</label>
                                    </li>
                                    <li className="hasPreview">
                                        <center>
                                            <canvas className='selection-preview' data-image='hair/long_messy2/male/ash.png'></canvas>
                                        </center>
                                        <input onChange={getHairStyle} type="radio" id="long_messy2" name="hair-style"/>
                                        <label htmlFor="hair-style">Long Messy</label>
                                    </li>
                                    <li className="hasPreview">
                                        <center>
                                            <canvas className='selection-preview' data-image='hair/princess/male/ash.png'></canvas>
                                        </center>
                                        <input onChange={getHairStyle} type="radio" id="princess" name="hair-style"/>
                                        <label htmlFor="hair-style">Princess</label>
                                    </li>
                                    <li className="hasPreview">
                                        <center>
                                            <canvas className='selection-preview' data-image='hair/xlong/male/ash.png'></canvas>
                                        </center>
                                        <input onChange={getHairStyle} type="radio" id="xlong" name="hair-style"/>
                                        <label htmlFor="hair-style">Extra Long</label>
                                    </li>
                                </div>
                            </ul>
                        </li>
                        <li onClick={toggleDisplay}>
                            {/* Hair Color */}
                            <span className="condensed">Hair Color</span>
                            <ul className="ul-block">
                                <li className="noPreview">
                                    <input onChange={getHairStyle}  type="radio" id="hair-color-ash" name="hair-color"/>
                                    <div className='color-preview'style={{ backgroundColor: '#c18f8a'}}></div>
                                    <label htmlFor="hair-color">Ash</label>
                                </li>
                                <li className="noPreview">
                                    <input onChange={getHairStyle} type="radio" id="hair-color-blonde" name="hair-color"/>
                                    <div className='color-preview' style={{ backgroundColor: '#f5c34b'}}></div>
                                    <label htmlFor="hair-color">Blonde</label>
                                </li>
                                <li className="noPreview">
                                    <input onChange={getHairStyle}  type="radio" id="hair-color-platinum" name="hair-color"/>
                                    <div className='color-preview' style={{ backgroundColor: '#d9c88c'}}></div>
                                    <label htmlFor="hair-color">Platinum</label>
                                </li>
                                <li className="noPreview">
                                    <input onChange={getHairStyle}  type="radio" id="hair-color-strawberry" name="hair-color"/>
                                    <div className='color-preview' style={{ backgroundColor: '#f89b0e'}}></div>
                                    <label htmlFor="hair-color">Strawberry</label>
                                </li>
                                <li className="noPreview">
                                    <input onChange={getHairStyle}  type="radio" id="hair-color-redhead" name="hair-color"/>
                                    <div className='color-preview' style={{ backgroundColor: '#9e1f1f'}}></div>
                                    <label htmlFor="hair-color">Redhead</label>
                                </li>
                                <li className="noPreview">
                                    <input onChange={getHairStyle}  type="radio" id="hair-color-carrot" name="hair-color"/>
                                    <div className='color-preview'style={{ backgroundColor: '#ec673e'}}></div>
                                    <label htmlFor="hair-color">Carrot</label>
                                </li>
                                <li className="noPreview">
                                    <input onChange={getHairStyle}  type="radio" id="hair-color-chestnut" name="hair-color"/>
                                    <div className='color-preview' style={{ backgroundColor: '#511b03'}}></div>
                                    <label htmlFor="hair-color">Chestnut</label>
                                </li>
                                <li className="noPreview">
                                    <input onChange={getHairStyle}  type="radio" id="hair-color-raven" name="hair-color"/>
                                    <div className='color-preview' style={{ backgroundColor: '#0b3244'}}></div>
                                    <label htmlFor="hair-color">Raven</label>
                                </li>
                                <li className="noPreview">
                                    <input onChange={getHairStyle}  type="radio" id="hair-color-gray" name="hair-color"/>
                                    <div className='color-preview' style={{ backgroundColor: '#777777'}}></div>
                                    <label htmlFor="hair-color">Gray</label>
                                </li>
                                <li className="noPreview">
                                    <input onChange={getHairStyle}  type="radio" id="hair-color-white" name="hair-color"/>
                                    <div className='color-preview' style={{ backgroundColor: '#e2e5e5'}}></div>
                                    <label htmlFor="hair-color">White</label>
                                </li>
                                <li className="noPreview">
                                    <input onChange={getHairStyle}  type="radio" id="hair-color-blue" name="hair-color"/>
                                    <div className='color-preview' style={{ backgroundColor: '#0041b4'}}></div>
                                    <label htmlFor="hair-color">Blue</label>
                                </li>
                                <li className="noPreview">
                                    <input onChange={getHairStyle}  type="radio" id="hair-color-purple" name="hair-color"/>
                                    <div className='color-preview' style={{ backgroundColor: '#7141b2'}}></div>
                                    <label htmlFor="hair-color">Purple</label>
                                </li>
                                <li className="noPreview">
                                    <input onChange={getHairStyle}  type="radio" id="hair-color-green" name="hair-color"/>
                                    <div className='color-preview' style={{ backgroundColor: '#006900'}}></div>
                                    <label htmlFor="hair-color">Green</label>
                                </li>
                                <li className="noPreview">
                                    <input onChange={getHairStyle}  type="radio" id="hair-color-pink" name="hair-color"/>
                                    <div className='color-preview' style={{ backgroundColor: '#e941aa'}}></div>
                                    <label htmlFor="hair-color">Pink</label>
                                </li>
                                <li className="noPreview">
                                    <input onChange={getHairStyle}  type="radio" id="hair-color-rose" name="hair-color"/>
                                    <div className='color-preview' style={{ backgroundColor: '#cc789d'}}></div>
                                    <label htmlFor="hair-color">Rose</label>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </section>
            </div>
       </div>
    );
}

export default CharacterCustomization;

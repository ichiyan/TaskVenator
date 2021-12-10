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
    var classType;
    var items = [];

    //warrior default items
    var legArmorImg, chainmailImg, plateImg, armsImg, shoulderPlateImg, glovesImg, shoesArmorImg, shieldImg, slashWeaponImg;
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
    }

    //mage default items
    var legPantsImg, shoesImg, ivernessCloakImg, capeImg, scarfImg, weaponImg;
    var mageDefaultItems = {
        legPants: legPantsImg,
        shoes: shoesImg,
        cloak: ivernessCloakImg,
        cape: capeImg,
        scarf: scarfImg,
        weapon: weaponImg,
    }


    useEffect(() => {

        canvas = $("#previewAnimations").get(0);
        ctx = canvas.getContext('2d');
        CANVAS_WIDTH = canvas.width = 200;
        CANVAS_HEIGHT = canvas.height = 200;

        previewImage = new Image();
        console.log("prevImg")
        console.log(previewImage)
        previewImage.src = baseDir + 'body/male/human/light.png';

        animate();

    }, []);

    const animate = () => {
        ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        ctx.drawImage(previewImage, frameX * spriteWidth, frameY * spriteHeight, spriteWidth, spriteHeight, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        items.forEach(item => {
            if ( item.sex === "unisex" ){
                sex = isFemale ? "female" : "male";
            }else{
                sex = item.sex;
            }
            if (sex === "none"){
                item.image.src = item.base_src + item.img_name;
            }else{
                item.image.src = item.base_src + sex + "/" + item.img_name;
            }
            ctx.drawImage(item.image, frameX * spriteWidth, frameY * spriteHeight, spriteWidth, spriteHeight, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
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

    const getClass = (e) => {

        if (e.target.id === "warrior"){

            items.length = 0;

            classType = "warrior";
            frameY = 14;
            cycles = 5;

            Object.keys(warriorDefaultItems).forEach( key => {
                warriorDefaultItems[key] = new Image();
            });

            // to do: add z-pos property and sort array
            items.push(
                {
                    class: 'warrior',
                    name: 'legArmor',
                    sex: "unisex",
                    image: warriorDefaultItems.legArmor,
                    img_name: '7.png',
                    base_src: baseDir + 'legs/armour/',
                },
                {
                    class: 'warrior',
                    name: 'chainmail',
                    sex: "unisex",
                    image: warriorDefaultItems.chainmail,
                    img_name: 'gray.png',
                    base_src: baseDir + 'torso/chainmail/',
                },
                {
                    class: 'warrior',
                    name: 'plate',
                    sex: "unisex",
                    image: warriorDefaultItems.plate,
                    img_name: '11.png',
                    base_src: baseDir + 'torso/armour/plate/',
                },
                {
                    class: 'warrior',
                    name: 'arms',
                    sex: "unisex",
                    image: warriorDefaultItems.arms,
                    img_name: '1.png',
                    base_src: baseDir + 'arms/',
                },
                {
                    class: 'warrior',
                    name: 'shoulderPlate',
                    sex: "unisex",
                    image: warriorDefaultItems.shoulderPlate,
                    img_name: '7.png',
                    base_src: baseDir + 'shoulders/plate/',
                },
                {
                    class: 'warrior',
                    name: 'gloves',
                    sex: "unisex",
                    image: warriorDefaultItems.gloves,
                    img_name: '1.png',
                    base_src: baseDir + 'gloves/',
                },
                {
                    class: 'warrior',
                    name: 'shoes',
                    sex: "unisex",
                    image: warriorDefaultItems.shoes,
                    img_name: '4.png',
                    base_src: baseDir + 'feet/armor/',
                },
                {
                    class: 'warrior',
                    name: 'shield',
                    sex: "unisex",
                    image: warriorDefaultItems.shield,
                    img_name: 'round_brown.png',
                    base_src: baseDir + 'shield/',
                },
                {
                    class: 'warrior',
                    name: 'slashWeapon',
                    sex: "unisex",
                    image: warriorDefaultItems.slashWeapon,
                    img_name: 'dagger.png',
                    base_src: baseDir + 'weapon/slash/',
                },
            );
        }else if (e.target.id === "mage" ){

            items.length = 0;

            classType = "mage";
            frameY = 2;
            cycles = 6;

            Object.keys(mageDefaultItems).forEach( key => {
                mageDefaultItems[key] = new Image();
            });

            items.push(
                {
                    class: 'mage',
                    name: 'legPants',
                    sex: "unisex",
                    image: mageDefaultItems.legPants,
                    img_name: 'navy.png',
                    base_src: baseDir + 'legs/pants/',
                },
                {
                    class: 'mage',
                    name: 'shoes',
                    sex: "unisex",
                    image: mageDefaultItems.shoes,
                    img_name: 'black.png',
                    base_src: baseDir + 'feet/shoes/',
                },
                {
                    class: 'mage',
                    name: 'cloak',
                    sex: "male",
                    image: mageDefaultItems.cloak,
                    img_name: 'black.png',
                    base_src: baseDir + 'torso/jacket/iverness/',
                },
                {
                    class: 'mage',
                    name: 'cape',
                    sex: "unisex",
                    image: mageDefaultItems.cape,
                    img_name: 'black.png',
                    base_src: baseDir + 'cape/solid/',
                },
                {
                    class: 'mage',
                    name: 'scarf',
                    sex: "none",
                    image: mageDefaultItems.scarf,
                    img_name: 'blue.png',
                    base_src: baseDir + 'neck/scarf/',
                },
                {
                    class: 'mage',
                    name: 'weapon',
                    sex: "unisex",
                    image: mageDefaultItems.weapon,
                    img_name: 'simple_staff.png',
                    base_src: baseDir + 'weapon/thrust/',
                },
            );
        }
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
                            {/* Sex */}
                            <span className="expanded">Body Type</span>
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
                            <span className="expanded">Body Color</span>
                            <ul className="ul-block">
                                <li className="noPreview">
                                    <input onChange={getBodyColor}  type="radio" id="white" name="body-color" defaultChecked/>
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
                            {/* Class */}
                            <span className="expanded">Class</span>
                            <ul className="ul-block">
                                <li className="noPreview">
                                    <input onChange={getClass}  type="radio" id="warrior" name="class"/>
                                    <label htmlFor="class-warrior">Warrior</label>
                                </li>
                                <li className="noPreview">
                                    <input onChange={getClass}  type="radio" id="mage" name="class"/>
                                    <label htmlFor="class-mage">Mage</label>
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

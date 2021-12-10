import { React, $, useEffect, useState, useRef } from '../../index';

const CharacterCustomization = () => {

    const [bodyType, setBodyType] = useState("male");
    const [checkedOptions, setCheckedOptions] = useState([]);

    var canvas, ctx, CANVAS_WIDTH, CANVAS_HEIGHT, previewImage;
    const baseDir = 'assets/images/spritesheets/';
    const spriteWidth = 64;     // 832px / 13 cols
    const spriteHeight = 64;   // 1344px / 21 rows
    var frameY = 10;        // walking animation starts at the 11th row
    var frameX = 0;
    // var gameFrame = 0;
    // const staggerFrames = 8;


    useEffect(() => {

        canvas = $("#previewAnimations").get(0);
        ctx = canvas.getContext('2d');
        CANVAS_WIDTH = canvas.width = 250;
        CANVAS_HEIGHT = canvas.height = 250;

        previewImage = new Image();
        previewImage.src = baseDir + 'body/male/human/light.png';

        animate();

    }, []);

    const animate = () => {
        ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        ctx.drawImage(previewImage, frameX * spriteWidth, frameY * spriteHeight, spriteWidth, spriteHeight, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        // if (gameFrame % staggerFrames === 0){
            if (frameX < 8) frameX++;
            else frameX = 0;
        // }
        // gameFrame++;
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
        if(e.target.id === "sex-female"){
            console.log("female")
            previewImage.src = baseDir + 'body/female/human/light.png';
        }else if (e.target.id === "sex-male"){
            console.log("male")
            previewImage.src = baseDir + 'body/male/human/light.png';
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
                    </ul>
                </section>
                {/* <canvas id="spritesheet" width="832" height="1344"></canvas> */}
            </div>
       </div>
    );
}

export default CharacterCustomization;

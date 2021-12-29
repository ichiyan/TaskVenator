import { React, FontAwesomeIcon, faVenus, faMars } from '../../../index';

const SelectionTab = ({tab, getClass, getBodyType, getBodyColor, getEyeColor, getHairStyle, inputHandler, username}) => {
    if(tab === 'general'){
        return  <section>
                    <div className='selections-label'>Username</div>
                    <input type="text" className="username-field" name="username" id="username" placeholder="username" onChange={inputHandler} value={username}/>

                    <div className='selections-label'>Class</div>
                    <div className='char-class'>
                        <div className='class-preview' onClick={getClass} id="warrior" name="class">
                            <img src='assets/images/warrior-class.png'/>
                            <div className='class-name'>Warrior</div>
                        </div>
                        <div className='class-preview' onClick={getClass} id="mage" name="class">
                            <img src='assets/images/mage-class.png'/>
                            <div className='class-name'>Mage</div>
                        </div>
                        <div className='class-preview' onClick={getClass} id="marksman" name="class">
                            <img src='assets/images/marksman-class.png'/>
                            <div className='class-name'>Marksman</div>
                        </div>
                    </div>

                    <div className='selections-label'>Sex</div>
                    <div className='selections-box sex-options-box'>
                        <center>
                            <button onClick={getBodyType} id="sex-male" className='selection-btn'>
                                <FontAwesomeIcon icon={faMars} size='5x' className='sex-option selected'  name="sex"></FontAwesomeIcon>
                            </button>
                            <button onClick={getBodyType} id="sex-female" className='selection-btn'>
                                <FontAwesomeIcon icon={faVenus} size='5x' className='sex-option' name="sex"></FontAwesomeIcon>
                            </button>
                        </center>
                    </div>

                    <div className='selections-label'>Skin Tone</div>
                    <div className='selections-box skin-tone-box'>
                        <div className='color-preview-box'>
                            <div onClick={getBodyColor} id='white' className='color-preview' style={{ backgroundColor: '#f9d5ba'}}></div>
                        </div>
                        <div className='color-preview-box'>
                            <div onClick={getBodyColor} id='black' className='color-preview' style={{ backgroundColor: '#61382d'}}></div>
                        </div>
                        <div className='color-preview-box'>
                            <div onClick={getBodyColor} id='olive' className='color-preview' style={{ backgroundColor: '#d98e60'}}></div>
                        </div>
                        <div className='color-preview-box'>
                            <div  onClick={getBodyColor} id='brown' className='color-preview' style={{ backgroundColor: '#a86431'}}></div>
                        </div>
                        <div className='color-preview-box'>
                            <div onClick={getBodyColor} id='peach' className='color-preview' style={{ backgroundColor: '#fdd082'}}></div>
                        </div>
                        <div className='color-preview-box selected'>
                            <div onClick={getBodyColor} id='light' className='color-preview' style={{ backgroundColor: '#fdd5b7'}}></div>
                        </div>
                        <div className='color-preview-box'>
                            <div onClick={getBodyColor}  id='dark' className='color-preview' style={{ backgroundColor: '#ba8454'}}></div>
                        </div>
                        <div className='color-preview-box'>
                            <div onClick={getBodyColor} id='dark_2' className='color-preview' style={{ backgroundColor: '#9c663e'}}></div>
                        </div>
                        <div className='color-preview-box'>
                            <div onClick={getBodyColor} id='tanned' className='color-preview' style={{ backgroundColor: '#fdd082'}}></div>
                        </div>
                        <div className='color-preview-box'>
                            <div onClick={getBodyColor} id='tanned_2' className='color-preview' style={{ backgroundColor: '#ecc479'}}></div>
                        </div>
                        <div className='color-preview-box'>
                            <div onClick={getBodyColor} id='darkelf' className='color-preview' style={{ backgroundColor: '#aeb3ca'}}></div>
                        </div>
                        <div className='color-preview-box'>
                            <div onClick={getBodyColor} id='darkelf_2' className='color-preview' style={{ backgroundColor: '#c9d0ee'}}></div>
                        </div>
                        <div className='color-preview-box'>
                            <div onClick={getBodyColor} id='zombie' className='color-preview' style={{ backgroundColor: '#8eab89'}}></div>
                        </div>
                    </div>
                </section>
    }else if(tab === 'eye'){
        return  <section>
                    <div className='selections-label'>Eye Color</div>
                    <div className='selections-box eye-color-box'>
                        <div className='color-preview-box selected'>
                            <div onClick={getEyeColor} id='eye-blue' className='color-preview' style={{ backgroundColor: '#50d4ec'}}></div>
                        </div>
                        <div className='color-preview-box'>
                            <div onClick={getEyeColor} id='eye-brown' className='color-preview' style={{ backgroundColor: '#7e4e20'}}></div>
                        </div>
                        <div className='color-preview-box'>
                            <div onClick={getEyeColor} id='eye-gray' className='color-preview' style={{ backgroundColor: '#ada18f'}}></div>
                        </div>
                        <div className='color-preview-box'>
                            <div  onClick={getEyeColor} id='eye-green' className='color-preview' style={{ backgroundColor: '#84ec50'}}></div>
                        </div>
                        <div className='color-preview-box'>
                            <div onClick={getEyeColor} id='eye-purple' className='color-preview' style={{ backgroundColor: '#9d0b88'}}></div>
                        </div>
                        <div className='color-preview-box'>
                            <div onClick={getEyeColor} id='eye-red' className='color-preview' style={{ backgroundColor: '#ff3d62'}}></div>
                        </div>
                    </div>
                    <div className='selections-label'>Accessories</div>
                    
                </section>
    }else if(tab === 'hair'){
        return  <section>
                    <div className='selections-label'>Hair Style</div>
                    <div className='selections-box hair-style-box'>
                        <div className='img-preview-container'>
                            <center><canvas onClick={getHairStyle} id="dreadlocks_short" className='selection-preview' data-image='hair/dreadlocks_short/male/ash.png'></canvas></center>
                        </div>
                        <div className='img-preview-container'>
                            <center><canvas onClick={getHairStyle} id="shorthawk" className='selection-preview' data-image='hair/shorthawk/male/ash.png'></canvas></center>
                        </div>
                        <div className='img-preview-container'>
                            <center><canvas onClick={getHairStyle} id="curtains" className='selection-preview' data-image='hair/curtains/male/ash.png'></canvas></center>
                        </div>
                        <div className='img-preview-container'>
                            <center><canvas onClick={getHairStyle} id="idol" className='selection-preview' data-image='hair/idol/male/ash.png'></canvas></center>
                        </div>
                        <div className='img-preview-container'>
                            <center><canvas onClick={getHairStyle} id="pixie"  className='selection-preview' data-image='hair/pixie/male/ash.png'></canvas></center>
                        </div>
                        <div className='img-preview-container'>
                            <center><canvas onClick={getHairStyle} id="cowlick" className='selection-preview' data-image='hair/cowlick/male/ash.png'></canvas></center>
                        </div>
                        <div className='img-preview-container'>
                            <center><canvas onClick={getHairStyle} id="spiked_liberty" className='selection-preview' data-image='hair/spiked_liberty/male/ash.png'></canvas></center>
                        </div>
                        <div className='img-preview-container'>
                            <center><canvas onClick={getHairStyle} id="spiked_beehive" className='selection-preview' data-image='hair/spiked_beehive/male/ash.png'></canvas></center>
                        </div>
                        <div className='img-preview-container'>
                            <center><canvas onClick={getHairStyle} id="halfmessy" className='selection-preview' data-image='hair/halfmessy/male/ash.png'></canvas></center>
                        </div>
                        <div className='img-preview-container'>
                            <center><canvas onClick={getHairStyle} id="pigtails" className='selection-preview' data-image='hair/pigtails/male/ash.png'></canvas></center>
                        </div>
                        <div className='img-preview-container'>
                            <center><canvas onClick={getHairStyle} id="ponytail2" className='selection-preview' data-image='hair/ponytail2/male/ash.png'></canvas></center>
                        </div>
                        <div className='img-preview-container'>
                            <center><canvas onClick={getHairStyle} id="braid"  className='selection-preview' data-image='hair/braid/male/ash.png'></canvas></center>
                        </div>
                        <div className='img-preview-container'>
                            <center><canvas onClick={getHairStyle} id="bangslong2" className='selection-preview' data-image='hair/bangslong2/male/ash.png'></canvas></center>
                        </div>
                        <div className='img-preview-container'>
                            <center><canvas onClick={getHairStyle} id="long_messy2"  className='selection-preview' data-image='hair/long_messy2/male/ash.png'></canvas></center>
                        </div>
                        <div className='img-preview-container'>
                            <center><canvas onClick={getHairStyle} id="princess" className='selection-preview' data-image='hair/princess/male/ash.png'></canvas></center>
                        </div>
                        <div className='img-preview-container'>
                            <center><canvas onClick={getHairStyle} id="xlong" className='selection-preview' data-image='hair/xlong/male/ash.png'></canvas></center>
                        </div>
                    </div>
                    <div className='selections-label'>Hair Color</div>
                    <div className='selections-box hair-color-box'>
                        <div className='color-preview-box'>
                            <div onClick={getHairStyle} id="hair-color-ash" className='color-preview' style={{ backgroundColor: '#c18f8a'}}></div>
                        </div>
                        <div className='color-preview-box'>
                            <div onClick={getHairStyle} id="hair-color-blonde" className='color-preview' style={{ backgroundColor: '#f5c34b'}}></div>
                        </div>
                        <div className='color-preview-box'>
                            <div onClick={getHairStyle} id="hair-color-platinum" className='color-preview' style={{ backgroundColor: '#d9c88c'}}></div>
                        </div>
                        <div className='color-preview-box'>
                            <div onClick={getHairStyle} id="hair-color-strawberry" className='color-preview' style={{ backgroundColor: '#f89b0e'}}></div>
                        </div>
                        <div className='color-preview-box'>
                            <div onClick={getHairStyle} id="hair-color-redhead" className='color-preview' style={{ backgroundColor: '#9e1f1f'}}></div>
                        </div>
                        <div className='color-preview-box'>
                            <div onClick={getHairStyle} id="hair-color-carrot" className='color-preview' style={{ backgroundColor: '#ec673e'}}></div>
                        </div>
                        <div className='color-preview-box'>
                            <div onClick={getHairStyle} id="hair-color-chestnut" className='color-preview' style={{ backgroundColor: '#511b03'}}></div>
                        </div>
                         <div className='color-preview-box'>
                            <div onClick={getHairStyle} id="hair-color-raven" className='color-preview' style={{ backgroundColor: '#0b3244'}}></div>
                        </div>
                        <div className='color-preview-box'>
                            <div onClick={getHairStyle} id="hair-color-gray" className='color-preview' style={{ backgroundColor: '#777777'}}></div>
                        </div>
                        <div className='color-preview-box'>
                            <div onClick={getHairStyle} id="hair-color-white" className='color-preview' style={{ backgroundColor: '#e2e5e5'}}></div>
                        </div>
                        <div className='color-preview-box'>
                            <div onClick={getHairStyle} id="hair-color-blue"  className='color-preview' style={{ backgroundColor: '#0041b4'}}></div>
                        </div>
                        <div className='color-preview-box'>
                            <div onClick={getHairStyle} id="hair-color-purple" className='color-preview' style={{ backgroundColor: '#7141b2'}}></div>
                        </div>
                        <div className='color-preview-box'>
                            <div onClick={getHairStyle} id="hair-color-green" className='color-preview' style={{ backgroundColor: '#006900'}}></div>
                        </div>
                        <div className='color-preview-box'>
                            <div onClick={getHairStyle} id="hair-color-pink" className='color-preview' style={{ backgroundColor: '#e941aa'}}></div>
                        </div>
                        <div className='color-preview-box'>
                            <div onClick={getHairStyle} id="hair-color-rose" className='color-preview' style={{ backgroundColor: '#cc789d'}}></div>
                        </div>
                    </div>
                </section>
    }
}

export default SelectionTab;

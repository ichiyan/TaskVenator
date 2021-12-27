import { React, FontAwesomeIcon, faVenus, faMars } from '../../../index';

const SelectionTab = ({tab, getClass, getBodyType, getBodyColor, inputHandler, username}) => {
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
                    <div className='sex-options-box'>
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
                    <div className='skin-tone-box'>
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
                    <div className='selections-label'>Username</div>
                    <h1>EYE</h1>
                </section>
    }else if(tab === 'hair'){
        return  <section>
                    <h1>HAIR</h1>
                </section>
    }
}

export default SelectionTab;

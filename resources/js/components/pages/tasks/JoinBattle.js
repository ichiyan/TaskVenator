import { Button, Modal } from 'react-bootstrap';
import {React, useEffect, useState, TaskItem, Tasks} from "../../../index";
import '../../../../../public/css/party_tasks.css';
import './BattleSelection.js';
import axios from 'axios';
import BattleSelection from './BattleSelection.js';

const JoinBattle = ({setInbattle}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [monster,setMonster] = useState({
        monster: [],
    });

    const [monsterHP,setMonsterHP] = useState(0);


    useEffect(()=>{
        axios.get(`/api/getMonsters`).then(res =>{
            if(res.data.status===200){
                setMonster({
                    monster:res.data.monsters
                });
                setMonsterHP(res.data.hp);
            }
        })
    },[]);


    var buttonText = "Join Battle";

    return (
        <div>
            <div className="">
                <button className="btn-custom-primary join-battle-btn" onClick={handleShow}>
                    {buttonText}
                </button>
            </div>


            <Modal show={show} onHide={handleClose} className="join_battle_modal" size="md" scrollable centered>
                <Modal.Header className='border-0 modal-header' style={{ backgroundColor: "#383a59"}}>
                    {/*<Modal.Title id="contained-modal-title-vcenter" >
                        Choose Battle
                    </Modal.Title>*/}
                    <p>Choose Battle</p>
                </Modal.Header>
                <Modal.Body className='modal_body' style={{ background: "linear-gradient(#292a41, #4b4c65)"}} >
                    {monster.monster.map((mon,index)=>{
                        return (
                            <BattleSelection key={index} name={mon.name} hp={monsterHP} id={mon.id} setShow={setShow} setInbattle={setInbattle} description={mon.description}/>
                        )
                    })}
                </Modal.Body>
                <Modal.Footer className='border-0 ' style={{ backgroundColor: "#4b4c65"}}></Modal.Footer>
            </Modal>
        </div>
    );
}
export default JoinBattle;

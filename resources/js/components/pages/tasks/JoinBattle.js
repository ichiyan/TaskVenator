import { Button, Modal } from 'react-bootstrap';
import {React, useEffect, useState, TaskItem, Tasks} from "../../../index";
import '../../../../../public/css/party_tasks.css';
import './BattleSelection.js';
import axios from 'axios';
import BattleSelection from './BattleSelection.js';

const JoinBattle = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [monster,setMonster] = useState({
        monster: [],
    });



    useEffect(()=>{
        axios.get(`/api/getMonsters`).then(res =>{
            if(res.data.status===200){
                setMonster({
                    monster:res.data.monsters
                });
            }
        })
    },[]);


    var buttonText = "Join Battle";

    return (
        <div>
            <div className="">
                <Button variant="primary" onClick={handleShow} className="tasks-join-button">
                    {buttonText}
                </Button>
            </div>


            <Modal show={show} onHide={handleClose} className="join_battle_modal " size="md" scrollable centered>
                <Modal.Header className='border-0'>
                    {/*<Modal.Title id="contained-modal-title-vcenter" >
                        Choose Battle
                    </Modal.Title>*/}
                </Modal.Header>
                <Modal.Body className='modal_body '>
                    {monster.monster.map((mon,index)=>{
                        return (
                            <BattleSelection key={index} name={mon.name}/>
                        )
                    })}
                </Modal.Body>
                <Modal.Footer className='border-0 '></Modal.Footer>
        </Modal>
        );
        </div>
    );
}
export default JoinBattle;

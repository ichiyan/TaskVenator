import { Button, Modal } from 'react-bootstrap';
import {React, useEffect, useState, TaskItem, Tasks} from "../../../index";
import '../../../../../public/css/party_tasks.css';
import axios from 'axios';

const JoinBattle = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    var buttonText = "Join Battle";

    return (
        <div>
            <div className="">
                <Button variant="primary" onClick={handleShow} className="tasks-join-button">
                    {buttonText}
                </Button>
            </div>

            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Join Battle</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    list of available battles
                </Modal.Body>
            </Modal>
        </div>
    );
}
export default JoinBattle;

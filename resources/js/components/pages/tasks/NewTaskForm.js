import { Button, Modal } from 'react-bootstrap';
import {React, useEffect, useState, TaskItem, Tasks} from "../../../index";
import '../../../../../public/css/party_tasks.css';
import axios from 'axios';

const NewTaskForm = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const[task, setTask]= useState({
        title:'',
        show_is_done: '',
        is_in_progress: 0,
        subtasks: 1,
        owner: '',
        content: '',
        is_complete: 0,
        frequency: '',
        deadline:'',
        is_public: '',
        reminder: '',
        tasks: '',
    });

    const inputHandler =(e) =>{
        console.log(e.target.value);
        setTask({
            ...Tasks,[e.target.name]:  e.target.value
        });

    }

    const taskSubmitHandler = (e) =>{
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', task.title);
        formData.append('show_is_done', task.show_is_done);
        formData.append('is_in_progress', task.is_in_progress);
        formData.append('subtasks', task.subtasks);
        formData.append('owner', task.owner);
        formData.append('content', task.content);
        formData.append('is_complete', task.is_complete);
        if(task.frequency === '8'){
            formData.append('frequency-multiple', task.frequency);
        }else {
            formData.append('frequency', task.frequency);
        }
        formData.append('deadline', task.deadline);
        formData.append('is_public', task.is_public);
        formData.append('reminder', task.reminder);
        formData.append('tasks', task.tasks);

        axios.post(`/api/newTask`,formData).then(res =>{
            if(res.data.status === 200){
                alert(res.data.message);
            }
        });
    }

    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                Add new task
            </Button>
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>New Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={taskSubmitHandler} encType="multipart/form-data">
                        <div className="form-group">
                            <label> Task Title </label>
                            <input className="form-control" name="title" type="text" onChange={inputHandler} value={task.title}/>
                        </div>
                        <div className="form-group">
                            <label> Continue to show task once marked Done? </label>
                            <select name="show_is_done" className="form-select" onChange={inputHandler} value={task.show_is_done}>
                                <option value="1">Yes</option>
                                <option value="0">No</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label> Privacy Settings </label>
                            <select name="is_public" className="form-select" onChange={inputHandler} value={task.is_public}>
                                <option value="1">Public</option>
                                <option value="0">Private</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label> Subtask </label>
                            <input className="form-control" name="content" type="text" onChange={inputHandler} value={task.content}/>
                        </div>
                        <div className="form-group">
                            <label> Date Due </label>
                            <input className="form-control" name="content" type="date" onChange={inputHandler} value={task.content}/>
                        </div>
                        <div className="form-group">
                            <label> Frequency:  </label>
                            <select name="frequency" className="form-select" onChange={inputHandler} value={task.frequency}>
                                <option value="NULL">Once</option>
                                <option value="0">Everyday</option>
                                <option value="8">Every week</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label> If frequency is EVERY WEEK, choose which days apply: </label>
                            <select name="frequency-multiple" className="form-select" onChange={inputHandler} value={task.frequency}>
                                <option value="1"> -- </option>
                                <option value="1">Sunday</option>
                                <option value="2">Monday</option>
                                <option value="3">Tuesday</option>
                                <option value="4">Wednesday</option>
                                <option value="5">Thursday</option>
                                <option value="6">Friday</option>
                                <option value="7">Saturday</option>
                            </select>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary mr-auto" onClick={handleClose}>Close</button>
                            <button type="submit" className="btn btn-primary" data-dismiss="modal" onClick={handleClose}>Save</button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </div>
    );
}
export default NewTaskForm;

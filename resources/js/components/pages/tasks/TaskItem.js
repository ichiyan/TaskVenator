import {React, useEffect, useState, } from "../../../index";
import '../../../../../public/css/party_tasks.css';
import axios from "axios";

const TaskItem = ({task, className, whenChecked, task_id, stat}) => {
    // let stat = (className == "checked-item")? 1:0;
    const [done, setDone]= useState({
        task_status: stat,
        task_id:task_id
    });

    const taskCompletedHandler = (e) =>{
        // e.preventDefault();

        const formData = new FormData();
        formData.append('done', done.task_status);
        formData.append('id', done.task_id);
        formData.append('test', 'task_id');

        axios.post(`/api/completeTask`, done).then(res =>{
            if(res.data.status === 200){
                alert(res.data.message);
                // console.log("FORM after")
                // console.log(res.data)
                // whenChecked(e)
            }
        }).catch(function (error) {
            console.log(error);
        })

    }

    return(
        <div className={"task-item"}>
            {/*<input value={"item"} type="checkbox"/>*/}
            {/*<label className="task-item-content"> {task}</label>*/}

            <input value={stat} type="checkbox" onChange={taskCompletedHandler}/>
            <span className={className} >{task}</span>
        </div>
    )

}

export default TaskItem;

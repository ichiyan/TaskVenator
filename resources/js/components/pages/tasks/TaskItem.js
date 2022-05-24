import {React, useEffect, useState,} from "../../../index";
import '../../../../../public/css/party_tasks.css';
import axios from "axios";

const TaskItem = ({task, className, whenChecked, id, stat, updateXP}) => {
    // let stat = (className == "checked-item")? 1:0;
    const [done, setDone]= useState(stat);

    const taskCompletedHandler = (e) =>{
        e.preventDefault();

        const formData = new FormData();
        formData.append('done', done);

        axios.post(`/api/completeTask`, {formData, id}).then(res =>{
            if(res.data.status === 200){
                alert(res.data.message);
            }
        }).catch(function (error) {
            console.log(error);
        })


    }

    return(
        <div className={"task-item"}>
            {/*<input value={"item"} type="checkbox"/>*/}
            {/*<label className="task-item-content"> {task}</label>*/}

            <input value={task} type="checkbox" onChange={taskCompletedHandler}/>
            <span className={className} >{task}</span>
        </div>
    )

}

export default TaskItem;

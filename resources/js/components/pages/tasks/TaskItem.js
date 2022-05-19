import {React, useEffect, useState,} from "../../../index";
import '../../../../../public/css/party_tasks.css';

const TaskItem = ({task, className, whenChecked}) => {

    return(
        <div className={"task-item"}>
            {/*<input value={"item"} type="checkbox"/>*/}
            {/*<label className="task-item-content"> {task}</label>*/}

            <input value={task} type="checkbox" onChange={whenChecked}/>
            <span className={className} >{task}</span>
        </div>
    )

}

export default TaskItem;

import {React, useEffect, useState,} from "../../../index";
import '../../../../../public/css/party_tasks.css';

const TaskItem = () => {

    const [checked, setChecked] = useState([]);

    return(
        <div>
            <input value={"item"} type="checkbox"/>
            <div className="task-item-content"> one time</div>
        </div>
    )

}

export default TaskItem;

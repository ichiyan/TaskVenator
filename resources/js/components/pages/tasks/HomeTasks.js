import {React, useEffect, useState, TaskItem} from "../../../index";
import '../../../../../public/css/party_tasks.css';

const HomeTasks = () => {

    return(
        <div className="tasks-group">
            <div className="tasks-group-header">
                <div className="tasks-group-title"> name </div>
            </div>
            <div className="tasks-group-content">
                <TaskItem/>
                <TaskItem/>
            </div>

        </div>
    )

}

export default HomeTasks;

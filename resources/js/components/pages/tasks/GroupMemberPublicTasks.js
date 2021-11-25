import {React, useEffect, useState, TaskItem} from "../../../index";
import '../../../../../public/css/party_tasks.css';

const GroupMemberPublicTasks = () => {

    return(
        <div className="tasks-group accordion">
            <div className="accordion-item">
                <div className="tasks-group-header accordion-title">
                    <div className="tasks-group-title"> name </div>
                    <div className="task-progress-bar"> 50% </div>
                </div>
                <div className="tasks-group-content accordion-content">
                    <TaskItem/>
                    <TaskItem/>
                </div>
            </div>
        </div>
    )

}

export default GroupMemberPublicTasks;

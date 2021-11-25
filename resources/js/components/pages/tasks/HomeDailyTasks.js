import {React, useEffect, useState, TaskItem} from "../../../index";
import '../../../../../public/css/party_tasks.css';

const HomeDailyTasks = () => {

    return(
        <div className="tasks-group">
            <div className="tasks-group-header">
                <div className="tasks-group-title"> name </div>
            </div>
            <div className="tasks-group-content">
                <div className="tasks-daily-group">
                    <h4 className="tasks-daily-subtitle">task title</h4>
                    <TaskItem/>
                    <TaskItem/>
                </div>
                <div className="tasks-daily-group">
                    <h4 className="tasks-daily-subtitle">task title</h4>
                    <TaskItem/>
                    <TaskItem/>
                </div>
            </div>

        </div>
    )

}

export default HomeDailyTasks;

import {React, useEffect, useState, TaskItem} from "../../../index";
import '../../../../../public/css/party_tasks.css';

const HomeDailyTasks = () => {
    const [checked, setChecked] = useState([]);

    const isChecked = (item) =>
        checked.includes(item) ? "checked-item" : "not-checked-item";

    let checkedItems = checked.length
        ? checked.reduce((total, item) => {
            return total + ", " + item;
        })
        : "";

    const handleCheck = (event) => {
        let updatedList = [...checked];
        if (event.target.checked) {
            updatedList = [...checked, event.target.value];
        } else {
            updatedList.splice(checked.indexOf(event.target.value), 1);
        }
        setChecked(updatedList);
        console.log(updatedList);
    };

    return(
        <div className="tasks-group">
            <div className="tasks-group-header">
                <div className="tasks-group-title"> name </div>
            </div>
            <div className="tasks-group-content">
                <div className="tasks-daily-group">
                    <h4 className="tasks-daily-subtitle">task title</h4>
                    <TaskItem
                        task={"tECHNOPRENUERSHIP"}
                        className={isChecked("tECHNOPRENUERSHIP")}
                        whenChecked={handleCheck}
                    />
                    <TaskItem
                        task={"THESIS"}
                        className={isChecked("THESIS")}
                        whenChecked={handleCheck}
                    />
                </div>
                <div className="tasks-daily-group">
                    <h4 className="tasks-daily-subtitle">task title</h4>
                    <TaskItem
                        task={"SIPP"}
                        className={isChecked("SIPP")}
                        whenChecked={handleCheck}
                    />
                    <TaskItem
                        task={"ATFL"}
                        className={isChecked("ATFL")}
                        whenChecked={handleCheck}
                    />
                </div>
            </div>

        </div>
    )

}

export default HomeDailyTasks;

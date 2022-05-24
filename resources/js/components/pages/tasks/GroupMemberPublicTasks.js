import {React, useEffect, useState, TaskItem, NewTaskForm, axios} from "../../../index";
import '../../../../../public/css/party_tasks.css';

const GroupMemberPublicTasks = ({name, member}) => {

    const tasks = ["Apple", "Banana", "Tea", "Coffee"];

    const [isActive, setIsActive] = useState(true);
    const [checked, setChecked] = useState([]);
    const [state, setState] = useState([]);
    let percentage = (checked==0)? 0: (checked.length/tasks.length)*100;

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
        <div className="tasks-group accordion">
            <div className="accordion-item">
                <div
                    className="tasks-group-header accordion-title"
                    onClick={() => setIsActive(!isActive)}>
                    <div className="tasks-group-title"> {name}'s tasks </div>
                    <div className="task-progress-bar">
                        <div className="task-progress-bar-colored"
                             style={{width: percentage + "%"}}>
                            {percentage}%
                        </div>
                    </div>
                    <div className="accordion-icon"> {isActive ? '--' : '+'} </div>
                </div>
                {isActive && <div className="tasks-group-content accordion-content">
                    {tasks.map((task, index) => (
                        <div key={index} className="task-item">
                            {/*<input value={task} type="checkbox" onChange={handleCheck}/>*/}
                            {/*/!*<button className="complete-btn">  checked="checked" *!/*/}
                            {/*/!*    <i className="fas fa-check"> </i>*!/*/}
                            {/*/!*</button>*!/*/}
                            {/*<span className={isChecked(task)} >{task}</span>*/}
                            <TaskItem
                                task = {task}
                                className={isChecked(task)}
                                whenChecked={handleCheck}
                            />
                        </div>
                    ))}
                </div> }
            </div>
        </div>
    )

}

export default GroupMemberPublicTasks;

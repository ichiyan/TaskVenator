import {React, useEffect, useState, TaskItem} from "../../../index";
import '../../../../../public/css/party_tasks.css';

const HomeTasks = ({name}) => {

    const tasks = ["Apple", "Banana", "Tea", "Coffee"];
    const [isActive, setIsActive] = useState(true);
    const [checked, setChecked] = useState([]);

    const isChecked = (item) =>
        checked.includes(item) ? "checked-item" : "not-checked-item";

    var checkedItems = checked.length
        ? checked.reduce((total, item) => {
            return total + ", " + item;
        })
        : "";

    const handleCheck = (event) => {
        var updatedList = [...checked];
        if (event.target.checked) {
            updatedList = [...checked, event.target.value];
        } else {
            updatedList.splice(checked.indexOf(event.target.value), 1);
        }
        setChecked(updatedList);
    };

    return(
    <div className="tasks-group accordion">
        <div className="accordion-item">
            <div
                className="tasks-header accordion-title"
                onClick={() => setIsActive(!isActive)}>
                <div className="tasks-group-title"> {name} </div>

                <div className="accordion-icon"> {isActive ? '--' : '+'} </div>
            </div>
            {isActive && <div className="tasks-group-content accordion-content">
                {tasks.map((task, index) => (
                    <div key={index}>
                        <input value={task} type="checkbox" onClick={handleCheck}/>
                        <span className={isChecked(task)}>{task}</span>
                    </div>
                ))}
            </div> }
        </div>
    </div>
    )

}

export default HomeTasks;

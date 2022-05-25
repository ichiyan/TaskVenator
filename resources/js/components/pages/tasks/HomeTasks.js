import {React, useEffect, useState, TaskItem} from "../../../index";
import '../../../../../public/css/party_tasks.css';
import axios from "axios";

function HomeTasks ({task, updateStats}){

    const tasks = ["Apple", "Banana", "Tea", "Coffee"];
    const [isActive, setIsActive] = useState(true);
    const [checked, setChecked] = useState([]);
    const [taskEntry, setTaskEntry] = useState(task);
    const [taskItem, setTaskItem] = useState({
        item:[],id:null
    });

    useEffect(() =>{
        // console.log("taskEntry")
        // setTaskEntry(task);
        // console.log(task)
        // var findID = task['id']
        // console.log(findID)
        // console.log(taskEntry)
        // console.log(taskEntry['id'])

        axios.get(`/api/tasks_items`).then(res =>{
            if(res.data.status===200){
                setTaskItem({
                    item:res.data.taskItemDB,
                    id:res.data.id
                })
            }
            // var d = res.data
            // console.log(d)
            // console.log(res.data.status)
        })
    },[])

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
    };

    return(
    <div className="tasks-group accordion">
        <div className="accordion-item">
            <div
                className="tasks-header accordion-title"
                onClick={() => setIsActive(!isActive)}>
                <div className="tasks-group-title"> {taskEntry['title']} </div>

                <div className="accordion-icon"> {isActive ? '--' : '+'} </div>
            </div>
            {isActive && <div className="tasks-group-content accordion-content">
                {/*{console.log("TEST")}*/}
                {/*{console.log(taskEntry)}*/}
                {/*{console.log(taskItem)}*/}

                {taskItem.item.map((mapped_task, index)=>{
                    if ( taskEntry['id'] === mapped_task['task_id'] ) {
                        let cn = (mapped_task['is_complete']==1)? "checked-item" : "not-checked-item";
                        // console.log(mapped_task['id'])
                        return(
                            <div key={index} className="task-item">
                            {/*<input value={mapped_task['is_complete']} type="checkbox" onClick={handleCheck}/>*/}
                            {/*<span className={isChecked(mapped_task)}>{mapped_task['content']}</span>*/}
                            <TaskItem
                                task={mapped_task['content']}
                                // className={isChecked(mapped_task['content'])}
                                className={cn}
                                whenChecked={handleCheck}
                                task_id={mapped_task['id']}
                                stat={mapped_task['is_complete']}
                                updateStats={updateStats}
                                ></TaskItem>
                            </div>
                        )
                    }
                }) }
            </div> }

        </div>
    </div>
    );

}

export default HomeTasks;

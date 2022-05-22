import {
    Header, Link, React,
    useEffect, useState,
    GroupMemberPublicTasks, HomeTasks, HomeDailyTasks, NewTaskForm,
    AvatarHeader, axios
} from "../../../index";
import '../../../../../public/css/party_tasks.css';

const GroupTasks = () => {

    var name1 = "Mhady"
    var name2 = "Lisette"
    const [taskList, setTaskList] = useState({
        tasks:[], id:null
    });

    useEffect(() =>{
        axios.get(`/api/tasks`).then(res =>{
            if(res.data.status===200){
                setTaskList({
                    tasks:res.data.tasks,
                    id:res.data.id
                })
            }
            console.log(res.data.status)
        })
    },[])
    console.log("TaskLists:")
    console.log(taskList.id)
    console.log(taskList.tasks)

    return(
        <section className="container party-section">
            <div className="party-nav">
                <div className="party-nav-item"><Link to="/party">Party</Link></div>
                <div className="party-nav-item party-active-nav"><Link to="/group_tasks">Group Tasks</Link></div>
            </div>
            <div className="party-content" >
                <NewTaskForm/>
                <h1>Group Tasks</h1>
                <GroupMemberPublicTasks
                    name = {name1}
                />
                <GroupMemberPublicTasks
                    name = {name2}
                />

                <h1>Home Tasks</h1>
                <HomeTasks
                    name = {name1}
                />
                <HomeTasks
                    name = {name2}
                />

                <h1>Daily Tasks</h1>
                <HomeDailyTasks/>
                <HomeDailyTasks/>
            </div>
        </section>
    )
}

export default GroupTasks;

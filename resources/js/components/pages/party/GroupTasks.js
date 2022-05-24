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
    const [groupTaskList, setGroupTaskList] = useState({
        members:[],
        party_id:null,
        total_members:0,
        message:""
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

        axios.get(`/api/group_members`).then(res =>{
            if(res.data.status===200){
                setGroupTaskList({
                    members: res.data.members,
                    party_id:res.data.id,
                    total_members:res.data.total_members,
                    message:res.data.message
                })
            }
            console.log(res.data.status)
            console.log(res.data.members)
        })

    },[])

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
                {/*{groupTaskList.members.map((one_member,index)=>{*/}
                {/*    //is_in_progress column =>   0=not started;  -1=completed;   1=in progress*/}
                {/*    // if(one_member['is_public'] === 1){*/}
                {/*        return(*/}
                {/*            <GroupMemberPublicTasks*/}
                {/*                key = {one_member['id']}*/}
                {/*                member = {one_member}*/}
                {/*            />*/}
                {/*        )*/}
                {/*    // }*/}
                {/*}) }*/}

                <h1>Home Tasks</h1>
                {taskList.tasks.map((one_task,index)=>{
                    //is_in_progress column =>   0=not started;  -1=completed;   1=in progress
                    if(one_task['is_in_progress'] === 0){
                        return(
                            <HomeTasks
                                key = {one_task['id']}
                                task = {one_task}
                            />
                        )
                    }
                }) }
            </div>
        </section>
    )
}

export default GroupTasks;

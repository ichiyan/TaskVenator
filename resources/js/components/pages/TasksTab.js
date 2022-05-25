import {
    Link, React, $,
    useEffect, useState, JoinBattle, HomeDailyTasks,
    HomeTasks, Button, NewTaskForm
} from "../../index";
import '../../../../public/css/party_tasks.css';
import '../../../../public/css/tasks.scss';
import axios from "axios";
import OutfitFilter from "./shop/OutfitFilter";
import { Fragment } from "react";

const TasksTab = ({updateStats}) => {
    var hpTotal = 50;
    var xpTotal = 50;
    const [hp, setHp] = useState(50);
    const [xp, setXp] = useState(0);
    const [hpBarWidth, sethpBarWidth] = useState("100");
    const [xpBarWidth, setxpBarWidth] = useState("100");
    const [hpHitWidth, sethpHitWidth] = useState("0");
    const [HpIncreaseWidth, setHPIncreaseWidth] = useState("0");
    const [xpIncreaseWidth, setxpIncreaseWidth] = useState("0");
    var colWidth = "30%";
    const [show, setShow] = useState(false);
    const [battle, setBattle] = useState({
        name : '',
        hp : '',
        performance : '',
        battle_id : ''
    });
    const [taskCount, setTaskCount] = useState({
        in_progress: 0,
        to_do_num: 0,
        repeating_tasks: 0,
        done_num: 0
    });
    const [taskList, setTaskList] = useState({
        tasks:[], id:null
    });

    const handleShow = () =>setShow(!show);
    if(show){
        colWidth = "30%";
    }else{
        colWidth = "45%";
    }

    let count_progress = () =>{
        let prev = 0
        prev = taskCount.in_progress + 1
        setTaskCount({in_progress: prev});
    }

    useEffect(() =>{
        axios.get(`/api/tasks`).then(res =>{
            if(res.data.status===200){
                setTaskList({
                    tasks:res.data.tasks,
                    id:res.data.id
                })
            }
        })
    },[])
    // console.log("TaskLists:")
    // console.log(taskList.id)
    console.log(taskList.tasks)

    const [inbattle,setInbattle] = useState(false);

    const [battleinfo,setBattleinfo] = useState({
        name : '',
        hp: '',
        performance : '',
        battle_id : '',
        level:''
    });

    useEffect(() =>{
        axios.get(`/api/battle`).then(res =>{
            if(res.data.status===200){
                setInbattle(true);
                handleShow(true);
                setBattleinfo({
                    name : res.data.monster.name,
                    hp : res.data.battle.monster_remaining_hp,
                    performance : res.data.performance.name,
                    battle_id : res.data.battle.id,
                    level: res.data.level
                });
                console.log(res.data.message);
                console.log(battleinfo);
            }else{
                setInbattle(false);
                handleShow(false);
                console.log(res.data.message);
            }
        })
    },[])

    const [image,setImage] = useState('assets/images/monsters/'+battleinfo.name+'.gif');

    var monster_image = 'assets/images/monsters/'+battleinfo.name+'.gif';

    const cancelbattle = () =>{
        const data = {
            id : battleinfo.battle_id
        }
        axios.post(`/api/cancelbattle`,data).then(res =>{
            if(res.data.status===200){
                setInbattle(false);
                handleShow(false);
                setBattleinfo({
                    name : '',
                    hp: '',
                    performance : '',
                    battle_id : '',
                    level:''
                });
                console.log(res.data.message);
            }
        })
    }


    return( //will change class names
        <section className="container tasks-section">
            <div className="tasks-content" >
                <NewTaskForm/>
                {!inbattle ?
                        <div className="tasks-join-button-cont">
                            <JoinBattle setInbattle={setInbattle}></JoinBattle>
                        </div>

                    :
                    ''
                }


                <div className="tasks-col-container">
                    <div className="tasks-col col-t" style={{"width" : colWidth}} >
                        <h3 className="col-t-label"> In Progress: {taskCount.in_progress} </h3>
                        {/*button for new task after*/}
                        {taskList.tasks.map((one_task,index)=>{
                            //is_in_progress column =>   0=not started;  -1=completed;   1=in progress
                            if(one_task['is_in_progress'] === 1){
                                // console.log(one_task['id'])
                                // count_progress()
                                return(
                                        <HomeTasks
                                            key = {one_task['id']}
                                            task = {one_task}
                                            updateStats={updateStats}
                                        />
                                    )
                            }
                        }) }
                        <h3 className="col-t-label"> To Do: {taskCount.to_do_num} </h3>
                        {taskList.tasks.map((one_task,index)=>{
                            //is_in_progress column =>   0=not started;  -1=completed;   1=in progress
                            if(one_task['is_in_progress'] === 0){
                                // console.log("to do: ")
                                // console.log(one_task['title'])
                                // let prev = taskCount.in_progress + 1
                                // setTaskCount({
                                //     to_do_num: prev
                                // });
                                return(
                                    <HomeTasks
                                        key = {one_task['id']}
                                        task = {one_task}
                                        updateStats={updateStats}
                                    />
                                )
                            }
                        }) }
                    </div>
                    <div className="tasks-col col-t" style={{"width" : colWidth}}>
                        <h3 className="col-t-label"> Repeating Tasks: {taskCount.repeating_tasks} </h3>
                        <HomeDailyTasks/>
                        <HomeDailyTasks/>
                        <h3 className="col-t-label"> Done: {taskCount.done_num} </h3>
                        {taskList.tasks.map((one_task,index)=>{
                            //is_in_progress column =>   0=not started;  -1=completed;   1=in progress
                            if(one_task['is_in_progress'] === -1 && one_task['show_when_done'] === 1){
                                // console.log("show: ")
                                // console.log(one_task['title'])
                                // let prev = taskCount.in_progress + 1
                                // setTaskCount({
                                //     done_num: prev
                                // });
                                return(
                                    <HomeTasks
                                        key = {one_task['id']}
                                        task = {one_task}
                                        updateStats={updateStats}
                                    />
                                )
                            }
                        }) }
                    </div>
                    {inbattle ?
                        <Fragment>
                         <div className="tasks-col col-battle">
                             {/* <div className="battle-wrapper"> */}
                                <div className="party-avatar-info">
                                    <div  className="col avatar-header-info align-self-center">
                                            {/* <h1>ongoing battle here sdasd</h1> */}
                                            <p style={{color: "white"}}>{battleinfo.name}</p>
                                        <div className="monster-header">
                                            <img className="class-icon" src={'assets/images/monsters/'+battleinfo.name+'.gif'} width="100" height="100"></img>
                                        </div>
                                        <div className="col monster-header-info align-self-start mb-3">
                                                <div className="health-section">
                                                    <span> <img className="health-icon" src="assets/images/health-icon.png"></img></span>
                                                    <span className="health-bar" data-total={hpTotal} data-value={hp}>
                                                        <div className="hp bar" style={{width: hpBarWidth + "%"}}>
                                                            <div className="transition decrease" style={{width: hpHitWidth + "%"}}></div>
                                                        </div>
                                                        <div className="transition increase" style={{width: HpIncreaseWidth + "%"}}></div>
                                                    </span>
                                                    <span className="hp-txt">{battleinfo.hp}/{100+(battleinfo.level*8)}</span>
                                                </div>
                                                {/* <div className="xp-section"> */}
                                                    {/* <button onClick={cancelbattle} className="btn-custom-danger forfeit-battle-btn mt-2">Forfeit</button> */}
                                                {/* </div> */}
                                        </div>

                                    </div>

                                </div>
                            <center><button onClick={cancelbattle} className="btn-custom-danger forfeit-battle-btn mb-2" >Forfeit</button></center>
                        {/* </div> */}

                        </div>
                        </Fragment>
                        :
                        ''
                    }

                </div>
            </div>
        </section>
    )
}

export default TasksTab;

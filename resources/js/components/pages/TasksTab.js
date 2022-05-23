import {
    Link, React, $,
    useEffect, useState, JoinBattle, HomeDailyTasks,
    HomeTasks, Button
} from "../../index";
import '../../../../public/css/party_tasks.css';
import '../../../../public/css/tasks.scss';
import axios from "axios";

const TasksTab = () => {
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
        battle:[]
    });
    const handleShow = () =>setShow(!show);

    if(show){
        colWidth = "30%";
    }else{
        colWidth = "45%";
    }

    var name1 = "SE Project"

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

    useEffect(() =>{
        axios.get(`/api/battle`).then(res =>{
            if(res.data.status===200){
                setBattle({
                    battle:res.data.battle,
                    id_user:res.data.id
                })
            }
        })
    },[])

    return( //will change class names
        <section className="container tasks-section">
            <div className="tasks-content" >
                <div className="tasks-join-button-cont">
                    {!show && <JoinBattle></JoinBattle>}
                    <Button onClick={handleShow}  style={{"margin" : "1rem"}} className="tasks-join-button">
                        {/*remove later once connected to DB*/}
                        ongoing battle temp-toggle
                    </Button>
                </div>

                <div className="tasks-col-container">
                    <div className="tasks-col col-t" style={{"width" : colWidth}} >
                        <HomeTasks
                            name = {name1}
                        />
                        <HomeTasks
                            name = {name1}
                        />
                        <HomeTasks
                            name = {name1}
                        />
                        <HomeTasks
                            name = {name1}
                        />
                    </div>
                    <div className="tasks-col col-t" style={{"width" : colWidth}}>
                        <HomeDailyTasks/>
                        <HomeDailyTasks/>
                        <HomeTasks
                            name = {name1}
                        />
                        <HomeTasks
                            name = {name1}
                        />
                        <HomeTasks
                            name = {name1}
                        />
                    </div>
                    {show && <div className="tasks-col col-battle">
                        {/* <Button>Forfeit battle</Button> */}
                            <div className="party-avatar-info">
                                <div  className="col avatar-header-info align-self-center">
                                        {/* <h1>ongoing battle here sdasd</h1> */}
                                        <p style={{color: "white"}}>MONSTER NAME</p>
                                    <div className="monster-header">
                                        <img className="class-icon" src="assets/images/monster4.gif"></img>
                                    </div>
                                    <div className="col monster-header-info align-self-start">
                                            <div className="health-section">
                                                <span> <img className="health-icon" src="assets/images/health-icon.png"></img></span>
                                                <span className="health-bar" data-total={hpTotal} data-value={hp}>
                                                    <div className="hp bar" style={{width: hpBarWidth + "%"}}>
                                                        <div className="transition decrease" style={{width: hpHitWidth + "%"}}></div>
                                                    </div>
                                                    <div className="transition increase" style={{width: HpIncreaseWidth + "%"}}></div>
                                                </span>
                                                <span className="hp-txt">{hp}/{hpTotal}</span>
                                            </div>
                                            <div className="xp-section">
                                                <span> <img className="health-icon" src="assets/images/xp-icon.png"></img></span>
                                                <span className="xp-bar" data-total={xpTotal} data-value={xp}>
                                                    <div className="xp bar"style={{width: xpBarWidth + "%"}}> </div>
                                                    <div className="transition increase" style={{width: xpIncreaseWidth + "%"}}></div>
                                                </span>
                                                <span className="xp-txt">{xp}/{xpTotal}</span>
                                            </div>
                                    </div>
                                </div>
                            </div>
                    </div> }

                </div>
            </div>
        </section>
    )
}

export default TasksTab;

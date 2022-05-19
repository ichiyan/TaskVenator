import {
    Link, React, $,
    useEffect, useState, JoinBattle, HomeDailyTasks,
    HomeTasks, Button
} from "../../index";
import '../../../../public/css/party_tasks.css';

const TasksTab = () => {
    var colWidth = "30%";
    const [show, setShow] = useState(false);
    const handleShow = () =>setShow(!show);

    if(show){
        colWidth = "30%";
    }else{
        colWidth = "45%";
    }

    var name1 = "SE Project"

    return( //will change class names
        <section className="container party-section">
            <div className="party-content" >
                <JoinBattle></JoinBattle>
                <Button onClick={handleShow}>
                    ongoing battle temp-toggle
                </Button>
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
                        ongoing battle here
                    </div> }

                </div>
            </div>
        </section>
    )
}

export default TasksTab;

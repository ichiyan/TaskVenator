import {
    Link, React, $,
    useEffect, useState, JoinBattle, HomeDailyTasks,
    HomeTasks, Button
} from "../../index";
import '../../../../public/css/party_tasks.css';
import axios from "axios";

const TasksTab = () => {
    var colWidth = "30%";
    const [show, setShow] = useState(false);
    // const [items, setItems] = useState({
    //     items:[],
    // });
    // const [DataisLoaded, setDataisLoaded] = useState(false);
    const handleShow = () =>setShow(!show);

    if(show){
        colWidth = "30%";
    }else{
        colWidth = "45%";
    }

    var name1 = "SE Project"

    // function componentDidMount() {
    //     fetch(
    //         "https://jsonplaceholder.typicode.com/users")
    //         .then((res) => res.json())
    //         .then((json) => {
    //             setItems(json);
    //             setDataisLoaded(true)
    //             });
    // }
    // useEffect(() =>{
    //     axios.get(`/api/battle`).then(res =>{
    //         if(res.data.status===200){
    //             setItems({
    //                 items:res.data
    //             })
    //         }
    //     })
    // },[])

    // if(!DataisLoaded) return <div><h1> Please wait some time.... </h1></div>;

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
                        <Button>Forfeit battle</Button>
                        <div> ongoing battle here </div>
                    </div> }

                </div>
            </div>
        </section>
    )
}

export default TasksTab;

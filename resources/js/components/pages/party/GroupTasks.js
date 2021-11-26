import {Header, Link, React,
        useEffect, useState,
        GroupMemberPublicTasks, HomeTasks, HomeDailyTasks,
        AvatarHeader} from "../../../index";
import '../../../../../public/css/party_tasks.css';

const GroupTasks = () => {

    var name1 = "Mhady"
    var percent1 = 80;
    var name2 = "Lisette"
    var percent2 = 40;

    return(
        <section className="container party-section">
            <div className="party-nav">
                <div className="party-nav-item"><Link to="/party">Party</Link></div>
                <div className="party-nav-item party-active-nav"><Link to="/group_tasks">Group Tasks</Link></div>
            </div>
            <div className="party-content" >
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

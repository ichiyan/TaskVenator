import {Header, Link, React,
        useEffect, useState,
        GroupMemberPublicTasks, HomeTasks, HomeDailyTasks,
        AvatarHeader} from "../../../index";
import '../../../../../public/css/party_tasks.css';

const GroupTasks = () => {

    var hpTotal = 50;
    var xpTotal = 50;
    const [hp, setHp] = useState(50);
    const [xp, setXp] = useState(0);
    const [hpBarWidth, sethpBarWidth] = useState("100");
    const [hpHitWidth, sethpHitWidth] = useState("0");
    const [HpIncreaseWidth, setHPIncreaseWidth] = useState("0");
    const [xpBarWidth, setXPBarWidth] = useState("0");
    const [xpIncreaseWidth, setXPIncreaseWidth] = useState("0");

    return(
        <div className="internal-pages">
            <Header page="group_tasks"/>

            <AvatarHeader
                hasParty="true"
                hp={hp}
                hpTotal={hpTotal}
                hpBarWidth={hpBarWidth}
                hpHitWidth={hpHitWidth}
                HpIncreaseWidth={HpIncreaseWidth}
                xp={xp}
                xpTotal={xpTotal}
                xpBarWidth={xpBarWidth}
                xpIncreaseWidth={xpIncreaseWidth}
            />

            <section className="party-section">
                <div className="party-nav">
                    <div className="party-nav-item"><Link to="/party">Party</Link></div>
                    <div className="party-nav-item party-active-nav"><Link to="/group_tasks">Group Tasks</Link></div>
                </div>
                <div className="party-content" >
                    <h1>Group Tasks</h1>
                    <GroupMemberPublicTasks/>
                    <GroupMemberPublicTasks/>

                    <h1>Daily Tasks</h1>
                    <HomeDailyTasks/>
                    <HomeDailyTasks/>

                    <h1>Home Tasks</h1>
                    <HomeTasks/>
                    <HomeTasks/>
                </div>

            </section>
        </div>
    )
}

export default GroupTasks;

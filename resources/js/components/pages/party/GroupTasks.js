import {Header, Link, React,
        useEffect, useState,
        GroupMemberPublicTasks,
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
        <div>
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

            <section className="justify-content-center align-items-center party-content">
                <button><Link to="/party">Party</Link></button>
                <button><Link to="/group_tasks">Group Tasks</Link></button>

                <h1> Group Tasks </h1>
                <GroupMemberPublicTasks/>
            </section>
        </div>
    )
}

export default GroupTasks;

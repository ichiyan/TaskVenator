import {Header, Link, React, $,
        useEffect, useState,
        AvatarHeader} from "../../../index";
import '../../../../../public/css/party_tasks.css';

const Party = () => {

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

            <section className="d-flex justify-content-center align-items-center party-content">
                <button><Link to="/party">Party</Link></button>
                <button><Link to="/group_tasks">Group Tasks</Link></button>

                <h1>PARTY LANDING PAGE</h1>
            </section>

        </div>
    )

}

export default Party;

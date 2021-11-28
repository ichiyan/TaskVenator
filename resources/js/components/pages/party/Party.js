import {Link, React, $,
        useEffect, useState,
        } from "../../../index";
import '../../../../../public/css/party_tasks.css';

const Party = () => {

    return(
        <section className="container party-section">
            <div className="party-nav">
                <div className="party-nav-item party-active-nav"><Link to="/party">Party</Link></div>
                <div className="party-nav-item"><Link to="/group_tasks">Group Tasks</Link></div>
            </div>
            <div className="party-content" >
                <h1>PARTY LANDING PAGE</h1>
            </div>
        </section>
    )
}

export default Party;

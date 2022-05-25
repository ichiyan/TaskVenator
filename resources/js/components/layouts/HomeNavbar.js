import React from "react";
import {Link} from 'react-router-dom';

const HomeNavbar = ({isLoggedIn}) => {

    return (
        <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
                <li><Link className="active" to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/features">Features</Link></li>
                <li><Link to="">FAQs</Link></li>
                <li><Link to="">Pricing</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                {
                    isLoggedIn === "true"
                    ? <li><Link to="/tasks">My Tasks</Link></li>
                    : null
                }
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
    );
}

export default HomeNavbar;


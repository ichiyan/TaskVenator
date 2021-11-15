import React from "react";
import {Link} from 'react-router-dom';

const HomeNavbar = () => {
    return (
        <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
                <li><Link className="active" to="/home">Tasks</Link></li>
                <li><Link to="">Inventory</Link></li>
                <li><Link to="">Shop</Link></li>
                <li><Link to="">Features</Link></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
    );
}

export default HomeNavbar;

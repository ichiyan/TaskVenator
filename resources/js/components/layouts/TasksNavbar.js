import React from "react";
import {Link} from 'react-router-dom';

const TasksNavbar = () => {
    return (
        <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
                <li><Link className="true" to="/tasks">Tasks</Link></li>
                <li><Link to="">Inventory</Link></li>
                <li><Link className="true" to="/shop">Shop</Link></li>
                <li><Link to="">Party</Link></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
    );
}

export default TasksNavbar;

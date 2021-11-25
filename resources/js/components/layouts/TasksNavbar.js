import {Link, React} from "../../index";

const TasksNavbar = () => {
    return (
        <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
                <li><Link className="active" to="/tasks">Tasks</Link></li>
                <li><Link to="">Inventory</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/party">Party</Link></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
    );
}

export default TasksNavbar;

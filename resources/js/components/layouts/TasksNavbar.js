import {Link, React} from "../../index";

const TasksNavbar = ({active}) => {
    return (
        <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
                <li><Link className={active==="tasks"? "active":""} to="/tasks">Tasks</Link></li>
                <li><Link className={active==="inventory"? "active":""} to="/inventory">Inventory</Link></li>
                <li><Link className={active==="shop"? "active":""} to="/shop">Shop</Link></li>
                <li><Link className={active==="party"? "active":""} to="/party">Party</Link></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
    );
}

export default TasksNavbar;

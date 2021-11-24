import React from "react";
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from "../auth/Login";
import Register from "../auth/Register";
import Shop from "../pages/shop/shop";
import GroupTasks from "../pages/party/GroupTasks";

const AppRouter = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path='/register' element={<Register/>}></Route>
                    <Route path='/login' element={<Login/>}></Route>
                    <Route path='/shop' element={<Shop/>}></Route>
                    <Route path='/group_tasks' element={<GroupTasks/>}></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default AppRouter;

if (document.getElementById('app')) {
    ReactDOM.render(<AppRouter />, document.getElementById('app'));
}

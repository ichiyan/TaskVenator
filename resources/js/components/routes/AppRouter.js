import React from "react";
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import axios from 'axios';

import Auth from "../pages/Auth";
import Shop from "../pages/shop/shop";
import Home from "../pages/Home";
import Party from "../pages/party/Party";
import GroupTasks from "../pages/party/GroupTasks";
import Tasks from "../pages/Tasks";
import All from "../pages/shop/All";
import Potions from "../pages/shop/Potions";
import Weapons from "../pages/shop/Weapons";
import Outfit from "../pages/shop/Outfit";

axios.defaults.baseURL = "http://127.0.0.1:8000/";
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.withCredentials = true;

axios.interceptors.request.use(function (config){
    const token = localStorage.getItem('auth_token');
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
});

const AppRouter = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path='/' exact element={<Home/>}></Route>
                    <Route path='/register' element={<Auth page="register"/>}></Route>
                    <Route path='/login' element={<Auth page="login"/>}></Route>
                    <Route path='/tasks' element={<Tasks/>}></Route>
                    <Route path='/shop' element={<Shop/>}></Route>
                    <Route path='/party' element={<Party/>}></Route>
                    <Route path='/group_tasks' element={<GroupTasks/>}></Route>
                    <Route path='/all' element={<All/>}></Route>
                    <Route path='/potions' element={<Potions/>}></Route>
                    <Route path='/weapons' element={<Weapons/>}></Route>
                    <Route path='/outfit' element={<Outfit/>}></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default AppRouter;

if (document.getElementById('app')) {
    ReactDOM.render(<AppRouter />, document.getElementById('app'));
}

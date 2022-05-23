import React from "react";
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import axios from 'axios';

import Auth from "../pages/Auth";
import Home from "../pages/Home";
import Tasks from "../pages/Tasks";
import { CharacterCustomization } from "../..";


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
                    <Route path='/character_customization' element={<Auth page="character_customization"/>}></Route>
                    <Route path='/login' element={<Auth page="login"/>}></Route>
                    <Route path='/tasks' element={<Tasks tab="tasks"/>}></Route>
                    <Route path='/party' element={<Tasks tab="party"/>}></Route>
                    <Route path='/group_tasks' element={<Tasks tab="group_tasks"/>}></Route>
                    <Route path='/shop' element={<Tasks tab="shop"/>}></Route>
                    <Route path='/inventory' element={<Tasks tab="inventory"/>}></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default AppRouter;

if (document.getElementById('app')) {
    ReactDOM.render(<AppRouter />, document.getElementById('app'));
}

import React from "react";
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import axios from 'axios';

import Landing from "../pages/Landing";
import Auth from "../pages/Auth";
import Shop from "../pages/shop/shop";
import Home from "../pages/Home";

axios.defaults.baseURL = "http://127.0.0.1:8000/";
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.withCredentials = true;

const AppRouter = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path='/' exact element={<Landing/>}></Route>
                    <Route path='/register' element={<Auth page="register"/>}></Route>
                    <Route path='/login' element={<Auth page="login"/>}></Route>
                    <Route path='/home' element={<Home/>}></Route>
                    <Route path='/shop' element={<Shop/>}></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default AppRouter;

if (document.getElementById('app')) {
    ReactDOM.render(<AppRouter />, document.getElementById('app'));
}

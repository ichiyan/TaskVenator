import axios from "axios";
import React from "react";
import {Link, useNavigate} from 'react-router-dom';
import HomeNavbar from "./HomeNavbar";
import LandingNavbar from "./LandingNavbar";

const Header = ({page}) => {

    const navigate = useNavigate();

    const logoutHandler = (e) => {
        e.preventDefault();
        axios.post(`api/logout`).then(res => {
            if(res.data.status === 200){
                localStorage.removeItem('auth_token');
                localStorage.removeItem('auth_name');
                console.log(res.data.message);
                navigate('/');
            }
        });
    }

    var trailingButtons = '';
    if(!localStorage.getItem('auth_token')){
        trailingButtons = (
            <Link to="/register" className="get-started-btn">Get Started</Link>
        )
    }else{
        trailingButtons = (
            // replace with user icon
            <Link to="" onClick={logoutHandler} className="get-started-btn">Log out</Link>
        )
    }

    return (
        <header id="header" className="fixed-top">
            <div className="container d-flex justify-content-between align-items-center">
                 <h1 className="logo me-auto"><Link to="/">TaskVenator</Link></h1>
                 {page === "home" ? <HomeNavbar/> : <LandingNavbar/>}
                 {trailingButtons}
            </div>
        </header>
    );
}

export default Header;


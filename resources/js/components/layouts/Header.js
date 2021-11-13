import React from "react";
import {Link} from 'react-router-dom';
import LandingNavbar from "./LandingNavbar";

const Header = () => {
    return (
        <header id="header" class="fixed-top">
            <div class="container d-flex justify-content-between align-items-center">
                 <h1 class="logo me-auto"><Link to="">TaskVenator</Link></h1>
                 <LandingNavbar/>
                 <Link to="" className="get-started-btn">Get Started</Link>
            </div>
        </header>
    );
}

export default Header;


import { useEffect } from "react";
import React from "react";


import Header from "../layouts/Header";
import Register from "../auth/Register";
import Login from "../auth/Login";

const Auth = ({page}) =>{

    useEffect(() => {
        particlesJS.load('particles-js', 'particles.json');
    }, []);

    return (
        <div>
           <Header page="home"/>
           <div id="particles-js"></div>
            {page === "login" ? <Login/> : <Register/>}
        </div>
    );
}

export default Auth;

import {Header, Link, React,Login,
    useEffect, useState,Register
    } from "../../index";

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

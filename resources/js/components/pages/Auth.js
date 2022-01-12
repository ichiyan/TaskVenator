import {Header, Link, React, useEffect, useState,
        Login, Register, CharacterCustomization,
    } from "../../index";


const Auth = ({page}) =>{

    useEffect(() => {
        particlesJS.load('particles-js', 'particles.json');
    }, []);

    var renderPage = ''
    if(page === "login"){
        renderPage = <Login/>;
    }else if(page === "register"){
        renderPage = <Register/>;
    }else if (page === "character_customization"){
        renderPage = <CharacterCustomization/>;
    }

    return (
        <div>
           <Header page="home"/>
           <div id="particles-js"></div>
            {renderPage}
        </div>
    );
}

export default Auth;

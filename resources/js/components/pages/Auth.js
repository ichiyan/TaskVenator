import {Header, Link, React, useEffect, useState, Fragment,
        Login, Register, CharacterCustomization,
    } from "../../index";


const Auth = ({page}) =>{

    useEffect(() => {
        if(page != "character_customization"){
            particlesJS.load('particles-js', 'particles.json');
        }else{
            document.body.classList.add('internal-pages');
        }
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
           {
               page != "character_customization"
               ? <Fragment>
                    <div id="particles-js"></div>
                    {renderPage}
                 </Fragment>
               : <Fragment>
                   {renderPage}
                 </Fragment>
           }
        </div>
    );
}

export default Auth;

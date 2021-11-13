import React, { useEffect } from "react";

import Header from "../layouts/Header";


const Register = () => {

    useEffect(() => {
        particlesJS.load('particles-js', 'particles.json');
    }, []);

    return (
        <div>
           <Header/>
           <div id="particles-js">
                <h1 className="test">TEST</h1>
           </div>
        </div>
    );
}

export default Register;

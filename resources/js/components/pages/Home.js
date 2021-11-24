import React, { useEffect, useState } from "react";
import $ from "jquery";
import {Link} from 'react-router-dom';

import Header from "../layouts/Header";

const Home = () => {

    const [isLogged, setIsLogged] = useState();

    useEffect(() => {
        $(window).resize(function() {
            $("#landing-pixels").html("");
            var grid = 60,
                windowWidth = $(window).width(),
                windowHeight = $(window).height() * 0.50,
                pW = windowWidth/grid,
                pH = pW,
                rows = parseInt(windowHeight/pH);
            var r = rows;
            while (r > 0){
                var p = 0;
                while (p < grid) {
                    var tenth = r/rows;
                    var randomNumber = r < rows/10 ? (Math.random() * tenth) : (Math.random() * tenth) + (tenth - .1);
                    var opacity = randomNumber.toFixed(2);
                    $("#landing-pixels").append("<div style='opacity: "+opacity+"; height: "+pH+"px; width: "+pW+"px' class='landing-pixel'></div>");
                    p++;
                }
                r--;
            }
        }).resize();

    }, []);

    var heroButtons = '';

    if(!localStorage.getItem('auth_token')){
        heroButtons = (
           <div>
                <Link to="/register" className="btn-get-started">Get Started</Link>
                <Link to="/login" className="btn-login">Log In</Link>
           </div>
        );
    }else{
        heroButtons = (
            <div>
                 <Link to="/tasks" className="btn-get-started">Get Tasks Done</Link>
            </div>
         );
    }

    return (
        <div>
            <Header page="home"/>
            {/* Hero Section */}
            <section id="hero" className="d-flex justify-content-center align-items-center">
                <div className="container position-relative" data-aos="zoom-in" data-aos-delay="100">
                    <h1>Lorem Ipsum,<br/>At vero eos et </h1>
                    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
                    {heroButtons}
                </div>
            </section>
            <div id="landing-pixels"></div>
        </div>
    );
}

export default Home;

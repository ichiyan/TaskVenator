import React, { useEffect } from "react";
import $ from "jquery";

import Header from "../layouts/Header";

const Landing = () => {

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


    return (
        <div>
            <Header/>
            {/* Hero Section */}
            <section id="hero" class="d-flex justify-content-center align-items-center">
                <div class="container position-relative" data-aos="zoom-in" data-aos-delay="100">
                <h1>Lorem Ipsum,<br/>At vero eos et </h1>
                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
                <a href="/register" class="btn-get-started">Get Started</a>
                </div>
            </section>
            <div id="landing-pixels"></div>
        </div>
    );
}

export default Landing;

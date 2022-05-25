import axios from "axios";
import {Header, Footer, Link, React,$,
    useEffect, useState} from "../../index";

const Home = () => {

    const [isLogged, setIsLogged] = useState();

    useEffect(() => {
        $(window).resize(function() {
            $("#landing-pixels").html("");
            var grid = 60,
                windowWidth = $(window).width(),
                windowHeight = $(window).height() * 0.40,
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

        document.body.classList.remove('internal-pages');

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
                <div className="container col-4" data-aos="zoom-in" data-aos-delay="100">
                    <h1>Transform tasks<br/>into a game</h1>
                    <h2>Become productive and complete tasks while having fun at the same time!</h2>
                    {heroButtons}
                </div>
                <div className="container col-4">
                    <img src="/images/home.png"/>
                </div>
            </section>
            <div id="landing-pixels"></div>

            {/* Details */}
            <div id="productivity" className="d-flex justify-content-center align-items-center">
                <h1>Increase your productivity</h1>
            </div>
            <div id="details" className="d-flex justify-content-center align-items-center">
                <div className="container col-md-offset-3">
                    <img src="/images/levelup.png"/>
                    <h2>Completing tasks allows you to level up and earn points for the shop</h2>
                </div>
                <div className="container col-md-offset-3">
                    <img src="/images/shop.png"/>
                    <h2>You can use points to buy items for battles or customize your character's looks and gear</h2>
                </div>
                <div className="container col-md-offset-3">
                    <img src="/images/friends.png"/>
                    <h2>Complete tasks alone or team up with friends</h2>
                </div>
            </div>
            <Footer page="home"/>
        </div>
    );
}

export default Home;

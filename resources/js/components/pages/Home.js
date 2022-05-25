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
            <section id="top" className="d-flex justify-content-center align-items-center" data-aos="zoom-in" data-aos-delay="100">
                <h1><b>About TaskVenator</b></h1>
            </section>
            <section id="details" className="d-flex justify-content-center align-items-center" data-aos="zoom-in" data-aos-delay="100">
                <div className="container col-6">
                    <h3>TaskVenator is a productivity application, mainly a task manager, that incorporates gamification to boost productivity. 
                            The aim is to utilize gamified elements such as in-game avatars, party, quests, rewards, and battles to trigger a gratifying 
                            sense of accomplishment, enjoyment, creativity, social influence, and engagement with the mind to ultimately increase motivation 
                            and productivity.</h3>
                </div>
            </section>

            {/* Details */}
            <section id="top" className="d-flex justify-content-center align-items-center" data-aos="zoom-in" data-aos-delay="100">
                <h1><b>Features</b></h1>
            </section>
            <section id="features" className="d-flex justify-content-center align-items-center" data-aos="zoom-in" data-aos-delay="100">    
                <div className="container col-4">
                    <img src="/images/task.png" width="45%"/>
                    <h2><b>ToDo List</b></h2>
                    <h3>Users can create tasks and complete them to earn currency. It is divided into 3 types: In Progress, Repeating Tasks, and Done. 
                        If tasks are not completed, a penalty will be given: reducing player health and losing gems.</h3>
                </div>  
                <div className="container col-4"> 
                    <img src="/images/character.png" width="50%"/>    
                    <h2><b>Character Creation and Customization</b></h2>
                    <h3>Users will be greeted with the Character Creation when they first register, where they can choose their class. You can earn in-game currency to customize your 
                        character's looks or increase their stats.</h3>
                </div>
            </section>
            <section id="features" className="d-flex justify-content-center align-items-center" data-aos="zoom-in" data-aos-delay="100">
                <div className="container col-4">  
                    <img src="/images/currency.png" width="40%"/>
                    <h2><b>In-Game Currency</b></h2>
                    <h3>This currency can be earned by completing tasks and used to buy items and gear in the shop.</h3>
                </div>
                <div className="container col-4">  
                    <img src="/images/shop.png" width="55%"/>
                    <h2><b>Shop/Inventory</b></h2>
                    <h3>This is where players can buy items and gear using their earned currency to buy items and gear to help increase player stats or outfits to customize their 
                        character's looks.</h3>
                </div>
            </section>
            <section id="features" className="d-flex justify-content-center align-items-center" data-aos="zoom-in" data-aos-delay="100">
                <div className="container col-4"> 
                    <img src="/images/friends.png" width="90%"/>
                    <h2><b>Party</b></h2>
                    <h3>You can create or join a party with your friends and strangers to complete tasks and battle enemies together.</h3>
                </div>
                <div className="container col-4"> 
                    <img src="/images/battle.png" width="70%"/>
                    <h2><b>Battles</b></h2>
                    <h3>Once you join a party, you can engage in battles with your fellow party members. Joining battles allows you to earn more rewards. Attacking in battles are in the 
                        form of completing tasks. The damage when not completing a task is greater in battle than solo.
                    </h3>
                </div>
            </section>
            <Footer page="home"/>
        </div>
    );
}

export default Home;

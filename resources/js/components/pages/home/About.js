import {React} from "../../../index";

const About= () => {
    return(
        <div>
            <section id="contact" className="d-flex justify-content-center align-items-center" data-aos="zoom-in" data-aos-delay="100">
                <div className="about col-4">
                    <img src="/images/productivity.png"></img>
                </div>
                <div className="about col-4">
                    <h1><b>About TaskVenator</b></h1>
                    <h3>TaskVenator is a productivity application, mainly a task manager, that incorporates gamification to boost productivity. 
                        The aim is to utilize gamified elements such as in-game avatars, party, quests, rewards, and battles to trigger a gratifying 
                        sense of accomplishment, enjoyment, creativity, social influence, and engagement with the mind to ultimately increase motivation 
                        and productivity.</h3>
                </div>
            </section>
        </div>
    );
}

export default About;
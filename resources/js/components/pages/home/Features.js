import {React} from "../../../index";

const Features = () => {
    return(
        <div>
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
                    <img src="/images/character.png"/>    
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
        </div>
    );
}

export default Features;
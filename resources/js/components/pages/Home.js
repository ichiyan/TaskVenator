import React from "react";
import AvatarHeader from "../layouts/AvatarHeader";
import Header from "../layouts/Header";

const Home = () => {
    return (
        <div className="internal-pages">
            <Header page="home"/>
            <AvatarHeader/>
        </div>
    );
}

export default Home;

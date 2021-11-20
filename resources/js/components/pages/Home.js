import React from "react";
import { Button, DropdownButton } from "react-bootstrap";
import Header from "../layouts/Header";


const Home = () => {
    return (
        <div>
            <Header page="home"/>
            <br/><br/><br/>
            <h1>HOME PAGE</h1>
            <DropdownButton></DropdownButton>
        </div>
    );
}

export default Home;

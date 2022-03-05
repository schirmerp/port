import React from "react";
import Mailto from "./mail";
import Nav from "./nav";


function Contact(){

 

    return(
        <>
        <Nav/>
        <div className="contact">
            <h1>Contact Me:</h1>
            <h2>joey.newcode@gmail.com</h2>
            <h2>513-460-7106</h2>
            <Mailto email="joey.newcode@gmail.com" subject="I want to Hire You!" body="I want to hire you." children={"Hire Me"}>
            Hire me!
            </Mailto>
        </div>
        </>
    )
}

export default Contact
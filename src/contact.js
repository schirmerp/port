import React from "react";
import Mailto from "./mail";
import Nav from "./nav";


function Contact(){

 

    return(
        
        <div className="contact">
        <Nav/>
           
            <Mailto email="joey.newcode@gmail.com" subject="I want to Hire You!" body="I want to hire you." children={"Hire Me"}>
            Hire me!
            </Mailto>
        </div>
        
    )
}

export default Contact
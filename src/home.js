import React from "react";
import Profile from "./profile"
import Nav from "./nav";
import profile from "./profile.png"
import Skills from "./skills";
import ProCard from "./proCard";
import { Icon } from '@iconify/react';
import './card.css'

export default function Home(){
    

    return(
        <div className="container">
            <Nav />
            <ProCard/>
             <p className="homeP">My first taste of coding was with Procter and Gamble. I signed my self up for the new \"Scripting Team\" that was being formed in my divison. I wasnt exactly aware of what I had just signed up for, however it wasn't long before I was writing small automation scripts that would be implemened site wide. That was my first taste of how powerful computer coding could be. I detoured away from coding for almost a decade after that, instead pursuing a more physically demanding challenge. After ascending to manager of the moving company I was with(a new role/position the 15 year old company created specifically for me), the next 10 years would be spent succssefully running a small business in an incrediebly competitive industry. The dream of coding never left me though, and I eventually set out on a path of teaching myself how to be a software developer</p>
            <Skills/>
        </div>
    )
}
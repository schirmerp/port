import React from "react";
import "./card.css"
import profile from "./profile.png"
import { Icon } from '@iconify/react';
    

export default function ProCard(){

    return(
        <div className="card">
        <div className="cardImage">
            <img src={profile} alt="blank"/>
        </div>
        <ul className="socialIcons">
            <li>
                <a href="https://www.facebook.com/patrick.schirmer.710">
                    <Icon icon='bx bxl-facebook'></>
                </a>
            </li>
            <li>
                <a href="https://twitter.com/Jo3cod3">
                    <Icon icon='bx bxl-twitter' ></>
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/patrick-schirmer-27578722a/">
                    <Icon icon='bx bxl-linkedin-square' ></>
                </a>
            </li>
            <li>
                <a href="https://github.com/schirmerp?tab=repositories">
                    <Icon icon='bx bxl-github' ></>
                </a>
            </li>
        </ul>
        <div className="details">
            <h2>Joe Code</h2>
            <span className="jobTitle">Web Developer</span>
        </div>
    </div>
    )
}

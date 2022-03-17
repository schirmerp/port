import React from "react";
import "./card.css";
import profile from "./profile.png";
import { Icon } from '@iconify/react';
import Nav from "./nav";    

export default function ProCard(){

    return(
        
        <div className="card">
        <div className="cardImage">
            <img src={profile} alt="blank"/>
        </div>
        <ul className="socialIcons">
            <li>
                <a href="https://www.facebook.com/patrick.schirmer.710">
                    <Icon icon='bxl-facebook'></Icon>
                </a>
            </li>
            <li>
                <a href="https://twitter.com/Jo3cod3">
                    <Icon icon='bxl-twitter' ></Icon>
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/patrick-schirmer-27578722a/">
                    <Icon icon='bxl-linkedin-square' />
                </a>
            </li>
            <li>
                <a href="https://github.com/schirmerp?tab=repositories">
                    <Icon icon='bxl-github' />
                </a>
            </li>
        </ul>
        <div className="details">
            <h2>Patrick Schirmer</h2>
            <span className="jobTitle">Web Developer & Cloud Pracitioner</span>
        </div>
    </div>
    
    )
}

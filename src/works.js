import React from "react";
import "./App.css"
import { data } from "./data";
import Nav from "./nav";


export default function Works(){

    return(
        <div className="works">
            <Nav />
            <h1>My Projects:</h1>
            <p className="worksInfo">These projects were built to learn and utilize different skill sets required in full stack web development. None of them were/are intended to be a final product.</p>
             {data.map ((data, key) =>{
                return(
                    <>
                    <a href={data.link} rel="noopener noreferrer" target="_blank" key={key}>{data.project}</a>
                    <br/>
                    </>
                )
            })}
        </div>
    )
}


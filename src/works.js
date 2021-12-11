import React from "react";

import { data } from "./data";
import Nav from "./nav";


export default function Works(){

    return(
        <div className="works">
            <Nav />
            <h1>My Projects:</h1>
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


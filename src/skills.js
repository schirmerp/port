import React from "react";
import { skillData } from "./skillData";


export default function Skills(){

  
  

    return(
        <div className="skills">
            <ul>
                {skillData.map ((skillData, key) =>{
                    return(
                        
                        <li key={key}>{skillData.skill}</li>
                    )
                })}
            </ul>
        </div>
    )
}
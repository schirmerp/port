import React from "react";
import {Link} from "react-router-dom"; 


function Nav(){

    return(
        <nav className="nav">
            <ul>
           
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="./works">
                 <li>   My Projects</li>
                </Link>
            </ul>
        </nav>
    )
}
export default Nav
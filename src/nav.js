import React from "react";
import {Link} from "react-router-dom"; 


function Nav(){

    return(
        <nav className="nav">
            <ul>
           
                <Link to="/" replace="true">
                    <li>Home</li>
                </Link>
                <Link to="./works" replace="true">
                 <li>   My Projects</li>
                </Link>
                <Link to="./contact" replace="true">
                 <li> Contact Me</li>
                </Link>
            </ul>
        </nav>
    )
}
export default Nav
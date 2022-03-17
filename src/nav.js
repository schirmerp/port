import React from "react";
import {Link} from "react-router-dom"; 


function Nav(){

    return(
        
        <nav className="nav">
            <ul>
           
                <Link to="/" replace>
                    <li>Home</li>
                </Link>
                <Link to="/works" replace>
                 <li>   My Projects</li>
                </Link>
                <Link to="/contact" replace>
                 <li> Contact Me</li>
                </Link>
                <Link to="/proCard" replace>
                 <li> Profile Card</li>
                </Link>
            </ul>
        </nav>
        
    )
}
export default Nav
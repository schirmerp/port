import React from "react";
import {Link} from "react-router-dom"; 
import {Routes, Route, HashRouter} from "react-router-dom"
import Home from "./home";
import Contact from "./contact";
import Works from "./works";


function Nav(){

    return(
        <nav className="nav">
            <ul>
            <HashRouter>
            <Routes>
                <Route path="/" element={<Home/>}>
                    <li>Home</li>
                </Route>
                <Route path="./works" element={<Works/>}>
                 <li>   My Projects</li>
                </Route>
                <Route path="./contact" element={<Contact/>}>
                 <li> Contact Me</li>
                </Route>
            </Routes>
            </HashRouter>
            </ul>
        </nav>
    )
}
export default Nav
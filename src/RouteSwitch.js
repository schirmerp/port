import {HashRouter, Routes, Route} from "react-router-dom"
import Works from "./works"
import App from "./App"
import React from "react"
import Contact from "./contact"
import ProCard from "./proCard"

const RouteSwitch = () => {
    return(
        <HashRouter>
            <Routes>
                <Route path="/" element={<App />}></Route>
                <Route path="/works" element={<Works />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
                <Route path="/proCard" element={<ProCard />}></Route>
            </Routes>
        </HashRouter>
    )
}

export default RouteSwitch
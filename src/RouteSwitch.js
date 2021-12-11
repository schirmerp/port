import {HashRouter, Routes, Route} from "react-router-dom"
import Works from "./works"
import App from "./App"
import React from "react"


const RouteSwitch = () => {
    return(
        <HashRouter>
            <Routes>
                <Route path="/" element={<App />}></Route>
                <Route path="/works" element={<Works />}></Route>
            </Routes>
        </HashRouter>
    )
}

export default RouteSwitch
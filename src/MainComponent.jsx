import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { RoutesAndRouter } from "./router";


export default function MainComponent(){
    return(
        <React.Fragment>
            <Router>
                <RoutesAndRouter />
            </Router>
        </React.Fragment>
    )
}
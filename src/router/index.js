import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../components/login/Login";
import Register from "../components/register/Register";



export const RoutesAndRouter= () =>{
    //let history = useHistory();
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/register" component={Register} />
            </Switch>
        </Router>
    )
    
}
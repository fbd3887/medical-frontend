import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from "../components/contact/Contact";
import AccountInformation from "../components/innerpages/AccountInformation";
import Education from "../components/innerpages/Education";
import Login from "../components/login/Login";
import Register from "../components/register/Register";




export const RoutesAndRouter= () =>{
    //let history = useHistory();
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/accountinformation" component={AccountInformation}/>
                <Route exact path="/education" component={Education} />
            </Switch>
        </Router>
    )
    
}
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Contact from '../components/contact/Contact'
import AccountInformation from '../components/innerpages/AccountInformation'
import AiDoctor from '../components/innerpages/AiDoctor'
import AiDoctorForm from '../components/innerpages/AiDoctorForm'
import Analytics from '../components/innerpages/Analytics'
import Discount from '../components/innerpages/Discount'
import Education from '../components/innerpages/Education'
import Login from '../components/login/Login'
import Register from '../components/register/Register'

export const RoutesAndRouter = () => {
  //let history = useHistory();
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/aidoctor" component={AiDoctor}/>
        <Route exact path="/aidoctorform" component={AiDoctorForm}/>
        <Route exact path="/discount" component={Discount}/>
        <Route exact path="/account" component={AccountInformation} />
        <Route exact path="/education" component={Education} />
        <Route exact path="/analytics" component={Analytics} />
      </Switch>
    </Router>
  )
}

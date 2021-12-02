import React, {useEffect} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {getUser} from '../api/axios'
import { setLoggedUser } from '../redux/actions/userActions'

import Contact from '../components/contact/Contact'
import AccountInformation from '../components/innerpages/AccountInformation'
import AiDoctor from '../components/innerpages/AiDoctor'
import AiDoctorForm from '../components/innerpages/AiDoctorForm'
import Analytics from '../components/innerpages/Analytics'
import Discount from '../components/innerpages/Discount'
import Education from '../components/innerpages/Education'
import Login from '../components/login/Login'
import Register from '../components/register/Register'
import EditProfile from '../components/editprofile/EditProfile'

export const RoutesAndRouter = () => {
  const dispatch = useDispatch();
  //let history = useHistory();
  const user = useSelector(state => state.user)
  useEffect(async()=>{
    if(window.localStorage.getItem("user-token") !== null){
    let res = await getUser();
    if(res && res.data.user[0]){
     dispatch(setLoggedUser(res.data.user[0]))
    }
    }
  }, [])
  
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/edit-profile" component={EditProfile} />
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

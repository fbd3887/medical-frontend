import React from "react";
import './login.scss';
import logo2 from '../../images/logo2.png';
import { Link } from "react-router-dom";

export default function Login(){
    return(
        <div className="loginBackground">
            <div className="row min-vh-100 ">
                <div className="col-md-5 my-auto leftlogin">
                    <h1 className="text-center m-5">The best physiological maker: AMH</h1>
                    <h3 className="text-center  m-5">Not for fertility pr other people,<br/> start understaning your body with AMH</h3>
                    <h3 className="">Do not have an account yet? <Link to="/register">Click here to register</Link></h3>
                </div>
                <div className="col-md-7 my-auto text-center">
                    <div className="loginFormDiv">
                        <img src={logo2} alt="" />
                        <div className="loginHeading text-left">
                            <h1>Log In</h1>
                        </div>
                        <div className="loginFeild">
                            <div className="innerFieldDiv">
                                <label>EMAIL</label><br/>
                                <input type="email"/>
                            </div>
                        </div>
                        <div className="loginFeild">
                            <div className="innerFieldDiv">
                                <label>PASSWORD <span className="forgetLogin">FORGET?</span></label>
                                <input type="password"/>
                            </div>
                        </div>
                        <Link to="/accountinformation"><button className="btn">
                            Login
                        </button></Link>
                    </div>
                    
                </div>
            </div>
            

        </div>
        
    )
}
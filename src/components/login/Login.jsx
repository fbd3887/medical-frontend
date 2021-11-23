import React, {useState} from 'react'
import '../../scss/outerpage.scss'
import logo2 from '../../images/logo2.png'
import { Link } from 'react-router-dom'
import {login} from '../../api/axios'

export default function Login() {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [isLoading, setIsLoading] = useState(false)
const handleLogin =()=>{
  setIsLoading(true)
  login({
    "email_id": email,
    "password": password
  }, setIsLoading)
}

  return (
    <div className="loginBackground">
      <div className="row min-vh-100 login-contaner">
        <div className="col-md-5 my-auto leftlogin">
          <h1 className="text-center m-5">生理的最佳指標 AMH</h1>
          <h3 className="text-center  m-5">
            不是為了生育, 不是為了别人，
            <br /> 開始通過 AMH 了解您的身體
          </h3>
          <h3 className="">
            沒有帳戶？ <Link to="/register">點這註冊</Link>
          </h3>
        </div>
        <div className="col-md-7 mt-4 mt-md-auto my-auto text-center">
          <div className="loginFormDiv">
            <img src={logo2} alt="" />
            <div className="loginHeading text-left">
              <h1>登入</h1>
            </div>
            <div className="loginFeild">
              <div className="innerFieldDiv">
                <label>EMAIL</label>
                <br />
                <input type="email"  value={email} onChange={(e)=>setEmail(e.target.value)} />
              </div>
            </div>
            <div className="loginFeild">
              <div className="innerFieldDiv">
                <label>
                  PASSWORD <span className="forgetLogin">FORGET?</span>
                </label>
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
              </div>
            </div>
            {/* <Link to="/analytics"> */}
              <button className="btn" onClick={handleLogin}>
                {isLoading ? 'Loading ...': 'Login'}
              </button>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </div>
  )
}

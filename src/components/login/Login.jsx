import React, {useState, useEffect} from 'react'
import { useDispatch , useSelector} from 'react-redux'
import '../../scss/outerpage.scss'
import logo2 from '../../images/logo2.png'
import { Link, Redirect } from 'react-router-dom'
import { validateLogin } from '../../utils/validation'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {login, getUser} from '../../api/axios'
import { setLoggedUser } from '../../redux/actions/userActions'

export default function Login() {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [isLoading, setIsLoading] = useState(false)
const [errors, setErrors] = useState({})
const [isSubmitted, setIsSubmitted] = useState(false)
const dispatch =useDispatch()
const user = useSelector(state => state.user)
useEffect(() => {
  if (Object.keys(errors).length === 0 && isSubmitted) {
    loginAPI();
  } else {
    Object.keys(errors).map((key, index) => {
      toast.error(errors[key]);
    });
  }
}, [errors]);

useEffect(() => {
  window.localStorage.getItem("user-token") !== null  && getUserData()
}, [])

const handleLogin =()=>{
  setErrors(validateLogin({
    "email":email,
    "password":password
  }))
  setIsSubmitted(true)
}

const loginAPI=async()=>{  
  setIsLoading(true)
  const response = await login({
    "email_id": email,
    "password": password
  }, setIsLoading, toast)

  if(response && response.data.token){
    let token = response.data.token
    window.localStorage.setItem('user-token',JSON.stringify(token));
    getUserData()
    setIsLoading(false);
  }
}
const getUserData=async()=>{
  const response = await getUser()
  if(response){
  dispatch(setLoggedUser(response.data.user[0]
    ))
  window.location.replace('/analytics')
  }
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
                <input type="email"  value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email'/>
              </div>
            </div>
            <div className="loginFeild">
              <div className="innerFieldDiv">
                <label>
                  PASSWORD <span className="forgetLogin">FORGET?</span>
                </label>
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password"/>
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
      <ToastContainer />
    </div>
  )
}

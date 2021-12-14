import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Lightlogo from '../../images/huayulogo-light.png'
import AnalyticsIcon from '../../images/icon1.png'
import AidoctorIcon from '../../images/icon2.png'
import AccountInfoIcon from '../../images/icon3.png'
import AboutIcon from '../../images/icon4.png'
import SpecialIcon from '../../images/icon5.png'
import LogoutIcon from '../../images/logouticon.png'
import MenuIcon from '../../images/mobilemenuicon.png'
import '../../scss/innerpages.scss'

export default function Sidebar() {
  const [toggle, setToggle] = useState(false)

  const handleToggleClick = () => {
    setToggle(!toggle)
  }

  const logout=()=>{
    window.localStorage.removeItem('user-token');
    window.location.href='/'
  }
  return (
    <div className="col-md-2 sidebar  ">
      <div className="row mobileHide desktopst">
        <div className="desktoprel">
          <div className="navLogoContainer">
            <div className="col-md-12 leftmenulogo text-center">
              <img src={Lightlogo} alt="" />
            </div>
            <span className="mobilemenudiv pt-2 text-center" onClick={handleToggleClick}>
              <img src={MenuIcon} alt="" className="" />
            </span>
          </div>
          <div className={!toggle ? "menuItems" : "showMobileMenu"}>
            <div className="col-md-12 leftmenuitem">
              <Link to="/analytics">
                <p>
                  <img src={AnalyticsIcon} alt="" /> 比較圖
                </p>
              </Link>
            </div>
            <div className="col-md-12 leftmenuitem">
              <Link to="/aiDoctor">
                <p>
                  <img src={AidoctorIcon} alt="" /> AI 醫生診斷
                </p>
              </Link>
            </div>
            <div className="col-md-12 leftmenuitem">
              <Link to="/account">
                <p>
                  <img src={AccountInfoIcon} alt="" /> 會員資料
                </p>
              </Link>
            </div>
            <div className="col-md-12 leftmenuitem">
              <Link to="/education">
                <p>
                  <img src={AboutIcon} alt="" />
                  AMH 衛教
                </p>
              </Link>
            </div>
            <div className="col-md-12 leftmenuitem">
              <Link to="/discount"> 
                <p>
                  <img src={SpecialIcon} alt="" /> 特別折扣
                </p>
              </Link>
            </div>
            <div className="col-md-12 logoutdiv">
                <p onClick={logout}>
                  <img src={LogoutIcon} alt="" /> 登出
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

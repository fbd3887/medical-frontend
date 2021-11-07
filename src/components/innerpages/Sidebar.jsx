import React from "react";
import { Link } from "react-router-dom";
import Lightlogo from '../../images/huayulogo-light.png';
import AnalyticsIcon from '../../images/icon1.png';
import AidoctorIcon from '../../images/icon2.png';
import AccountInfoIcon from '../../images/icon3.png';
import AboutIcon from '../../images/icon4.png';
import SpecialIcon from '../../images/icon5.png';
import LogoutIcon from '../../images/logouticon.png';
import Mobilelogo from '../../images/mobilelogo.png';
import MenuIcon from '../../images/mobilemenuicon.png';
import '../../scss/innerpages.scss';

export default function Sidebar(){
    return(
        <div className="col-md-2 sidebar  ">
            <div className="row mobileHide">
                <div className="col-md-12 leftmenulogo text-center">
                    <img src={Lightlogo} alt="" />
                </div>
                <div className="col-md-12 leftmenuitem">
                    <p><img src={AnalyticsIcon} alt="" /> Analytics</p>
                </div>
                <div className="col-md-12 leftmenuitem">
                    <p><img src={AidoctorIcon} alt="" /> AI Doctor Diagnostics</p>
                </div>
                <div className="col-md-12 leftmenuitem">
                    <Link to="/accountinformation"><p><img src={AccountInfoIcon} alt="" /> Account Information</p></Link>
                </div>
                <div className="col-md-12 leftmenuitem">
                    <Link to="/education"><p><img src={AboutIcon} alt="" /> About AMH</p></Link>
                </div>
                <div className="col-md-12 leftmenuitem">
                    <p><img src={SpecialIcon} alt="" /> Special Discount</p>
                </div>
                <div className="col-md-12 logoutdiv">
                    <p><img src={LogoutIcon} alt="" /> Logout</p>
                </div>
            </div>
            <div className="row desktopHide align-items-center">
                <div className="col-md-12 p-3">
                    <span className="">
                        <img src={Mobilelogo} alt="" className=""/>
                    </span>
                    <span className="mobilemenudiv pt-2 text-center">
                        <img src={MenuIcon} alt=""  className=""/>
                    </span>
                </div>
                
            </div>
        </div>
        
        
    )

}
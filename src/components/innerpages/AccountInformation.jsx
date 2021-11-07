import React from "react";
import { Link } from "react-router-dom";
import '../../scss/innerpages.scss';
import Sidebar from "./Sidebar";

export default function AccountInformation(){
    return(
        <div className="container-fluid">
            <div className="row">
                <Sidebar/>
                <div className="col-md-10 innerpageright">
                    <h1 className="text-center">Account Information</h1>
           
                    <div className="row">
                        <div class="col-md-10 offset-md-1">
                            <div className="formOptionCard ">
                                <div className="row p-5 mt-5 align-items-center">
                                    <div className="col-md-4 text-center">
                                        <p>Lin Huizhen</p>
                                        <span className="colorpill">1995/02/14</span>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="row pt-2 pb-2 align-items-center">
                                            <div className="leftlabel">ID Number</div>
                                            <div className="rightdata">A224981733</div>
                                        </div>
                                        <div className="row pt-2 pb-2 align-items-center">
                                            <div className="leftlabel">Phone Number</div>
                                            <div className="rightdata">0910395730</div>
                                        </div>
                                        <div className="row pt-2 pb-2 align-items-center">
                                            <div className="leftlabel">Email</div>
                                            <div className="rightdata">example@example.com</div>
                                        </div>
                                        <div className="row pt-2 pb-2 align-items-center">
                                            <div className="leftlabel">Occupation</div>
                                            <div className="rightdata">Finance</div>
                                        </div>
                                        <div className="row pt-2 pb-2 align-items-center ">
                                            <div className="leftlabel">Education</div>
                                            <div className="rightdata">Graduate Degree</div>
                                        </div>
                                    </div>
                                </div>
                               
                                
                                
                                
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div class="col-md-10 offset-md-1">
                            <div className="formOptionCard ">
                                <div className="row p-5 mt-5 align-items-center">
                                    <div className="col-md-12">
                                        <h2>Obstetric History</h2>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="row pt-2 pb-2 align-items-center">
                                            <div className="leftlabel">Menstrual Cycle</div>
                                            <div className="rightdata">28 days</div>
                                        </div>
                                        <div className="row pt-2 pb-2 align-items-center">
                                            <div className="leftlabel">Have you been Pregnant Before</div>
                                            <div className="rightdata">Yes, Twice Total</div>
                                        </div>
                                        <div className="row pt-2 pb-2 align-items-center">
                                            <div className="leftlabel">Do You Experiance cramps or pain during your period?</div>
                                            <div className="rightdata">yes</div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="row pt-2 pb-2 align-items-center">
                                            <div className="leftlabel">How much do you bleed?</div>
                                            <div className="rightdata">Heavy Bleeding</div>
                                        </div>
                                        <div className="row pt-2 pb-2 align-items-center">
                                            <div className="leftlabel">Current Lifestyle</div>
                                            <div className="rightdata">Smoking | Alcohol Consumption | Frequently Staying Up | Feeling Stree Out</div>
                                        </div>
                                       
                                    </div>
                                </div>
                               
                                
                                
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
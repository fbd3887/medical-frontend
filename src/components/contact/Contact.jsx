import React from "react";
import Outerheader from "../outerheader/OuterHeader";
import './contact.scss'
export default function Contact(){
    return(
        <div className="outerPage">
            <Outerheader />
            <h1 className="text-center">Contact</h1>
           
            <div className="row">
                <div class="col-md-8 offset-md-2">
                    <div className="formOptionCard ">
                        <h3 className="text-center">Contact Information</h3>
                        <div className="row">
                            <div className="col-md-8 offset-md-2">
                                <div className="row">
                                    <label>Name</label><br/>
                                    <div className="col-md-12 innerFieldDiv">
                                        <input className="form-control" type="text"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-8 offset-md-2">
                                <div className="row">
                                    <label>Date Of Birth</label><br/>
                                    <div className="col-md-4 innerFieldDiv">
                                        <select class="form-select" aria-label="Default select example">
                                            <option selected>YYYY</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                    <div className="col-md-4 innerFieldDiv">
                                        <select class="form-select" aria-label="Default select example">
                                            <option selected>MM</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                    <div className="col-md-4 innerFieldDiv">
                                        <select class="form-select" aria-label="Default select example">
                                            <option selected>DD</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-8 offset-md-2">
                                <div className="row">
                                    <label>ID Number</label><br/>
                                    <div className="col-md-12 innerFieldDiv">
                                        <input className="form-control" type="text"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-8 offset-md-2">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="row">
                                            <label>Phone Number</label><br/>
                                            <div className="col-md-12 innerFieldDiv">
                                                <input className="form-control" type="text"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="row">
                                            <label>Email</label><br/>
                                            <div className="col-md-12 innerFieldDiv">
                                                <input className="form-control" type="email"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-8 offset-md-2 text-center">
                                <button className="btn contactbtn">
                                    contact
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className="text-center">Clinic</h1>
           
            <div className="row">
                <div class="col-md-8 offset-md-2">
                    <div className="ContctOptionCard ">
                        <div className="row">
                            <div className="col-md-7">
                                <div className="row">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.069603940545!2d121.54702211544704!3d25.031711844536193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abcd6f6d08a7%3A0x77dd93bfa48ba4ae!2zMTA2ODEsIFRhaXdhbiwgVGFpcGVpIENpdHksIERh4oCZYW4gRGlzdHJpY3QsIFNlY3Rpb24gMiwgRHVuaHVhIFMgUmQsIDM56JmfMTLmqJM!5e0!3m2!1sen!2sin!4v1635416501552!5m2!1sen!2sin" width="100%" height="450" allowfullscreen="" loading="lazy"></iframe>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="row">
                                    <label>Name</label><br/>
                                    <div className="col-md-12 innerFieldDiv">
                                        <input className="form-control" type="text"/>
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
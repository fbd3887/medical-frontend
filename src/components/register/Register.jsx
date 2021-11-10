import React from "react";
import Outerheader from "../outerheader/OuterHeader";
import '../../scss/outerpage.scss';
export default function Register(){
    return(
        <div className="outerPage">
            <Outerheader />
            <h1 className="text-center">Register</h1>
            <div className="row">
                <div class="col-md-4 offset-md-4 paddingLeft25">
                    <div className="treeOptionTab">
                        <div className="treeOptionTabHeding">
                            Biological Age
                        </div>
                        <div className="treeOptionTabOption">
                            32 years
                        </div>
                    </div>
                    <div className="treeOptionTab">
                        <div className="treeOptionTabHeding">
                            Ovary Age
                        </div>
                        <div className="treeOptionTabOption">
                            32 years
                        </div>
                    </div>
                    <div className="treeOptionTab">
                        <div className="treeOptionTabHeding">
                            AMH Level
                        </div>
                        <div className="treeOptionTabOption">
                            3.10
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div class="col-md-8 offset-md-2">
                    <div className="formOptionCard">
                        <h3>Demographic Information</h3>
                        <div className="row">
                            <div className="col-md-8">
                                <div className="row">
                                    <label>Name</label><br/>
                                    <div className="col-md-12 innerFieldDiv">
                                        <input className="form-control" type="text"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-8">
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
                            <div className="col-md-8">
                                <div className="row">
                                    <label>ID Number</label><br/>
                                    <div className="col-md-12 innerFieldDiv">
                                        <input className="form-control" type="text"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="row">
                                    <label>Phone Number</label><br/>
                                    <div className="col-md-12 innerFieldDiv">
                                        <input className="form-control" type="text"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="row">
                                    <label>Email</label><br/>
                                    <div className="col-md-12 innerFieldDiv">
                                        <input className="form-control" type="email"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="row">
                                    <label>Occupation</label><br/>
                                    <div className="col-md-12 innerFieldDiv">
                                        <input className="form-control" type="text"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="row">
                                    <label>Education</label><br/>
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
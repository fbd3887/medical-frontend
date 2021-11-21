import React from 'react'
import AiDoctorCard from './AiDoctorCard'
import '../../scss/innerpages.scss'
import Sidebar from './Sidebar'
function AiDoctorForm() {
    return (
        <div className="container-fluid">
            <div className="row">
                <Sidebar/>
                <div className="col-md-10 innerpageright">
                    <div className="row">
                        <div class="col-md-10 offset-md-1">
                            <div className="heading ">
                                <h1 >AI Doctor &nbsp;&nbsp;
                                    <br className="d-sm-none "/><span className="headspan">AI 醫生診斷</span>
                                </h1>
                            </div>
                            <div className="row">
                                <div className="formOptionCard">
                                    <h3 className="p-3 mt-3 heading">林慧珍  AMH紀錄</h3>
                                    <div className=" mobileouterform justify-content-evenly">
                                        <div className="row d-flex justify-content-center">
                                            <div className="col-md-12 d-flex formarea labelmobileform mobileform">
                                                <div className="col-md-3 mb-1 mt-1 padding-left-20 pad-top pad-bottom">
                                                    <label >檢驗日期</label>
                                                </div>
                                                <div className="col-md-2 mb-1 mt-1 padding-left-10 pad-top pad-bottom">
                                                    <label >年齡</label>
                                                </div>
                                                <div className="col-md-2 mb-1 mt-1 padding-left-5 pad-top pad-bottom">
                                                    <label >AMH值</label>
                                                </div>
                                                <div className="col-md-3 mb-1 mt-1 pad-top">
                                                    <label >檢查醫院</label>
                                                </div>
                                                <div className="col-md-2 mb-1 mt-1 pad-top ">
                                                    <label className="display_none" >操作</label>
                                                </div>                                                                    
                                            </div>
                                        </div>
                                        <div className="row d-flex justify-content-center">
                                            <div className="col-md-12 d-flex formarea inputmobileform mobileform">
                                                <div className="col-md-3 mb-3 margin_top  ">
                                                    <input placeholder="YYYY/MM/DD" className="style-box"></input>
                                                </div>
                                                <div className="col-md-2 mb-3 margin_top">
                                                    <input placeholder="ex: 25 歲"  className="style-box"></input>
                                                </div>
                                                <div className="col-md-2 mb-3 margin_top">
                                                    <input placeholder="請填寫數值"  className="style-box"></input>
                                                </div>
                                                <div className="col-md-3 mb-3 margin_top">
                                                    <input placeholder="請填寫醫院名稱"  className="style-box"></input>
                                                </div>
                                                <div className="col-md-2  mb-3 mt-3 margin_top shift_end ">
                                                   <div className="d-inline color-orange">新增</div>
                                                   <div className="d-inline ms-2">新增</div>
                                                </div>
                                            </div>
                                        </div>
                                      
                                    </div>
                                    
                                </div>
                            </div>
                            {/* <div className="row">
                                <div className="col-md-12">
                                    <div className="formOptionCard align-items-center">
                                        <h3 className="p-3 mt-3">林慧珍  AMH紀錄</h3>
                                        <div className="row  formarea">
                                            <div className="col-md-2">
                                                <label>檢驗日期</label>
                                                
                                                <input placeholder="YYYY/MM/DD"></input>
                                            </div>
                                            <div className="col-md-2">
                                                <label>檢驗日期</label>
                                               
                                                <input placeholder="YYYY/MM/DD"></input>
                                            </div> 
                                            <div className="col-md-2">
                                                <label>檢驗日期</label>
                                               
                                                <input placeholder="YYYY/MM/DD"></input>
                                            </div> 
                                            <div className="col-md-2">
                                                <label>檢驗日期</label>
                                             
                                                <input placeholder="YYYY/MM/DD"></input>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            <div className="row">
                                <div className="col-md-12 p-0">
                                    <AiDoctorCard/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AiDoctorForm

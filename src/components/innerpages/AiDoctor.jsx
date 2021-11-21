import React from 'react'
import Sidebar from '../innerpages/Sidebar'
import ai_graph from '../../images/ai_graph.png'
import '../../scss/innerpages.scss'
import plus from '../../images/plus.png'
import AiDoctorCard from './AiDoctorCard'
import { Link } from 'react-router-dom'
export default function AiDoctor(){
    return(
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
                            <div className="row mt-2 align-items-center">
                                <div className="col-md-12 position-relative">
                                    <Link to="/aidoctorform">
                                        <div className="addBtn" >
                                            <img src={plus} />
                                            <span className="ms-2">新增紀錄</span>
                                        </div>
                                    </Link>
                                    <div className="formOptionCard aiFormImg p-4">
                                        <div className="d-flex align-items-center">
                                            <img src={ai_graph} alt="" className="custom-ai-img" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <AiDoctorCard/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 
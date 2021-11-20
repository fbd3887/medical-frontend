import React from 'react'
import Sidebar from '../innerpages/Sidebar'
import ai_graph from '../../images/ai_graph.png'
import '../../scss/innerpages.scss'
import plus from '../../images/plus.png'
import tick from '../../images/tick.png'
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
                                    <div className="addBtn">
                                        <img src={plus} />
                                        <span className="ms-2">新增紀錄</span>
                                    </div>
                                    <div className="formOptionCard aiFormCard p-4">
                                        <img src={ai_graph} alt="" className="custom-ai-img" />
                                    </div>
                                </div>
                            </div>
                            <div className="row position-relative mt-5 formdiv  align-items-center">
                                <div className="col-md-6  pb-4">
                                    <div className="formOptionCard  h-100 aiFormCard p-4">
                                        <span className="colorpill"> 測驗結果分析 </span>
                                        <div className="mt-4">
                                            AMH值稍為低於平均，但還在正常範圍內。
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 h-100 pb-4 ">
                                    <div className="formOptionCard aiFormCard p-4">
                                        <span className="colorpill"> 醫師建議 </span>
                                        <div className="mt-4">
                                            <ul>
                                                <li><img src={tick}/>&nbsp;&nbsp;多照顧自己</li>
                                                <li><img src={tick}/>&nbsp;&nbsp;少熬夜</li>
                                                <li><img src={tick}/>&nbsp;&nbsp;目前若無對象，且不忙於工作，可以考慮凍卵</li>
                                            </ul>
                                            
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
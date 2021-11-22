import React from 'react'
import '../../scss/innerpages.scss'
import tick from '../../images/tick.png'

function AiDoctorCard() {
    return (
        <div className="row  mt-5 ">
            <div className="col-md-6 pb-4 ">
                <div className="formOptionCard aiFormCard p-4">
                    <span className="colorpill"> 測驗結果分析 </span>
                    <div className="mt-4">
                        AMH值稍為低於平均，但還在正常範圍內。
                    </div>
                </div>
            </div>
            <div className="col-md-6  pb-4 ">
                <div className="formOptionCard  aiFormCard p-4">
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
    )
}

export default AiDoctorCard

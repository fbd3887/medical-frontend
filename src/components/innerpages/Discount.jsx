import React from 'react'
import '../../scss/innerpages.scss'
import Sidebar from './Sidebar'
import discount1 from '../../images/discount1.png'
import discount2 from '../../images/discount2.png'
import discount3 from '../../images/discount3.png'
import discount4 from '../../images/discount4.png'
import circle from '../../images/circle.png'
export default function Discount() {
    return (
        <div className="container-fluid">
            <div className="row">
                <Sidebar/>
                
                <div className="col-md-10 innerpageright">
                    <div className="row">
                        <div class="col-md-10 offset-md-1">
                            <div className="heading mb-5">
                                <h1 >Discount &nbsp;&nbsp;
                                   <span className="headspan ms-2">特殊優惠</span>
                                </h1>
                            </div>
                                <div className="row ">
                                    <div className="col-md-6 col-12">
                                        <img src={discount1} className="mb-2 discountimg1 discountimg "></img>
                                        <div className="pb-2 pt-2">
                                            <h4 className="color-orange">凍卵限定專案</h4>
                                        </div>
                                        <div className="col-md-6 mb-4">
                                        留住最好的青春, 凍卵即存細胞專案<br/>10年保管費最優惠<br/>適合自主獨立的女身                                        
                                        </div>
                                        <div className="bookbutton mb-4"> 
                                            立即預約檢查 <span className="me-1 ms-1 h5">&#62;</span>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-12">
                                        <img src={discount2} className="mb-2 discountimg1 discountimg"></img>
                                        <div className="pb-2 pt-2">
                                            <h4 className="color-orange">薇薇核心專案</h4>
                                        </div>
                                        <div className="col-md-6 mb-4">
                                        給辛苦付出一切的大齡女主角<br/>華育兩大醫師強強聯手<br/>打造女性時尚品味生活                                       
                                        </div>
                                        <div className="bookbutton mb-4"> 
                                            立即預約檢查 <span className="me-1 ms-1 h5">&#62;</span>
                                        </div>                    
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 col-12">
                                        <img src={discount3} className="mb-2 discountimg1 discountimg"></img>
                                        <div className="pb-2 pt-2">
                                            <h4 className="color-orange">母親節獻禮</h4>
                                        </div>
                                        <div className="col-md-6 mb-4">
                                        留住最好的青春，凍卵即存細胞專案<br/>10年保管費最優惠<br/>適合自主獨立的女身                                        
                                        </div>
                                        <div className="bookbutton mb-4"> 
                                            立即預約檢查 <span className="me-1 ms-1 h5">&#62;</span>
                                        </div>                                        
                                    </div>
                                    <div className="col-md-6 col-12">
                                        <img src={discount4} className="mb-2 discountimg1 discountimg"></img>
                                        <div className="pb-2 pt-2">
                                            <h4 className="color-orange">薇薇核心專案</h4>
                                        </div>
                                        <div className="col-md-6 mb-4">
                                        給辛苦付出一切的大齡女主角<br/>華育兩大醫師強強聯手<br/>適合自主獨立的女身                                        
                                        </div>
                                        <div className="bookbutton mb-4"> 
                                            立即預約檢查 <span className="me-1 ms-1 h5">&#62;</span>
                                        </div>                                        
                                    </div>
                                </div>
                                <div>
                                <img src={circle} className="mb-2 discountimg1 discountimg"></img>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


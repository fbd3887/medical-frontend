import React from 'react'
import { Link } from 'react-router-dom'
import '../../scss/innerpages.scss'
import Sidebar from './Sidebar'

export default function AccountInformation() {
  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        <div className="col-md-10 innerpageright">
          <h1 className="text-center">會員資料</h1>

          <div className="row">
            <div class="col-md-10 offset-md-1">
              <div className="formOptionCard ">
                <div className="row p-5 mt-2 align-items-center">
                  <div className="col-md-4 text-center">
                    <p>林慧珍</p>
                    <span className="colorpill">1995/02/14</span>
                  </div>
                  <div className="col-md-8">
                    <div className="row pt-2 pb-2 align-items-center">
                      <div className="leftlabel">身份證號碼</div>
                      <div className="rightdata">A224981733</div>
                    </div>
                    <div className="row pt-2 pb-2 align-items-center">
                      <div className="leftlabel">電話</div>
                      <div className="rightdata">0910395730</div>
                    </div>
                    <div className="row pt-2 pb-2 align-items-center">
                      <div className="leftlabel">Email</div>
                      <div className="rightdata">example@example.com</div>
                    </div>
                    <div className="row pt-2 pb-1 align-items-center">
                      <div className="leftlabel">職業</div>
                      <div className="rightdata">財務人</div>
                    </div>
                    <div className="row pt-2 pb-2 divalign ">
                      <div className="leftlabel">學歷</div>
                      <div className="rightdata align-items-center sm:mt-3 d-sm-flex flex-sm-colum flex-md-row justify-content-between ">
                        <div className=" ">研究所</div>
                        <div className=" editbutton text-center btntopmargin "> 
                        變更會員資料 <span className="me-1 ms-1 h5">&#62;</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div class="col-md-10 offset-md-1">
              <div className="formOptionCard ">
                <div className="row p-5 mt-5 mb-3 align-items-center">
                  <div className="col-md-12">
                    <h2>婦科資訊</h2>
                  </div>
                  <div className="col-md-6">
                    <div className="row pt-2 pb-2 align-items-center">
                      <div className="leftlabel">生理週期 </div>
                      <div className="rightdata">28 天</div>
                    </div>
                    <div className="row pt-2 pb-2 align-items-center">
                      <div className="leftlabel">是否懷孕過</div>
                      <div className="rightdata">是, 共 2 次</div>
                    </div>
                    <div className="row pt-2 pb-2 align-items-center">
                      <div className="leftlabel">痛經</div>
                      <div className="rightdata">有</div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="row pt-2 pb-2 align-items-center">
                      <div className="leftlabel"> 月經量多容</div>
                      <div className="rightdata">量多</div>
                    </div>
                    <div className="row pt-2 pb-2 align-items-center">
                      <div className="leftlabel">生活習慣</div>
                      <div className="rightdata">
                        抽菸 | 喝酒 | 熬夜 |壓力大
                      </div>
                    </div>
                    <div className="d-flex justify-content-end mt-4 marginendsmall marginendlg">
                      <div className="  editbutton text-center btntopmargin  "> 
                            變更會員資料 <span className="me-1 ms-1 h5">&#62;</span>
                        </div>
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

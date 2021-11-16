import React from 'react'
import Outerheader from '../outerheader/OuterHeader'
import '../../scss/outerpage.scss'
export default function Register() {
  return (
    <div className="outerPage">
      <Outerheader />
      <h1 className="text-center">Register 註冊</h1>
      <div className="row">
        <div class="col-md-4 offset-md-4 paddingLeft25">
          <div className="treeOptionTab">
            <div className="treeOptionTabHeding">實際年齡</div>
            <div className="treeOptionTabOption">32 歲</div>
          </div>
          <div className="treeOptionTab">
            <div className="treeOptionTabHeding">卵巢年齡</div>
            <div className="treeOptionTabOption">35 歲</div>
          </div>
          <div className="treeOptionTab">
            <div className="treeOptionTabHeding">AMH 值</div>
            <div className="treeOptionTabOption">3.10</div>
          </div>
        </div>
      </div>
      <div className="row">
        <div class="col-md-8 offset-md-2">
          <div className="formOptionCard">
            <h3>基本資料</h3>
            <div className="row">
              <div className="col-md-8">
                <div className="row">
                  <label>姓名</label>
                  <br />
                  <div className="col-md-12 innerFieldDiv">
                    <input className="form-control" type="text" />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-8">
                <div className="row">
                  <label>生日</label>
                  <br />
                  <div className="col-md-4 innerFieldDiv">
                    <select
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>YYYY</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div className="col-md-4 innerFieldDiv">
                    <select
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>MM</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div className="col-md-4 innerFieldDiv">
                    <select
                      class="form-select"
                      aria-label="Default select example"
                    >
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
                  <label>身份證號碼</label>
                  <br />
                  <div className="col-md-12 innerFieldDiv">
                    <input className="form-control" type="text" />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="row">
                  <label>電話</label>
                  <br />
                  <div className="col-md-12 innerFieldDiv">
                    <input className="form-control" type="text" />
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="row">
                  <label>Email</label>
                  <br />
                  <div className="col-md-12 innerFieldDiv">
                    <input className="form-control" type="email" />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="row">
                  <label>職業</label>
                  <br />
                  <div className="col-md-12 innerFieldDiv">
                    <input className="form-control" type="text" />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="row">
                  <label>學歷</label>
                  <br />
                  <div className="col-md-12 innerFieldDiv">
                    <input className="form-control" type="text" />
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

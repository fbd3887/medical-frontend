import React from 'react'
import { Link } from 'react-router-dom'
import '../../scss/innerpages.scss'
import Sidebar from './Sidebar'
import EducationIcon from '../../images/education.png'

export default function Education() {
  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        <div className="col-md-10 innerpageright">
          <h1 className="text-center">Education AMH衛教</h1>

          <div className="row">
            <div class="col-md-10 offset-md-1">
              <div className="">
                <div className="row p-5 mt-2 align-items-center">
                  <div className="col-md-12">
                    <h4>AMH低？預防卵巢早衰AMH 懶人包，秒懂AMH是什麼</h4>
                    <p>
                      卵子是不會再生的，女性從一生出來卵巢裹面的卵子就只會代謝、老化、減少，同時卵巢卻牽扯很多身體機能：從荷爾蒙、情緒、骨質、排尿、到皮膚老化，所以了解卵巢與卵子是無比重要的。AMH就是了解卵巢的重要指標，AMH能告訴你卵巢的庫存量，也就是剩下卵子的數量，知道這個數量之後就可以分析很多事，像：有無多囊性卵巢或卵巢早衰，更年期什麼時候來，適不適合生育等？只要知道問題了就可以一一去預防、準備。
                    </p>
                  </div>
                  <div className="col-md-12 text-center">
                    <img src={EducationIcon} alt="" className="img-fluid" />
                  </div>
                  <div className="col-md-12">
                    <h4>卵巢的重要：女性大不同</h4>
                    <p>
                      女性最重要的部位就是卵巢了，不管是荷爾蒙、青春期、月經、生育、更年期都是卵巢要負責的，科室為什麼我們都對卵巢了解這麼少呢？光是荷爾蒙就會影響到情緒、骨質、甚至身體及皮膚的老化，這也是為什麼更年期女性常常出現骨質疏鬆、肌肉鬆弛、皮膚老化的問題了。
                    </p>
                  </div>
                  <div className="col-md-12">
                    <h4>卵子數量：卵子剩幾顆？</h4>
                    <p>
                      健康教育沒教的是女性從一生出來卵巢就只會老化：卵子是不會再生的{' '}
                    </p>
                    <p>200萬顆卵子到青春期只剩下30萬顆 </p>
                    <p>
                      錯誤概念是每個月的月經用掉1顆，事實上每個月身體自然代謝近1000顆！
                    </p>
                    <p>這樣30萬顆卵子不到25年就可能代謝光了 </p>
                    <p>也有兩種特例，但是都不是好事： </p>
                    <p>
                      5-10%的人會比100萬顆卵子多很多，此稱為多囊性卵巢，但是多不代表好，將近80%的無排卵不孕症都是多囊性卵巢造成的
                    </p>
                    <p>
                      1%的人是相反的，出生時卵子就比100萬顆少很多，此稱為卵巢早衰，不到四十歲就停經了{' '}
                    </p>
                    <p>
                      以前女性都是到了沒月經時才停經了，這樣根本沒辦法準備、沒辦法預防
                    </p>
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

import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import '../../scss/innerpages.scss'
import Sidebar from './Sidebar'
import Graph1 from '../../images/graph1.png'
import Graph2 from '../../images/graph2.png'
import Graph3 from '../../images/graph3.png'

export default function Analytics() {

useEffect(() => {
  if(window.localStorage.getItem('user-token')){

  }else{
    window.location.replace('/')
  }
}, [])

  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        <div className="col-md-10 innerpageright">
          <div className="row">
            <div class="col-md-10 offset-md-1">
              <h1 className="">Result Grpahs 比較圖</h1>
              <div className=" ">
                <div className="row mt-5 align-items-center">
                  <div className="col-md-12">
                    <img src={Graph1} alt="" className="img-fluid" />
                  </div>
                </div>
                <div className="row mt-5 align-items-center">
                  <div className="col-md-6">
                    <img src={Graph2} alt="" className="img-fluid" />
                  </div>
                  <div className="col-md-6">
                    <img src={Graph3} alt="" className="img-fluid" />
                  </div>
                </div>
                <div className="row mt-5 align-items-center"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

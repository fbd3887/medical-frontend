import React from 'react'
import Sidebar from '../innerpages/Sidebar'
import ai_graph from '../../images/ai_graph.png'
import '../../scss/innerpages.scss'
import plus from '../../images/plus.png'
import age from '../../images/age.png'
import ahm from '../../images/ahm.png'
import oval from '../../images/oval.png'
import AiDoctorCard from './AiDoctorCard'
import { Link } from 'react-router-dom'
import {Line, XAxis, YAxis, CartesianGrid,LineChart,ResponsiveContainer} from 'recharts'
export default function AiDoctor(){
    const data = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
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
                                   


                                    {/* <div className="d-flex align-items-center">
                                            <div className="row">
                                                <div className="col-12 text-align-center">
                                                    <h1>林慧珍  AMH紀錄</h1>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div>
                                                    <img src={ahm} alt="" />
                                                </div>
                                                <LineChart width={718} height={512} data={data}>
                                                    <XAxis dataKey="name"/>
                                                    <YAxis/>
                                                    <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
                                                    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                                                    <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
                                                </LineChart>                                       
                                                
                                            </div>
                                    </div> */}

                                    <div className="formOptionCard  p-4">
                                        <div className="row ">
                                            <div className="col-12 d-flex justify-content-center">
                                                <h4>林慧珍  AMH紀錄</h4>
                                            </div>
                                        </div>
                                        <div className="row offset-md-1 mt-2">
                                            <div className="col-1" d-inline>
                                                <img src={ahm} alt="" className=""/>
                                            </div>
                                            {/* <div className="col-md-9 d-inline"> */}
                                               
                                                <ResponsiveContainer width="78%" height={320}>
                                                    <LineChart className="mobilechart"  data={data}>
                                                        <XAxis dataKey="name"/>
                                                        <YAxis/>
                                                        <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
                                                        {/* <Line type="monotone" dataKey="uv" stroke="#8884d8" /> */}
                                                        <Line type="monotone" dataKey="pv" stroke="#8BB6C6" />
                                                    </LineChart>                                            
                                                </ResponsiveContainer>
                                               
                                               <div className="col-1" className="age ms-sm-3 ms-1">
                                                   <img src={age} />
                                                  
                                               </div>
                                               
                                            {/* </div> */}
                                        </div>
                                        <div className="row mt-2 ">
                                            <div className="col-12 d-flex justify-content-center align-items-center">
                                                <img src={oval} /> &nbsp; 您檢測出的AHM值
                                            </div>
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
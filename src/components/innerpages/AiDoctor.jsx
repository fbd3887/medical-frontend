import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux'
import Sidebar from '../innerpages/Sidebar'
import ai_graph from '../../images/ai_graph.png'
import '../../scss/innerpages.scss'
import plus from '../../images/plus.png'
import age from '../../images/age.png'
import ahm from '../../images/ahm.png'
import oval from '../../images/oval.png'
import AiDoctorCard from './AiDoctorCard'
import { Link, Redirect } from 'react-router-dom'
import {Line, XAxis, YAxis,ReferenceLineProps, Tooltip,CartesianGrid,LineChart,ResponsiveContainer, ReferenceLine} from 'recharts'
export default function AiDoctor(){

  const user = useSelector(state => state.user)
  const [ageData, setAgeData]= useState([
    {
      name: user.biological_age,
      ahm: user.amh_level,
     
    },
    {
      name: user.overy_age,
      ahm: user.amh_level,
      amt: 900,
    }
  ])

  useEffect(() => {
    if (window.localStorage.getItem('user-token')) {

    } else {
      window.location.replace('/')
    }
  }, [])

  if(!user){
    return <Redirect to="/" />;
  }

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
                                <div className="row mt-5 align-items-center">
                                    <div className="col-md-12 position-relative">
                                        <Link to="/aidoctorform">
                                            <div className="addBtn" >
                                                <img src={plus} />
                                                <span className="ms-2">新增紀錄</span>
                                            </div>
                                        </Link>
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
                                                
                                                    {/* <ResponsiveContainer width="78%" height={320}>
                                                        <LineChart className="mobilechart"  data={data}>
                                                            <XAxis dataKey="name"/>
                                                            <YAxis/>
                                                            <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
                                                            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                                                            <Line type="monotone" dataKey="pv" stroke="#8BB6C6" />
                                                        </LineChart>                                            
                                                    </ResponsiveContainer> */}
                                                    <ResponsiveContainer width="78%" height={320}>
                                                        <LineChart
                                                            width={500}
                                                            height={200}
                                                            data={ageData}
                                                            margin={{
                                                            top: 10,
                                                            right: 30,
                                                            left: 0,
                                                            bottom: 0,
                                                            }}
                                                        >
                                                            <CartesianGrid strokeDasharray="3 3" vertical=""/>
                                                            <XAxis type="number" dataKey="name" domain={[20,50]} ticks={[20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50]}  />
                                                            <YAxis  type="number" domain={[0,5]} ticks={[0,1.25,2.5,3.75,5]}/>
                                                            <Tooltip />
                                                            <ReferenceLine x={32}  strokeDasharray="3 3" stroke="BLUE"/> 
                                                            <ReferenceLine y={3.5} strokeDasharray="3 3"  stroke="blue" /> 
                                                            <ReferenceLine x={35}  strokeDasharray="3 3" stroke="BLUE"/> 
                                                            <ReferenceLine y={3} position="top" strokeDasharray="3 3"  stroke="blue" />  
                                                            <Line connectNulls type="monotone" dataKey="ahm" strokeWidth="3" fill="#E8927C" dot={{ stroke: '#E8927C', strokeWidth: 1, r: 4}} dot={{ stroke: '#E8927C', strokeWidth: 2, r: 4}}/>
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
                                <AiDoctorCard />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 
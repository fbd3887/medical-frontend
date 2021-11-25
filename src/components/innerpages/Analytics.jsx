import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../../scss/innerpages.scss'
import Sidebar from './Sidebar'
import Graph1 from '../../images/graph1.png'
import Graph2 from '../../images/graph2.png'
import Graph3 from '../../images/graph3.png'
import { CategoryScale } from 'chart.js';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto'

const DATA_COUNT = 15;
const labels = [];
let l=22;
for (let i = 0; i < DATA_COUNT; ++i) {
  labels.push(l.toString());
  l=l+2;
}
const datapoints = [3.5, 4, 3];
const data = {
  labels: labels,
  datasets: [
    {
      label: 'Average AHM level by biological age',
      data: datapoints,
      backgroundColor:"#8ec7e3",
      borderWidth: 4,
      fill: "blue",
      borderColor:'#8ec7e3',
      fill: false,
      cubicInterpolationMode: 'monotone',
      tension: 0.4,
    }, {
      label: 'Average of your AMH level',
      data: datapoints,
      backgroundColor:"#e6917d",
      borderWidth: 4,
      borderColor: '#e6917d',
      fill: false,
      tension: 0.4
    }
  ]
};
export default function Analytics(props) {

  useEffect(() => {
    console.log(props)
    if (window.localStorage.getItem('user-token')) {

    } else {
      window.location.replace('/')
    }
  }, [])

  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        <div className="col-md-10 innerpageright">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <h1 className="">Result Grpahs 比較圖</h1>
              <div className=" ">
                <div className="row mt-5 align-items-center">
                  <div className="col-md-12">
                    <Line
                      data={data}
                      options={{
                        responsive: true,
                        
                        plugins: {
                          legend: {
                             labels:{
                              usePointStyle:true
                             },
                            position: 'bottom',
                            },
                          title: {
                            display: true,
                            text: "Your ovary's age is "
                          },
                        },
                        interaction: {
                          intersect: false,
                        },
                        scales: {
                          x: {
                            display: true,
                            title: {
                              display: true,
                            }
                          },
                          y: {
                            display: true,
                            title: {
                              display: true,
                              text: 'Avarage AMH level'
                            },
                            suggestedMin: 0,
                            suggestedMax: 5
                          }
                        }
                      }}

                    />
                    {/* <img src={Graph1} alt="" className="img-fluid" /> */}
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

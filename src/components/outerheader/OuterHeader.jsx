import React from 'react'
import { useHistory } from 'react-router-dom'
import Huayu from '../../images/huayulogo.png'
import MobileDark from '../../images/mobiledarklogo.png'

const Outerheader = () => {
  const history = useHistory()
  return (
    <div className="row align-items-center mobilepadding">
      <div className="col-md-12 outerheaderMain">
        <img
          src={Huayu}
          alt=""
          className="img-fluid logodisplay mobileOuterHide"
        />
        <img
          src={MobileDark}
          alt=""
          className="img-fluid logodisplay desktopOuterHide"
        />
        <button
          className="btn outerheaderBtn"
          onClick={() => history.push('/')}
        >
          到回上頁
        </button>
      </div>
    </div>
  )
}
export default Outerheader

import React from "react";
import './outheader.scss';
import Huayu from "../../images/huayu logo.png"

const Outerheader=()=>{
    return(
        <div className="col-md-12 outerheaderMain">
            <img src={Huayu} alt="" />
            <button className="btn outerheaderBtn">Return to last page</button>
        </div>
    )
}
export default Outerheader
import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom'
import '../../scss/innerpages.scss'
import Sidebar from './Sidebar'
import {
  LIFE_CYCLE,
  BLEED,
  CRAMPS,
  PREGNANT_LIFECYCLE,
} from '../../utils/constants'

export default function AccountInformation() {
  const user = useSelector((state) => state.user)

  if (!user) {
    return <Redirect to='/' />
  }
  return (
    <div className='container-fluid'>
      <div className='row'>
        <Sidebar />
        <div className='col-md-10 innerpageright'>
          <h1 className='text-center'>會員資料</h1>

          <div className='row'>
            <div class='col-md-10 offset-md-1'>
              <div className='formOptionCard '>
                <div className='row p-5 mt-2 align-items-center'>
                  <div className='col-md-4 text-center'>
                    <p>{user.user_name}</p>
                    <span className='colorpill'>{user.dob}</span>
                  </div>
                  <div className='col-md-8'>
                    <div className='row pt-2 pb-2 align-items-center'>
                      <div className='leftlabel'>身份證號碼</div>
                      <div className='rightdata'>{user.id_number}</div>
                    </div>
                    <div className='row pt-2 pb-2 align-items-center'>
                      <div className='leftlabel'>電話</div>
                      <div className='rightdata'>{user.phone_num}</div>
                    </div>
                    <div className='row pt-2 pb-2 align-items-center'>
                      <div className='leftlabel'>Email</div>
                      <div className='rightdata'>{user.email_id}</div>
                    </div>
                    <div className='row pt-2 pb-1 align-items-center'>
                      <div className='leftlabel'>{user.occupation}</div>
                      <div className='rightdata'>{user.finance}</div>
                    </div>
                    <div className='row pt-2 pb-2 divalign '>
                      <div className='leftlabel'>{user.education}</div>
                      <div className='rightdata align-items-center sm:mt-3 d-sm-flex flex-sm-colum flex-md-row justify-content-between '>
                        <div className=' '>研究所</div>
                        <Link
                          to='/edit-profile'
                          className=' editbutton text-center btntopmargin '
                        >
                          變更會員資料{' '}
                          <span className='me-1 ms-1 h5'>&#62;</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div class='col-md-10 offset-md-1'>
              <div className='formOptionCard '>
                <div className='row p-5 mt-5 mb-3 align-items-center'>
                  <div className='col-md-12'>
                    <h2>婦科資訊</h2>
                  </div>
                  <div className='col-md-6'>
                    <div className='row pt-2 pb-2 align-items-center'>
                      <div className='leftlabel'>生理週期 </div>
                      <div className='rightdata'>{user.menstrual_cycle} 天</div>
                    </div>
                    <div className='row pt-2 pb-2 align-items-center'>
                      <div className='leftlabel'>是否懷孕過</div>
                      <div className='rightdata'>
                        {PREGNANT_LIFECYCLE[user.preg_cycle]}
                      </div>
                    </div>
                    <div className='row pt-2 pb-2 align-items-center'>
                      <div className='leftlabel'>痛經</div>
                      <div className='rightdata'>
                        {CRAMPS[user.cramp_cycle]}
                      </div>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='row pt-2 pb-2 align-items-center'>
                      <div className='leftlabel'> 月經量多容</div>
                      <div className='rightdata'>{BLEED[user.bleed_cycle]}</div>
                    </div>
                    <div className='row pt-2 pb-2 align-items-center'>
                      <div className='leftlabel'>生活習慣</div>
                      <div className='rightdata'>
                        {LIFE_CYCLE[user.life_cycle]}
                      </div>
                    </div>
                    <div className='d-flex justify-content-end mt-4 marginendsmall marginendlg'>
                      <Link
                        to='/edit-profile'
                        className='  editbutton text-center btntopmargin  '
                      >
                        變更會員資料 <span className='me-1 ms-1 h5'>&#62;</span>
                      </Link>
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

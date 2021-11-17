import React, { useState } from 'react'
import Outerheader from '../outerheader/OuterHeader'
import '../../scss/outerpage.scss'
import {register} from '../../api/axios'
export default function Register() {
  const [name, setName] = useState('')
  const [dobDay, setDobDay] = useState('')
  const [dobMonth, setDobMonth] = useState('')
  const [dobYear, setDobYear] = useState('')
  const [idNumber, setIdNumber] = useState('')
  const [occupation, setOccupation] = useState('')
  const [education, setEducation] = useState('')

  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [password, setPassword] = useState('')
  const [isloading, setIsLoading] = useState(false)

  const handleRegister = () => {
    setIsLoading(true)
    register({
      "email_id":email,
      "password":password,
      "phone_num":phoneNumber
    },setIsLoading)
  }
  
  return (
    <div className='outerPage'>
      <Outerheader />
      <h1 className='text-center'>Register 註冊</h1>
      <div className='row'>
        <div className='col-md-4 offset-md-4 paddingLeft25'>
          <div className='treeOptionTab'>
            <div className='treeOptionTabHeding'>實際年齡</div>
            <div className='treeOptionTabOption'>32 歲</div>
          </div>
          <div className='treeOptionTab'>
            <div className='treeOptionTabHeding'>卵巢年齡</div>
            <div className='treeOptionTabOption'>35 歲</div>
          </div>
          <div className='treeOptionTab'>
            <div className='treeOptionTabHeding'>AMH 值</div>
            <div className='treeOptionTabOption'>3.10</div>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-8 offset-md-2'>
          <div className='formOptionCard'>
            <h3>基本資料</h3>
            <div className='row'>
              <div className='col-md-8'>

                {/* Email  */}
                <div className='row'>
                  <label>Email</label>
                  <br />
                  <div className='col-md-12 innerFieldDiv'>
                    <input
                      className='form-control'
                      type='text'
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value)
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Password */}
            <div className='row'>
              <div className='col-md-8'>
                <div className='row'>
                  <label>Password</label>
                  <br />
                  <div className='col-md-12 innerFieldDiv'>
                    <input
                      className='form-control'
                      type='password'
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value)
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Phone */}
            <div className='row'>
              <div className='col-md-8'>
                <div className='row'>
                  <label>Phone Number</label>
                  <br />
                  <div className='col-md-12 innerFieldDiv'>
                    <input
                      className='form-control'
                      type='text'
                      value={phoneNumber}
                      onChange={(e) => {
                        setPhoneNumber(e.target.value)
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className='row'>
              <div className='col-md-8'>
                <div className='row'>
                  <label>生日</label>
                  <br />
                  <div className='col-md-4 innerFieldDiv'>
                    <select
                      className='form-select'
                      aria-label='Default select example'
                      onChange={(e) => {
                        e.target.value === 'YYYY' ? setDobYear('') : setDobYear(e.target.value)
                      }}
                    >
                      <option selected >YYYY</option>
                      <option value='1'>One</option>
                      <option value='2'>Two</option>
                      <option value='3'>Three</option>
                    </select>
                  </div>
                  <div className='col-md-4 innerFieldDiv'>
                    <select
                      className='form-select'
                      aria-label='Default select example'
                      onChange={(e) => {
                        e.target.value === 'MM' ? setDobMonth('') : setDobMonth(e.target.value)
                      }}
                    >
                      <option selected>MM</option>
                      <option value='1'>One</option>
                      <option value='2'>Two</option>
                      <option value='3'>Three</option>
                    </select>
                  </div>
                  <div className='col-md-4 innerFieldDiv'>
                    <select
                      className='form-select'
                      aria-label='Default select example'
                      onChange={(e) => {
                        e.target.value === 'DD' ? setDobDay('') : setDobDay(e.target.value)
                      }}
                    >
                      <option selected>DD</option>
                      <option value='1'>One</option>
                      <option value='2'>Two</option>
                      <option value='3'>Three</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-8'>
                <div className='row'>
                  <label>身份證號碼</label>
                  <br />
                  <div className='col-md-12 innerFieldDiv'>
                    <input
                      className='form-control'
                      type='text'
                      value={idNumber}
                      onChange={(e) => {
                        setIdNumber(e.target.value)
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-4'>
                <div className='row'>
                  <label>電話</label>
                  <br />
                  <div className='col-md-12 innerFieldDiv'>
                    <input
                      className='form-control'
                      type='text'
                    />
                  </div>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='row'>
                  <label>Email</label>
                  <br />
                  <div className='col-md-12 innerFieldDiv'>
                    <input
                      className='form-control'
                      type='email'
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-4'>
                <div className='row'>
                  <label>職業</label>
                  <br />
                  <div className='col-md-12 innerFieldDiv'>
                    <input
                      className='form-control'
                      type='text'
                      value={occupation}
                      onChange={(e) => {
                        setOccupation(e.target.value)
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-4'>
                <div className='row'>
                  <label>學歷</label>
                  <br />
                  <div className='col-md-12 innerFieldDiv'>
                    <input
                      className='form-control'
                      type='text'
                      value={education}
                      onChange={(e) => {
                        setEducation(e.target.value)
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-4 loginBackground'>
                <button onClick={handleRegister} className='btn'>
                  {isloading ? "Loading...":"Register" }
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

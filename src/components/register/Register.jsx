import React, { useState } from 'react'
import Outerheader from '../outerheader/OuterHeader'
import '../../scss/outerpage.scss'
import { register } from '../../api/axios'
export default function Register() {
  const [name, setName] = useState('')
  const [dobDay, setDobDay] = useState('')
  const [dobMonth, setDobMonth] = useState('')
  const [dobYear, setDobYear] = useState('')
  const [idNumber, setIdNumber] = useState('')
  const [occupation, setOccupation] = useState('')
  const [education, setEducation] = useState('')
  const [otherOccupation, setOtherOccupation] = useState(false)

  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [password, setPassword] = useState('')
  const [isloading, setIsLoading] = useState(false)

  const handleRegister = () => {
    setIsLoading(true)
    register({
      "email_id": email,
      "password": password,
      "phone_num": phoneNumber
    }, setIsLoading)
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
                  <label>Name</label>
                  <br />
                  <div className='col-md-12 innerFieldDiv'>
                    <input
                      className='form-control'
                      type='text'
                      value='name'
                      onChange={(e) => {
                        setEmail(e.target.value)
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Date of Birth */}
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

            {/* Id Number */}
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

            {/* Occupation */}
            <div className='row'>
              <div className='col-md-8'>
                <div className='row'>
                  <label>生日</label>
                  <br />
                  <div className='col-md-6 innerFieldDiv'>
                    <select
                      className='form-select'
                      aria-label='Default select example'
                      onChange={(e) => {
                        e.target.value === '3' && setOtherOccupation(true)
                      }}
                    >
                      <option selected>-Please Select</option>
                      <option value='1'>Govt Servant</option>
                      <option value='2'>Business Man</option>
                      <option value='3'>Other</option>
                    </select>
                  </div>
                  {otherOccupation && (<div className='col-md-6'>
                    <div className='row'>
                      <div className='col-md-12 innerFieldDiv'>
                        <input
                          className='form-control'
                          type='text'
                          placeholder='Plese spacify'
                        />
                      </div>
                    </div>
                  </div>)}
                </div>
              </div>
            </div>

            {/* Education */}
            <div className='row'>
              <div className='col-md-8'>
                <div className='row'>
                  <label>生日</label>
                  <br />
                  <div className='col-md-6 innerFieldDiv'>
                    <select
                      className='form-select'
                      aria-label='Default select example'
                    // onChange={(e) => {
                    //   e.target.value === 'DD' ? setDobDay('') : setDobDay(e.target.value)
                    // }}
                    >
                      <option selected>-Please Select</option>
                      <option value='1'>Business</option>
                      <option value='2'>Techonology</option>
                      <option value='3'>Arts</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Obstetric History */}
          <div className='formOptionCard'>
            <h3>Obstetric History</h3>
            <div className='row'>
              <div className='col-md-8'>
                <div className='row'>
                  <h4>Menstrual cycle</h4>
                  <br />
                  <div className='d-flex justify-content-between innerFieldDiv'>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">20 Days</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">30 Days</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label" >other</label>
                      <input className="otherDayinput" type="text" />
                      <label className="form-check-label" >Days</label>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-8'>
                <div className='row'>
                  <h4>Have you been pregnant before</h4>
                  <br />
                  <div className='d-flex justify-content-between innerFieldDiv'>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">never pregnant and don not want to pregnant</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">Never pregnant but want to get pregnant</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label" >Pregnant</label>
                      <input className="otherDayinput" type="text" />
                      <label className="form-check-label" >time(s)</label>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-8'>
                <div className='row'>
                  <h4>Do you experience cramps or pain during your period</h4>
                  <br />
                  <div className='d-flex justify-content-between innerFieldDiv'>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">Yes, experience pain</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">No, do not experience pain</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-8'>
                <div className='row'>
                  <h4>How much do you bleed</h4>
                  <br />
                  <div className='d-flex justify-content-between innerFieldDiv'>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">Heavy bleeding</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">normal bleeding</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">Light bleeding</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='row'>
              <div className='col-md-8'>
                <div className='row'>
                  <h4>Current lifestyle(Select alll application</h4>
                  <br />
                  <div className='d-flex justify-content-between flex-wrap innerFieldDiv'>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">Smooking</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">Alcohol consuption</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">Frequently stayings Up</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">Feeling stressed </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">Feeling unstressed </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">None of the above</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className='row'>
            <div className='col-md-4 loginBackground'>
              <button onClick={handleRegister} className='btn'>
                {isloading ? "Loading..." : "Register"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

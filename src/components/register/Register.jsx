import React, { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Outerheader from '../outerheader/OuterHeader'
import '../../scss/outerpage.scss'
import { validateRegister } from '../../utils/validation'
import {renderDays, renderMonths, renderYears} from '../../utils/misc'
import { register } from '../../api/axios'
import { LIFE_CYCLE,BLEED, CRAMPS, PREGNANT_LIFECYCLE } from '../../utils/constants'

export default function Register() {
  const initialValues = {
    email: 'test1@gmail.com',
    password: '12345678',
    phoneNumber: '12345678910',
    occupation: '-1',
    finance: '10000',
    dobDay: 'DD',
    dobMonth: 'MM',
    dobYear: 'YYYY',
    education: '-1',
    name: 'Mubeen',
    idNumber: 12344,
    biologicalAge: '',
    overyAge: '',
    amhLevel: '',
    lifeCycle: '0',
    pregCycle:'0',
    menstrualCycle:'20',
    crampCycle:'0',
    bleedCycle:'0',

  }
  const [registerForm, setRegisterForm] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [otherOccupation, setOtherOccupation] = useState('')
  const [isloading, setIsLoading] = useState(false);
  const [isSubmitted, setSubmitted] = useState(false)

  const handleRegister = () => {
  setErrors(validateRegister(registerForm));
  setSubmitted(true)
  }

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitted) {
      registerNewUser();
    } else {
      Object.keys(errors).map((key, index) => {
        toast.error(errors[key]);
      });
    }
  }, [errors]);

  const registerNewUser=()=>{
    const {
      email,
      password,
      phoneNumber,
      occupation,
      finance,
      dobDay,
      dobMonth,
      dobYear,
      education,
      idNumber,
      biologicalAge,
      overyAge,
      amhLevel,
      lifeCycle,
      pregCycle,
      menstrualCycle,
      crampCycle,
      bleedCycle,
      name,
    } = registerForm
    setIsLoading(true)
    register(
      {
        "email_id": email,
        "password": password,
        "phone_num": phoneNumber,
        "occupation": occupation,
        "dob": `${dobYear}-${dobMonth}-${dobDay}`,
        "education": education,
        'id_number':idNumber,
        "menstrual_cycle": Number(menstrualCycle),
        "bleed_cycle": Number(bleedCycle),
        "cramp_cycle": Number(crampCycle),
        "life_cycle": Number(lifeCycle),
        "preg_cycle": Number(pregCycle),
        "biological_age": biologicalAge,
        "overy_age": overyAge,
        "amh_level": amhLevel,
        "finance": finance,
        "user_name": name,
      },
      setIsLoading,
      toast
    )
    setSubmitted(false)
  }

  const handleSetOccupation = (e) => {
    const { name, value } = e.target
    if (e.target.value !== 'other') {
      setRegisterForm({ ...registerForm, occupation: value })
      setOtherOccupation(false)
    } else {
      setOtherOccupation(true)
      setRegisterForm({ ...registerForm, occupation: '' })
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setRegisterForm({ ...registerForm, [name]: value })
  }

  return (
    <div className='outerPage'>
      <Outerheader />
      <h1 className='text-center'>Register 註冊</h1>
      <div className='row'>
        <div className='col-md-8 offset-md-2 paddingLeft25'>
          <div className='treeOptionTab'>
            <div className='treeOptionTabHeding'>實際年齡</div>
            <div className='treeOptionTabOption'>
              <input
                className='form-control'
                type='text'
                name='biologicalAge'
                value={registerForm.biologicalAge}
                onChange={handleChange}
              />
              歲
            </div>
          </div>
          <div className='treeOptionTab'>
            <div className='treeOptionTabHeding'>卵巢年齡</div>
            <div className='treeOptionTabOption'>
              <input
                type='text'
                className='form-control'
                name='overyAge'
                value={registerForm.overyAge}
                onChange={handleChange}
              />
              歲
            </div>
          </div>
          <div className='treeOptionTab'>
            <div className='treeOptionTabHeding'>AMH 值</div>
            <div className='treeOptionTabOption'>
              <input
                type='text'
                className='form-control'
                name='amhLevel'
                value={registerForm.amhLevel}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-8 offset-md-2'>
          <div className='formOptionCard'>
            <h3>基本資料</h3>
            <div className='row'>
              <div className='col-md-8'>
                {/* Name  */}
                <div className='row'>
                  <label>姓名</label>
                  <br />
                  <div className='col-md-12 innerFieldDiv'>
                    <input
                      className='form-control'
                      placeholder='Name'
                      type='text'
                      name='name'
                      value={registerForm.name}
                      onChange={handleChange}
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
                      name='dobYear'
                      value={registerForm.dobYear}
                      onChange={handleChange}
                      dangerouslySetInnerHTML={{ __html: renderYears() }}
                    ></select>
                  </div>
                  <div className='col-md-4 innerFieldDiv'>
                    <select
                      className='form-select'
                      aria-label='Default select example'
                      name='dobMonth'
                      value={registerForm.dobMonth}
                      onChange={handleChange}
                      dangerouslySetInnerHTML={{ __html: renderMonths() }}
                    ></select>
                  </div>
                  <div className='col-md-4 innerFieldDiv'>
                    <select
                      className='form-select'
                      aria-label='Default select example'
                      name='dobDay'
                      value={registerForm.dobDay}
                      onChange={handleChange}
                      dangerouslySetInnerHTML={{ __html: renderDays() }}
                    ></select>
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
                      type='number'
                      placeholder='ID Number'
                      name='idNumber'
                      value={registerForm.idNumber}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className='row'>
              {/* phone Number */}
              <div className='col-md-4'>
                <div className='row'>
                  <label>Phone Number</label>
                  <br />
                  <div className='col-md-12 innerFieldDiv'>
                    <input
                      className='form-control'
                      type='text'
                      placeholder='Phone Number'
                      name='phoneNumber'
                      value={registerForm.phoneNumber}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className='col-md-4'>
                <div className='row'>
                  <label>Email</label>
                  <br />
                  <div className='col-md-12 innerFieldDiv'>
                    <input
                      className='form-control'
                      type='email'
                      placeholder='Email'
                      name='email'
                      value={registerForm.email}
                      onChange={handleChange}
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
                      placeholder='Password'
                      name='password'
                      value={registerForm.password}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Occupation */}
            <div className='row'>
              <div className='col-md-8'>
                <div className='row'>
                  <label>職業</label>
                  <br />
                  <div className='col-md-6 innerFieldDiv'>
                    <select
                      className='form-select'
                      aria-label='Default select example'
                      onChange={handleSetOccupation}
                    >
                      <option selected value='-1'>-Please Select</option>
                      <option value='Government Service'>Govt Servant</option>
                      <option value='Business Man'>Business Man</option>
                      <option value='other'>Other</option>
                    </select>
                  </div>
                  {otherOccupation && (
                    <div className='col-md-6'>
                      <div className='row'>
                        <div className='col-md-12 innerFieldDiv'>
                          <input
                            className='form-control'
                            type='text'
                            placeholder='Plese spacify'
                            name='occupation'
                            value={registerForm.occupation}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Education */}
            <div className='row'>
              <div className='col-md-8'>
                <div className='row'>
                  <label>學歷</label>
                  <br />
                  <div className='col-md-6 innerFieldDiv'>
                    <select
                      className='form-select'
                      aria-label='Default select example'
                      name='education'
                      value={registerForm.education}
                      onChange={handleChange}
                      // onChange={(e) => setEducation(e.target.value)}
                    >
                      <option selected value='-1'>-Please Select</option>
                      <option value='Business'>Business</option>
                      <option value='Techonology'>Techonology</option>
                      <option value='Arts'>Arts</option>
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
              <div className='row'>
                <div className='col-md-8'>
                  <div className='row'>
                    <h5>Menstrual cycle</h5>
                    <div className='d-flex'>
                      <label className='con1'>
                        <span>20 Days</span>
                        <input
                          type='radio'
                          value='20'
                          name='menstrualCycle'
                          checked={registerForm.menstrualCycle === '20'}
                          onChange={handleChange}
                        />
                        <span className='checkmark'></span>
                      </label>
                      <label className='con1'>
                        <span>30 Days</span>
                        <input
                          type='radio'
                          value='30'
                          name='menstrualCycle'
                          checked={registerForm.menstrualCycle === '30'}
                          onChange={handleChange}
                        />
                        <span className='checkmark'></span>
                      </label>
                      <label className='con1'>
                        <span> other</span>
                        <input
                          type='radio'
                          value=''
                          name='menstrualCycle'
                          checked={
                            registerForm.menstrualCycle !== '20' &&
                            registerForm.menstrualCycle !== '30'
                          }
                          onChange={handleChange}
                        />
                        <span className='checkmark'></span>
                        <input
                          className='otherDayinput'
                          type='text'
                          name='menstrualCycle'
                          disabled={
                            registerForm.menstrualCycle === '20' ||
                            registerForm.menstrualCycle === '30'
                          }
                          value={
                            registerForm.menstrualCycle === '20' ||
                            registerForm.menstrualCycle === '30'
                              ? ''
                              : registerForm.menstrualCycle
                          }
                          onChange={handleChange}
                        />
                        <label className='form-check-label'>Days</label>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-8'>
                  <div className='row'>
                    <h5>Have you been pregnant before</h5>
                    <div
                      className='d-flex flex-wrap'
                    >
                      <label className='con2'>
                        <span>{PREGNANT_LIFECYCLE[0]}</span>
                        <input
                          type='radio'
                          name='pregCycle'
                          value={0}
                          checked={registerForm.pregCycle === '0'}
                          onChange={handleChange}
                        />
                        <span className='checkmark'></span>
                      </label>
                      <label className='con2'>
                        <span>{PREGNANT_LIFECYCLE[1]}</span>
                        <input
                          type='radio'
                          name='pregCycle'
                          value={1}
                          checked={registerForm.pregCycle === '1'}
                          onChange={handleChange}
                        />
                        <span className='checkmark'></span>
                      </label>
                      <label className='con2'>
                        <span> pregnant</span>
                        <input
                          type='radio'
                          name='pregnant-cycle'
                          value={2}
                          name='pregCycle'
                          checked={registerForm.pregCycle !== '0' && registerForm.pregCycle !== '1'}
                          onChange={handleChange}
                        />
                        <span className='checkmark'></span>
                        <input
                          className='otherDayinput'
                          type='number'
                          disabled={registerForm.pregCycle === '0' || registerForm.pregCycle === '1'}
                          name='pregCycle'
                          value={
                            registerForm.pregCycle === '0' || registerForm.pregCycle === '1' ? '' : registerForm.pregCycle
                          }
                          onChange={handleChange}
                        />
                        <label className='form-check-label'>time(s)</label>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-8'>
                  <div className='row'>
                    <h5>Do you experience cramps or pain during your period</h5>
                    <div className='d-flex flex-wrap'>
                      <label className='con3'>
                        <span>{CRAMPS[0]}]</span>
                        <input
                          type='radio'
                          name='crampCycle'
                          value={0}
                          checked={registerForm.crampCycle === '0'}
                          onChange={handleChange}
                        />
                        <span className='checkmark'></span>
                      </label>
                      <label className='con3'>
                        <span>{CRAMPS[1]}</span>
                        <input
                          type='radio'
                          name='crampCycle'
                          value={1}
                          checked={registerForm.crampCycle === '1'}
                          onChange={handleChange}
                        />
                        <span className='checkmark'></span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-8'>
                  <div className='row'>
                    <h5>How much do you bleed</h5>
                    <div className='d-flex flex-wrap'>
                      <label className='con4'>
                        <span>{BLEED[0]}</span>
                        <input
                          type='radio'
                          name='bleedCycle'
                          value={0}
                          checked={registerForm.bleedCycle === '0'}
                          onChange={handleChange}
                        />
                        <span className='checkmark'></span>
                      </label>
                      <label className='con4'>
                        <span>{BLEED[1]}</span>
                        <input
                          type='radio'
                          name='bleedCycle'
                          value={1}
                          checked={registerForm.bleedCycle === '1'}
                          onChange={handleChange}
                        />
                        <span className='checkmark'></span>
                      </label>
                      <label className='con4'>
                        <span>{BLEED[2]}</span>
                        <input
                          type='radio'
                          name='bleedCycle'
                          value={2}
                          checked={registerForm.bleedCycle === '2'}
                          onChange={handleChange}
                        />
                        <span className='checkmark'></span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-8'>
                  <div className='row'>
                    <h5>Current lifestyle(Select alll application)</h5>
                    <div className='d-flex flex-wrap'>
                      <label className='con5'>
                        <span>{LIFE_CYCLE[0]}</span>
                        <input
                          type='radio'
                          name='lifeCycle'
                          value={0}
                          checked={registerForm.lifeCycle === '0'}
                          onChange={handleChange}
                        />
                        <span className='checkmark'></span>
                      </label>
                      <label className='con5'>
                        <span>{LIFE_CYCLE[1]}</span>
                        <input
                          type='radio'
                          name='lifeCycle'
                          value={1}
                          checked={registerForm.lifeCycle === '1'}
                          onChange={handleChange}
                        />
                        <span className='checkmark'></span>
                      </label>
                      <label className='con5'>
                        <span>{LIFE_CYCLE[2]}</span>
                        <input
                          type='radio'
                          name='lifeCycle'
                          value={2}
                          checked={registerForm.lifeCycle === '2'}
                          onChange={handleChange}
                        />
                        <span className='checkmark'></span>
                      </label>
                      <label className='con5'>
                        <span>{LIFE_CYCLE[3]}</span>
                        <input
                          type='radio'
                          name='lifeCycle'
                          value={3}
                          checked={registerForm.lifeCycle === '3'}
                          onChange={handleChange}
                        />
                        <span className='checkmark'></span>
                      </label>
                      <label className='con5'>
                        <span>{LIFE_CYCLE[4]}</span>
                        <input
                          type='radio'
                          name='lifeCycle'
                          value={4}
                          checked={registerForm.lifeCycle === '4'}
                          onChange={handleChange}
                        />
                        <span className='checkmark'></span>
                      </label>
                      <label className='con5'>
                        <span>{LIFE_CYCLE[5]}</span>
                        <input
                          type='radio'
                          name='lifeCycle'
                          value={5}
                          checked={registerForm.lifeCycle === '5'}
                          onChange={handleChange}
                        />
                        <span className='checkmark'></span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-4 loginBackground'>
              <button onClick={handleRegister} className='btn'>
                {isloading ? 'Loading...' : 'Register'}
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

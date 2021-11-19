import React, { useState } from 'react'
import Outerheader from '../outerheader/OuterHeader'
import '../../scss/outerpage.scss'
import { register } from '../../api/axios'
const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]
export default function Register() {
  const [email, setEmail] = useState('test1@gmail.com')
  const [password, setPassword] = useState('12345678')
  const [phoneNumber, setPhoneNumber] = useState('12345678910')
  const [occupation, setOccupation] = useState('Government Service')
  const [finance, setFinance] = useState('100000')
  const [dobDay, setDobDay] = useState('2')
  const [dobMonth, setDobMonth] = useState('3')
  const [dobYear, setDobYear] = useState('1994')
  const [education, setEducation] = useState('Techonology')

  const [name, setName] = useState('Mubeen')
  const [idNumber, setIdNumber] = useState(12345)

  const [menstrualCycle, setMenstrualCycle] = useState(20)
  const [bleedCycle, setBleedCycle] = useState(0)
  const [biologicalAge, setBiologicalAge] = useState('10')
  const [overyAge, setOveryAge] = useState('10')
  const [amhLevel, setAmhLevel] = useState('1.6')
  const [crampCycle, setCrampCycle] = useState(0)
  const [lifeCycle, setLifeCycle] = useState(0)
  const [pregCycle, setPregCycle] = useState(0)

  const [otherOccupation, setOtherOccupation] = useState('')

  const [isloading, setIsLoading] = useState(false)

  const handleRegister = () => {
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
        "menstrual_cycle": menstrualCycle,
        "bleed_cycle": bleedCycle,
        "cramp_cycle": crampCycle,
        "life_cycle": lifeCycle,
        "preg_cycle": pregCycle,
        "biological_age": biologicalAge,
        "overy_age": overyAge,
        "amh_level": amhLevel,
        "finance": finance        
      },
      setIsLoading
    )
  }

  const renderYears = () => {
    let currentYear = new Date().getFullYear()
    let years = '<option selected >YYYY</option>'
    for (let i = currentYear; i >= 1900; i--) {
      years += `<option value=${i} >${i}</option>`
    }
    return years
  }

  const renderMonths = () => {
    let months = '<option selected >MM</option>'
    for (let i = 0; i < monthNames.length; i++) {
      months += `<option value=${i + 1} >${monthNames[i]}</option>`
    }
    return months
  }

  const renderDays = () => {
    let days = '<option selected >DD</option>'
    for (let i = 1; i <= 31; i++) {
      days += `<option value=${i} >${i}</option>`
    }
    return days
  }

  const handleSetOccupation = (value) => {
    if (value !== 'other') {
      setOccupation(value)
      setOtherOccupation(false)
    } else {
      setOtherOccupation(true)
      setOccupation('')
    }
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
                value={biologicalAge}
                onChange={(e) => setBiologicalAge(e.target.value)}
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
                value={overyAge}
                onChange={(e) => setOveryAge(e.target.value)}
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
                value={amhLevel}
                onChange={(e) => setAmhLevel(e.target.value)}
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
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value)
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
                        e.target.value === 'YYYY'
                          ? setDobYear('')
                          : setDobYear(e.target.value)
                      }}
                      dangerouslySetInnerHTML={{ __html: renderYears() }}
                    ></select>
                  </div>
                  <div className='col-md-4 innerFieldDiv'>
                    <select
                      className='form-select'
                      aria-label='Default select example'
                      onChange={(e) => {
                        e.target.value === 'MM'
                          ? setDobMonth('')
                          : setDobMonth(e.target.value)
                      }}
                      dangerouslySetInnerHTML={{ __html: renderMonths() }}
                    ></select>
                  </div>
                  <div className='col-md-4 innerFieldDiv'>
                    <select
                      className='form-select'
                      aria-label='Default select example'
                      onChange={(e) => {
                        e.target.value === 'DD'
                          ? setDobDay('')
                          : setDobDay(e.target.value)
                      }}
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
                      value={idNumber}
                      onChange={(e) => {
                        setIdNumber(Number(e.target.value))
                      }}
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
                      value={phoneNumber}
                      onChange={(e) => {
                        setPhoneNumber(e.target.value)
                      }}
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
                      placeholder='Password'
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value)
                      }}
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
                      onChange={(e) => {
                        handleSetOccupation(e.target.value)
                      }}
                    >
                      <option selected>-Please Select</option>
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
                            value={occupation}
                            onChange={(e) => setOccupation(e.target.value)}
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
                      onChange={(e) => setEducation(e.target.value)}
                    >
                      <option selected>-Please Select</option>
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
                    <div
                      className='d-flex'
                      onChange={(e) =>
                        setMenstrualCycle(Number(e.target.value))
                      }
                    >
                      <label class='con1'>
                        <span>20 Days</span>
                        <input
                          type='radio'
                          value={20}
                          name='menstrual-cycle'
                          checked={menstrualCycle === 20}
                        />
                        <span class='checkmark'></span>
                      </label>
                      <label class='con1'>
                        <span>30 Days</span>
                        <input
                          type='radio'
                          value={30}
                          name='menstrual-cycle'
                          checked={menstrualCycle === 30}
                        />
                        <span class='checkmark'></span>
                      </label>
                      <label class='con1'>
                        <span> other</span>
                        <input
                          type='radio'
                          value={0}
                          name='menstrual-cycle'
                          checked={
                            menstrualCycle !== 20 && menstrualCycle !== 30
                          }
                        />
                        <span class='checkmark'></span>
                        <input
                          className='otherDayinput'
                          type='text'
                          disabled={
                            menstrualCycle === 20 || menstrualCycle === 30
                          }
                          value={
                            menstrualCycle === 20 || menstrualCycle === 30
                              ? ''
                              : menstrualCycle
                          }
                          onChange={(e) => setMenstrualCycle(e.target.value)}
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
                      onChange={(e) => setPregCycle(Number(e.target.value))}
                    >
                      <label class='con2'>
                        <span>never pregnant and don not want to pregnant</span>
                        <input
                          type='radio'
                          name='pregnant-cycle'
                          value={0}
                          checked={pregCycle === 0}
                        />
                        <span class='checkmark'></span>
                      </label>
                      <label class='con2'>
                        <span> Never pregnant but want to get pregnant</span>
                        <input
                          type='radio'
                          name='pregnant-cycle'
                          value={1}
                          checked={pregCycle === 1}
                        />
                        <span class='checkmark'></span>
                      </label>
                      <label class='con2'>
                        <span> pregnant</span>
                        <input
                          type='radio'
                          name='pregnant-cycle'
                          value={2}
                          name='other'
                          checked={pregCycle !== 0 && pregCycle !== 1}
                        />
                        <span class='checkmark'></span>
                        <input
                          className='otherDayinput'
                          type='number'
                          disabled={pregCycle === 0 || pregCycle === 1}
                          value={
                            pregCycle === 0 || pregCycle === 1 ? '' : pregCycle
                          }
                          onChange={(e) => setPregCycle(e.target.value)}
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
                    <div
                      className='d-flex flex-wrap'
                      onChange={(e) => setCrampCycle(Number(e.target.value))}
                    >
                      <label class='con3'>
                        <span>Yes, experience pain</span>
                        <input
                          type='radio'
                          name='cramp-cycle'
                          value={0}
                          checked={crampCycle === 0}
                        />
                        <span class='checkmark'></span>
                      </label>
                      <label class='con3'>
                        <span>No, do not experience pain</span>
                        <input
                          type='radio'
                          name='cramp-cycle'
                          value={1}
                          checked={crampCycle === 1}
                        />
                        <span class='checkmark'></span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-8'>
                  <div className='row'>
                    <h5>How much do you bleed</h5>
                    <div
                      className='d-flex flex-wrap'
                      onChange={(e) => setBleedCycle(Number(e.target.value))}
                    >
                      <label class='con4'>
                        <span>Heavy bleeding</span>
                        <input
                          type='radio'
                          name='bleed-cycle'
                          value={0}
                          checked={bleedCycle === 0}
                        />
                        <span class='checkmark'></span>
                      </label>
                      <label class='con4'>
                        <span>normal bleeding</span>
                        <input
                          type='radio'
                          name='bleed-cycle'
                          value={1}
                          checked={bleedCycle === 1}
                        />
                        <span class='checkmark'></span>
                      </label>
                      <label class='con4'>
                        <span>Light bleeding</span>
                        <input
                          type='radio'
                          name='bleed-cycle'
                          value={2}
                          checked={bleedCycle === 2}
                        />
                        <span class='checkmark'></span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-8'>
                  <div className='row'>
                    <h5>Current lifestyle(Select alll application)</h5>
                    <div
                      className='d-flex flex-wrap'
                      onChange={(e) => setLifeCycle(Number(e.target.value))}
                    >
                      <label class='con5'>
                        <span>Smooking</span>
                        <input
                          type='radio'
                          name='life-cycle'
                          value={0}
                          checked={lifeCycle === 0}
                        />
                        <span class='checkmark'></span>
                      </label>
                      <label class='con5'>
                        <span>Alcohol consumption</span>
                        <input
                          type='radio'
                          name='life-cycle'
                          value={1}
                          checked={lifeCycle === 1}
                        />
                        <span class='checkmark'></span>
                      </label>
                      <label class='con5'>
                        <span>Frequently stayings Up</span>
                        <input
                          type='radio'
                          name='life-cycle'
                          value={2}
                          checked={lifeCycle === 2}
                        />
                        <span class='checkmark'></span>
                      </label>
                      <label class='con5'>
                        <span>Feeling stressed</span>
                        <input
                          type='radio'
                          name='life-cycle'
                          value={3}
                          checked={lifeCycle === 3}
                        />
                        <span class='checkmark'></span>
                      </label>
                      <label class='con5'>
                        <span>Feeling unstressed</span>
                        <input
                          type='radio'
                          name='life-cycle'
                          value={4}
                          checked={lifeCycle === 4}
                        />
                        <span class='checkmark'></span>
                      </label>
                      <label class='con5'>
                        <span>None of the above</span>
                        <input
                          type='radio'
                          name='life-cycle'
                          value={5}
                          checked={lifeCycle === 5}
                        />
                        <span class='checkmark'></span>
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
    </div>
  )
}

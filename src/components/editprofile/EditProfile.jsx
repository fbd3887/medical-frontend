import React, { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import {useSelector} from 'react-redux'
import 'react-toastify/dist/ReactToastify.css'
import Outerheader from '../outerheader/OuterHeader'
import '../../scss/outerpage.scss'
import { validateUserData } from '../../utils/validation'
import {renderDays, renderMonths, renderYears} from '../../utils/misc'
import { updateUser } from '../../api/axios'
import { LIFE_CYCLE,BLEED, CRAMPS, PREGNANT_LIFECYCLE } from '../../utils/constants'

export default function EditProfile() {
  const user = useSelector(state => state.user)
  const [updateUserForm, setUpdateUserForm] = useState({})
  const [errors, setErrors] = useState({})
  const [otherOccupation, setOtherOccupation] = useState('')
  const [isloading, setIsLoading] = useState(false);
  const [isSubmitted, setSubmitted] = useState(false)

  const handleUpdateProfile = () => {
  setErrors(validateUserData(updateUserForm));
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
      phoneNumber,
      occupation,
      finance,
      dobDay,
      dobMonth,
      dobYear,
      education,
      biologicalAge,
      overyAge,
      amhLevel,
      lifeCycle,
      pregCycle,
      menstrualCycle,
      crampCycle,
      bleedCycle,
    } = updateUserForm
    setIsLoading(true)
    updateUser(
      {
        "phone_num": phoneNumber,
        "occupation": occupation,
        "dob": `${dobYear}-${dobMonth}-${dobDay}`,
        "education": education,
        "menstrual_cycle": Number(menstrualCycle),
        "bleed_cycle": Number(bleedCycle),
        "cramp_cycle": Number(crampCycle),
        "life_cycle": Number(lifeCycle),
        "preg_cycle": Number(pregCycle),
        "biological_age": biologicalAge,
        "overy_age": overyAge,
        "amh_level": amhLevel,
        "finance": finance,
      },
      setIsLoading,
      toast
    )
    setSubmitted(false)
  }

  const handleSetOccupation = (e) => {
    const { name, value } = e.target
    if (e.target.value !== 'other') {
      setUpdateUserForm({ ...updateUserForm, occupation: value })
      setOtherOccupation(false)
    } else {
      setOtherOccupation(true)
      setUpdateUserForm({ ...updateUserForm, occupation: '' })
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setUpdateUserForm({ ...updateUserForm, [name]: value })
  }

  useEffect(() => {
    if(Object.keys(user).length !== 0){
      let dob = user.dob.split("-")
    if(user.occupation!=='Government Service' && user.occupation!=='Business Man'){
      setOtherOccupation(true)
    }
      const userData = {
        phoneNumber:user.phone_num,
        occupation:user.occupation,
        finance: user.finance,
        dobDay:dob[2],
        dobMonth:dob[1],
        dobYear:dob[0],
        education:user.education,
        biologicalAge:user.biological_age,
        overyAge:user.overy_age,
        amhLevel:user.amh_level,
        lifeCycle:`${user.life_cycle}`,
        pregCycle:`${user.preg_cycle}`,
        menstrualCycle:`${user.menstrual_cycle}`,
        crampCycle:`${user.cramp_cycle}`,
        bleedCycle:`${user.bleed_cycle}`,
      }  
      setUpdateUserForm({...userData})
    }
  }, [user])

  return (
    <div className='outerPage'>
      <Outerheader />
      <h1 className='text-center'>Update Profile</h1>
      <div className='row'>
        <div className='col-md-8 offset-md-2 paddingLeft25'>
          <div className='treeOptionTab'>
            <div className='treeOptionTabHeding'>實際年齡</div>
            <div className='treeOptionTabOption'>
              <input
                className='form-control'
                type='text'
                name='biologicalAge'
                value={updateUserForm.biologicalAge}
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
                value={updateUserForm.overyAge}
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
                value={updateUserForm.amhLevel}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-8 offset-md-2'>
          <div className='formOptionCard'>
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
                      value={updateUserForm.dobYear}
                      onChange={handleChange}
                      dangerouslySetInnerHTML={{ __html: renderYears() }}
                    ></select>
                  </div>
                  <div className='col-md-4 innerFieldDiv'>
                    <select
                      className='form-select'
                      aria-label='Default select example'
                      name='dobMonth'
                      value={updateUserForm.dobMonth}
                      onChange={handleChange}
                      dangerouslySetInnerHTML={{ __html: renderMonths() }}
                    ></select>
                  </div>
                  <div className='col-md-4 innerFieldDiv'>
                    <select
                      className='form-select'
                      aria-label='Default select example'
                      name='dobDay'
                      value={updateUserForm.dobDay}
                      onChange={handleChange}
                      dangerouslySetInnerHTML={{ __html: renderDays() }}
                    ></select>
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
                      value={updateUserForm.phoneNumber}
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
                      name='occupation'
                      value={updateUserForm.occupation}
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
                            value={updateUserForm.occupation}
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
                      value={updateUserForm.education}
                      onChange={handleChange}
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
                          checked={updateUserForm.menstrualCycle === '20'}
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
                          checked={updateUserForm.menstrualCycle === '30'}
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
                            updateUserForm.menstrualCycle !== '20' &&
                            updateUserForm.menstrualCycle !== '30'
                          }
                          onChange={handleChange}
                        />
                        <span className='checkmark'></span>
                        <input
                          className='otherDayinput'
                          type='text'
                          name='menstrualCycle'
                          disabled={
                            updateUserForm.menstrualCycle === '20' ||
                            updateUserForm.menstrualCycle === '30'
                          }
                          value={
                            updateUserForm.menstrualCycle === '20' ||
                            updateUserForm.menstrualCycle === '30'
                              ? ''
                              : updateUserForm.menstrualCycle
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
                          checked={updateUserForm.pregCycle === '0'}
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
                          checked={updateUserForm.pregCycle === '1'}
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
                          checked={updateUserForm.pregCycle !== '0' && updateUserForm.pregCycle !== '1'}
                          onChange={handleChange}
                        />
                        <span className='checkmark'></span>
                        <input
                          className='otherDayinput'
                          type='number'
                          disabled={updateUserForm.pregCycle === '0' || updateUserForm.pregCycle === '1'}
                          name='pregCycle'
                          value={
                            updateUserForm.pregCycle === '0' || updateUserForm.pregCycle === '1' ? '' : updateUserForm.pregCycle
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
                          checked={updateUserForm.crampCycle === '0'}
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
                          checked={updateUserForm.crampCycle === '1'}
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
                          checked={updateUserForm.bleedCycle === '0'}
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
                          checked={updateUserForm.bleedCycle === '1'}
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
                          checked={updateUserForm.bleedCycle === '2'}
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
                          checked={updateUserForm.lifeCycle === '0'}
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
                          checked={updateUserForm.lifeCycle === '1'}
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
                          checked={updateUserForm.lifeCycle === '2'}
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
                          checked={updateUserForm.lifeCycle === '3'}
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
                          checked={updateUserForm.lifeCycle === '4'}
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
                          checked={updateUserForm.lifeCycle === '5'}
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
            <div className='col-md-10 loginBackground'>
              <button onClick={handleUpdateProfile} className='btn'>
                {isloading ? 'Loading...' : 'Update'}
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

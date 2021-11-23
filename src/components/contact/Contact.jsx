import React, { useState, useEffect } from 'react'
import Outerheader from '../outerheader/OuterHeader'
import { renderDays, renderMonths, renderYears } from '../../utils/misc'
import '../../scss/outerpage.scss'
export default function Contact() {
  const [contact, setContact] = useState({
    name: '',
    dobD: '-1',
    dobM: '-1',
    dobY: '-1',
    idNumber: '',
    phoneNumber: '',
    email: '',
  })

  const handleChange = e =>{
    const {name, value} = e.target;
    setContact({
      ...contact, [name]:value
    })
  }

  return (
    <div className='outerPage'>
      <Outerheader />
      <h1 className='text-center'>Contact 聯絡醫生</h1>

      <div className='row'>
        <div className='col-md-8 offset-md-2'>
          <div className='formOptionCard '>
            <h3 className='text-center'> 聯絡資料</h3>
            <div className='row'>
              <div className='col-md-8 offset-md-2'>
                <div className='row'>
                  <label>姓名</label>
                  <br />
                  <div className='col-md-12 innerFieldDiv'>
                    <input
                      className='form-control'
                      type='text'
                      name='name'
                      value={contact.name}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-8 offset-md-2'>
                <div className='row'>
                  <label>生日</label>
                  <br />
                  <div className='col-md-4 innerFieldDiv'>
                    <select
                      className='form-select'
                      aria-label='Default select example'
                      name='dobY'
                      value={contact.dobY}
                      onChange={handleChange}
                      dangerouslySetInnerHTML={{ __html: renderYears() }}
                    ></select>
                  </div>
                  <div className='col-md-4 innerFieldDiv'>
                    <select
                      className='form-select'
                      aria-label='Default select example'
                      name='dobM'
                      value={contact.dobM}
                      onChange={handleChange}
                      dangerouslySetInnerHTML={{ __html: renderMonths() }}
                    ></select>
                  </div>
                  <div className='col-md-4 innerFieldDiv'>
                    <select
                      className='form-select'
                      aria-label='Default select example'
                      name='dobD'
                      value={contact.dobD}
                      onChange={handleChange}
                      dangerouslySetInnerHTML={{ __html: renderDays() }}
                    ></select>
                  </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-8 offset-md-2'>
                <div className='row'>
                  <label>身份證號碼</label>
                  <br />
                  <div className='col-md-12 innerFieldDiv'>
                    <input className='form-control' type='text' 
                      name='idNumber'
                      value={contact.idNumber}
                      onChange={handleChange} />
                  </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-8 offset-md-2'>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='row'>
                      <label>電話</label>
                      <br />
                      <div className='col-md-12 innerFieldDiv'>
                        <input className='form-control' type='text' 
                      name='phoneNumber'
                      value={contact.phoneNumber}
                      onChange={handleChange} />
                      </div>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='row'>
                      <label>Email</label>
                      <br />
                      <div className='col-md-12 innerFieldDiv'>
                        <input className='form-control' type='email' 
                      name='email'
                      value={contact.email}
                      onChange={handleChange}/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-8 offset-md-2 text-center'>
                <button className='btn contactbtn'>馬上聯繫</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className='text-center'>Clinic 合作診所</h1>

      <div className='row'>
        <div className='col-md-8 offset-md-2'>
          <div className='ContctOptionCard '>
            <div className='row'>
              <div className='col-md-7'>
                <div className='row'>
                  <iframe
                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.069603940545!2d121.54702211544704!3d25.031711844536193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abcd6f6d08a7%3A0x77dd93bfa48ba4ae!2zMTA2ODEsIFRhaXdhbiwgVGFpcGVpIENpdHksIERh4oCZYW4gRGlzdHJpY3QsIFNlY3Rpb24gMiwgRHVuaHVhIFMgUmQsIDM56JmfMTLmqJM!5e0!3m2!1sen!2sin!4v1635416501552!5m2!1sen!2sin'
                    width='100%'
                    height='450'
                    allowFullScreen=''
                    loading='lazy'
                    title='This is a medical contact'
                  ></iframe>
                </div>
              </div>
              <div className='col-md-5'>
                <div className='row'>
                  <label>生日</label>
                  <br />
                  <div className='col-md-12 innerFieldDiv'>
                    <input className='form-control' type='text' />
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

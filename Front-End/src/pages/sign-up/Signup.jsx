import React from 'react'
import "./style.css"
import {Row,Col} from "react-bootstrap"

const Signup = () => {
  return (
  <>
    <div id="signup">
     <form action="" >
      <h2 className='text-center'> Register Now</h2>
        <div className="form-con">
          <Row>
            <Col md={6}>
              <input className='form-controls' type="text" placeholder=' First Name' />
            </Col>
            <Col md={6}>
              <input className='form-controls' type="text" placeholder=' Last Name' />
            </Col>
          </Row>
        </div>

        <div className="form-con mt-3">
          <input type="email" className='form-controls' placeholder='Enter Your Email' />
        </div>
        <div className="form-con mt-3">
          <input type="password" className='form-controls' placeholder='Password' />
        </div>
        <div className="form-con mt-3">
          <input type="password" className='form-controls' placeholder='confirm password' />
        </div>

        <div className="form-con">
          <button  className=''>sign up</button>
        </div>
     </form>
    </div>
  </>
  )
}

export default Signup

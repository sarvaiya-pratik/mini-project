import React from 'react'
import "./style.css"
import {Row,Col} from "react-bootstrap"
import {NavLink} from "react-router-dom"
import { useThemeHook } from '../../Global-Component/ThemeProvide'

const Signup = () => {
  const theme = useThemeHook()
  return (
  <>
    <div id="signup" className={theme?"bg-dark-2 text-light":""}>
     <form action="" className={theme?"bg-dark":"bg-light"} >
      <h2 className='text-center'> Register Now</h2>
        <div className="form-con">
          <div className='flname '>
            <Col >
              <input  className={`form-controls ${theme ? "dark-input":"bg-light"}`} type="text" placeholder=' First Name' />
            </Col>
            <Col >
              <input  className={`form-controls ${theme ? "dark-input":"bg-light"}`} type="text" placeholder=' Last Name' />
            </Col>
          </div>
        </div>

        <div className="form-con ">
          <input type="email"  className={`form-controls ${theme ? "dark-input":"bg-light"}`} placeholder='Enter Your Email' />
        </div>
        <div className="form-con">
          <input type="password"  className={`form-controls ${theme ? "dark-input":"bg-light"}`} placeholder='Password' />
        </div>
        <div className="form-con">
          <input type="password"  className={`form-controls ${theme ? "dark-input":"bg-light"}`} placeholder='confirm password' />
        </div>

        

        <div className="form-con ">
          <button  className='lsbtn'>sign up</button>
        </div>
        <div className="form-con">
          <label>Have an Account ? <span> <NavLink to="/login" style={{color: "#af9041",textDecoration:'none'}}>Login</NavLink> </span></label>
        </div>

     </form>
    </div>
  </>
  )
}

export default Signup

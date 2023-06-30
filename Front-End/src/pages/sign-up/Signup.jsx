import React, { useState } from 'react'
import "./style.css"
import {Col} from "react-bootstrap"
import {NavLink} from "react-router-dom"
import { useThemeHook } from '../../Global-Component/ThemeProvide'
import  validate  from './Validate'

const Signup = () => {
  const theme = useThemeHook()
  const [err,setErr] = useState({})
  const [user,setUser] = useState({
    fname:"",
    lname:"",
    email:"",
    password: "",
    cpassword:""
  })

  const handleChange=(e)=>{
    const {name,value} = e.target;
    
    setUser({
      ...user,
      [name]:value
    })
   
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    setErr(validate(user))
  }
  console.log(user)
  console.log(err)
  return (
  <>
    <div id="signup" className={theme?"bg-dark-2 text-light":""}>
     <form action="" className={theme?"bg-dark":"bg-light"} onSubmit={handleSubmit} >
      <h2 className='text-center'> Register Now</h2>
        <div className="form-con">
          <div className='flname '>
            <Col >
              <input name='fname' onChange={handleChange} className={`form-controls ${theme ? "dark-input":"bg-light"}`} type="text" placeholder=' First Name' />
            </Col>
            <Col >
              <input name='lname' onChange={handleChange} className={`form-controls ${theme ? "dark-input":"bg-light"}`} type="text" placeholder=' Last Name' />
            </Col>
          </div>
        </div>

        <div className="form-con ">
          <input name='email' onChange={handleChange} type="text"  className={`form-controls ${theme ? "dark-input":"bg-light"}`} placeholder=' Email' />
          {err.email && <p style={{color:"#d72020",alignSelf:'flex-start',marginBottom:'-20px'}}>{err.email}</p>}
        </div>

        <div className="form-con ">
          <input name='uname' onChange={handleChange} type="text"  className={`form-controls ${theme ? "dark-input":"bg-light"}`} placeholder='Set Username' />
        </div>
        <div className="form-con">
          <input name='password' onChange={handleChange} type="password"  className={`form-controls ${theme ? "dark-input":"bg-light"}`} placeholder='Password' />
          {err.password && <p style={{color:"#d72020",alignSelf:'flex-start',marginBottom:'-20px'}}>{err.password}</p>}
          
        </div>
        <div className="form-con">
          <input name='cpassword' onChange={handleChange} type="password"  className={`form-controls ${theme ? "dark-input":"bg-light"}`} placeholder='confirm password' />
          {err.cpassword && <p style={{color:"#d72020",alignSelf:'flex-start'}}>{err.cpassword}</p>}
        </div>

        

        <div className="form-con ">
          <button  className='lsbtn'>sign up</button>
        </div>
        <div className="form-con">
          <label>Have an Account ? <span> <NavLink to="/login" className='lblToggle' >Login</NavLink> </span></label>
        </div>

     </form>
    </div>
  </>
  )
}

export default Signup

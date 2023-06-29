import React from 'react'
import "./style.css"
import { useThemeHook } from '../../Global-Component/ThemeProvide'
import {NavLink} from "react-router-dom"

const Login = () => {
  const theme = useThemeHook()
  return (
    <div id="login" className={theme?"bg-dark-2 text-light":""}>
    <form action="" className={theme?"bg-dark":"bg-light"} >
     <h2 className='text-center'> Login Now</h2>
      

       <div className="form-con ">
         <input type="email" className={`form-controls ${theme ? "dark-input":"bg-light"}`} placeholder='Enter Username' />
       </div>
       <div className="form-con">
         <input type="password" className={`form-controls ${theme ? "dark-input":"bg-light"}`} placeholder='Password' />
       </div>
       
       <div className="form-con ">
         <button  className='lsbtn'>sign up</button>
       </div>

       <div className="form-con">
          <label>New User ? <span> <NavLink to="/signup" style={{color: "#af9041",textDecoration:'none'}}>sign up</NavLink> </span></label>
        </div>
    </form>
   </div>
  )
}

export default Login

import React, { useState } from 'react'
import "./style.css"
import { useThemeHook } from '../../Global-Component/ThemeProvide'
import { NavLink } from "react-router-dom"

const Login = () => {
  const theme = useThemeHook()
const [user,setUser] = useState({
  uname:"",
  password:""
})


  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(user)
  }
const handleChange=(e)=>{
const {name,value} = e.target
setUser({
  ...user,[name]: value
})
}

  return (
    <div id="login" className={theme ? "bg-dark-2 text-light" : ""}>
      <form action=""
        onSubmit={handleSubmit}
        className={theme ? "bg-dark" : "bg-light"} >
        <h2 className='text-center'> Login Now</h2>

        <div className="form-con ">
          <input type="text"
          name='uname'
            onChange={handleChange}
            className={`form-controls ${theme ? "dark-input" : "bg-light"}`}
            placeholder='Username' 
            autoComplete='true'/>
            
        </div>

        <div className="form-con">
          <input type="password"
          name='password'
            onChange={handleChange}
            className={`form-controls ${theme ? "dark-input" : "bg-light"}`}
            placeholder='Password'
            autoComplete='true' />
        </div>

        <div className="form-con ">
          <button className='lsbtn' type='submit'>Login</button>
        </div>

        <div className="form-con">
          <label>New User ? <span> <NavLink to="/signup" className='lblToggle'>sign up</NavLink> </span></label>
        </div>
      </form>
    </div>
  )
}

export default Login

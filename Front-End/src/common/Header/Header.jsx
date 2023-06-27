import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import "./style.css"
import { ThemeContext } from '../../Components/ThemeProvide'
import {BiMoon, BiSun} from "react-icons/bi"



const Header = () => {

 const {theme,setThemeMode} = useContext(ThemeContext);
 const [darkMod,setDarkMod] = useState(theme)

 useEffect(()=>{
  setThemeMode(darkMod);
 })
  return (
   <>
   <header className={darkMod?"bg-black text-light":"bg-light text-black"}>
      <h2 className='left-con'>Mini Project</h2>

      <div className="mid-con">
        <li>
          <NavLink className="NavLink" to="/home"> Home</NavLink>
        </li>
        <li>
          <NavLink className="NavLink" to="/about"> About</NavLink>
        </li>
        <li>
          <NavLink className="NavLink" to="/fatures"> Fatures</NavLink>
        </li>
      </div>
        
      <div className="right-con">
        <button className='btns'><NavLink className="NavLink" to="/login">Login</NavLink></button>
        <button className='btns'><NavLink className="NavLink" to="/signup">Sign up</NavLink></button>
      </div>


      <div  onClick={()=>setDarkMod(!darkMod)} style={{cursor:"pointer"}}> 
       {darkMod?<BiSun fontSize={"2rem"}/>:<BiMoon fontSize={"2rem"}/>}
      </div>



   </header>
   </>
  )
}

export default Header

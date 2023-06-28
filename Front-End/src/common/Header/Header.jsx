import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import "./style.css"
import { ThemeContext } from '../../Components/ThemeProvide'
import { BiMoon, BiSun } from "react-icons/bi"
import { Navbar, Nav, Container, Button } from "react-bootstrap"
import {LinkContainer} from "react-router-bootstrap"


const Header = () => {

  const { theme, setThemeMode } = useContext(ThemeContext);
  const [darkMod, setDarkMod] = useState(theme)

  useEffect(() => {
    setThemeMode(darkMod);
  })
  return (
    <>
      <Navbar variant={darkMod?"dark":"light"} bg={darkMod?"dark":"light"}>
        <div className="container w-30">
          <div className='nav'>

          <Navbar.Brand href="#home">Mini Proj</Navbar.Brand>
          </div>
          <div className="nav w-30">
            
              <LinkContainer to="/">
                <Nav.Link  className={!darkMod && "text-black"}>Home</Nav.Link> 
              </LinkContainer>
            
            
              <LinkContainer to="/about">
                <Nav.Link className={!darkMod && "text-black"}>About</Nav.Link> 
              </LinkContainer>

              <LinkContainer to="/fature">
                <Nav.Link className={!darkMod && "text-black"}>Fature</Nav.Link> 
              </LinkContainer>

          </div>
          <div className='nav w-30 gap-3'>
              <LinkContainer to="/login">
                <Nav.Link className={!darkMod && "text-black"}>Login</Nav.Link> 
                 
              </LinkContainer>
              <LinkContainer to="/signup" className=''>
                <Nav.Link className={!darkMod && "text-black"}>Sign Up</Nav.Link> 
                  
              </LinkContainer>

              <div onClick={() => setDarkMod(!darkMod)} style={{ cursor: "pointer" }}>
          {darkMod ? <BiSun fontSize={"2rem"} /> : <BiMoon fontSize={"2rem"} style={{color:"Black"}}/>}
        </div>
          </div>
        </div>
      </Navbar>


      
       
    </>
  )
}

export default Header

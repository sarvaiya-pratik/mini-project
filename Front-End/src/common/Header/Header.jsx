import React, { useContext, useEffect, useState } from 'react'
import "./style.css"
import { ThemeContext } from '../../Global-Component/ThemeProvide'
import { BiMoon, BiSun, BiMenu } from "react-icons/bi"
import { Navbar, Nav } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"

const Header = () => {
  const { theme, setThemeMode } = useContext(ThemeContext);
  const [darkMod, setDarkMod] = useState(theme)
  const [menu, setMenu] = useState(false)
 

  useEffect(() => {
    setThemeMode(darkMod);
  })
  return (
    <>
      <Navbar variant={darkMod ? "dark" : "light"} bg={darkMod ? "dark" : "light"}>
        <div className="container">
          <div className='nav-head'>
            <Navbar.Brand href="#home">Mini Project</Navbar.Brand>
          </div>

          <div className="mobile-nav">
            <div onClick={() => setDarkMod(!darkMod)} style={{ cursor: "pointer" }}>
              {darkMod ? <BiSun fontSize={"2rem"} /> : <BiMoon fontSize={"2rem"} style={{ color: "Black" }} />}
            </div>
            <div className={`${!darkMod && "text-dark"}`}><BiMenu fontSize={'2rem'} onClick={() => setMenu(!menu)} /></div>
          </div>


          <div className="nav">
            <LinkContainer to="/">
              <Nav.Link className={!darkMod && "text-black"}>Home</Nav.Link>
            </LinkContainer>
            <Nav.Link className={!darkMod && "text-black"}>About</Nav.Link>
            <Nav.Link className={!darkMod && "text-black"}>Fature</Nav.Link>
          </div>

          <div className='nav gap-3'>
            <LinkContainer to="/login">
              <Nav.Link className={!darkMod && "text-black"}>Login</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/signup" className=''>
              <Nav.Link className={!darkMod && "text-black"}>Sign Up</Nav.Link>
            </LinkContainer>
            <div onClick={() => setDarkMod(!darkMod)} style={{ cursor: "pointer" }}>
              {darkMod ? <BiSun fontSize={"2rem"} /> : <BiMoon fontSize={"2rem"} style={{ color: "Black" }} />}
            </div>
          </div>

        </div>
      </Navbar>

      {/* Sidebar for mobile   */}

      <div className={`sidebar ${menu && "show-sidebar"} ${darkMod ? "bg-black text-light" : "bg-light-2 text-dark"}`}>
        <div className="nav">
          <LinkContainer to="/">
            <Nav.Link className={!darkMod && "text-black"}>Home</Nav.Link>
          </LinkContainer>
          <Nav.Link className={!darkMod && "text-black"}>About</Nav.Link>
          <Nav.Link className={!darkMod && "text-black"}>Fature</Nav.Link>
        </div>

        <div className='nav gap-3'>
          <LinkContainer to="/login">
            <Nav.Link className={!darkMod && "text-black"}>Login</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/signup" className=''>
            <Nav.Link className={!darkMod && "text-black"}>Sign Up</Nav.Link>
          </LinkContainer>
        </div>

      </div>

    </>
  )
}

export default Header

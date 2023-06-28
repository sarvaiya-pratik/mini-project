import React from 'react'
import "./style.css"
import { useThemeHook } from '../../Components/ThemeProvide'

const Footer = () => {
  const theme = useThemeHook()
  return (
    
    <div  className={` footer text-center ${theme?"bg-dark text-light":"bg-light-2 text-dark"}`}>

      <h5>Copyright &copy; 2023 All Rights Reserved</h5>

    </div>
  )
}

export default Footer

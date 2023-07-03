import React, { useState } from 'react'
import Image from '../atom/Image'
import logo from '../../images/logo.png'
import logosmall from '../../images/logo-small.png'
import { NavLink } from 'react-router-dom'
import hamnav from '../../images/quill_hamburger-sidebar.png'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const navStyle=({isActive})=>{
      return{  
        color: "#383838",
        fontSize:"20px",
        fontWeight:isActive ? 400: 300,
        // textShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" 
    }
    }
    const navStyle2=({isActive})=>{
      return{  
        // color:isActive ? "#6E1092": "#fff",
        fontSize:"20px",
        // fontWeight: 500,
    }
    }
  return (
    <div className='padnav z-10 flex navbar items-center justify-between relative '>
      <div className='w-52 lg:w-1/3'>
        <Image src={logo} className=""/>
      </div>
      <div className='hidden w-8/12 lg:flex gap-6 justify-end'>
        <NavLink to="/services" style={navStyle}>Services</NavLink>
        <NavLink to="/a" style={navStyle}>Career</NavLink>
        <NavLink to="/b" style={navStyle}>About Us</NavLink>
        <NavLink to="/c" style={navStyle}>Contact Us</NavLink>
        <NavLink to="/d" style={navStyle}>Alaafia Foundation</NavLink>
      </div>
      <div className='block lg:hidden' onClick={()=>setNav(!nav)}>
         <Image src={hamnav} className="w-8 cursor-pointer"/> 
      </div>
      {nav &&<div className='w-full h-screen lg:hidden sidebar flex flex-col gap-4 bgpurple px-4 pt-4 text-white absolute left-0 top-0'>
        <div className='nav flex justify-between items-center py-3'>
          <Image src={logosmall} className=" w-52" />
          <p className='text-white text-2xl cursor-pointer' onClick={()=>setNav(!nav)}>X</p>
        </div>
        <div className='flex flex-col gap-5'>
        <NavLink to="/services" className="nav" style={navStyle2}>Services</NavLink>
        <NavLink to="#" className="nav" style={navStyle2}>Career</NavLink>
        <NavLink to="#" className="nav" style={navStyle2}>About Us</NavLink>
        <NavLink to="#" className="nav" style={navStyle2}>Contact Us</NavLink>
        <NavLink to="#" className="nav" style={navStyle2}>Alaafia Foundation</NavLink>
        </div>
        <div className='mt-auto pb-8' style={{color:"rgba(245, 219, 255, 0.58)"}}><p className='font-thin text-xs'>Kunden Services Ltd is a leading consulting firm operating in Nigeria, The United Kingdom, and United States of America specializing in financial services in support of business transactions, investment, and development.</p></div>
      </div>
      }
    </div>
  )
}

export default Navbar

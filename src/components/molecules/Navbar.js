import React, { useRef, useState } from 'react'
import Image from '../atom/Image'
import logo from '../../images/logo.png'
import logosmall from '../../images/logo-small.png'
import { NavLink } from 'react-router-dom'
import hamnav from '../../images/quill_hamburger-sidebar.png'
import ex from '../../images/iconoir_cancel.png'
import TextLinks from '../atom/TextLinks'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const sideref = useRef()

    const refresh = () => {
      setNav(false)
      sideref.current.style.display="none"
    }

    const navStyle=({isActive})=>{
      return{  
        color: isActive ? "#6E1092" : "#383838",
        fontSize:"20px",
        fontWeight:isActive ? 400: 300,
    }
    }
    const navStyle2=()=>{
      return{  
        color: "#fff",
        fontSize:"30px",
        // fontWeight: 500,
    }
    }

  return (
    <div className='padnav z-10 flex navbar items-center justify-between relative '>
      <div className='w-52 lg:w-1/3'>
        <TextLinks to="/" children={<Image src={logo} className=""/>} />
      </div>
      <div className='hidden w-8/12 lg:flex gap-16 justify-end'>
        <NavLink to="/services" className="hov" style={navStyle} >Services</NavLink>
        <NavLink to="/about" className="hov" style={navStyle}>About Us</NavLink>
        <NavLink to="/contact" className="hov" style={navStyle}>Contact Us</NavLink>
        <NavLink to="/c" className="hov" style={navStyle}>Blog</NavLink>
        <NavLink to="/faq" className="hov" style={navStyle}>FAQ</NavLink>
      </div>
      <div className='block lg:hidden' onClick={()=>setNav(!nav)}>
         <Image src={hamnav} className="w-8 cursor-pointer"/> 
      </div>
      {nav &&<div ref={sideref} className='w-full an h-screen lg:hidden sidebar flex flex-col gap-4 bgpurple px-4 pt-4 text-white absolute left-0 top-0'>
        <div className='nav flex justify-between items-center py-3'>
          <Image src={logosmall} className=" w-64" />
          <div className='text-white w-10 cursor-pointer' onClick={()=>setNav(!nav)}><Image src={ex}/></div>
        </div>
        <div className='flex flex-col gap-8'>
        <NavLink to="/services" className="nav" onClick={refresh}  style={navStyle2}>Services</NavLink>
        <NavLink to="/about" className="nav" onClick={refresh} style={navStyle2}>About Us</NavLink>
        <NavLink to="/contact" className="nav" onClick={refresh} style={navStyle2}>Contact Us</NavLink>
        <NavLink to="/c" className="nav" onClick={refresh} style={navStyle2}>Blog</NavLink>
        <NavLink to="/faq" className="nav" onClick={refresh} style={navStyle2}>FAQ</NavLink>
        </div>
        <div className='mt-auto pb-8' style={{color:"rgba(245, 219, 255, 0.58)"}}><p className='font-thin text-xs'>Kunden Services Ltd is a leading consulting firm operating in Nigeria, The United Kingdom, and United States of America specializing in financial services in support of business transactions, investment, and development.</p></div>
      </div>
      }
    </div>
  )
}

export default Navbar

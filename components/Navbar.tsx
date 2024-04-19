"use client"

import Link from "next/link"
import { useState } from "react"

const Navbar = () => {
   
   const [ toggle, setToggle] = useState(false)

  return (
    <div>
   {toggle &&  ( 
   <div className="toggled-nav" id="toggle-nav">
      <div className="toggle-nav">
         <div className="toggle-nav-cont">
            <Link href="/" className="toggle-nav-cont-a">HOME</Link>
            <Link href="/about" className="toggle-nav-cont-a">ABOUT US</Link>
            <Link href="/services" className="toggle-nav-cont-a">SERVICES</Link>
            <Link href="/contact" className="toggle-nav-cont-a">CONTACT</Link>
         </div>
         <div 
           className="toggle-back"
           onClick={()=>setToggle(false)}
          >
            <img
            src="https://isopanelscu.files.wordpress.com/2024/03/cross.png"
            alt="x-icon"
            className="x-icon"
            id="x"
          />
         </div>
      </div>
   </div>
   )}

   <div className="navbar">
      <div className="navbar-contents">
            <img
              src="./images/home/Menu bar.png"
              alt="navbar"
              loading="lazy"
              className="navbar-bg-image"
            />
            <div className="navbar-container">
               <div className="navbar-content">
                  <div className="navbar-logo">
                     <img
                        src="./images/home/White.png"
                        alt="logo"
                        loading="lazy"
                        className="navbar-logo-image"
                     />
                  </div>
                  <div className="navbar-links">
                     <Link href="/" className="navbar-links-a">HOME</Link>
                     <Link href="/about" className="navbar-links-a">ABOUT US</Link>
                     <Link href="/services" className="navbar-links-a">SERVICES</Link>
                     <Link href="/contact" className="navbar-links-a">CONTACT</Link>
                  </div>

                  <div 
                     id="navbar" 
                     className="navbar-icon"
                     onClick={()=>setToggle(true)}
                  >
                     <img
                     src="https://isopanelscu.files.wordpress.com/2024/03/menu.png"
                     className="menu-icon"
                     alt="menu"
                   />
                  </div>
               </div>
            </div>
         </div>
      </div>
 </div>
  )
}

export default Navbar

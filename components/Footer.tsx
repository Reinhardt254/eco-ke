import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div>
       <div className="footer">
         <div className="footer-container">
            <div className="footer-content-logo">
               <Image
                 src="/images/home/Color logo.png"
                 alt="logo"
                 className="footer-logo-image"
                 fill={false}
                 width={300}
                 height={150}
               />
               <div>

               </div>
            </div>

            <div className="footer-links">
               <a>Home</a>
               <a>About Us</a>
               <a>Services</a>
               <a>News</a>
               <a>Contact Us</a>
            </div>

            <div className="footer-address">
               <div className="footer-address-text">Naivasha</div>
               <div className="footer-address-text">Kenya</div>
               <div className="footer-address-text">+254 71234567</div>
               <div className="footer-address-text">eco@threadstextiles.com</div>
            </div>
         </div>

            <div className="footer-rights">
               <div className="footer-rights-text">
                  © 2024 ECO THREADS TEXTILES KENYA. All rights reserved
               </div>
            </div>
      </div>
    </div>
  )
}

export default Footer
import Navbar from '@/components/Navbar'
import React from 'react'

const Contact = () => {
  return (
    <div>
      <section>
      <div className="contact-layout">
         <div className="contact-layout-content">
            <Navbar />
            <img
              src="./images/services/Hero-image.png"
              alt="contact-homepage"
              className="contact-layout-image hidden-sm"
              loading="lazy"
            />

            <img
            src="./images/services/Hero-image1.png"
            alt="contact-homepage"
            className="contact-layout-image hidden-lg"
            loading="lazy"
          />
            <div className="contact-layout-text">
               CONTACT US
            </div>
         </div>

         <div className="contact-card">
            <div className="contact-text-h1">
               Get in touch with us today to learn more abouthow we can bring your designs to life withquality and precision.
            </div>

            <div className="contact-text-h2">
               CONTACT US TODAY
            </div>
         </div>
      </div>
   </section>
    </div>
  )
}

export default Contact
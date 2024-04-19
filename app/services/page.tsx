import Navbar from '@/components/Navbar'

const Services = () => {
  return (
    <div>
       <section>
      <div className="services">
         <div className="services-layout">
            <Navbar />
            <img
              src="/images/services/hero-image.png"
              alt="services-homepage"
              className="services-page-image"
              loading="lazy"
            />

            {/* <img
              src="/images/services/Hero-image1.png"
              alt="services-homepage"
              className="services-page-image smalls"
              loading="lazy"
             /> */}

            <div className="services-layout-text">
               <div  className="services-layout-h1">SERVICES</div>
            </div>
         </div>

         <div className="services-adapt-card">
            <div className="services-adapt-card-h1">
               We adapt our production to your specific needs, ensuring your vision becomes a reality
            </div>
         </div>

         <div className="services-our-container">
            <div className="heading services-our-h1">OUR SERVICES</div>
            <div className="services-our-cards">
               <div className="services-our-card">
                  <img
                    src="/images/services/Icon-1.png"
                    alt="icon-1"
                    className="services-icons"
                  />
                  <div className="services-our-h2">CONSULTATION</div>
                  <div className="services-our-p">
                     We provide comprehensive
                     consultation services to assist
                     clients in navigating the
                     complexities of garment
                     manufacturing. 
                  </div>
               </div>

               <div className="services-our-card">
                  <img
                    src="./images/services/Icon-2.png"
                    alt="icon-2"
                    className="services-icons"
                  />
                  <div className="services-our-h2">DEVELOPMENT</div>
                  <div className="services-our-p">
                     Eco Threads Textiles EPZKenya LTD specializes in thedevelopment of garmentsolutions, leveragingcutting-edge technology andinnovation to bring clients ideas to life. 
                  </div>
               </div>

               <div className="services-our-card">
                  <img
                    src="./images/services/Icon-3.png"
                    alt="icon-3"
                    className="services-icons"
                  />
                  <div className="services-our-h2">PRODUCTION</div>
                  <div className="services-our-p">
                     We offer full-scale garmentproduction services,leveraging its high-standardinfrastructure to manufacturesustainable and ethicallyproduced textiles andgarments.
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
    </div>
  )
}

export default Services

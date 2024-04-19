import Navbar from '@/components/Navbar'
import React from 'react'

const About = () => {
  return (
    <section>
      <div className="about">
         <div className="about-layout">
            <Navbar />
            <img
               src="./images/about/Hero-image.png"
               alt="about-image"
               loading="lazy"
               className="about-layout-image hidden-small"
            />
            <img
              src="./images/about/Hero-image1.png"
              alt="about-image"
              loading="lazy"
              className="about-layout-image hidden-large"
             />

             <div className="about-layout-text">
               ABOUT US
             </div>
         </div>

         <div className="about-cards">
            <div className="about-cards-container">
               <div className="about-cards-h1">WHO WE ARE</div>
               <div className="about-cards-content">
                  <div className="about-cards-image-container-small hidden-large">
                     <img 
                       src="./images//about/Picture-1-.png"
                       alt="who-we-are"
                       loading="lazy"
                       className="about-cards-image-small"
                     />
                  </div>  
               <div  className="about-cards-text-p">
                  Eco Threads Textiles Kenya EPZ Limited is agarment manufacturer situated in Naivasha,Kenya. Known for our commitment to ethicalpractices and highstandard infrastructureand technology, our manufacturing facility isa perfect blend of cuttingedge innovationand an appreciation for ethical garment production. We are known for being adaptable as we tailor our services to meet the diverseneeds of our customers, engaging in a widespectrum of projects with flexibility and dedication. With a customercentric philosophyand collaborative spirit, we work closely withclients to understand their vision, goals, andunique requirements, defining our approachand setting us apart in the garment manufacturing industry.
               </div>
               <div className="about-cards-image-container hidden-small">
                  <img 
                    src="./images/about/Picture-1-.png"
                    alt="who-we-are"
                    loading="lazy"
                    className="about-cards-image image-right hidden-small"
                  />
               </div>                
            </div>
            </div>

            <div className="about-cards-container">
               <div className="about-cards-h1 mission-h1">MISSION</div> 
               <div className="about-cards-content">
                  <div className="about-cards-image-container-small hidden-large "> 
                     <img 
                       src="./images/about/Picture-2.png"
                       alt="who-we-are"
                       loading="lazy"
                       className="about-cards-image-small"
                     />
                  </div> 
                  <div className="about-cards-image-container hidden-small">
                     <img 
                       src="./images/about/Picture-2.png"
                       alt="who-we-are"
                       loading="lazy"
                       className="about-cards-image image-left hidden-small"
                     />
                  </div>  
               <div  className="about-cards-text-p pr">
                  Our mission is to provide garment solutionsto our clients, using sustainable and ethicalgarment manufacturing practices. We arecommitted to create a future whereinnovation, technology and responsibilityintersect, setting new benchmarks forsustainable production. Through ouradaptability and customercentricapproach, we strive to empower our clientswith versatile solutions tailored to theirunique needs, fostering collaboration andbringing forth garments that not only meetbut exceed ethical and quality standards.
               </div>              
            </div>
            </div>

            <div className="about-cards-container">
               <div className="about-cards-h1 about-cards-h1s">WORK ETHICS</div>
               <div className="about-cards-content">
                  <div className="about-cards-image-container-small hidden-large">
                     <img 
                       src="./images/about/Picture-3.png"
                       alt="who-we-are"
                       loading="lazy"
                       className="about-cards-image-small"
                     />
                  </div>  
               <div  className="about-cards-text-p about-cards-text-ps">
                  Our commitment to work ethics at EcoThreads Textiles Kenya EPZ Ltd, weprioritize the fair treatment of everyindividual within our organization. Webelieve that fostering an environment offairness is integral to the wellbeing andsuccess of our team members. To ensure this, we go beyond just competitivesalaries; we strive to provide a workplacewhere everyone is valued, acknowledged,and compensated fairly for their contributions. Our dedication extends tomaintaining regular work schedules thatpromote worklife balance, recognizing theimportance of both professional andpersonal aspects of our employees lives.Moreover, we take pride in equipping ourteam with the necessary gear and tools,creating a safe and conducive workingenvironment that enhances productivityand overall job satisfaction. By upholding these principles, we cultivate a workculture at Eco Threads that is not onlyethically sound but also promotes theholistic growth and wellbeing of ourvalued team members.
               </div>
               <div className="about-cards-image-container hidden-small">
                  <img 
                    src="./images/about/Picture-3.png"
                    alt="who-we-are"
                    loading="lazy"
                    className="about-cards-image image-right-b  hidden-small"
                  />
               </div>                
            </div>
            </div>
         </div>
      </div>
   </section>
  )
}

export default About
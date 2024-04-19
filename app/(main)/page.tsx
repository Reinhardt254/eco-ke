import Navbar from "@/components/Navbar";
import { heading } from "@/utils";
                            
export default function Home() {
  return (
   <div>
      <div className="home-page">
         <div className="homepage-image-container">
            <Navbar />
            <img
              src="https://newvashaepz.com/wp-content/uploads/2024/04/Hero-image.png"
              alt="homepage-img"
              className="home-page-image hidden-small"
            />

            <img
            src="https://newvashaepz.com/wp-content/uploads/2024/04/Hero-image-1-3894642343-e1713187287714.png"
            alt="homepage-img"
            className="home-page-image hidden-large"
          />
          <div className={heading.className}>
            <div className="home-overlay-text">
                <div className="home-overlay-h1">ECO THREADS</div>
                <div className="home-overlay-h2">TEXTILES KENYA EPZ</div>
                <div className="home-overlay-h2">LIMITED IS A GARMENT</div>
                <div className="home-overlay-h2">MANUFACTURER</div>
                <div className="home-overlay-button">
                   <a>
                      CONTACT US TODAY
                   </a>
                </div>
            </div>
          </div>
         </div>

       <div className="who-we-are">
         <div className="who-we-are-section">
            <div className="who-we-are-container">
               <div className="who-we-are-title heading">WHO WE ARE</div>
               <div className="who-we-are-paragraph">
                  Eco Threads Textiles Kenya EPZ Limited is a garment manufacturer located in Naivasha, Kenya, renowned for its ethical practices and high-standard infrastructure and technology. We are recognized for our adaptability to our customer needs, capable of working on a wide variety of projects.
               </div>
               <div className="who-we-are-cards">
                  <div  className="who-we-are-content b">
                     <img
                       src="https://newvashaepz.com/wp-content/uploads/2024/04/Icon-3.png"
                       alt="quality assurance"
                       loading="lazy"
                       className="who-we-are-icon"
                     />
                     <div className="who-we-are-icon-text"> 
                        Quality Assurance
                     </div>
                     </div>

                     <div className="who-we-are-content b l pl">
                        <img
                          src="https://newvashaepz.com/wp-content/uploads/2024/04/Icon-2.png"
                          alt="quality assurance"
                          loading="lazy"
                          className="who-we-are-icon"
                        />
                        <div className="who-we-are-icon-text"> 
                           Competitive Pricing
                        </div>
                     </div>

                     <div className="who-we-are-content pt">
                        <img
                          src="https://newvashaepz.com/wp-content/uploads/2024/04/Icon-4.png"
                          alt="quality assurance"
                          loading="lazy"
                          className="who-we-are-icon"
                        />
                        <div className="who-we-are-icon-text"> 
                           Strong Supply Chain
                        </div>
                     </div>

                     <div className="who-we-are-content  l pt pl">
                        <img
                          src="https://newvashaepz.com/wp-content/uploads/2024/04/Icon-1.png"
                          alt="quality assurance"
                          loading="lazy"
                          className="who-we-are-icon"
                        />
                        <div className="who-we-are-icon-text"> 
                           Client Satisfaction
                        </div>
                     </div>
                     </div>
                     <div className="who-we-are-button">
                        <a>
                           LEARN MORE
                        </a>
                     </div>
                  </div>
                  
            <div className="who-we-are-img">
              <img
                alt="who-we-are"
                className="who-we-are-image"
                src="https://newvashaepz.com/wp-content/uploads/2024/04/Women-with-threads-2786663330-e1713180217996.png"
                loading="lazy"
              />
            </div>
         </div>
         </div>
       </div> 

      <div className="why-choose-us">
         <div className="heading why-choose-us-heading">
            WHY CHOOSE US
         </div>

         <div className="why-choose-us-container">
            <div className="why-choose-us-content">
               <div className="why-choose-us-card b">
                  <div className="why-choose-us-h1">LOCATED IN AN EPZ</div>
                  <div className="why-choose-us-p">
                     Enjoys benefits such as tax incentives, stream-
                     lined customs procedures, infrastructure sup-
                     port, and access to a skilled workforce, facilitating
                     cost reduction and enhancing competitiveness in
                     international markets.
                  </div>
               </div>

               <div className="why-choose-us-card b l">
                  <div className="why-choose-us-h1">INNOVATIVE SOLUTIONS</div>
                  <div className="why-choose-us-p">
                     Our dedication to technology and innovationmeans clients benefit from cutting-edge solu-tions in garment manufacturing. This canresult in unique, forward-thinking productsthat stand out in the market.
                  </div>
               </div>

               <div className="why-choose-us-card pt ">
                  <div className="why-choose-us-h1">CUSTUMIZATION OPTIONS</div>
                  <div className="why-choose-us-p">
                     We offer customization options for clients, allow-ing them to tailor products to their specific needs.his flexibility is a significant advantage for busi-nesses looking for unique and personalized solu-tions.
                  </div>
               </div>

               <div className="why-choose-us-card l pt">
                  <div className="why-choose-us-h1">ETHICAL PRACTICES</div>
                  <div className="why-choose-us-p">Clients can be associated with a
                     company that upholds ethical practices in
                     every aspect of its operations.
                  </div>
               </div>
            </div>
         </div>
      </div>
</div>
  );
}

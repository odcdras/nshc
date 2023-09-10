import { Avatar, Typography, Button } from "@material-tailwind/react";
import {
  MapPinIcon,
  BriefcaseIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/solid";
import { Footer } from "@/widgets/layout";

export function Aboutus() {
  return (
    <>
    <section className="w3l-footer-29-main">                                           
                <div className="container">
                    <div className="d-grid grid-col-1 footer-top-20">
                        <div className="footer-list-29 footer-5">
                            <div className="properties">
                                <h5 className="footer-title-30"> Our Founders </h5>
                                <a href="#">
                                    <img
                                        src="/img/profile.jpg"
                                        className="img-responsive"
                                        alt=""
                                    />
                                    <p>
                                    Dr. Nirjesh is a Consulting speach and therapist Specialist practising at name Clinic in address. With an  degree and a DCH (Diploma in Child Health) as his postgraduate qualifications, Dr. Nirjesh has been specialising in general pediatrics and neonatology for the past 20+ years. Facilities available at  Clinic include vaccination, nebulisation, lab collection and dietary counselling.



 

                                    </p>
                                </a>
                                                                     
                            </div>
                        </div>                                
                    </div>                            
                </div>                                        
            </section>

            <section className="w3l-footer-29-main" id="footer">               
                <Footer />     
            </section>
      
    </>
  );
}

export default Aboutus;

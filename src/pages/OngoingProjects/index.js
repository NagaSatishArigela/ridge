import React from 'react';
import {
  Link
} from "react-router-dom";
import BannerNext1 from '../../assets/images/sun-rise-grey-logo.png';
import BannerNext2 from '../../assets/images/kshetraLogo.jpg';
import BannerNext3 from '../../assets/images/Tranquil-Valley-300x207.png';
import WhatsAppLink from "../../components/WhatsappLink";
import '../../components/Styles/styles.css';



const bannerNext = [
    {
        image: BannerNext2,
        text : "Where modernity embraces tradition, & life moves at a majestic pace.Where nature-centric traditions make a grand comeback.",
        link: "projects/kshetra",
    },
    {
        image: BannerNext3,
        text : "A project that gives you the best of both worlds. The proximity to industrial hubs ensures easy access while",
        link : "projects/tranquilvalley",
    },
    {
        image: BannerNext1,
        text : "A project located in the high-rising growth corridor of the ORR and close to one of India's leading Industrial hubs.",
        link : "projects/sunrisecity",
    }
];

function CompletedProjects() {
    return(
        <>
        <div className="top-header">
        <div className="container-m">
          <ul>
            <li>
                <a href='tel:9000888152'><i className="fa fa-phone"></i> +91 9000888152</a>
            </li>
            <li>
            <a href='mailto:info@ridgehomes.in'><i className="fa fa-envelope"></i> info@ridgehomes.in</a>
            
            </li>
          </ul>
          {/* <label><img src={Elivation} /></label> */}
        </div>
      </div>
            <div className="container-m projects">
                <h3>OnGoing Projects</h3>
            <div className="banner-next-section">
                {
                    bannerNext.map(item => 
                        <div className={item.title ? "banner-next banner-next-title" : "banner-next"}>
                            <Link to={`/${item?.link}`}> <img src={item?.image} alt="testimonials" loading='lazy'/></Link> 
                            {
                                item.heading ? <h3>{item?.heading}</h3> 
                                :
                                item.title ?
                                <>
                                    <h3>{item?.title}</h3>
                                    <p>{item?.description}</p>
                                    <Link to={`/${item?.link}`}>Read More</Link>
                                </>
                                :
                                <>
                                    <p>{item?.text}</p>
                                    <Link to={`/${item?.link}`}>Read More</Link>
                                </>
                            }
                            
                        </div>
                    )
                }
                 
            </div>
        </div>
        <WhatsAppLink />
        </>
    )
}

    
export default CompletedProjects;
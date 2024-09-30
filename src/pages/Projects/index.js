import React from 'react';
import {
  Link
} from "react-router-dom";
import { Helmet } from "react-helmet";
import BannerNext1 from "../../assets/webp/open-plots-for-sale-in-maheshwaram  .webp";
import BannerNext2 from "../../assets/webp/kshetraLogo.webp";
import BannerNext3 from "../../assets/webp/hmda-approved-layouts-in-maheshwaram  _1.webp";
import BannerNext4 from "../../assets/webp/plots in hyderabad.webp";
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
        //text : "A project that gives you the best of both worlds. The proximity to industrial hubs ensures easy access while experiencing",
        link : "projects/tranquilvalley",
        hmda: "HMDA No:- 055926/SMD/LT/U6/HMDA/22072022",
        rera: "RERA:- Po2400005589"
    },
    {
        image: BannerNext1,
        //text : "The property market in Hyderabad has been growing by leaps and bounds, making it an ideal investment destination for home buyers ",
        link : "projects/sunrisecity",
        hmda: "HMDA No:- 000186/LO/PLG/HMDA/2022",
        rera: "RERA:- P01100005222"
    },
    {
        image: BannerNext4,
        text : "The property market in Hyderabad has been growing by leaps and bounds, making it an ideal investment destination for home buyers and investors.",
        link : "projects/springcity",
    }
];

function AllProjects() {
    return(
        <>
        <Helmet>
            <title>Projects by Ridge || #1 Real Estate Company in Hyderabad</title>
            <meta name="description" content="Open plots for sale in prime locations of Hyderabad. Small Investment with big return. Contact us today to know more." />
        </Helmet>
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
            <div style={{margin: 'auto', padding: '100px 0'}}>
                <h3 style={{fontSize: '23px', textAlign: 'center'}}>Projects</h3>
            <div className="banner-next-section">
                {
                    bannerNext.map(item => 
                        <div className={item.title ? "banner-next banner-next-title" : "banner-next"}>
                            <Link to={`/${item?.link}`}><img src={item?.image} alt="testimonials" /></Link>
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
                                    <p><b>{item?.hmda}</b></p>
                                    <p><b>{item?.rera}</b></p>
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

    
export default AllProjects;
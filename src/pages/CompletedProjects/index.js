import React from 'react';
import {
  Link
} from "react-router-dom";
import BannerNext1 from '../../assets/images/springlogo.png';
import WhatsAppLink from "../../components/WhatsappLink";
import '../../components/Styles/styles.css';



const bannerNext = [
    {
        image: BannerNext1,
        text : "Ridge’s Spring City has everything you need for your family. ",
        link : "/projects/springcity",
    }
];

function OnGoingProjects() {
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
                <h3>Completed Projects</h3>
            <div className="banner-next-section ">
                {
                    bannerNext.map(item => 
                        <div className={item.title ? "banner-next banner-next-title" : "banner-next"}>
                          <Link to={item.link}>  <img src={item?.image} alt={item?.title} loading='lazy'/>
                            {
                                item.heading ? <h3>{item?.heading}</h3> 
                                :
                                item.title ?
                                <>
                                    <h3>{item?.title}</h3>
                                    {/* <p>{item?.description}</p> */}
                                    {/* <Link to={`/${item?.link}`}>Read More</Link> */}
                                </>
                                :
                                <>
                                    {/* <p>{item?.text}</p> */}
                                    {/* <Link to={`/${item?.link}`}>Read More</Link> */}
                                </>
                            }
                            </Link>
                        </div>
                    )
                }
                 
            </div>
        </div>
        
        <WhatsAppLink />
        </>
    )
}

    
export default OnGoingProjects;

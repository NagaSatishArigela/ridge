import React from "react";
import { Helmet } from "react-helmet";
import HomeContact from "../../components/HomeContact";
import HomeSections from "../../components/HomeSections";
import ContactBanner from "../../assets/images/contactBackground.png";
import '../../components/Styles/styles.css';
import WhatsAppLink from "../../components/WhatsappLink";


function AboutUs() {
  return (
     <>
     <Helmet>
       <title>#1 About Us Best Realestate company in hyderabad | Ridge Homes</title>
       <meta name="description" content="A home for learning & growth that upholds traditions & age-old practices. Discover more about us today & build a foundation that will stand the test of time." />
    </Helmet>
     <div className="top-header">
        <div className="container-m">
          <ul>
            <li>
                <a href='tel:9000888152'><i class="fa fa-phone"></i> +91 9000888152</a>
            </li>
            <li>
            <a href='mailto:info@ridgehomes.in'><i class="fa fa-envelope"></i> info@ridgehomes.in</a>
            
            </li>
          </ul>
          {/* <label><img src={Elivation} /></label> */}
        </div>
      </div>
     <div className="aboutus">
      <div className="container-m">
        <p>
        Ridge is a culmination of people with an acquired passion for conscious living. We believe learning and growth begins at home. A home that is designed to uphold traditions and age-old practices is one that will stand the test of time. A recurring theme at Ridge is the creation of ideal living environments that honour the knowledge of our forefathers. Recently, the growth of consumerism and city life has taken its toll on family upbringing. When we started Ridge, we aimed to bring families together in more ways than one. All our projects are focused on the rejuvenation of our customers. With an appreciation for nature, art and culture, Ridge is on a path to revolutionizing living spaces.
        </p>
        </div>
       </div>
       
       <WhatsAppLink />
     </>
  );
}

export default AboutUs;

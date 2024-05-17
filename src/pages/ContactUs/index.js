import React from "react";
import { Helmet } from "react-helmet";
import HomeContact from "../../components/HomeContact";
import HomeSections from "../../components/HomeSections";
import ContactBanner from "../../assets/images/contactBackground.png";
import WhatsAppLink from "../../components/WhatsappLink";
import '../../components/Styles/styles.css';


function ContactUs() {
  return (
     <><Helmet>
      <title>#1 Top Real Estate Companies in Hyderabad contact us | Ridge Homes</title>
      <meta name="description" content="Ridge Homes: where passionate people create homes for conscious living. We care for your well-being. Contact us for open plots, villa plots, and more." /> 
    </Helmet>
     <div className="contactus">
        <HomeContact page="Contact Us" srd="66470c55735daf1c2ba4514d" banner={ContactBanner} />
        
        <WhatsAppLink />
        </div>
     </>
  );
}

export default ContactUs;

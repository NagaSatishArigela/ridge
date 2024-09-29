import React from 'react';
import HomeContactForm from '../ContactForm';
import '../Styles/styles.css';



function HomeBanner(props) {
    const { bannerImage, landing } = props;

   

  return (
    <section className="banner">
        <img src={bannerImage} alt="banner image" loading='lazy'/>
        {landing && 
          <div className="landing-ads">
            <HomeContactForm srd="664456705d8deffd47ff9b89" />
          </div>
        }
    </section>
  );
}

export default HomeBanner;

import React from 'react';
import '../Styles/styles.css';
import HomeContactForm from '../ContactForm';
import TopHeader from '../TopHeader';
import { FaEnvelope, FaMarker, FaPhone } from 'react-icons/fa';




function HomeContact(props) {
    const { banner, contactDetails, noContact, page, srd } = props;
  return (
    <>
    <TopHeader />
      <section className="home-contact" style={{backgroundImage: `url(${banner})`}}>
           <div className="container-mc">
                <div className="contact-l">
                    <h3>Contact Us</h3>
                    { !noContact &&
                        <div className='contact-home-sec'>
                        <FaMarker/>
                        <div className='sec-bloc'>
                            <h5>Address</h5>
                            <p>Trendz JP, 3rd floor<br/>
                            C9X6+2G9, Chhota Anjaiah Nagar<br/>
                            Gachibowli, Hyderabad, Telangana 500032</p>
                        </div>
                    </div>
}
                    <div className='contact-home-sec'>
                        <FaPhone/>
                        <div className='sec-bloc'>
                            <h5>phone</h5>
                            <p><a href={`tel:${contactDetails ? contactDetails.phone : '9000888152'}`}>+91 {contactDetails ? contactDetails.phone : '9000888152'}</a></p>
                        </div>
                    </div>
                    <div className='contact-home-sec'>
                        <FaEnvelope/>
                        <div className='sec-bloc'>
                            <h5>Email</h5>
                            <p><a href={`mailto:${contactDetails ? contactDetails.email : 'info@ridgehomes.in'}`}>{contactDetails ? contactDetails.email : 'info@ridgehomes.in'}</a></p>
                        </div>
                    </div>
                </div>

                <div className='contact-r'>
                    <HomeContactForm page={page} srd={srd} />
                </div>
                
           </div>
      </section>
    </>
  );
}

export default HomeContact;

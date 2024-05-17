import React from 'react';
import '../Styles/styles.css';
import HomeContactForm from '../ContactForm';
import TopHeader from '../TopHeader';




function HomeContact(props) {
    const { banner, contactDetails, noContact, page, srd } = props;
  return (
    <>
    <TopHeader />
      <section className="home-contact" style={{backgroundImage: `url(${banner})`}}>
           <div className="container-m">
                <div className="contact-l">
                    <h3>Contact Us</h3>
                    { !noContact &&
                        <div className='contact-home-sec'>
                        <i className='fa fa-map-marker'></i>
                        <div className='sec-bloc'>
                            <h5>Address</h5>
                            <p>Trendz Trident, 2nd floor<br/>
No.1-98/5/5/6, Plot No: 87, Survey No: 67<br/>
Jubilee Enclave, Madhapur, Serilingampally<br/>
Mandal, Hyderabad, Telangana 500081</p>
                        </div>
                    </div>
}
                    <div className='contact-home-sec'>
                        <i className='fa fa-phone'></i>
                        <div className='sec-bloc'>
                            <h5>phone</h5>
                            <p><a href={`tel:${contactDetails ? contactDetails.phone : '9000888152'}`}>+91 {contactDetails ? contactDetails.phone : '9000888152'}</a></p>
                        </div>
                    </div>
                    <div className='contact-home-sec'>
                        <i className='fa fa-envelope'></i>
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

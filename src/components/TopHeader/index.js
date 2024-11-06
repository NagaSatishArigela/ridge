import React, { useEffect } from 'react';
import '../Styles/styles.css';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

const topContact = [{
  page: 'kshetra',
  mobile: '7775857777',
  email: 'Kshetra@ridgehomes.in'
},{
  page: 'sunrisecity',
  mobile: '7396897737',
  email: 'myridgehome@gmail.com'
},{
  page: 'tranquilvalley',
  mobile: '8886033333',
  email: 'tranquil@ridgehomes.in'
},{
  page: 'springcity',
  // mobile: '7396897737 ',
  mobile: '9000888152',
  email: 'info@ridgehomes.in'
},
];

function Header() {
  const location = window.location.href.split('/');
  const locationMenu = location[location.length - 1];
  const contactDetails = topContact.find((item) => item.page === locationMenu);
  return (
      <div className="top-header">
        <div className="container-m">
          <ul>
            <li>
                <a href={`tel:${contactDetails ? contactDetails.mobile : '9000888152'}`}><FaPhone/> +91 {contactDetails ? contactDetails.mobile : '9000888152'}</a>
            </li>
            <li>
            <a href={`mailto:${contactDetails ? contactDetails.email : 'info@ridgehomes.in'}`}><FaEnvelope/> {contactDetails ? contactDetails.email : 'info@ridgehomes.in'}</a>
            
            </li>
          </ul>
          {/* <label><img src={Elivation} /></label> */}
        </div>
      </div>
  );
}

export default Header;

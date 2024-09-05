import React from "react";
import {
  Link
} from "react-router-dom";
import logo from '../../assets/images/ridgeNewLogo.png';
// import logo from '../../assets/images/elivation.png';
import '../Styles/styles.css';


function Footer() {
  
  return (
<>
      <div className="footer">
        <div className="container-m">
        <div className="logo" style={{display: 'inline-flex'}}>
            <Link to="/"><img src={logo} alt="logo" /></Link>
            <p style={{color:"#fff", fontSize: '12px', display: 'flex', paddingTop: '50px'}}>&nbsp;ISO <span style={{position: 'relative'}}>&nbsp;Certified<br/><span style={{position:'absolute', right: '6px'}}>9001:2015</span></span></p>
        </div>
        <div className="footer-links">
            <h3>RIDGE HOMES</h3>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
                <li>
                    <Link to="/about-us">About us</Link>
                    {/* <a href="https://ridgehomes.in/about-us/">About us</a> */}
                </li>
                <li>
                    <Link to="/contactus">Contact us</Link>
                </li>
                <li>
                    <Link to="/privacy-policy">Privacy Policy</Link>
                </li>
            </ul>
        </div>
        <div className="footer-links">
            <h3>PROJECTS</h3>
            <ul>
                <li>
                    <Link to="/projects/onGoingProjects">Ongoing Projects</Link>
                </li>
                <li>
                    <Link to="/projects/completedProjects">Completed Projects</Link>
                </li>
            </ul>
        </div>
        <div className="footer-links">
            <h3>CONTACT US</h3>
            <ul>
                <li>
                    <a href="tel:9000888152"><i class="fa fa-phone"></i>+91 9000888152</a>
                </li>
                <li>
                    <a href='mailto:info@ridgehomes.in'>info@ridgehomes.in</a>
                </li>
               
            </ul>
        </div>
        <div className="footer-links">
            <h3>FOLLOW ON</h3>
            <a href="https://twitter.com/myridgehomes" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-x-twitter"></i></a>
            <a href="https://www.facebook.com/MyRidgeHomes/" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i></a>
            <a href="https://www.instagram.com/myridgehomes/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a>
            <a href="https://www.youtube.com/channel/UCwZpttLAxA1j6_pmoc_MInA" target="_blank" rel="noopener noreferrer"><i className="fa fa-youtube"></i></a>
            <a href="https://www.linkedin.com/company/myridgehomes/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a>
        </div>
        </div>
      </div>
      <div className="copy_right">
        <div className="container-m">
            &#169; RIDGE HOMES LLP
        </div>
      </div>
      </>
  );
}

export default Footer;

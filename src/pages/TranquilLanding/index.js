import React from "react";
import { Helmet } from "react-helmet";
import Banner from '../../assets/images/Tranquil valley banner.jpg';
import ContactBanner from "../../assets/images/contactBackground.png";
import Tranquil1 from '../../assets/images/tranquil1.png';
import Tranquil2 from '../../assets/images/tranquil2.jpeg';
import Image1 from '../../assets/images/tranq1.png';
import Image2 from '../../assets/images/tranq2.png';
import Image3 from '../../assets/images/tranq3.png';
import Image4 from '../../assets/images/tranq4.png';
import Image5 from '../../assets/images/tranq5.png';
import Image6 from '../../assets/images/tranq6.png';
import Image7 from '../../assets/images/tranq7.png';
import Image8 from '../../assets/images/tranq8.png';
import Image9 from '../../assets/images/tranq9.png';
import Image10 from '../../assets/images/tranq10.png';
import Image11 from '../../assets/images/tranq11.png';
import Image12 from '../../assets/images/tranq12.png';
import Image13 from '../../assets/images/cc raods.png';
import Image14 from '../../assets/images/open amphitheatre.png';
// import Image15 from '../../assets/images/mini club house.png';
import Image16 from '../../assets/images/Footpath Tiles (1).png';
import Image17 from '../../assets/images/Harvesting pits.png';
import HomeBanner from "../../components/HomeBanner";
import HomeContact from "../../components/HomeContact";
import T1 from '../../assets/images/t1.jpg';
import T2 from '../../assets/images/t2.jpg';
import T3 from '../../assets/images/t3.jpg';
import T4 from '../../assets/images/t4.jpg';
import T5 from '../../assets/images/t5.jpg';
import T6 from '../../assets/images/t6.jpg';
import RightImageLeftText from "../../components/RightImageLeftText";
import '../../components/Styles/styles.css';
import HighlightText from "../../components/HighlightText";
import ProjectHightlights from "../../components/ProjectHighlights";
import WhatsAppLink from "../../components/WhatsappLink";

const rightImage = {
    heading: "Tranquil Valley",
    description: "A project that gives you the best of both worlds. The proximity to industrial hubs ensures easy access while experiencing the serenity of nature simultaneously.  Located in Maheshwaram, Tranquil Valley stays true to its name. The serene surroundings make the project a great choice for families looking to settle down. Apart from being an excellent location for housing purposes, Tranquil is also a great investment opportunity for those looking to diversify. Tranquil Valley is the final product of years of industry research. Equipped with contemporary villas, and spacious plots, Tranquil Valley is yet another accomplishment in the world of Ridge.",
    image: Tranquil1
}

const projectHightlights = [ 
    {text: "HMDA Layout", image: Image1},
    {text: "Well designed 40' wide Entrance & arch", image: Image2},
    {text: "30' 40' wide Internal Roads", image: Image3},
    {text: "Total compound wall around the layout", image: Image4},
    {text: "100% Vasthu", image: Image5},
    {text: "Yoga", image: Image6},
    {text: "Sports children's park", image: Image7},
    {text: "24/7 SECURITY", image: Image8},
    {text: "cricket Nets & Badminton", image: Image9},
    {text: "Under Ground Electricity & Modern street lights", image: Image10},
    {text: "Underground drainage system", image: Image11},
    {text: "Overhead water tank with waterlines", image: Image12},
    {text: "CC Roads ", image: Image13},
    {text: "Open amphitheatre", image: Image14},
    // {text: "Mini club house", image: Image15},
    {text: "Footpath Tiles", image: Image16},
    {text: "Harvesting pits", image: Image17},
]

const highlightPoints = [
    {text: "20 min drive from Pharma City"},
    {text: "35 min drive from Financial District"},
    {text: "20 min drive from Rajiv Gandhi International Airport"},
    {text: "Close to international school"},
];


const tranquilContact = {
    phone: "8886033333",
    email: "tranquil@ridgehomes.in"
 };

function TranquilLanding() {
  return (
     <>
      <Helmet>
        <meta name="title" content="#1 HMDA Open Plots in Maheshwaram || Tranquil Valley" />
        <meta name="description" content="Escape to peace at Ridge Homes' Tranquill Valley in Maheshwaram with HMDA approved open plots. Experience the perfect blend of comfort and serenity. Book now!" /> 
        <meta name="keywords" content="plots for sale in maheshwaram, open plots in maheshwaram, hmda plots in maheshwaram, plot rates in maheshwaram, plots for sale in maheshwaram hyderabad, plots in maheshwaram hyderabad , dtcp plots in maheshwaram, hmda approved plots in maheshwaram, open plots for sale in maheshwaram, ridge homes Tranquil Valley" />
    </Helmet>
        <HomeBanner bannerImage={Banner} landing={true}/>
        <RightImageLeftText data={rightImage} />
        {/* <HomeBanner bannerImage={Kshetra2}/> */}
        <section className="tImages">
        <div className="container-m">
            <img src={T1} />
            <img src={T2} />
            <img src={T3} />
        </div>
        <div className="container-m">
            <img src={T4} />
            <img src={T5} />
            <img src={T6} />
        </div>
        </section>
        <ProjectHightlights data={projectHightlights} />
        <HighlightText data={highlightPoints} highlightImage={Tranquil2} />
        <div className="map-bottom">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3813.0922620911792!2d78.4061244!3d17.1169983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbb10e1babfbe1%3A0xf5ccd2c4c46ce7b3!2sTranquil%20Valley!5e0!3m2!1sen!2sin!4v1668533503942!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        
        <HomeContact page="tranquil Landing" noContact={true} contactDetauls={tranquilContact} banner={ContactBanner} />
        <WhatsAppLink whatsappLink="https://wa.me/918886033333?text=" />
     </>
  );
}

export default TranquilLanding;

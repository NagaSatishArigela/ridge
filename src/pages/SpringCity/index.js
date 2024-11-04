import React from "react";
import { Helmet } from "react-helmet";
import HomeContact from "../../components/HomeContact";
import Banner from '../../assets/assets/spring city/images/plots in hyderabad.webp';
import Image1 from '../../assets/assets/spring city/images/HMDA Layout.webp';
import Image2 from '../../assets/assets/spring city/images/Well designed 40 wide Entrance.webp';
import Image3 from '../../assets/assets/spring city/images/3040 wide Internal Roads.webp';
import Image4 from '../../assets/assets/spring city/images/Avenue Plantation.webp';
import Image5 from '../../assets/assets/spring city/images/Harvesting pits.webp';
import Image6 from '../../assets/assets/spring city/images/Footpath Tiles.webp';
import Image7 from '../../assets/assets/spring city/images/100 Vasthu.webp';
import Image8 from '../../assets/assets/spring city/images//Street lights.webp';
import Image9 from '../../assets/assets/spring city/images/Underground drainage system.webp';
import Image10 from '../../assets/assets/spring city/images/Overhead water tank with waterlines.webp';
import Spring2 from "../../assets/assets/spring city/images/plots sale.webp";
import T1 from '../../assets/assets/spring city/images/open plots.webp';
import T2 from '../../assets/assets/spring city/images/plots for sales.webp';
import T3 from '../../assets/assets/spring city/images/best realstate company in hyderabad.webp';
import T4 from '../../assets/assets/spring city/images/open plots.webp';
import T5 from '../../assets/assets/spring city/images/plots in hyderabad.webp';
import T6 from '../../assets/assets/spring city/images/best realstate plots.webp';
import ContactBanner from "../../assets/images/contactBackground.png";
import high from "../../assets/assets/spring city/images/plots.webp";
import HighlightText from "../../components/HighlightText";
import ProjectHightlights from "../../components/ProjectHighlights";
import RightImageLeftText from "../../components/RightImageLeftText";
import HomeBanner from "../../components/HomeBanner";
import WhatsAppLink from "../../components/WhatsappLink";
import '../../components/Styles/styles.css';


const rightImage = {
    heading: "Spring City 4",
    description: "The property market in Hyderabad has been growing by leaps and bounds, making it an ideal investment destination for home buyers and investors. The city has become one of the most happening cities of India, with IT hubs, educational institutes, international airport, and many other significant developments taking place in the city.",
    image: Spring2,
    altText: "plots sale"
}

const projectHightlights = [ 
    {text: "HMDA Layout", image: Image1, altText: "HMDA layout"},
    {text: "Well designed 40' wide Entrance", image: Image2, altText: "well designed 40 wide entrance"},
    {text: "30' 40' wide Internal Roads", image: Image3, altText: "30*40 wide internal roads"},
    {text: "Avenue Plantation", image: Image4, altText: "avenue plantation"},
    {text: "Harvesting pits", image: Image5, altText: "harvesting pits"},
    {text: "Footpath Tiles", image: Image6, altText: "footpath tiles"},
    {text: "100% Vasthu", image: Image7, altText: "100 vastu"},
    {text: "Sports children's park", image: Image7, altText: "sports"},
    {text: "Street lights", image: Image8, altText: "street lights"},
    {text: "Underground drainage system", image: Image9, altText: "underground drainage"},
    {text: "Overhead water tank with waterlines", image: Image10, altText: "overhead water tank"},
];

const highlightPoints = [
    {text: "5 Min Drive to Biggest Medical Devices Park in Telagana"},
    {text: "Close to Employment HUB"},
    {text: "Close to International School & Engineering College"},
    {text: "10 Min Drive to Ameenpur"},
    {text: "20 Min Drive to BHEL X Roads"},
    {text: "20 Min Drive to Miyapur X Roads"},
    {text: "10 min Drive to Bachupally X Roads"},
    {text: "30 Min Drive to KPHB & JNTU"},
    {text: "30 Min Drive to HITEC City"},
    {text: "20 Min Drive To Lingampally MMTS"},
];



function SpringCity() {
  return (
     <>
     <Helmet>
        <title>#1 Plots in Sultanpur Hyderabad || Spring city 4</title>
        <meta name="description" content="Build your dream home in Hyderabad with Plots in Sultanpur by Ridge Homes. Luxury living & easy connectivity to top amenities. Invest now for a better future." /> 
        <meta name="keywords" content="plots in sultanpur hyderabad, open plots in sultanpur hyderabad, plots for sale in sultanpur hyderabad , plots for sale in bachupally, residential plots for sale in bachupally hyderabad, plot for sale in bachupally hyderabad, plots in bachupally, gated community plots for sale in bachupally, commercial plots for sale in bachupally, hmda approved plots in bachupally, hmda plots in bachupally ,open plots for sale in bachupally" />
    </Helmet>
        <HomeBanner bannerImage={Banner} altText="plots in hyderabad"/>
        <RightImageLeftText data={rightImage} />
        <section className="tImages">
        <div className="container-m">
            <img src={T1} alt="open plots"/>
            <img src={T2} alt="plots for sales"/>
            <img src={T3} alt="best realstate company in hyderabad"/>
        </div>
        <div className="container-m">
            <img src={T4} alt="open plots"/>
            <img src={T5} alt="plots in hyderabad"/>
            <img src={T6} alt="best realstate plots"/>
        </div>
        </section>
        <ProjectHightlights data={projectHightlights} />
        <HighlightText data={highlightPoints} highlightImage={high} altText="plots"/>
        <div className="map-bottom">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15216.517678657841!2d78.3132407!3d17.5490239!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8d011d3fc611%3A0xc8fbb87cce1568ca!2sSpring%20City1%20-%20Sulthanpur!5e0!3m2!1sen!2sin!4v1669394532804!5m2!1sen!2sin" width="600" height="450" title="spring city" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
       
        <HomeContact page="Spring City" noContact={true} banner={ContactBanner} />
        <WhatsAppLink whatsappLink="https://wa.me/9059059392?text=" />

     </>
  );
}

export default SpringCity;

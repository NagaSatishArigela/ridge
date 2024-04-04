import React from "react";
import { Helmet } from "react-helmet";
import HomeContact from "../../components/HomeContact";
import Banner from '../../assets/images/SUNEISE-CITY-banner.jpg';
import Image1 from '../../assets/images/tranq1.png';
import Image2 from '../../assets/images/tranq2.png';
import Image3 from '../../assets/images/tranq3.png';
import Image4 from '../../assets/images/Avenue Plantation (1).png';
import Image5 from '../../assets/images/tranq5.png';
import Image6 from '../../assets/images/Harvesting pits.png';
import Image7 from '../../assets/images/tranq7.png';
import Image8 from '../../assets/images/Footpath Tiles (1).png';
import Image9 from '../../assets/images/tranq9.png';
import Image10 from '../../assets/images/tranq10.png';
import Image11 from '../../assets/images/tranq11.png';
import Image12 from '../../assets/images/tranq12.png';
import Spring1 from "../../assets/images/spring1.jpeg";
import Spring2 from "../../assets/images/springb1.jpeg";
import T1 from '../../assets/images/springc1.jpeg';
import T2 from '../../assets/images/springc2.jpeg';
import T3 from '../../assets/images/springc3.jpeg';
import T4 from '../../assets/images/springc4.jpeg';
import T5 from '../../assets/images/springc5.jpeg';
import T6 from '../../assets/images/springc6.jpeg';
import ContactBanner from "../../assets/images/contactBackground.png";
import high from "../../assets/images/springLocation.jpeg";
import bannerNext from "../../assets/images/sunrise_city.jpeg";
import HighlightText from "../../components/HighlightText";
import ProjectHightlights from "../../components/ProjectHighlights";
import RightImageLeftText from "../../components/RightImageLeftText";
import HomeBanner from "../../components/HomeBanner";
import WhatsAppLink from "../../components/WhatsappLink";
import '../../components/Styles/styles.css';


const rightImage = {
    heading: "Spring City 4",
    description: "The property market in Hyderabad has been growing by leaps and bounds, making it an ideal investment destination for home buyers and investors. The city has become one of the most happening cities of India, with IT hubs, educational institutes, international airport, and many other significant developments taking place in the city.",
    image: Spring2
}

const projectHightlights = [ 
    {text: "HMDA Layout", image: Image1},
    {text: "Well designed 40' wide Entrance", image: Image2},
    {text: "30' 40' wide Internal Roads", image: Image3},
    {text: "Avenue Plantation", image: Image4},
    {text: "Harvesting pits", image: Image6},
    {text: "Footpath Tiles", image: Image8},
    {text: "100% Vasthu", image: Image5},
    {text: "Sports children's park", image: Image7},
    {text: "Street lights", image: Image10},
    {text: "Underground drainage system", image: Image11},
    {text: "Overhead water tank with waterlines", image: Image12},
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
        <HomeBanner bannerImage={T5}/>
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
        <HighlightText data={highlightPoints} highlightImage={high} />
        <div className="map-bottom">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15216.517678657841!2d78.3132407!3d17.5490239!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8d011d3fc611%3A0xc8fbb87cce1568ca!2sSpring%20City1%20-%20Sulthanpur!5e0!3m2!1sen!2sin!4v1669394532804!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
       
        <HomeContact page="Spring City" noContact={true} banner={ContactBanner} />
        <WhatsAppLink whatsappLink="https://wa.me/9059059392?text=" />

     </>
  );
}

export default SpringCity;

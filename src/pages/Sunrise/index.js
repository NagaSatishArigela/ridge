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
import Image8 from '../../assets/images/tranq8.png';
import Image9 from '../../assets/images/Footpath Tiles (1).png';
import Image10 from '../../assets/images/street lights.png';
import Image11 from '../../assets/images/tranq11.png';
import Image12 from '../../assets/images/tranq12.png';
import ContactBanner from "../../assets/images/contactBackground.png";
import high from "../../assets/images/sunriseCity-high.jpg";
import bannerNext from "../../assets/images/sunrise_city.jpeg";
import HighlightText from "../../components/HighlightText";
import ProjectHightlights from "../../components/ProjectHighlights";
import RightImageLeftText from "../../components/RightImageLeftText";
import HomeBanner from "../../components/HomeBanner";
import WhatsAppLink from "../../components/WhatsappLink";
import '../../components/Styles/styles.css';


const rightImage = {
    heading: "Sunrise City",
    description: "The property market in Hyderabad has been growing by leaps and bounds, making it an ideal investment destination for home buyers and investors. The city has become one of the most happening cities of India, with IT hubs, educational institutes, international airport, and many other significant developments taking place in the city.",
    image: bannerNext
}

const projectHightlights = [ 
    {text: "HMDA Layout", image: Image1},
    {text: "Well designed 100' wide Entrance & arch", image: Image2},
    {text: "30' wide Internal Roads", image: Image3},
    {text: "Avenue Plantation", image: Image4},
    {text: "Harvesting pits", image: Image6},
    {text: "Footpath Tiles", image: Image9},
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


const sunriseContact = {
    phone: "9059059392",
    email: "myridgehome@gmail.com"
 };


function SunRise() {
  return (
     <>
      <Helmet>
        <title>#1 HMDA Open plots in sultanpur hyderabad || Sunrise city</title>
        <meta name="description" content="Find your dream home at Sunrise City by Ridge Homes, offering HMDA approved open plots in Sultanpur Hyderabad. Live life surrounded by comfort  peace. Book now!" /> 
        <meta name="keywords" content="open plots in sultanpur hyderabad, plots in sultanpur hyderabad, plots for sale in sultanpur hyderabad, sultanpur hyderabad real estate, sultanpur hyderabad plot, land for sale in sultanpur hyderabad, open plots at sultanpur hyderabad, Sunrise city homes for sale, Ridge Sunrise City Sultanpur, Ridge Homes Sunrise City" />
    </Helmet>
        <HomeBanner bannerImage={Banner}/>
        <RightImageLeftText data={rightImage} />
        {/* <HomeBanner bannerImage={Kshetra2}/> */}
        <section className="tImages">
        </section>
        <ProjectHightlights data={projectHightlights} />
        <HighlightText data={highlightPoints} highlightImage={high} />
        <div className="map-bottom">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.076607437282!2d78.32861799999999!3d17.551539000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0!2zMTfCsDMzJzA1LjUiTiA3OMKwMTknNDMuMCJF!5e0!3m2!1sen!2sin!4v1669450280762!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="container-m">
        <p>Ridge’s Sunrise City has everything you need for your family. It is HMDA approved layout situated at a very prime location near Sultanpur, Hyderabad offering well-designed residential plots with all modern amenities at an affordable price. These well-developed residential layouts have good groundwater availability and great connectivity to reputed schools, hospitals and supermarkets; making it even more attractive for buyers.

</p>
<h3>Features</h3>
<ul>
    <li>HMDA approved layout
</li>
<li>100% vaasthu
</li>
<li>Avenue plantation
</li>
<li>Parks with landscaping</li>
<li>All-round compound wall with entrance arch
</li>
<li>24*7 security
</li>
<li>30′ BT roads
</li>
<li>Rainwater harvesting pits
</li>
<li>Underground drainage system
</li>
<li>Overhead water tank with waterlines
</li>
</ul>
        </div>
        <HomeContact page="Sunrise" noContact={true} contactDetails={sunriseContact} banner={ContactBanner} />
        <WhatsAppLink whatsappLink="https://wa.me/919059059392?text=" />

     </>
  );
}

export default SunRise;


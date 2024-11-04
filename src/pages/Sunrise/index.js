import React from "react";
import { Helmet } from "react-helmet";
import HomeContact from "../../components/HomeContact";
import Banner from "../../assets/assets/sunrise city/11zon_converted/open plots in sultanpur hyderabad.webp";
import Image1 from "../../assets/assets/sunrise city/11zon_converted/HMDA Layout.webp";
import Image2 from "../../assets/assets/sunrise city/11zon_converted/Well designed 100 wide Entrance & arch.webp";
import Image3 from "../../assets/assets/sunrise city/11zon_converted/30 wide Internal Roads.webp";
import Image4 from "../../assets/assets/sunrise city/11zon_converted/Avenue Plantation.webp";
import Image5 from "../../assets/assets/sunrise city/11zon_converted/Harvesting pits.webp";
import Image6 from "../../assets/assets/sunrise city/11zon_converted/Footpath Tiles.webp";
import Image7 from "../../assets/assets/sunrise city/11zon_converted/100Vasthu.webp";
import Image8 from "../../assets/assets/sunrise city/11zon_converted/Sports childrens park.webp";
import Image9 from "../../assets/assets/sunrise city/11zon_converted/Street lights.webp";
import Image10 from "../../assets/assets/sunrise city/11zon_converted/Underground drainage system.webp";
import Image11 from "../../assets/assets/sunrise city/11zon_converted/Overhead water tank with waterlines.webp";
import ContactBanner from "../../assets/images/contactBackground.png";
import high from "../../assets/assets/sunrise city/11zon_converted/plots for sale in sultanpur hyderabad.webp";
import bannerNext from "../../assets/assets/sunrise city/11zon_converted/plots in sultanpur hyderabad.webp";
import HighlightText from "../../components/HighlightText";
import ProjectHightlights from "../../components/ProjectHighlights";
import RightImageLeftText from "../../components/RightImageLeftText";
import HomeBanner from "../../components/HomeBanner";
import WhatsAppLink from "../../components/WhatsappLink";
import "../../components/Styles/styles.css";

const rightImage = {
  heading: "Sunrise City",
  description:
    "The property market in Hyderabad has been growing by leaps and bounds, making it an ideal investment destination for home buyers and investors. The city has become one of the most happening cities of India, with IT hubs, educational institutes, international airport, and many other significant developments taking place in the city.",
  image: bannerNext,
  altText: "plots in sultanpur hyderabad",
};

const projectHightlights = [
  { text: "HMDA Layout", image: Image1, altText: "HMDA Layout" },
  {
    text: "Well designed 100' wide Entrance & arch",
    image: Image2,
    altText: "well designed 100 wide entrance",
  },
  {
    text: "30' wide Internal Roads",
    image: Image3,
    altText: "30 wide internal roads",
  },
  { text: "Avenue Plantation", image: Image4, altText: "avenue plantation" },
  { text: "Harvesting pits", image: Image5, altText: "harvesting pits" },
  { text: "Footpath Tiles", image: Image6, altText: "footpath tiles" },
  { text: "100% Vasthu", image: Image7, altText: "100% vastu" },
  {
    text: "Sports children's park",
    image: Image8,
    altText: "sports childern park",
  },
  { text: "Street lights", image: Image9, altText: "street lights" },
  {
    text: "Underground drainage system",
    image: Image10,
    altText: "underground drainage system",
  },
  {
    text: "Overhead water tank with waterlines",
    image: Image11,
    altText: "overhead water tank",
  },
];

const highlightPoints = [
  { text: "5 Min Drive to Biggest Medical Devices Park in Telagana" },
  { text: "Close to Employment HUB" },
  { text: "Close to International School & Engineering College" },
  { text: "10 Min Drive to Ameenpur" },
  { text: "20 Min Drive to BHEL X Roads" },
  { text: "20 Min Drive to Miyapur X Roads" },
  { text: "10 Min Drive to Bachupally X Roads" },
  { text: "30 Min Drive to KPHB & JNTU" },
  { text: "30 Min Drive to HITEC City" },
  { text: "20 Min Drive To Lingampally MMTS" },
];

const sunriseContact = {
  phone: "7396897737",
  email: "myridgehome@gmail.com",
};

function SunRise() {
  return (
    <>
      <Helmet>
        <title>#1 HMDA Open plots in sultanpur hyderabad || Sunrise city</title>
        <meta
          name="description"
          content="Find your dream home at Sunrise City by Ridge Homes, offering HMDA approved open plots in Sultanpur Hyderabad. Live life surrounded by comfort  peace. Book now!"
        />
        <meta
          name="keywords"
          content="open plots in sultanpur hyderabad, plots in sultanpur hyderabad, plots for sale in sultanpur hyderabad, sultanpur hyderabad real estate, sultanpur hyderabad plot, land for sale in sultanpur hyderabad, open plots at sultanpur hyderabad, Sunrise city homes for sale, Ridge Sunrise City Sultanpur, Ridge Homes Sunrise City"
        />
      </Helmet>
      <HomeBanner
        bannerImage={Banner}
        altText="open plots in sultanpur hyderabad"
      />
      <RightImageLeftText data={rightImage} />
      {/* <HomeBanner bannerImage={Kshetra2}/> */}
      <section className="tImages"></section>
      <ProjectHightlights data={projectHightlights} />
      <HighlightText
        data={highlightPoints}
        highlightImage={high}
        altText="plots for sale in sultanpur hyderabad"
      />
      <div className="container-m">
        <p>
          Ridge’s Sunrise City has everything you need for your family. It is
          HMDA approved layout situated at a very prime location near Sultanpur,
          Hyderabad offering well-designed residential plots with all modern
          amenities at an affordable price. These well-developed residential
          layouts have good groundwater availability and great connectivity to
          reputed schools, hospitals and supermarkets; making it even more
          attractive for buyers.
        </p>
        <h3>Features</h3>
        <ul>
          <li>HMDA approved layout</li>
          <li>100% vaasthu</li>
          <li>Avenue plantation</li>
          <li>Parks with landscaping</li>
          <li>All-round compound wall with entrance arch</li>
          <li>24*7 security</li>
          <li>30′ BT roads</li>
          <li>Rainwater harvesting pits</li>
          <li>Underground drainage system</li>
          <li>Overhead water tank with waterlines</li>
        </ul>
      </div>
      <div className="map-bottom">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.076607437282!2d78.32861799999999!3d17.551539000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0!2zMTfCsDMzJzA1LjUiTiA3OMKwMTknNDMuMCJF!5e0!3m2!1sen!2sin!4v1669450280762!5m2!1sen!2sin"
          width="600"
          height="450"
          title="sunrise"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <HomeContact
        page="Sunrise"
        noContact={true}
        contactDetails={sunriseContact}
        banner={ContactBanner}
        srd="66448bb4a3d8554d457632ce"
      />
      <WhatsAppLink whatsappLink="https://wa.me/917396897737?text=" />
    </>
  );
}

export default SunRise;

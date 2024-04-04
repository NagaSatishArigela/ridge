import React, { useState, useRef } from "react";
import { Helmet } from "react-helmet";
import Banner from "../../assets/images/Tranquil valley banner.jpg";
import ContactBanner from "../../assets/images/contactBackground.png";
import Tranquil1 from "../../assets/images/tranquil1.png";
import Tranquil2 from "../../assets/images/tranquil2.jpeg";
import Image1 from "../../assets/images/tranq1.png";
import Image2 from "../../assets/images/tranq2.png";
import Image3 from "../../assets/images/tranq3.png";
import Image4 from "../../assets/images/tranq4.png";
import Image5 from "../../assets/images/tranq5.png";
import Image6 from "../../assets/images/tranq6.png";
import Image7 from "../../assets/images/tranq7.png";
import Image8 from "../../assets/images/tranq8.png";
import Image9 from "../../assets/images/tranq9.png";
import Image10 from "../../assets/images/tranq10.png";
import Image11 from "../../assets/images/tranq11.png";
import Image12 from "../../assets/images/tranq12.png";
import Image13 from "../../assets/images/cc raods.png";
import Image14 from "../../assets/images/open amphitheatre.png";
// import Image15 from '../../assets/images/mini club house.png';
import Image16 from "../../assets/images/Footpath Tiles (1).png";
import Image17 from "../../assets/images/Harvesting pits.png";
import HomeBanner from "../../components/HomeBanner";
import HomeContact from "../../components/HomeContact";
import T1 from "../../assets/images/t1.jpg";
import T2 from "../../assets/images/t2.jpg";
import T3 from "../../assets/images/t3.jpg";
import T4 from "../../assets/images/t4.jpg";
import T5 from "../../assets/images/t5.jpg";
import T6 from "../../assets/images/t6.jpg";
import tranquil1 from "../../assets/images/tranquil/1.jpeg";
import tranquil2 from "../../assets/images/tranquil/2.jpeg";
import tranquil3 from "../../assets/images/tranquil/3.jpeg";
import tranquil4 from "../../assets/images/tranquil/4.jpeg";
import tranquil5 from "../../assets/images/tranquil/5.jpeg";
import tranquil6 from "../../assets/images/tranquil/6.jpeg";
import tranquil7 from "../../assets/images/tranquil/7.jpeg";
import tranquil8 from "../../assets/images/tranquil/8.jpeg";
import tranquil9 from "../../assets/images/tranquil/9.jpeg";
import tranquil10 from "../../assets/images/tranquil/10.jpeg";
import tranquil11 from "../../assets/images/tranquil/11.jpeg";
import tranquil12 from "../../assets/images/tranquil/12.jpeg";
import RightImageLeftText from "../../components/RightImageLeftText";
import "../../components/Styles/styles.css";
import HighlightText from "../../components/HighlightText";
import ProjectHightlights from "../../components/ProjectHighlights";
import DialogForm from "../../components/DialogForm";
import TranquilPDF from "../../assets/Tranquil Valley_FinalFirst-9.pdf";
import WhatsAppLink from "../../components/WhatsappLink";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";

const rightImage = {
  heading: "Tranquil Valley",
  description:
    "A project that gives you the best of both worlds. The proximity to industrial hubs ensures easy access while experiencing the serenity of nature simultaneously.  Located in Maheshwaram, Tranquil Valley stays true to its name. The serene surroundings make the project a great choice for families looking to settle down. Apart from being an excellent location for housing purposes, Tranquil is also a great investment opportunity for those looking to diversify. Tranquil Valley is the final product of years of industry research. Equipped with contemporary villas, and spacious plots, Tranquil Valley is yet another accomplishment in the world of Ridge.",
  image: Tranquil1,
};

const projectHightlights = [
  { text: "HMDA Layout", image: Image1 },
  { text: "Well designed 40' wide Entrance & arch", image: Image2 },
  { text: "30' 40' wide Internal Roads", image: Image3 },
  { text: "Total compound wall around the layout", image: Image4 },
  { text: "100% Vasthu", image: Image5 },
  { text: "Yoga", image: Image6 },
  { text: "Sports children's park", image: Image7 },
  { text: "24/7 SECURITY", image: Image8 },
  { text: "cricket Nets & Badminton", image: Image9 },
  { text: "Under Ground Electricity & Modern street lights", image: Image10 },
  { text: "Underground drainage system", image: Image11 },
  { text: "Overhead water tank with waterlines", image: Image12 },
  { text: "CC Roads ", image: Image13 },
  { text: "Open amphitheatre", image: Image14 },
  { text: "Footpath Tiles", image: Image16 },
  { text: "Harvesting pits", image: Image17 },
];

const highlightPoints = [
  { text: "15 Mins Drive to Exit 14 thukkuguda" },
  { text: "15 mins Drive to Exit 15 Pedda Golonda" },
  { text: "15 Mins Drive to Statue of Equality" },
  { text: "10 Mins Drive to Srisailam Highway" },
  { text: "10 Mins Drive to Bangalore Highway" },
  { text: "30 Mins Drive to international Airport" },
  { text: "30 Mins Drive TCS Adibatla" },
  { text: "45 Mins Drive to Mindspace" },
  { text: "50 Mins Drive to Hitech City" },
];

const tranquilContact = {
  phone: "8886033333",
  email: "tranquil@ridgehomes.in",
};

const faqs = [
  {
    question: "What is Ridge Tranquil Valley project and where is it Located?",
    answer: "It is Located at Maheshwaram, Near Electronic SEZ",
  },
  {
    question: "What are the Location advantages of Ridge Tranquil Valley?",
    answer:
      "20 min drive from Pharma City, Srisailam high way\n35 min drive from Financial District\n20 min drive from Rajiv Gandhi International Airport\nClose to international schools",
  },
  {
    question: "What is the land area of this project?",
    answer:
      "Total 30 Acres Land Phase one 12.26 Acres is developed for premium villa plots",
  },
  {
    question: "What is the size of the Plot?",
    answer: "Ranges from 200 Sqyd to 333 Sqyd.",
  },
  {
    question: "How much Bank Loan Available?",
    answer:
      "80% Bank loan available. Project is approved by ICICI Bank and HDFC bank",
  },
  {
    question: "What are the amenities being provided?",
    answer:
      "Well-designed 40 wide entry arch, 30-40’ internal CC roads, Compound wall, 100% vastu, Children park, CCTV, 24/7 security, Underground electricity, Underground drainage, Modern street lights, Water harvesting pits, avenue and Park plantation, Overhead tanks.",
  },
  {
    question: "What is the initial booking amount?",
    answer: "2,00,000 initial booking amount",
  },
  {
    question: "Is the Ridge Tranquil valley registered under RERA & HMDA?",
    answer:
      "Yes, Ridge Tranquil valley is registered TS RERA:- P02400005589 HMDA:- 055926/SMD/LT/U6/HMDA/22072022",
  },
  {
    question:
      "What are the organizations/companies near Ridge Tranquil Valley?",
    answer:
      "Wipro, Malabar Gold, Capsgold, Cygni Energy limited, Orient Electric, Nile-cycle.",
  },
  {
    question: "Which Schools and Colleges are Near Ridge Tranquil Valley?",
    answer:
      "Yes, they have international schools and colleges Near Ridge Tranquil Valley:\n- Raintree international school\n- Manchester global school.",
  },
  {
    question: "Are there any retail stores near Ridge Tranquil Valley?",
    answer: "Yes, Reliance Retail Store, within 2 Kms.",
  },
  {
    question: "Why is Maheshwaram an Excellent choice to purchase Property?",
    answer:
      "a. Adjacent to Electronic SEZ\nb. Good quality infrastructure, being developed, including Metro up to Shamshabad Airport, which is a 30-minute drive\nc. Near to ORR\nd. Good potential for Rate on Investment. Past record, rate doubled in 3 years.",
  },
];

const images = [
  tranquil1,
  tranquil2,
  tranquil3,
  tranquil4,
  tranquil5,
  tranquil6,
  tranquil7,
  tranquil8,
  tranquil9,
  tranquil10,
  tranquil11,
  tranquil12,
];

function Tranquil() {
  const [isPDF, setIsPDF] = useState(false);
  const inTouchRef = useRef(null);
  const [openAccordion, setOpenAccordion] = useState(
    Array(faqs.length).fill(false)
  );

  const onButtonClick = () => {
    setIsPDF(true);
  };

  const data = [
    {
      name: "East & West Facing",
      age: "200 Square yard",
      gender: "Unlock Price",
    },
    {
      name: "East & West Facing",
      age: "250 Square yard",
      gender: "Unlock Price",
    },
    {
      name: "East & West Facing",
      age: "333 Square yard",
      gender: "Unlock Price",
    },
  ];
  const toggleAccordion = (index) => {
    setOpenAccordion((prevState) =>
      prevState.map((item, i) => (i === index ? !item : false))
    );
  };
  const elementSize = 400;
  return (
    <>
      <Helmet>
        <title>#1 HMDA Open Plots in Maheshwaram || Tranquil Valley</title>
        <meta
          name="description"
          content="Escape to peace at Ridge Homes' Tranquill Valley in Maheshwaram with HMDA approved open plots. Experience the perfect blend of comfort and serenity. Book now!"
        />
        <meta
          name="keywords"
          content="plots for sale in maheshwaram, open plots in maheshwaram, hmda plots in maheshwaram, plot rates in maheshwaram, plots for sale in maheshwaram hyderabad, plots in maheshwaram hyderabad , dtcp plots in maheshwaram, hmda approved plots in maheshwaram, open plots for sale in maheshwaram, ridge homes Tranquil Valley"
        />
      </Helmet>
      <HomeBanner bannerImage={Banner} />
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
      <button className="pdfDownload" onClick={onButtonClick}>
        <i className="fa fa-download"></i> Brochure
      </button>
      <ProjectHightlights data={projectHightlights} />
      <div style={{ overflow: "auto", maxWidth: "1200px", margin: "auto" }}>
        <h2>Price sheet:</h2>
        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Area</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {data.map((val, key) => {
              return (
                <tr key={key}>
                  <td>{val.name}</td>
                  <td>{val.age}</td>
                  <td>
                    <button
                      style={{
                        border: "none",
                        backgroundColor: "#f4f4f4",
                        cursor: "pointer",
                      }}
                      onClick={() =>
                        inTouchRef.current.scrollIntoView({
                          behavior: "smooth",
                        })
                      }
                    >
                      {val.gender}
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <HighlightText data={highlightPoints} highlightImage={Tranquil2} />
      <div style={{maxWidth: "1200px", margin: "auto" }}>
        <h2>Gallery</h2>
      <PhotoProvider>
        <div className="container-m">
          {images.map((item, index) => (
            <PhotoView
              key={index}
              src={item}
              width={elementSize}
              height={elementSize}
            >
              <img
                src={item}
                alt=""
                style={{ objectFit: "cover", height: "200px", padding: "8px" }}
              />
            </PhotoView>
          ))}
        </div>
      </PhotoProvider>
      </div>
      <div className="container-m">
        <h2>FAQ's</h2>
        <div className="accordion">
          {faqs.map((faq, index) => (
            <div key={index} className="accordion-item">
              <div
                className={`accordion-title ${
                  openAccordion[index] ? "open" : ""
                }`}
                onClick={() => toggleAccordion(index)}
              >
                {faq.question}
              </div>
              <div
                className={`accordion-content ${
                  openAccordion[index] ? "show" : ""
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="map-bottom">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3813.0922620911792!2d78.4061244!3d17.1169983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbb10e1babfbe1%3A0xf5ccd2c4c46ce7b3!2sTranquil%20Valley!5e0!3m2!1sen!2sin!4v1668533503942!5m2!1sen!2sin"
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div ref={inTouchRef} id="getInTouchSection" />
      <HomeContact
        id="getInTouch"
        page="Tranquil"
        noContact={true}
        contactDetails={tranquilContact}
        banner={ContactBanner}
      />
      {isPDF && (
        <DialogForm page="Tranquil" setIsPDF={setIsPDF} pdfUrl={TranquilPDF} />
      )}
      <WhatsAppLink whatsappLink="https://wa.me/918886033333?text=" />
    </>
  );
}

export default Tranquil;

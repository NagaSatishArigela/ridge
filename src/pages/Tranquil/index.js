import React, { useState, useRef } from "react";
import { Helmet } from "react-helmet";
// import Banner from "../../assets/images/Tranquil valley banner.jpg";
import ContactBanner from "../../assets/images/contactBackground.png";
import Banner from "../../assets/images/1800 x 600 tv banner 2-01.jpg";
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
import T1 from "../../assets/images/Tranquil Valley  images-06.jpg";
import T2 from "../../assets/images/t2.jpg";
import T3 from "../../assets/images/t3.jpg";
import T4 from "../../assets/images/t4.jpg";
import T5 from "../../assets/images/t5.jpg";
import T6 from "../../assets/images/t6.jpg";
import tranquil1 from "../../assets/images/tranquil/Water Tank.jpg";
import tranquil2 from "../../assets/images/tranquil/Road watering.jpeg";
import tranquil3 from "../../assets/images/tranquil/CC Roads.jpg";
import tranquil4 from "../../assets/images/tranquil/Park Area.jpg";
import tranquil5 from "../../assets/images/tranquil/Park Grills.jpg";
import tranquil6 from "../../assets/images/tranquil/Roads Rolling.jpg";
import tranquil7 from "../../assets/images/tranquil/Site Office.jpg";
import tranquil8 from "../../assets/images/tranquil/trees translocation.jpg";
import tranquil9 from "../../assets/images/tranquil/Electrical Transformer.jpg";
import tranquil10 from "../../assets/images/tranquil/overhead tank.jpg";
import tranquil11 from "../../assets/images/tranquil/harvesting pits.jpg";
import tranquil12 from "../../assets/images/tranquil/Site office .jpg";
import tranquil13 from "../../assets/images/tranquil/Site View.jpg";
import tranquil14 from "../../assets/images/tranquil/Under ground water pipe line.jpg";
import tranquil15 from "../../assets/images/tranquil/Underground drainage system.jpg";
import graph from "../../assets/images/Graph.jpg";
import RightImageLeftText from "../../components/RightImageLeftText";
import "../../components/Styles/styles.css";
import HighlightText from "../../components/HighlightText";
import ProjectHightlights from "../../components/ProjectHighlights";
import DialogForm from "../../components/DialogForm";
import TranquilPDF from "../../assets/Tranquil Valley_FinalFirst-9.pdf";
import WhatsAppLink from "../../components/WhatsappLink";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import UnlockModal from "../../components/unlockModal";
import "./index.css";

const rightImage = {
  heading: "Invest in Your Happiness, Future & Tranquility Villa Plots @ Maheswaram",
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
  // { text: "cricket Nets & Badminton", image: Image9 },
  { text: "Under Ground Electricity & Modern street lights", image: Image10 },
  { text: "Underground drainage system", image: Image11 },
  { text: "Overhead water tank with waterlines", image: Image12 },
  { text: "CC Roads ", image: Image13 },
  { text: "Open amphitheatre", image: Image14 },
  { text: "Footpath Tiles", image: Image16 },
  { text: "Harvesting pits", image: Image17 },
];

const highlightPoints = [
  { text: "15 Mins Drive to Exit 14 Thukkuguda" },
  { text: "15 Mins Drive to Exit 15 Pedda Golonda" },
  { text: "15 Mins Drive to Statue of Equality" },
  { text: "10 Mins Drive to Srisailam Highway" },
  { text: "10 Mins Drive to Bangalore Highway" },
  { text: "30 Mins Drive to International Airport" },
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
    question:
      "Q. What is Ridge Tranquil Valley project and where is it Located?",
    answer: "A. Ridge Tranquil Valley is a prestigious villa plot development located in the serene environs of Maheshwaram, right next to the bustling Electronic SEZ",
  },
  {
    question: "Q. What are the Location advantages of Ridge Tranquil Valley?",
    answer:
      "A. Just a 20-minute drive from Pharma City via Srisailam Highway\n Only 35 minutes to the Financial District, making your commute a breeze\n A quick 20-minute drive from Rajiv Gandhi International Airport, perfect for frequent flyers\n Close to top-tier international schools, ensuring quality education for your children",
  },
  {
    question: "Q. What is the land area of this project?",
    answer:
      "A. The expansive Ridge Tranquil Valley covers 30 acres, with the first phase developed over 12.26 acres featuring premium villa plots",
  },
  {
    question: "Q. What is the size of the Plot?",
    answer: "A. Choose from a range of plot sizes, from 200 square yards to 333 square yards, perfect for building your dream villa",
  },
  {
    question: "Q. How much Bank Loan Available?",
    answer:
      "A. Up to 80% of the loan value is available, with approvals from leading banks like ICICI and HDFC",
  },
  {
    question: "Q. What are the amenities being provided?",
    answer:
      "A. grand 40' wide entry archway welcoming you home\n" +
      "* Smooth 30-40’ internal concrete roads for easy navigation\n" +
      "* Secure compound wall surrounding the community\n" +
      "* 100% Vastu-compliant plots for peace and prosperity\n" +
      "* A fun-filled children's park for endless play\n" +
      "* State-of-the-art CCTV surveillance and 24/7 security for your peace of mind\n" +
      "* Modern underground electricity and drainage systems\n" +
      "* Stylish street lights illuminating the community\n" +
      "* Water harvesting pits promoting sustainability\n" +
      "* Lush avenue and park plantation enhancing the green cover\n" +
      "* Overhead water tanks ensuring a steady water supply",
},
  {
    question: "Q. What is the initial booking amount?",
    answer: "A. Secure your spot in this premium community with an initial booking amount of just ₹2,00,000.",
  },
  {
    question: "Q. Is the Ridge Tranquil valley registered under RERA & HMDA?",
    answer:
      "A. Absolutely, Ridge Tranquil Valley is officially registered with TS RERA (P02400005589) and HMDA (055926/SMD/LT/U6/HMDA/22072022), ensuring transparency and trust",
  },
  {
    question:
      "Q. What are the organizations/companies near Ridge Tranquil Valley?",
    answer:
      "A. The project is strategically located near prominent companies like Wipro, Malabar Gold, Capsgold, Cygni Energy Limited, Orient Electric, and Nile Cycle, making it ideal for professionals",
  },
  {
    question: "Q. Which Schools and Colleges are Near Ridge Tranquil Valley?",
    answer:
      "A. Top educational institutions nearby include"+
      "Raintree International School"+
      "Manchester Global School Providing an excellent education environment for your children",
  },
  {
    question: "Q. Are there any retail stores near Ridge Tranquil Valley?",
    answer: "A. Yes, convenience is key with a Reliance Retail Store located just 2 kilometres away.",
  },
  {
    question: "Q. Why is Maheshwaram an Excellent choice to purchase Property?",
    answer:
      "A.	Proximity to the Electronic SEZ enhances investment potential"+
      "Ongoing high-quality infrastructure development, including a metro extension to Shamshabad Airport, only 30 minutes away"+
      "Easy access to the Outer Ring Road (ORR) for seamless travel"+
      "Proven track record of property value doubling in just three years, promising great returns on investment",
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
  tranquil13,
  tranquil14,
  tranquil15
];

const formattedImages = [
  // {
  //   title: "Water Tank",
  //   image: images[0],
  // },
  // {
  //   title: "Watering the Roads",
  //   image: images[1],
  // },
  {
    title: "CC Roads",
    image: images[2],
  },
  // {
  //   title: "Park Area",
  //   image: images[3],
  // },
  {
    title: "Park Area",
    image: images[4],
  },
  // {
  //   title: "Work in progress",
  //   image: images[5],
  // },
  // {
  //   title: "Site View",
  //   image: images[6],
  // },
  // {
  //   title: "Trees Translocation",
  //   image: images[7],
  // },
  // {
  //   title: "Transformer",
  //   image: images[8],
  // },
  {
    title: "Overhead Tank",
    image: images[9],
  },
  {
    title: "Harvesting Pits",
    image: images[10],
  },
  {
    title: "Site Office",
    image: images[11],
  },
  {
    title: "Site View",
    image: images[12],
  },
  {
    title: "Underground Water Pipeline",
    image: images[13],
  },
  {
    title: "Underground Drainage System",
    image: images[14],
  },
];

function Tranquil() {
  const [isPDF, setIsPDF] = useState(false);
  const inTouchRef = useRef(null);
  const [showForm, setShowForm] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(
    Array(faqs.length).fill(false)
  );

  const onButtonClick = () => {
    setIsPDF(true);
  };

  const data = [
    {
      name: "East & West Facing",
      age: "200 Square yards",
      gender: "Unlock Price",
    },
    {
      name: "East & West Facing",
      age: "250 Square yards",
      gender: "Unlock Price",
    },
    {
      name: "East & West Facing",
      age: "333 Square yards",
      gender: "Unlock Price",
    },
  ];
  const toggleAccordion = (index) => {
    setOpenAccordion((prevState) =>
      prevState.map((item, i) => (i === index ? !item : false))
    );
  };
  const elementSize = 400;

  const openModal = () => {
    setShowForm(true);
  };

  const closeModal = () => {
    setShowForm(false);
  };

  function CustomCard({ image, title, description }) {
    return (
      <div className="card">
        <img src={image} alt={title} className="card-image" />
        <div className="card-content">
          <h5 className="card-title" style={{textAlign: 'center'}}>{title}</h5>
          {description && <p className="card-description">{description}</p>}
        </div>
      </div>
    );
  }
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
              <th style={{ borderRight: "2px solid #DD9C37" }}>Type</th>
              <th style={{ borderRight: "2px solid #DD9C37" }}>Area</th>
              <th style={{ borderRight: "2px solid #DD9C37" }}>Price</th>
            </tr>
          </thead>
          <tbody>
            {data.map((val, key) => {
              return (
                <tr key={key} style={{ border: "2px solid #DD9C37" }}>
                  <td style={{ borderRight: "2px solid #DD9C37" }}>
                    {val.name}
                  </td>
                  <td style={{ borderRight: "2px solid #DD9C37" }}>
                    {val.age}
                  </td>
                  <td style={{ borderRight: "2px solid #DD9C37" }}>
                    <button
                      style={{
                        border: "none",
                        backgroundColor: "#f4f4f4",
                        cursor: "pointer",
                      }}
                      onClick={openModal}
                    >
                      {val.gender}
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {showForm && (
          <UnlockModal
            isOpen={showForm}
            onClose={closeModal}
            page="Tranquil"
            srd="66470be4735dafb67e848e32"
          />
        )}
      </div>
      <HighlightText data={highlightPoints} highlightImage={Tranquil2} />
      <div className="container-m">
        <h2 style={{ padding: "0 0 30px 0", margin: "auto" }}>Developments</h2>
        <div className="card-container">
      {formattedImages.map((image, index) => (
        <CustomCard
          key={index}
          image={image.image}
          title={image.title}
          description={image.description}
        />
      ))}
    </div>
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
                {openAccordion[index] ? (
                  <span className="arrow">&#9660;</span> // Down arrow when open
                ) : (
                  <span className="arrow">&#9658;</span> // Right arrow when closed
                )}
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
        srd="66448b2d5d8def3216097f69"
      />
      {isPDF && (
        <DialogForm
          page="Tranquil"
          setIsPDF={setIsPDF}
          pdfUrl={TranquilPDF}
          srd="66470be4735dafb67e848e32"
        />
      )}
      <WhatsAppLink whatsappLink="https://wa.me/918886033333?text=" />
    </>
  );
}

export default Tranquil;

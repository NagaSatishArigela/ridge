import React, { useState, useRef, useEffect } from "react";
import { Helmet } from "react-helmet";
import ContactBanner from "../../assets/images/contactBackground.png";
import Banner from "../../assets/assets/Tranquil valley/anywebp/hmda approved plots in maheshwaram.webp";
import Tranquil1 from "../../assets/assets/Tranquil valley/anywebp/open plots in maheshwaram.webp";
import Tranquil2 from "../../assets/assets/Tranquil valley/anywebp/tranquil2.782f59c13849f19123ee.webp";
import Image1 from "../../assets/assets/Tranquil valley/anywebp/HMDA Layout.webp";
import Image2 from "../../assets/assets/Tranquil valley/anywebp/Well designed 40' wide Entrance & arch.webp";
import Image3 from "../../assets/assets/Tranquil valley/anywebp/30' 40' wide Internal Roads.webp";
import Image4 from "../../assets/assets/Tranquil valley/anywebp/Total compound wall around the layout.webp";
import Image5 from "../../assets/assets/Tranquil valley/anywebp/100Vasthu.webp";
import Image6 from "../../assets/assets/Tranquil valley/anywebp/Yoga.webp";
import Image7 from "../../assets/assets/Tranquil valley/anywebp/Sports children's park.webp";
import Image8 from "../../assets/assets/Tranquil valley/anywebp/24_7 SECURITY.webp";
import Image10 from "../../assets/assets/Tranquil valley/anywebp/Under Ground Electricity & Modern street lights.webp";
import Image11 from "../../assets/assets/Tranquil valley/anywebp/Underground drainage system.webp";
import Image12 from "../../assets/assets/Tranquil valley/anywebp/Overhead water tank with waterlines.webp";
import Image13 from "../../assets/assets/Tranquil valley/anywebp/CC Roads.webp";
import Image14 from "../../assets/assets/Tranquil valley/anywebp/Open amphitheatre.webp";
import Image16 from "../../assets/assets/Tranquil valley/anywebp/Footpath Tiles.webp";
import Image17 from "../../assets/assets/Tranquil valley/anywebp/Harvesting pits.webp";
import HomeBanner from "../../components/HomeBanner";
import HomeContact from "../../components/HomeContact";
import T1 from "../../assets/images/Tranquil Valley  images-06.jpg";
import T2 from "../../assets/assets/Tranquil valley/anywebp/maheshwaram hmda plots.webp";
import T3 from "../../assets/assets/Tranquil valley/anywebp/hmda plots in maheshwaram.webp";
import T4 from "../../assets/assets/Tranquil valley/anywebp/hmda approved layouts in maheshwaram.webp";
import T5 from "../../assets/assets/Tranquil valley/anywebp/plots in maheshwaram.webp";
import T6 from "../../assets/assets/Tranquil valley/anywebp/open villa plots i maheshwaram.webp";
import tranquil1 from "../../assets/assets/Tranquil valley/gallery images/overhead tank.jpg";
import tranquil2 from "../../assets/images/tranquil/Road watering.jpeg";
import tranquil3 from "../../assets/tranquil/maheshwaram open plots.webp";
import tranquil4 from "../../assets/images/tranquil/Park Area.jpg";
import tranquil5 from "../../assets/tranquil/open plots in maheshwaram.webp";
import tranquil6 from "../../assets/images/tranquil/Roads Rolling.jpg";
import tranquil7 from "../../assets/images/tranquil/Site Office.jpg";
import tranquil8 from "../../assets/images/tranquil/trees translocation.jpg";
import tranquil9 from "../../assets/images/tranquil/Electrical Transformer.jpg";
import tranquil10 from "../../assets/assets/Tranquil valley/gallery images/overhead tank.jpg";
import tranquil11 from "../../assets/tranquil/maheshwaram plots.webp";
import tranquil12 from "../../assets/images/tranquil/Site office .jpg";
import tranquil13 from "../../assets/tranquil/plots in maheshwaram.webp";
import tranquil14 from "../../assets/tranquil/hmda approved plots in maheshwaram.webp";
import tranquil15 from "../../assets/images/tranquil/Underground drainage system.jpg";
import RightImageLeftText from "../../components/RightImageLeftText";
import "../../components/Styles/styles.css";
import HighlightText from "../../components/HighlightText";
import ProjectHightlights from "../../components/ProjectHighlights";
import DialogForm from "../../components/DialogForm";
import TranquilPDF from "../../assets/Tranquil Valley_FinalFirst-9.pdf";
import WhatsAppLink from "../../components/WhatsappLink";
import "react-photo-view/dist/react-photo-view.css";
import UnlockModal from "../../components/unlockModal";
import "./index.css";
import { FaChevronDown, FaDownload } from "react-icons/fa";
import { grahcms, QUERY_DEV_IMAGES } from "../../utils/Queries";
import { CustomCard } from "../../utils/ReComp";
import { useFetchDevelopments } from "../../utils/useFetchDevelopment";
import PlotAvailability from "./PlotAvailability";

const rightImage = {
  heading:
    "Invest in Your Happiness, Future & Tranquility Villa Plots @ Maheswaram",
  description:
    "A project that gives you the best of both worlds. The proximity to industrial hubs ensures easy access while experiencing the serenity of nature simultaneously.  Located in Maheshwaram, Tranquil Valley stays true to its name. The serene surroundings make the project a great choice for families looking to settle down. Apart from being an excellent location for housing purposes, Tranquil is also a great investment opportunity for those looking to diversify. Tranquil Valley is the final product of years of industry research. Equipped with contemporary villas, and spacious plots, Tranquil Valley is yet another accomplishment in the world of Ridge.",
  image: Tranquil1,
  altText: "open plots in maheshwaram",
};

const projectHightlights = [
  { text: "HMDA Layout", image: Image1, altText: "HMDA Layout" },
  {
    text: "Well designed 40' wide Entrance & arch",
    image: Image2,
    altText: "Well designed 40' wide Entrance & arch",
  },
  { text: "30' 40' wide Internal Roads", image: Image3, altText: "30' 40' wide Internal Roads" },
  { text: "Total compound wall around the layout", image: Image4, altText: "Total compound wall around the layout" },
  { text: "100% Vasthu", image: Image5, altText: "100% Vasthu" },
  { text: "Yoga", image: Image6, altText: "Yoga" },
  { text: "Sports children's park", image: Image7, altText: "Sports children park" },
  { text: "24/7 SECURITY", image: Image8, altText: "24/7 security" },
  {
    text: "Under Ground Electricity & Modern street lights",
    image: Image10,
    altText: "Under Ground Electricity & Modern street lights",
  },
  { text: "Underground drainage system", image: Image11, altText: "Underground drainage system" },
  { text: "Overhead water tank with waterlines", image: Image12, altText: "Overhead water tank with waterlines" },
  { text: "CC Roads ", image: Image13, altText: "CC Roads" },
  { text: "Open amphitheatre", image: Image14, altText: "Open amphitheatre" },
  { text: "Footpath Tiles", image: Image16, altText: "Footpath Tiles" },
  { text: "Harvesting pits", image: Image17, altText: "Harvesting pits" },
];

const highlightPoints = [
  { text: "15 Mins Drive to Exit 14 Tukkuguda", url: 'https://ridgehomes.in/images/tukkuguda.webp' },
  { text: "15 Mins Drive to Exit 15 Pedda Golconda", url: "https://ridgehomes.in/images/golconda-fort.webp" },
  { text: "15 Mins Drive to Statue of Equality", url:'https://ridgehomes.in/images/statue-of-equality.webp' },
  { text: "10 Mins Drive to Srisailam Highway", url: 'https://ridgehomes.in/images/registration-office.webp' },
  { text: "10 Mins Drive to Bangalore Highway", url: 'https://ridgehomes.in/images/bus-depo.webp' },
  { text: "30 Mins Drive to International Airport", url: 'https://ridgehomes.in/images/airport.webp' },
  { text: "30 Mins Drive TCS Adibatla", url: 'https://ridgehomes.in/images/tcs-adibatla.webp' },
  { text: "45 Mins Drive to Mindspace", url: 'https://ridgehomes.in/images/4th-City.webp' },
  { text: "50 Mins Drive to Hitech City", url: 'https://ridgehomes.in/images/financial-district.webp' },
];

const tranquilContact = {
  phone: "8886033333",
  email: "tranquil@ridgehomes.in",
};

const faqs = [
  {
    question:
      "Q. What is Ridge Tranquil Valley project and where is it Located?",
    answer:
      "A. Ridge Tranquil Valley is a prestigious villa plot development located in the serene environs of Maheshwaram, right next to the bustling Electronic SEZ",
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
    answer:
      "A. Choose from a range of plot sizes, from 200 square yards to 333 square yards, perfect for building your dream villa",
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
    answer:
      "A. Secure your spot in this premium community with an initial booking amount of just ₹2,00,000.",
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
      "A. Top educational institutions nearby include" +
      "Raintree International School" +
      "Manchester Global School Providing an excellent education environment for your children",
  },
  {
    question: "Q. Are there any retail stores near Ridge Tranquil Valley?",
    answer:
      "A. Yes, convenience is key with a Reliance Retail Store located just 2 kilometres away.",
  },
  {
    question: "Q. Why is Maheshwaram an Excellent choice to purchase Property?",
    answer:
      "A.	Proximity to the Electronic SEZ enhances investment potential" +
      "Ongoing high-quality infrastructure development, including a metro extension to Shamshabad Airport, only 30 minutes away" +
      "Easy access to the Outer Ring Road (ORR) for seamless travel" +
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
  tranquil15,
];

const formattedImages = [
  {
    title: "CC Roads",
    image: images[2],
    altText: "CC Roads",
  },
  {
    title: "Park Access Roads",
    image: images[4],
    altText: "park access roads",
  },
  {
    title: "Overhead Tank",
    image: images[9],
    altText: "overhead tank",
  },
  {
    title: "Site View",
    image: images[10],
    altText: "site view",
  },
  {
    title: "Site Office",
    image: images[11],
    altText: "site office",
  },
  {
    title: "Scenic Roads",
    image: images[12],
    altText: "scenic road",
  },
  {
    title: "Exquisite Landscape",
    image: images[13],
    altText: "exquisite landscape",
  },
  {
    title: "Underground Drainage System",
    image: images[14],
    altText: "underground",
  },
];

function Tranquil() {
  const [isPDF, setIsPDF] = useState(false);
  const inTouchRef = useRef(null);
  const [showForm, setShowForm] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(
    Array(faqs.length).fill(false)
  );
  const developments = useFetchDevelopments();

  // useEffect(() => {
  //   const fetchDevelopment = async () => {
  //     try {
  //       const data = await grahcms.request(QUERY_DEV_IMAGES);
  //       const development = data?.developments[0]?.valley || [];
  //       setDevImages(development);
  //     } catch (error) {
  //       console.error("Error fetching devImages:", error);
  //     }
  //   };

  //   fetchDevelopment();
  //   window.scrollTo(0, 0);
  // }, []);

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
    setOpenAccordion((prev) => {
      const newOpenState = [...prev];
      newOpenState[index] = !newOpenState[index]; // Toggle the current index
      return newOpenState;
    });
  };

  const openModal = () => {
    setShowForm(true);
  };

  const closeModal = () => {
    setShowForm(false);
  };

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
      <HomeBanner
        bannerImage={Banner}
        altText="hmda approved plots in maheshwaram"
      />
      <RightImageLeftText data={rightImage} />
      <section className="tImages">
        <div className="container-m">
          <img src={T1} alt="t1" loading="lazy" />
          <img src={T2} alt="maheshwaram hmda plots" loading="lazy" />
          <img src={T3} alt="hmda plots in maheshwaram" loading="lazy" />
        </div>
        <div className="container-m">
          <img
            src={T4}
            alt="hmda approved layouts in maheshwaram"
            loading="lazy"
          />
          <img src={T5} alt="plots in maheshwaram" loading="lazy" />
          <img src={T6} alt="open villa plots i maheshwaram" loading="lazy" />
        </div>
      </section>
      <button className="pdfDownload" onClick={onButtonClick}>
        <FaDownload/> Brochure
      </button>
      <ProjectHightlights data={projectHightlights} />
      <PlotAvailability openModal={openModal}/>
      <div style={{ overflow: "auto", maxWidth: "1200px", margin: "auto" }}>
        <h2>Price sheet:</h2>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginTop: "20px",
            border: "2px solid rgb(221, 156, 55)",
          }}
        >
          <thead>
            <tr
              style={{
                backgroundColor: "#f9f9f9",
                border: "2px solid rgb(221, 156, 55)",
              }}
            >
              <th
                style={{
                  borderRight: "2px solid #DD9C37",
                  padding: "10px",
                  textAlign: "left",
                }}
              >
                Type
              </th>
              <th
                style={{
                  borderRight: "2px solid #DD9C37",
                  padding: "10px",
                  textAlign: "left",
                }}
              >
                Area
              </th>
              <th
                style={{
                  borderRight: "2px solid #DD9C37",
                  padding: "10px",
                  textAlign: "left",
                }}
              >
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((val, key) => {
              return (
                <tr
                  key={key}
                  style={{
                    borderBottom: "1px solid #DD9C37",
                    backgroundColor: key % 2 === 0 ? "#f4f4f4" : "#fff",
                  }}
                >
                  <td
                    style={{
                      borderRight: "2px solid #DD9C37",
                      padding: "10px",
                    }}
                  >
                    {val.name}
                  </td>
                  <td
                    style={{
                      borderRight: "2px solid #DD9C37",
                      padding: "10px",
                    }}
                  >
                    {val.age}
                  </td>
                  <td style={{ padding: "10px" }}>
                    <button
                      style={{
                        border: "none",
                        backgroundColor: "#DD9C37",
                        padding: "8px 16px",
                        cursor: "pointer",
                        margin: "0",
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

      <HighlightText
        data={highlightPoints}
        highlightImage={Tranquil2}
        altText="tranquil2"
      />
      <div className="container-m">
        <h2 style={{ padding: "0 0 30px 0", margin: "auto" }}>Developments</h2>
        <div className="card-container">
          {developments[0]?.valley[0]?.images?.map((image, index) => (
            <CustomCard
              key={index}
              image={image.url}
              title={image.title}
              description={image?.description}
              altText={image.altText}
            />
          ))}
        </div>
      </div>
      <div className="container-m">
        <h2>FAQ's</h2>
        <div className="accordion-container">
          {faqs.map((faq, index) => (
            <div key={index} className="accordion-item">
              <button
                onClick={() => toggleAccordion(index)}
                className={`accordion-button ${
                  openAccordion[index] ? "active" : ""
                }`}
              >
                <span>{faq.question}</span>
                <FaChevronDown
                  className={`chevron ${
                    openAccordion[index] ? "rotate" : ""
                  }`}
                />
              </button>

              <div
                className={`accordion-content ${
                  openAccordion[index] ? "open" : ""
                }`}
              >
                <div className="accordion-content-inner">{faq.answer}</div>
              </div>
            </div>
          ))}

          <style>{`
        .accordion-container {
          width: 100%;
          margin: 10px auto;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .accordion-item {
          background: white;
          border: 1px solid #e2e2e2;
          border-radius: 8px;
          overflow: hidden;
          transition: box-shadow 0.3s ease;
        }

        .accordion-item:hover {
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
        }

        .accordion-button {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 20px;
          background: white;
          border: none;
          cursor: pointer;
          font-size: 16px;
          font-weight: 500;
          color: #333;
          text-align: left;
          transition: background-color 0.3s ease;
        }

        .accordion-button:hover {
          background-color: #f8f8f8;
        }

        .accordion-button.active {
          background-color: #f5f5f5;
        }

        .chevron {
          width: 20px;
          height: 20px;
          color: #666;
          transition: transform 0.3s ease;
        }

        .chevron.rotate {
          transform: rotate(180deg);
        }

        .accordion-content {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease-out;
        }

        .accordion-content.open {
          max-height: 300px; /* Adjust based on your content */
        }

        .accordion-content-inner {
          padding: 16px 20px;
          color: #666;
          line-height: 1.6;
          border-top: 1px solid #eee;
        }

        /* Responsive styles */
        @media (max-width: 768px) {
          .accordion-container {
            padding: 0 16px;
          }

          .accordion-button {
            padding: 14px 16px;
            font-size: 15px;
          }

          .accordion-content-inner {
            padding: 14px 16px;
            font-size: 14px;
          }
        }
      `}</style>
        </div>
      </div>
      <div className="map-bottom">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3813.0922620911792!2d78.4061244!3d17.1169983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbb10e1babfbe1%3A0xf5ccd2c4c46ce7b3!2sTranquil%20Valley!5e0!3m2!1sen!2sin!4v1668533503942!5m2!1sen!2sin"
          width="600"
          height="450"
          allowFullScreen=""
          title="Tranquil Valley"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div ref={inTouchRef} id="getInTouchSection" />
      <HomeContact
        id="getInTouch"
        page="Tranquil"
        noContact={true}
        contactDetails={tranquilContact}
        banner={'https://ridgehomes.in/images/ridge-home.png'}
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

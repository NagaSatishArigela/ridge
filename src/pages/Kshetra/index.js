import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Banner from "../../assets/images/1800 x 600 kshetra-01.jpg";
import ContactBanner from "../../assets/images/contact-form-backside-image.png";
import KshetraImage1 from "../../assets/assets/kshetra/compressed (3)/kshetra open plots.webp";
import KshetraImage2 from "../../assets/assets/kshetra/compressed (3)/open plots in shankarpally.webp";
import KshetraImage3 from "../../assets/assets/kshetra/compressed (3)/plots for sale.webp";
import KshetraImage4 from "../../assets/assets/kshetra/compressed (3)/plots in shankarpally .webp";
import KshetraImage5 from "../../assets/assets/kshetra/compressed (3)/shankarpally open plots.webp";
import Kshetra1 from "../../assets/assets/kshetra/compressed (3)/kshetra.webp";
import Kshetra3 from "../../assets/assets/kshetra/compressed (3)/best realstate plots in shakarpally .webp";
import HomeBanner from "../../components/HomeBanner";
import HomeContact from "../../components/HomeContact";
import RightImageLeftText from "../../components/RightImageLeftText";
import "../../components/Styles/styles.css";
import "./kshetra.css";
import HighlightText from "../../components/HighlightText";
import RightTextImage from "../../components/RightTextImage";
import DialogForm from "../../components/DialogForm";
import KeshtraPDF from "../../assets/Kshetra Digital Brochure.pdf";
import WhatsAppLink from "../../components/WhatsappLink";
import { FaDownload } from "react-icons/fa";
import { CustomCard } from "../../utils/ReComp";
import { useFetchDevelopments } from "../../utils/useFetchDevelopment";
import AreaDivison from "./AreaDivison";

const rightImage = {
  heading: "KSHETRA",
  description:
    "Kshetra is not just another residential area, but an amazing place enrooted to the glorious tradition and facilitated with ultramodern amenities. You can choose from different plot ranges, various individual homes and magnificent villas. All of this comes along with amazing recreational options and ample greenery.",
  image: Kshetra1,
  elivation:
    "Welcome to RIDGE’s “Kshetra” – a community where nature-centric traditions make a grand comeback.",
  altText: "kshetra"
};

const highlightPoints = [
  { text: "20 Mins Drive to shankarpally" },
  { text: "20 Mins Drive to Telanagan mobility valley cluster" },
  { text: "20 Mins Drive to SangaReddy" },
  { text: "40 Mins Drive to NEOPOLIS" },
  { text: "45 Mins Drive to Financial District" },
  { text: "50 Mins Drive to Hitech City" },
  { text: "1 Hour Drive to international airport" },
  { text: "Walkable distance to RRR" },
];

const keshtraBannerImageText = [
  {
    image: KshetraImage1,
    align: "right",
    heading: [
      {
        text: "WORD TO THE WISE:",
      },
      {
        text: "WHEN YOU FOLLOW NATURE,  HAPPINESS FOLLOWS YOU.",
      },
    ],
    description: [
      {
        text: "Nature had always been central to life for our ancestors. Celebrated in song and scriptures, worshipped in temples and traditions, nature defined our agrarian culture and lifestyle. However, migration and rapid urbanization over the years made people lose their cultural roots.",
      },
      {
        text: "Globally, weather conditions are worsening day by day and pollution increasing every minute; yet city dwellers ignore the signs of warning on their health..But no worries, there are people who still care for everyone’s well-being..",
      },
    ],
    altText: "kshetra open plots"
  },
  {
    image: KshetraImage2,
    align: "left",
    heading: [
      {
        text: "WHO NEEDS REASONS  TO CELEBRATE?",
      },
    ],
    description: [
      {
        text: "At Kshetra, festivals can turn into events of great merriment. Colours and flowers, lights and laughter, night-long dancing and delicacies of myriad tastes and lots more the community would come alive with revelry. Since traditions are a key theme at Kshetra, festivals like Sankranthi and Jatara would be celebrated in the authentic manner that was custom for our grandparents and ancestors. Festivities can become most frequent as Kshetra is open to people of all cultures.",
      },
    ],
    altText: "open plots in shankarpally"
  },
  {
    image: KshetraImage3,
    align: "right",
    heading: [
      {
        text: "LITTLE JOYS AND  GREAT DELIGHTS",
      },
    ],
    description: [
      {
        text: "The rhythmic graph of love may well ascend to new heights in Kshetra. Because, like all things natural, relationships and family bonds are strengthened only when nurtured with love and care, in quiet moments, uninterrupted except for the sweet birdsong and the gentle caress from the Deccan breeze.",
      },
      {
        text: "The fragrance of flowers in your garden, the swaying of trees and two hearts beating as one… can there be a more romantic setting to reignite a passion?",
      },
    ],
    altText: "plots for sale"
  },
  {
    image: KshetraImage4,
    align: "left",
    heading: [
      {
        text: "LESSON FROM THE LOTUS:  SIT, SMILE, THAT’S IT!",
      },
    ],
    description: [
      {
        text: "Kshetra’s has a tranquil Eco-pond with a zen-like quality pervading everything around it. For instance, the silent blooms of lotus. ",
      },
      {
        text: "The lotus offers a great life lesson: it holds on to neither dew-drops nor swampy water, suggesting a sage-like equanimity at all times. Families could gather here, as they did in the olden days, to whisper about life’s challenges and ways to resolve them. If the singing of a cuckoo distracts you, don’t mind him.",
      },
      {
        text: "Young individuals too can come here to contemplate on ways to woo their heart’s desire, and consider whether or not a ‘sage-like equanimity’ is a satisfying way to react, should they fail to get a date.",
      },
    ],
    altText: "plots in shankarpally"
  },
  {
    image: KshetraImage5,
    align: "right",
    heading: [
      {
        text: "SHARING LAUGHTER AND  MATCHING STEPS WITH NEIGHBOURS",
      },
    ],
    description: [
      {
        text: "When a family comes together for a small celebration, a couple of hours can turn into an all-night party when friends turn up. And if occasion demands, young feet and old bones can forget all worldly cares and join in a jig, matching steps the traditional way – shoulder to shoulder, arm in arm.",
      },
      {
        text: "Kshetra is a place where bonds remain ever strong because we live by and cherish age-old traditions; and every family member has a special place in this happy little world.",
      },
    ],
    altText: "shankarpally open plots"
  },
];

const kshetraCOntact = {
  phone: "7775857777",
  email: "Kshetra@ridgehomes.in",
};

function Kshetra() {
  const [isPDF, setIsPDF] = useState(false);
  const developments = useFetchDevelopments();
  const handleReadMore = (i) => {
    console.log("mohan", i);
  };
  const onButtonClick = () => {
    setIsPDF(true);
  };
  return (
    <>
      <Helmet>
        <title>#1 HMDA Open Plots in Shankarpally Hyderabad | Kshetra</title>
        <meta
          name="description"
          content="Live life to the fullest with Ridge Homes' open plots in S
          hankarpally Hyderabad Ksherta. Enjoy tranquil surroundings and create lasting memories. Book now!"
        />
        <meta
          name="keywords"
          content="plots in shankarpally, residential plots in shankarpally, hmda open plots in shankarpally, plots for sale in shankarpally hyderabad, open plots for sale in shankarpally hyderabad, hmda approved plots in shankarpally, open plots in shankarpally hyderabad, residential plots for sale in shankarpally hyderabad, plots in shankarpally hyderabad, hmda plots in shankarpally, Ridge Homes Kshetra Shankarpally, Kshetra Hyderabad"
        />
      </Helmet>
      <HomeBanner bannerImage={Banner} altText="1800 x 600 kshetra-01.jpg"/>
      <RightImageLeftText data={rightImage} />
      {keshtraBannerImageText.map((item, i) => (
        <RightTextImage data={item} index={i} handleReadMore={handleReadMore}/>
      ))}
      <button className="pdfDownload" onClick={onButtonClick}>
        <FaDownload/> Brochure
      </button>
      {/* <div style={{ overflow: "auto", maxWidth: "1200px", margin: "auto" }}>
        <h2>Price sheet:</h2>
        <table>
          <thead>
            <tr>
              <th style={{ borderRight: '2px solid #DD9C37' }}>Type</th>
              <th style={{ borderRight: '2px solid #DD9C37' }}>Area</th>
              <th style={{ borderRight: '2px solid #DD9C37' }}>Price</th>
            </tr>
          </thead>
          <tbody>
            {data.map((val, key) => {
              return (
                <tr key={key} style={{ borderRight: '2px solid #DD9C37' }}>
                  <td style={{ borderRight: '2px solid #DD9C37' }}>{val.name}</td>
                  <td style={{ borderRight: '2px solid #DD9C37' }}>{val.age}</td>
                  <td style={{ borderRight: '2px solid #DD9C37' }}>
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
      </div> */}
       <div className="container-m">
        <h2 style={{ padding: "0 0 30px 0", margin: "auto" }}>Developments</h2>
        <div className="card-container">
          {developments[1]?.valley[0]?.images?.map((image, index) => (
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
      <HighlightText data={highlightPoints} highlightImage={Kshetra3} altText="best realstate plots in shakarpally"/>
      <AreaDivison/>
      <div className="map-bottom">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.6703459260993!2d78.016058!3d17.523243000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbfdfd97e2f72b%3A0x4d35edd7977c529f!2sKshetra%20Farm%20Project!5e0!3m2!1sen!2sin!4v1668416729788!5m2!1sen!2sin"
          width="600"
          height="450"
          title="kshetra"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <HomeContact
        noContact={true}
        page="Kshetra"
        contactDetails={kshetraCOntact}
        banner={ContactBanner}
        srd="66448b49e11487ddcac7b45a"
      />
      {isPDF && (
        <DialogForm page="kshetra" setIsPDF={setIsPDF} pdfUrl={KeshtraPDF} srd="66470c0b58f1e76f51f0e831"/>
      )}
      <WhatsAppLink whatsappLink="https://wa.me/917775857777?text=" />
    </>
  );
}

export default Kshetra;

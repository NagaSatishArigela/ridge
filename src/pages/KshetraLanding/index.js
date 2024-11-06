import React, {useState} from "react";
import { Helmet } from "react-helmet";
import Banner from '../../assets/images/kshetrabanner1.png';
import ContactBanner from '../../assets/images/contact-form-backside-image.png';
import Kshetra2 from '../../assets/images/kshetra2.png';
import KshetraImage1 from '../../assets/images/kshetra b1.png';
import KshetraImage2 from '../../assets/images/kshetra b2.png';
import KshetraImage3 from '../../assets/images/kshetra b3.png';
import KshetraImage4 from '../../assets/images/kshetra b4.png';
import KshetraImage5 from '../../assets/images/kshetra b5.png';
import Kshetra1 from '../../assets/images/kshetra page second section.png';
import Kshetra3 from '../../assets/images/kshetra3.jpeg';
import KshetraPng from '../../assets/images/kshetra 2.png';
import kshetraPDF from '../../assets/Kshetra Digital Brochure.pdf';
import HomeBanner from "../../components/HomeBanner";
import HomeContact from "../../components/HomeContact";
import RightImageLeftText from "../../components/RightImageLeftText";
import '../../components/Styles/styles.css';
import './kshetra.css';
import HighlightText from "../../components/HighlightText";
import RightTextImage from "../../components/RightTextImage";
import DialogForm from "../../components/DialogForm";
import WhatsAppLink from "../../components/WhatsappLink";
import { FaFilePdf } from "react-icons/fa";

const rightImage = {
    heading: "KSHETRA",
    description: "Kshetra is not just another residential area, but an amazing place enrooted to the glorious tradition and facilitated with ultramodern amenities. You can choose from different plot ranges, various individual homes and magnificent villas. All of this comes along with amazing recreational options and ample greenery.",
    image: Kshetra1,
    elivation: "Welcome to RIDGE’s “Kshetra” – a community where nature-centric traditions make a grand comeback.",
}


const highlightPoints = [
    {text: "20 Mins Drive to shankarpally"},
    {text: "20 Mins Drive to Telanagan mobility valley cluster"},
    {text: "20 Mins Drive to SangaReddy"},
    {text: "40 Mins Drive to NEOPOLIS"},
    {text: "45 Mins Drive to Financial District"},
    {text: "50 Mins Drive to Hitech City"},
    {text: "1 Hour Drive to international airport"},
    {text: "Walkable distance to RRR"},
];

const keshtraBannerImageText = [
    {
        image: KshetraImage1,
        align: "right",
        heading: [{
            text: "WORD TO THE WISE:"
        },{
            text: "WHEN YOU FOLLOW NATURE,  HAPPINESS FOLLOWS YOU."
        },
    ],
    description: [
        {
            text: "Nature had always been central to life for our ancestors. Celebrated in song and scriptures, worshipped in temples and traditions, nature defined our agrarian culture and lifestyle. However, migration and rapid urbanization over the years made people lose their cultural roots."
        },
        {
            text: "Globally, weather conditions are worsening day by day and pollution increasing every minute; yet city dwellers ignore the signs of warning on their health..But no worries, there are people who still care for everyone’s well-being.."
        }
    ],
    },
    {
        image: KshetraImage2,
        align: "left",
        heading: [{
            text: "WHO NEEDS REASONS  TO CELEBRATE?"
        },
    ],
    description: [
        {
            text: "At Kshetra, festivals can turn into events of great merriment. Colours and flowers, lights and laughter, night-long dancing and delicacies of myriad tastes and lots more the community would come alive with revelry. Since traditions are a key theme at Kshetra, festivals like Sankranthi and Jatara would be celebrated in the authentic manner that was custom for our grandparents and ancestors. Festivities can become most frequent as Kshetra is open to people of all cultures."
        }
    ],

    },
    {
        image: KshetraImage3,
        align: "right",
        heading: [{
            text: "LITTLE JOYS AND  GREAT DELIGHTS"
        },
    ],
    description: [
        {
            text: "The rhythmic graph of love may well ascend to new heights in Kshetra. Because, like all things natural, relationships and family bonds are strengthened only when nurtured with love and care, in quiet moments, uninterrupted except for the sweet birdsong and the gentle caress from the Deccan breeze."
        },
        {
            text: "The fragrance of flowers in your garden, the swaying of trees and two hearts beating as one… can there be a more romantic setting to reignite a passion?"
        }
    ],

    },
    {
        image: KshetraImage4,
        align: "left",
        heading: [{
            text: "LESSON FROM THE LOTUS:  SIT, SMILE, THAT’S IT!"
        },
    ],
    description: [
        {
            text: "Kshetra’s has a tranquil Eco-pond with a zen-like quality pervading everything around it. For instance, the silent blooms of lotus. "
        },
        {
            text: "The lotus offers a great life lesson: it holds on to neither dew-drops nor swampy water, suggesting a sage-like equanimity at all times. Families could gather here, as they did in the olden days, to whisper about life’s challenges and ways to resolve them. If the singing of a cuckoo distracts you, don’t mind him."
        },
        {
            text: "Young individuals too can come here to contemplate on ways to woo their heart’s desire, and consider whether or not a ‘sage-like equanimity’ is a satisfying way to react, should they fail to get a date."
        }
    ],
    
    },
    {
        image: KshetraImage5,
        align: "right",
        heading: [{
            text: "SHARING LAUGHTER AND  MATCHING STEPS WITH NEIGHBOURS"
        },
    ],
    description: [
        {
            text: "When a family comes together for a small celebration, a couple of hours can turn into an all-night party when friends turn up. And if occasion demands, young feet and old bones can forget all worldly cares and join in a jig, matching steps the traditional way – shoulder to shoulder, arm in arm."
        },
        {
            text: "Kshetra is a place where bonds remain ever strong because we live by and cherish age-old traditions; and every family member has a special place in this happy little world."
        }
    ],

    },
];

const kshetraCOntact = {
    phone: "7775857777",
    email: "Kshetra@ridgehomes.in"
};


function KshetraLanding() {
    const [isPDF, setIsPDF] = useState(false);
    const handleReadMore = (i) => {
        console.log('mohan', i);
    }
    
    const onButtonClick = () => {
        setIsPDF(true);
    }
  return (
     <>
      <Helmet>
        <meta name="title" content="#1 HMDA Open Plots in Shankarpally Hyderabad | Kshetra" />
        <meta name="description" content="Live life to the fullest with Ridge Homes' open plots in Shankarpally Hyderabad Ksherta. Enjoy tranquil surroundings and create lasting memories. Book now!" />
        <meta name="keywords" content="plots in shankarpally, residential plots in shankarpally, hmda open plots in shankarpally, plots for sale in shankarpally hyderabad, open plots for sale in shankarpally hyderabad, hmda approved plots in shankarpally, open plots in shankarpally hyderabad, residential plots for sale in shankarpally hyderabad, plots in shankarpally hyderabad, hmda plots in shankarpally, Ridge Homes Kshetra Shankarpally, Kshetra Hyderabad" />
        {/* <meta name="keywords" content="Ridge Homes, Ridge Homes Hyderabad, Ridge Homes real estate, kshetra by Ridge Homes, tranquil by ridge homes, sunrise city by ridge homes, plots in Maheshwaram, plots in Shankarpalle, land for sale in Shankarpalle, land in Sultanpur, plot in Sultanpur, villa plots in Hyderabad, land to invest in Hyderabad, gated community plots in maheshwaram," /> */}
    </Helmet>
        <HomeBanner bannerImage={Banner} altText="kshetrabanner1" landing={true}/>
        {/* <img src={KshetraPng} className="fixedImage" /> */}
        <RightImageLeftText data={rightImage} />
        {
            keshtraBannerImageText.map((item, i) => <RightTextImage data={item} index={i} handleReadMore={handleReadMore} />)
        }
          <button className="pdfDownload" onClick={onButtonClick}>
            <FaFilePdf/> Brochure
          </button>
        <HighlightText data={highlightPoints} highlightImage={Kshetra3} />
        <div className="map-bottom">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.6703459260993!2d78.016058!3d17.523243000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbfdfd97e2f72b%3A0x4d35edd7977c529f!2sKshetra%20Farm%20Project!5e0!3m2!1sen!2sin!4v1668416729788!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <HomeContact noContact={true} page="Kshetra Landing" contactDetails={kshetraCOntact} banner={ContactBanner} />
        {
           isPDF&& <DialogForm setIsPDF={setIsPDF} pdf="Kshetra Digital Brochure.pdf" srd=""/>
        }
        
        <WhatsAppLink whatsappLink="https://wa.me/917775857777?text=" />
     </>
  );
}

export default KshetraLanding;

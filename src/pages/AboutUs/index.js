import React, { useState } from "react";
import { Helmet } from "react-helmet";
import aboutUs from "../../assets/images/ridgeNewLogo.png";
import surya from "../../assets/images/surya-ridge-homes.jpg";
import raju from "../../assets/images/raju.jpg";
import amar from "../../assets/images/amarnath.jpg";
import raghu from "../../assets/images/raghu-sir-ridge.jpg";
import kalyan from "../../assets/images/Kalyan-01.jpg";
import hema from "../../assets/images/p-hema-00.jpg";
import "../../components/Styles/styles.css";
import WhatsAppLink from "../../components/WhatsappLink";
import Header from "../../components/TopHeader";
import "./index.css";
import TeamMemberCard from "./TeamMember";

const teamMembers = [
  {
    image: surya,
    name: "Surya Penmetsa",
    title: "MANAGING DIRECTOR",
    description:
      "As managing director of the Ridge Group, He is deeply passionate about creating and delivering value for the people around him. His intense focus on value enables him to cut the noise and drive team toward results. Meetings are always short with Surya. His cross boarder and cross cultural experience is apparent in every conversation. Contrarian in thinking and quick on decision making enables team to execute business rooted on rationalality than axiomatic. Pleasure and challenging to work with at the same time. His emphasys on systems enable us to come up with longterm solutions to the challenges during execution. Growth hacker at core, everyday is a fresh start.",
    facebook: "#",
    linkedin: "#",
    twitter: "#",
  },
  {
    image: raju,
    name: "Srinivas Raju Vetukuri",
    title: "MANAGING PARTNER",
    description:
      "Srinivas is the Managing Partner of Ridge with over 30 years of experience in the industry. With a proven track record of success and a deep understanding of the real estate market, Srinivas has established himself as a leading figure in the industry. He has dedicated his career to helping clients navigate the complex world of real estate, providing expert guidance and advice along the way. Srinivas is known for commitment to delivering results, earning him a reputation as one of the most reliable and trustworthy professionals in the business. Whether you are a first-time homebuyer or an experienced investor, Srinivas and his team have the expertise and experience to help you achieve your goals.",
    facebook: "#",
    linkedin: "#",
    twitter: "#",
  },
  {
    image: amar,
    name: "Ramesh Amarnath V",
    title: "VP OF OPERATIONS",
    description:
      "Mr. Ramesh Amarnath is a B.Tech graduate in Electrical and Electronics Engineering from JNTU Hyderabad, complemented by an MBA in HR. With over 25 years of extensive experience in various domains, including Construction Management, Infrastructure design, and implementation of large civil projects such as airports and 50+ storey structures, as well as social projects, audit, and compliance.He has held leadership roles in prominent MNCs such as A&P, HSBC EDPI, JLL, UBS India Service Centre, SKS Microfinance Ltd and others. He is a certified Professional Project Management (PPM) and Lean Management expert. He also holds qualifications in the Civil Infrastructure domain. Notably, he has served as the CEO at Community Pure Water (CPW), a non-profit ensuring rural clean water access, and at SKS Trusts, a Multi Crore+ entity dedicated to rural empowerment.",
    facebook: "#",
    linkedin: "#",
    twitter: "#",
  },
  {
    image: raghu,
    name: "Raghu Raj Kumar Balaraju",
    title: "PROJECT DIRECTOR & ADVISOR",
    description:
      "Raghu is a highly experienced Partner and Project Director in the real estate and hospitality industry, with over 40 years of experience. He has a wealth of knowledge and expertise in managing and executing large-scale real estate projects and hospitality ventures. Raghu’s leadership skills and strategic thinking have been instrumental in successfully delivering many high-profile projects at Ridge. He has a keen eye for identifying new business opportunities and has a track record of creating innovative solutions that drive business growth.",
    facebook: "#",
    linkedin: "#",
    twitter: "#",
  },
  {
    image: kalyan,
    name: "M Kalyan chakaravathy",
    title: "AGM SALES & OPERATIONS",
    description:
      "Experienced AGM in Sales & Operations with 9 years of proven expertise. Proficient in driving revenue growth, optimizing operational efficiency, and leading high-performing teams. Adept at strategic planning, client relationship management, and achieving targets in dynamic markets. Demonstrated ability to streamline processes, enhance customer satisfaction, and deliver results in competitive industries.",
    facebook: "#",
    linkedin: "#",
    twitter: "#",
  },
  {
    image: hema,
    name: "P Hema",
    title: "AGM FINANCE",
    description:
      "Accomplished AGM in Finance with a decade of extensive experience. Demonstrated proficiency in financial management, budgeting, and strategic planning. Proven track record of optimizing financial performance, reducing costs, and maximizing profitability. Skilled in team leadership, regulatory compliance, and risk management. Adept at leveraging financial insights to drive informed business decisions and achieve organizational objectives.",
    facebook: "#",
    linkedin: "#",
    twitter: "#",
  },
];

const AboutUs = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleDescription = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Helmet>
        <title>
          #1 About Us Best Realestate company in hyderabad | Ridge Homes
        </title>
        <meta
          name="description"
          content="A home for learning & growth that upholds traditions & age-old practices. Discover more about us today & build a foundation that will stand the test of time."
        />
      </Helmet>
      <Header />
      <div className="container">
        <div className="image">
          <img
            src={aboutUs}
            alt="Company Image"
            style={{ height: "200px", width: "400px" }}
          />
        </div>
        <div className="content">
          <h1 style={{ fontWeight: "bolder" }}>About Us</h1>
          <p style={{ display: "flex", textAlign: "justify" }}>
            <span style={{ fontSize: "48px", fontWeight: "600" }}>|</span>
            <span style={{ padding: "12px", fontWeight: "bolder" }}>
              Ridge is a culmination of people with an acquired passion for
              conscious living. We believe learning and growth begins at home.
            </span>
          </p>
          <p style={{ textAlign: "justify" }}>
            A home that is designed to uphold traditions and age-old practices
            is one that will stand the test of time. A recurring theme at Ridge
            is the creation of ideal living environments that honour the
            knowledge of our forefathers. Recently, the growth of consumerism
            and city life has taken its toll on family upbringing. When we
            started Ridge, we aimed to bring families together in more ways than
            one. All our projects are focused on the rejuvenation of our
            customers. With an appreciation for nature, art and culture, Ridge
            is on a path to revolutionizing living spaces.
          </p>
          {/* <div className="mission-vision">
            <div className="mission">
              <h3>Our Mission</h3>
              <p>
                Magna ante sequi pulvinar itaque? Animi cum mattis impedit porta
                cumque repudiandae! Mi dignissim, molestie officia.
              </p>
            </div>
            <div className="vision">
              <h3>Our Vision</h3>
              <p>
                Magna ante sequi pulvinar itaque? Animi cum mattis impedit porta
                cumque repudiandae! Mi dignissim, molestie officia.
              </p>
            </div>
          </div> */}
        </div>
      </div>
      <div className="teamSection">
        <h1>Meet Our Team</h1>
        <div className="teamMembers">
          {/* {teamMembers.map((member, index) => (
            <div className="teamMember" key={index}>
              <img src={member.image} alt={member.name} className="teamImage" />
              <div className="teamDetails">
                <h3
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: "35px",
                    fontWeight: "900",
                    margin: "25px 0px",
                  }}
                >
                  {member.name}
                </h3>
                <h4>{member.title}</h4>
                <div className={`description ${expanded ? "expanded" : ""}`}>
                  <p style={{ textAlign: "justify" }}>{member.description}</p>
                </div>
                <button onClick={toggleDescription} style={{color: '#DD9C37', border: 'none', fontSize: '20px', padding: '10px' }}>
                  {expanded ? "...Read Less" : "...Read More"}
                </button>
                <div className="socialLinks">
                  <a href={member.facebook}>
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href={member.linkedin}>
                    <i className="fa fa-linkedin"></i>
                  </a>
                  <a href={member.twitter}>
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>
                </div>
              </div>
            </div>
          ))} */}
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </div>
      </div>
      <WhatsAppLink />
    </>
  );
};

export default AboutUs;

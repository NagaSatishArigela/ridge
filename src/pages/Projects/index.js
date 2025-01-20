import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import BannerNext1 from "../../assets/webp/open-plots-for-sale-in-maheshwaram  .webp";
import BannerNext2 from "../../assets/webp/kshetraLogo.webp";
import BannerNext3 from "../../assets/webp/hmda-approved-layouts-in-maheshwaram  _1.webp";
import BannerNext4 from "../../assets/webp/plots in hyderabad.webp";
import WhatsAppLink from "../../components/WhatsappLink";
import "../../components/Styles/styles.css";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import './index.css';

const bannerNext = [
  {
    image: BannerNext2,
    link: "projects/kshetra",
    hmda: "DTCP LP No:- 135/2024/H",
    rera: "RERA:- P01100009098"
  },
  {
    image: BannerNext3,
    // text : "A project that gives you the best of both worlds. The proximity to industrial hubs ensures easy access while",
    link: "projects/tranquilvalley",
    hmda: "HMDA LP No:- 000038/LO/PLG/HMDA/2023",
    rera: "RERA:- P02400005589",
  },
  {
    image: BannerNext1,
    // text : "A project located in the high-rising growth corridor of the ORR and close to one of India's leading Industrial hubs. ",
    link: "projects/sunrisecity",
    hmda: "HMDA LP No:- 000186/LO/PLG/HMDA/2022",
    rera: "RERA:- P01100005222",
  },
  {
    image: BannerNext4,
    text: "The property market in Hyderabad has been growing by leaps and bounds, making it an ideal investment destination for home buyers and investors.",
    link: "projects/springcity",
  },
];

function AllProjects() {
  return (
    <>
      <Helmet>
        <title>Projects by Ridge || #1 Real Estate Company in Hyderabad</title>
        <meta
          name="description"
          content="Open plots for sale in prime locations of Hyderabad. Small Investment with big return. Contact us today to know more."
        />
      </Helmet>
      <div className="top-header">
        <div className="container-m">
          <ul>
            <li>
              <a href="tel:9000888152">
                <FaPhone/> +91 9000888152
              </a>
            </li>
            <li>
              <a href="mailto:info@ridgehomes.in">
                <FaEnvelope/> info@ridgehomes.in
              </a>
            </li>
          </ul>
          {/* <label><img src={Elivation} /></label> */}
        </div>
      </div>
      <div style={{ margin: "auto", padding: "180px 0" }}>
        <h3 style={{ fontSize: "23px", textAlign: "center" }} className="project">Projects</h3>
        <div className="banner-next-section">
          {bannerNext.map((item) => (
            <div
              className={
                item.title ? "banner-next banner-next-title" : "banner-next"
              }
            >
              <Link to={`/${item?.link}`}>
                <img src={item?.image} alt="testimonials" />
              </Link>
              {item.heading ? (
                <h3>{item?.heading}</h3>
              ) : item.title ? (
                <>
                  <h3>{item?.title}</h3>
                  <p>{item?.description}</p>
                  <Link to={`/${item?.link}`}>Read More</Link>
                </>
              ) : (
                <>
                  <p>{item?.text}</p>
                  <p>
                    <b>{item?.hmda}</b>
                  </p>
                  <p>
                    <b>{item?.rera}</b>
                  </p>
                  <Link to={`/${item?.link}`}>Read More</Link>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
      <WhatsAppLink />
    </>
  );
}

export default AllProjects;

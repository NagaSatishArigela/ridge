import React from "react";
import { Link } from "react-router-dom";
import Banner from "../../assets/webp/plots for sale in shankarpally hyderabad.webp";
import BannerNext1 from "../../assets/webp/open-plots-for-sale-in-maheshwaram  .webp";
import BannerNext2 from "../../assets/webp/kshetraLogo.webp";
import BannerNext3 from "../../assets/webp/hmda-approved-layouts-in-maheshwaram  _1.webp";
import BannerNext4 from "../../assets/webp/plots in hyderabad.webp";
import videoNext1 from "../../assets/images/legacy copy.png";
import videoNext2 from "../../assets/images/2 image.png";
import videoNext3 from "../../assets/images/3 images.png";
import blog1 from "../../assets/webp/property for sale in hyderabad.webp";
import blog2 from "../../assets/webp/ventures-in-shankarpally.webp";
import blog3 from "../../assets/webp/maheshwaram hmda plots_1.webp";
import "./banner.css";

import "../Styles/styles.css";
import HomeBanner from "../HomeBanner";

const bannerNext = [
  {
    image: BannerNext2,
    link: "projects/kshetra",
    hmda: "HMDA LP No:- 135/2024/H",
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

const videoNext = [
  {
    image: videoNext1,
    heading: "10 years Legacy",
  },
  {
    image: videoNext2,
    heading: "500+ Happy Clients",
  },
  {
    image: videoNext3,
    heading: "10+ Projects",
  },
];

const blogSec = [
  {
    image: blog1,
    title: "ISO Certified",
    description:
      "Ridge Homes is proudly ISO certified, which proves our commitment to quality construction, efficient processes, and exceptional customer service. Choose Ridge Homes - where peace of mind is your standard.",
    link: "/iso-certified",
  },
  {
    image: blog2,
    title: "Tranquil valley",
    description:
      "Welcome to Tranquil Valley, a nature-centric Premium Villa Plots in Maheshwaram, identified by application number (here comes the number). This project resembles our commitment to innovation, quality, and sustainable development. With its serene surroundings, tranquil valley promises a lifestyle of peace and convenience where we transform vision into reality, enriching communities.",
    link: "/projects/tranquilvalley",
  },
  {
    image: blog3,
    title: "Kshetra",
    description:
      "Welcome to Kshetra, a theme based villa project in Shankarpally identified by application number (here comes the number). Kshetra is about uplifting the traditions with the theme - Nature, Culture, and Art. This theme based project restores ancient practices in its surroundings and amenities. With its rich cultural heritage, Kshetra promises a lifestyle of tradition and comfort, where we make your dreams into reality, nurturing vibrant resort communities. ",
    link: "/projects/kshetra",
  },
];

const bannerContent = [
  {
    text1: '"Nature is pleased with simplicity. And nature is no dummy."',
    text2: " - Isaac Newton",
  },
  {
    text1: '"Adopt the pace of nature. Her secret is patience."',
    text2: " - Ralph Waldo Emerson",
  },
  {
    text1: '"Choose only one master - Nature"',
    text2: " - Rembrandt",
  },
  {
    text1: '"Leave the roads; take the trails."',
    text2: " - Pythagoras",
  },
  {
    text1:
      '"It is the unfailing fall of rain that sustains the world. Therefore, look upon rain as the nectar of life."',
    text2: " - Tirukural",
  },
];

function TilesSection(props) {
  const { data } = props;
  return (
    <>
      <div className="container-m">
        <div className="banner-next-section">
          {data.map((item) => (
            <div
              className={
                item.title ? "banner-next banner-next-title" : "banner-next"
              }
              key={item.title}
            >
              {item.title ? (
                <>
                  {" "}
                  <img
                    src={item?.image}
                    alt="blog image"
                    className="banBorder"
                    loading="lazy"
                  />
                  {item.heading ? (
                    <h3>{item?.heading}</h3>
                  ) : item.title ? (
                    <>
                      <h3>{item?.title}</h3>
                      <p className="truncate-description">
                        {item?.description}
                      </p>
                      <a href={`${item.link}`}>Read More</a>
                    </>
                  ) : (
                    <>
                      <p>{item?.text}</p>
                      <Link to={`/${item?.link}`}>Read More</Link>
                    </>
                  )}
                </>
              ) : (
                <Link to={item?.link}>
                  <img src={item?.image} alt="blog image" loading="lazy" />
                  {item.heading ? (
                    <h3>{item?.heading}</h3>
                  ) : item.title ? (
                    <>
                      <h3>{item?.title}</h3>
                      <p>{item?.description}</p>
                      <a href={`${item.link}`}>Read More</a>
                    </>
                  ) : (
                    <>
                      <p>{item?.text}</p>
                      <Link to={`/${item?.link}`}>Read More</Link>
                    </>
                  )}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function HomeSections() {
  const randomItem =
    bannerContent[Math.floor(Math.random() * bannerContent.length)];

  return (
    <>
      <div className="hBanner">
        <HomeBanner bannerImage={Banner} />
        <div className="bannerTextP">
          {randomItem.text1}{" "}
          <span>
            {randomItem.text2} <br />
            An inspiration for Ridge
          </span>
        </div>
      </div>
      <div style={{ margin: "auto" }}>
        <div className="project-banner-next-section">
          {bannerNext.map((item) => (
            <div
              className={
                item.title
                  ? "project-banner-next banner-next-title"
                  : "project-banner-next"
              }
              key={item.link}
            >
              <Link to={`/${item?.link}`}>
                <img
                  src={item?.image}
                  alt="blog"
                  loading="lazy"
                  width="200px"
                  height="100px"
                />
                <h3>{item?.title}</h3>
                <p>
                  <b>{item?.text}</b>
                </p>
                <p>
                  <b>{item?.hmda}</b>
                </p>
                <p>
                  <b>{item?.rera}</b>
                </p>
                <p className="read">Read More</p>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* <section className="video-section">
      <div className="container-m">
        <iframe src="https://www.youtube.com/embed/fXULnoaWrMs?mute=1&autoplay=1" title="YouTube video player" frameborder="0" allowfullscreen></iframe>
      </div>
      </section> */}

      {/* <TilesSection data={videoNext} /> */}

      <section className="blog-section">
        <h1 className="latestnews">Latest News</h1>
        <TilesSection data={blogSec} />
      </section>
    </>
  );
}

export default HomeSections;

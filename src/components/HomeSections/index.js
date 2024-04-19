import React from "react";
import { Link } from "react-router-dom";
import Banner from "../../assets/images/banner.jpeg";
import BannerNext1 from "../../assets/images/sun-rise-grey-logo.png";
import BannerNext2 from "../../assets/images/kshetraLogo.jpg";
import BannerNext3 from "../../assets/images/Tranquil-Valley-300x207.png";
import BannerNext4 from "../../assets/images/springlogo.png";
import videoNext1 from "../../assets/images/legacy copy.png";
import videoNext2 from "../../assets/images/2 image.png";
import videoNext3 from "../../assets/images/3 images.png";
import blog1 from "../../assets/images/ridge blog1.jpg";
import blog2 from "../../assets/images/ridge blog2.png";
import blog3 from "../../assets/images/ridge blog1.png";
import backImage from "../../assets/images/contact-form-backside-image.png";

import "../Styles/styles.css";
import HomeBanner from "../HomeBanner";

const bannerNext = [
  {
    image: BannerNext2,
    text: "Where modernity embraces tradition, & life moves at a majestic pace.Where nature-centric traditions make a grand comeback.",
    link: "projects/kshetra",
  },
  {
    image: BannerNext3,
    // text : "A project that gives you the best of both worlds. The proximity to industrial hubs ensures easy access while",
    link: "projects/tranquilvalley",
    hmda: "HMDA No:- 055926/SMD/LT/U6/HMDA/22072022",
    rera: "RERA:- Po2400005589",
  },
  {
    image: BannerNext1,
    // text : "A project located in the high-rising growth corridor of the ORR and close to one of India's leading Industrial hubs. ",
    link: "projects/sunrisecity",
    hmda: "HMDA No:- 000186/LO/PLG/HMDA/2022",
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
    title: "Overall Market",
    description:
      "Initially limited to Hyderabad's downtown, real estate activity expanded as the city experienced a boom",
    link: "https://ridgehomes.in/blog/uncategorized/auto-draft/",
  },
  {
    image: blog2,
    title: "Focused in West Hyderabad",
    description:
      "It is no secret that the cost of real estate in Hyderabad is not just rising but also exploding.",
    link: "https://ridgehomes.in/blog/uncategorized/focused-in-west-hyderabad-mokila-shankarpally-mominpet/",
  },
  {
    image: blog3,
    title: "Focused in south Hyderabad",
    description:
      "The southern half of the city's real estate market has just begun to pick up, particularly ",
    link: "https://ridgehomes.in/blog/uncategorized/focused-in-south-hyderabad-airport-maheswaram-pharmacity/",
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
            >
              {item.title ? (
                <>
                  {" "}
                  <img src={item?.image} alt="blog image" />
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
                </>
              ) : (
                <Link to={item?.link}>
                  <img src={item?.image} alt="blog image" />
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
      <section>
        {/* <TilesSection data={bannerNext}/> */}
        <div style={{margin: 'auto'}}>
          <div className="banner-next-section">
            {bannerNext.map((item) => (
              <div
                className={
                  item.title ? "banner-next banner-next-title" : "banner-next"
                }
              >
                <Link to={`/${item?.link}`}>
                  <img src={item?.image} alt="blog" />
                  <h3>{item?.title}</h3>
                  <p>{item?.text}</p>
                  <p>
                    <b>{item?.hmda}</b>
                  </p>
                  <p>
                    <b>{item?.rera}</b>
                  </p>
                  <Link to={`/${item?.link}`}>Read More</Link>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="video-section">
      <div className="container-m">
        <iframe src="https://www.youtube.com/embed/fXULnoaWrMs?mute=1&autoplay=1" title="YouTube video player" frameborder="0" allowfullscreen></iframe>
      </div>
      </section> */}

      {/* <TilesSection data={videoNext} /> */}

      <section className="blog-section">
        <h1 class="latestnews">Latest News</h1>
        <TilesSection data={blogSec} />
      </section>
    </>
  );
}

export default HomeSections;

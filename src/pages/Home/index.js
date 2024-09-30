import React from "react";
import { Helmet } from "react-helmet";
import HomeContact from "../../components/HomeContact";
import HomeSections from "../../components/HomeSections";
import ContactBanner from "../../assets/webp/maheshwaram-plots-price .webp";
import "../../components/Styles/styles.css";
import WhatsAppLink from "../../components/WhatsappLink";
import YoutubeTestimonial from "../../components/YoutubeTestimonals";
import './homeTest.css';
const youtubeData = [
  {
    id: 0,
    yid: "TL4owvgTlfU?si=zy4Ek_JjdEJIeZqj",
  },
  {
    id: 1,
    yid: "BHtTuPmENKs?si=xZXlA5ytfbA6sa93",
  },
  {
    id: 2,
    yid: "QHApRArUdyc?si=fL8976jkQkrz0082",
  },
  {
    id: 3,
    yid: "3vQY-oZ6-aA?si=y00Ad-AxxI6_EyrC",
  }
];

function Home() {
  const settings = {
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          fade: true,
          arrows: false,
        },
      },
    ],
  };
  return (
    <>
      <Helmet>
        <meta
          name="title"
          content="Ridge Homes - #1 Best Real Estate Company In Hyderabad"
        />
        <meta
          name="description"
          content="Ridge Homes : Your dream home awaits! Explore our real estate listings and find the perfect property in Hyderabad. With our dedicated team members, we'll help you make your homeownership dreams a reality."
        />
        <meta
          name="keywords"
          content="real estate in hyderabad, hyderabad real estate, real estate companies in hyderabad, real estate hyderabad, top real estate companies in hyderabad, top real estate company in hyderabad, best real estate companies in hyderabad, best real estate company in hyderabad, top 10 real estate companies in hyderabad, real estate company in hyderabad, Top 10 real estate companies in Telangana, Top residential builders in Hyderabad, ridge homes in hyderabad"
        />

        <meta
          property="og:title"
          content="Ridge Homes - #1 Best Real Estate Company In Hyderabad"
        />
        <meta
          property="og:description"
          content="Ridge Homes : Your dream home awaits! Explore our real estate listings and find the perfect property in Hyderabad. With our dedicated team members, we'll help you make your homeownership dreams a reality."
        />
        <meta
          property="og:image"
          content="https://ridgehomes.in/static/media/ridge%20blog1.0a065532c1d8e672e002.png"
        />
        <meta property="og:url" content="https://ridgehomes.in/" />
      </Helmet>

      <HomeSections />
      <div className="testimonials-yt">
      <h3 className="title">Testimonials</h3>
      <div className="flex-container">
        {youtubeData.map((ydata) => (
          <div key={ydata.id} className="testimonial-item">
            <YoutubeTestimonial videoId={ydata.yid} />
          </div>
        ))}
      </div>
      </div>
      <HomeContact page="Home" banner={ContactBanner} srd="664456705d8deffd47ff9b89"/>
      <WhatsAppLink />
    </>
  );
}

export default Home;

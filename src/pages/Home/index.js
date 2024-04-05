import React from "react";
import Slider from "react-slick";
import { Helmet } from "react-helmet";
import HomeContact from "../../components/HomeContact";
import HomeSections from "../../components/HomeSections";
import ContactBanner from "../../assets/images/contactBackground.png";
import Testimonials1 from "../../assets/images/Gagan IT EMPLOYEE.jpeg";
import Testimonials2 from "../../assets/images/Ramireddy Business.jpeg";
import Testimonials3 from "../../assets/images/Ramesh Reddy BHEL Employee.jpeg";
import "../../components/Styles/styles.css";
import WhatsAppLink from "../../components/WhatsappLink";
import YoutubeTestimonial from "../../components/YoutubeTestimonals";
// import TestiMonials from "../../components/TestiMonials/TestiMonials";

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
      <h3 className="title">Testimonials</h3>
      <div class="container">
        <Slider {...settings}>
          <div>
            <div class="box">
              <div class="imgBox">
                <img src={Testimonials1} alt="testimonials" />
              </div>
              <p>
                {" "}
                Being an IT professional, I do quite a bit of research on
                Realestate asset class in order to build a good portfolio for me
                and my family. I look for specially differentiated products with
                ample room for growth.{" "}
              </p>
              <p>
                When someone introduced me to Ridge last year, I knew they were
                just the thing I was looking for. The team is passionate about
                their products. They go out of their way to design products and
                fulfill their commitment to customers. One of the finest
                upcoming players in the space.
              </p>
            </div>
          </div>
          <div>
            <div class="box">
              <div class="imgBox">
                <img src={Testimonials2} alt="testimonials" />
              </div>
              <p>
                I came across Ridge when I was looking to buy a housing plot
                from a reliable source. The prime location and growth potential
                of Tranquil is what attracted me to their venture. They made the
                whole process simple and hassle-free. I never realized buying
                land could be this easy
              </p>
            </div>
          </div>
          <div>
            <div class="box">
              <div class="imgBox">
                <img src={Testimonials3} alt="testimonials" />
              </div>
              <p>
                When I was looking for housing plots with a good offbeat
                location and access to industrial hubs, I was referred to Ridge.
                Kshetra's proximity to nature was definitely the selling point
                for me. They were the perfect choice. Thank you Ridge!
              </p>
            </div>
          </div>
        </Slider>
        {/* <TestiMonials></TestiMonials> */}
        {/* <TestiMonials/> */}
      </div>
      <div className="testimonial-list">
        {youtubeData.map((ydata) => (
          <div key={ydata.id} className="testimonial-item">
            <YoutubeTestimonial videoId={ydata.yid} />
          </div>
        ))}
      </div>
      <HomeContact page="Home" banner={ContactBanner} />
      <WhatsAppLink />
    </>
  );
}

export default Home;

import React from "react";
import Header from "../../components/TopHeader";
import homes from "../../assets/images/blogBanner.jpg";
import defaultPic from "../../assets/images/heroImage.jpg";
import "./index.css";
import { Link } from "react-router-dom";

const Blogs = ({ Blogs }) => {
  return (
    <>
      <Header />
      <div
        className="banner-container"
        style={{
          // height: "500px",
          width: "100%",
          position: "relative",
          overflow: "hidden",
          paddingTop: '70px'
        }}
      >
        {/* <img
          src={homes}
          alt="Banner"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        /> */}
        <header className="bannerb">
          <div className="banner-overlay">
            <img src={homes} alt="blogs" className="banner-image" />
            <div className="banner-text">
              <h1>Welcome to Our Ridge Homes Blogs</h1>
              <p>
                Explore our captivating and enlightening articles, designed to
                empower you with valuable insights as a discerning real estate
                buyer.
              </p>
            </div>
          </div>
        </header>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          position: "relative",
          paddingTop: "85px",
          alignItems: "center",
          paddingBottom: "40px",
        }}
      >
        <div className="blog-grid">
          {Blogs.map((blog) => (
            <Link
              key={blog.blogID}
              to={`/blog/${blog.blogID}`}
              className="blog-card"
            >
              <div className="blog-card-inner">
                <img
                  className="blog-cover"
                  src={blog?.bannerImage ? blog.bannerImage : defaultPic}
                  alt="Blog Cover"
                />
                <div className="blog-content">
                  <h6 className="blog-title">{blog.title}</h6>
                  <p className="blog-description">{blog.description}</p>
                  <div style={{ position: 'absolute', bottom: '0px', }}>
                  <Link
                    to={`/blog/${blog.blogID}`}
                    style={{
                      color: "#FCB13E",
                      textDecoration: "none",
                      fontWeight: 700,
                    }}
                  >
                    <p>READ MORE...</p>
                  </Link>
                </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blogs;

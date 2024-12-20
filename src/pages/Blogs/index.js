import React, { useState } from "react";
import Header from "../../components/TopHeader";
import homes from "../../assets/images/blogBanner.jpg";
import defaultPic from "../../assets/images/heroImage.jpg";
import "./index.css";
import { Link } from "react-router-dom";

const Blogs = ({ Blogs }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id));
    window.scrollTo(0, 0);
  };

  const pages = [];
  for (let i = 1; i <= Math.ceil(Blogs.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = Blogs.slice(indexOfFirstItem, indexOfLastItem);
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
          paddingTop: "70px",
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
          <div style={{ position: "absolute", inset: "0" }}>
            <img
              src={homes}
              alt="blogs"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              loading="lazy"
            />
            <div
              style={{
                position: "absolute",
                inset: "0",
                backgroundColor: "black",
                opacity: "0.5",
              }}
            ></div>
          </div>

          <div
            style={{
              position: "absolute",
              inset: "0",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              textAlign: "center",
              padding: "0 1rem",
            }}
          >
            <h1
              style={{
                fontSize: "2.25rem",
                fontWeight: "bold",
                marginBottom: "1rem",
              }}
            >
              Welcome to Our Ridge Homes Blogs
            </h1>
            <p style={{ fontSize: "1.125rem", maxWidth: "32rem" }}>
              Explore our captivating and enlightening articles, designed to
              empower you with valuable insights as a discerning real estate
              buyer.
            </p>
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
          flexDirection: "column",
        }}
      >
        <div className="blog-grid">
          {currentItems.map((blog) => (
            <Link
              key={blog.blogID}
              to={`/blog/${blog.slug}`}
              className="blog-card"
            >
              <div className="blog-card-inner">
                <img
                  className="blog-cover"
                  src={
                    blog?.bannerImage.url ? blog.bannerImage.url : defaultPic
                  }
                  alt="Blog Cover"
                  loading="lazy"
                />
                <div className="blog-content">
                  <h6 className="blog-title">{blog.title}</h6>
                  <p className="blog-description">{blog.description}</p>
                  <div style={{ position: "absolute", bottom: "0px" }}>
                    <Link
                      to={`/blog/${blog.slug}`}
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
        <ul id="page-numbers">
          {pages.map((number) => (
            <li
              key={number}
              id={number}
              onClick={handleClick}
              className={currentPage === number ? "active" : null}
            >
              {number}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Blogs;

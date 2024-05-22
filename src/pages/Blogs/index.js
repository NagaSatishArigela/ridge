import React from "react";
import Header from "../../components/TopHeader";
import homes from "../../assets/images/ridge homes.jpeg";
import "./index.css";

const Blogs = ({Blogs}) => {
  
  return (
    <>
      <Header />
      <div className="banner-container" style={{height: '500px', width: '100%', position: 'relative', overflow: 'hidden'}}>
        <img
          src={homes}
          alt="Banner"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
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
            <a key={blog.blogID} href={`/blog/${blog.blogID}`} className="blog-card">
              <div className="blog-card-inner">
                <img
                  className="blog-cover"
                  src={`${blog.bannerImage}`}
                  alt="Blog Cover"
                />
                <div className="blog-content">
                  <h3 className="blog-title">{blog.title}</h3>
                  <p className="blog-description">{blog.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blogs;

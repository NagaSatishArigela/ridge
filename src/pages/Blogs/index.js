import React from "react";
import Header from "../../components/TopHeader";
import "./index.css";

const Blogs = ({Blogs}) => {
  
  return (
    <>
      <Header />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          position: "relative",
          paddingTop: "140px",
          alignItems: "center",
          paddingBottom: "40px",
        }}
      >
        <div className="blog-grid">
          {Blogs.map((blog) => (
            <a key={blog.blogId} href={`/blog/${blog.blogId}`} className="blog-card">
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

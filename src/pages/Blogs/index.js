import React from "react";
import Header from "../../components/TopHeader";
import homes from "../../assets/images/ridge homes.jpeg";
import defaultPic from "../../assets/images/heroImage.jpg";
import "./index.css";
import { Link } from "react-router-dom";

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
            <Link key={blog.blogID} to={`/blog/${blog.blogID}`} className="blog-card">
              <div className="blog-card-inner">
                <img
                  className="blog-cover"
                  src={blog?.bannerImage ? blog.bannerImage : defaultPic}
                  alt="Blog Cover"
                />
                <div className="blog-content">
                  <h6 className="blog-title">{blog.title}</h6>
                  <p className="blog-description">{blog.description}</p>
                </div>
                <div style={{padding: '30px'}}>
                <Link to={`/blog/${blog.blogID}`} style={{color: '#FCB13E', textDecoration: 'none', fontWeight: 700}}><p>READ MORE...</p></Link>
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

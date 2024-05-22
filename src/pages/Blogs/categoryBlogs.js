import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import homes from "../../assets/images/ridge homes.jpeg";
import Header from "../../components/TopHeader";
import "./index.css";

const CategoryBlogs = ({ blogs, categories }) => {
  const { categoryName } = useParams();
  const [filteredBlogs, setFilteredBlogs] = useState([]);

  useEffect(() => {
    if (blogs) {
      const filtered = blogs.filter((blog) => blog.category === categoryName);
      setFilteredBlogs(filtered);
    }
  }, [categoryName, blogs]);

  return (
    <>
      <Header />
      <div
        className="banner-container"
        style={{
          height: "500px",
          width: "100%",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <img
          src={homes} // Replace with the path to your banner image
          alt="Banner"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          position: "relative",
          paddingTop: "15px",
          alignItems: "center",
          paddingBottom: "40px",
          flexDirection: 'column',
        }}
      >
        <h1 className="category-title">{categoryName}</h1>
        <div className="blog-grid">
          {filteredBlogs.map((blog) => (
            <a
              key={blog.blogID}
              href={`/blog/${blog.blogID}`}
              className="blog-card"
            >
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

export default CategoryBlogs;

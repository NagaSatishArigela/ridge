import React, { useEffect, useState } from "react";
import Header from "../../components/TopHeader";
import { Link, useParams } from "react-router-dom";
import "./index.css";
import Contact from "./Contact";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const BlogContent = ({ blogs, categories }) => {
  const { blogID } = useParams();
  const [blog, setBlog] = useState({});
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (blogs) {
      const currentBlog = blogs.find((blog) => blog.id === blogID);
      setBlog(currentBlog);

      if (currentBlog) {
        const related = blogs.filter(
          (b) => b.categories.some((cat) => currentBlog.categories.map((ccat) => ccat.id).includes(cat.id)) && b.id !== blogID
        );
        setRelatedPosts(related);
      }
    }
  }, [blogID, blogs]);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <Header />
      <div className="w-full pb-10 bg-gray-100">
        <div className="container mx-auto">
          <div className="grid-container">
            {/* First Column */}
            <div className="blog-content">
              <img
                className="cover-image"
                src={`${blog?.bannerImage?.url}`}
                alt="Blog Cover"
              />
              <h1 className="font-bold text-2xl my-1 pt-5">{blog?.title}</h1>
              <div
                className="pt-5"
                dangerouslySetInnerHTML={{ __html: blog?.content?.html }}
              >
              </div>
            </div>

            {/* Second Column */}
            <div className="contact-form">
              <Contact />
              <h1>Categories</h1>
              <ul className="categories">
                {categories?.map((category, index) => (
                  <li key={index} className="category-list">
                    <Link
                      to={`/blog/category/${category?.name}`}
                      className="category-link"
                    >
                      {category?.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="related-posts mt-10">
            {relatedPosts.length > 0 && <h2 className="text-xl font-bold mb-5">Related Posts</h2>}
            {relatedPosts.length > 0 &&
              (relatedPosts.length > 3 ? (
                <Carousel responsive={responsive}>
                  {relatedPosts.map((post) => (
                    <Link
                      key={post.id}
                      to={`/blog/${post.id}`}
                      style={{ textDecoration: "none", color: "#000" }}
                    >
                      <div className="related-post-card">
                        {post.bannerImage && (
                          <img
                            src={post.bannerImage.url}
                            alt={post.title}
                            className="related-post-image"
                          />
                        )}
                        <h3 className="related-post-title">{post.title}</h3>
                      </div>
                    </Link>
                  ))}
                </Carousel>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" style={{marginBottom: '50px'}}>
                  {relatedPosts.map((post) => (
                    <Link
                      key={post.id}
                      to={`/blog/${post.id}`}
                      style={{ textDecoration: "none", color: "#000" }}
                    >
                      <div key={post.id} className="related-post-card">
                        {post.bannerImage && (
                          <img
                            src={post.bannerImage.url}
                            alt={post.title}
                            className="related-post-image"
                          />
                        )}
                        <h3 className="related-post-title">{post.title}</h3>
                      </div>
                    </Link>
                  ))}
                </div>
              ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .related-post-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 10px;
          border: 1px solid #e0e0e0;
          border-radius: 5px;
          background-color: white;
          margin: 20px;
        }

        .related-post-image {
          width: 100%;
          height: 150px;
          object-fit: cover;
          border-radius: 5px;
        }

        .related-post-title {
          margin-top: 10px;
          font-size: 1rem;
          text-align: center;
        }
      `}</style>
    </>
  );
};

export default BlogContent;

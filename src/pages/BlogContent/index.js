import React from "react";
import Header from "../../components/TopHeader";
import { useParams } from "react-router-dom";
import './index.css';
import Contact from "./Contact";

const BlogContent = ({ blogs }) => {
  const { id } = useParams();
  console.log(blogs, "test", id, "blogs");
  let blog = {};
  if (blogs) {
    let arr = blogs.filter((blog) => blog.blogId == id);
    console.log(arr, "arr");
    blog = arr[0];
  } else {
    blog = {};  
  }
  console.log(blog, "blog");
  return (
    <>
      <Header />
       <div className="w-full pb-10 bg-gray-100">
            <div className="containerl mx-auto">
                <div className="grid-container">
                    {/* First Column */}
                    <div className="blog-content">
                        <img className="cover-image" src={`${blog?.bannerImage}`} alt="Blog Cover" />
                        <h1 className="font-bold text-2xl my-1 pt-5">{blog?.title}</h1>
                        <div className="pt-5" dangerouslySetInnerHTML={{ __html: blog?.content }}>
                            {/* <ReactMarkdown className="line-break">{blog.attributes.blogContent}</ReactMarkdown> */}
                        </div>
                    </div>

                    {/* Second Column */}
                    <div className="contact-form">
                        <Contact/>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default BlogContent;

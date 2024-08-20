import React, { useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ComingSoon from "./pages/ComingSoon";
import Kshetra from "./pages/Kshetra";
import Tranquil from "./pages/Tranquil";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import SunRise from "./pages/Sunrise";
import SpringCity from "./pages/SpringCity";
import Blog1 from "./pages/Blog1";
import Blog2 from "./pages/Blog2";
import Blog3 from "./pages/Blog3";
import CompletedProjects from "./pages/CompletedProjects";
import OnGoingProjects from "./pages/OngoingProjects";
import AllProjects from "./pages/Projects";
import KshetraLanding from "./pages/KshetraLanding";
import TranquilLanding from "./pages/TranquilLanding";
import SunRiseLanding from "./pages/SunriseLanding";
import { Helmet } from "react-helmet";
import PageNotFound from "./pages/Error/PageNotFound.js";
import SiteMaintenance from "./utils/SiteMaintenance.js";
import Blogs from "./pages/Blogs/index.js";
import BlogContent from "./pages/BlogContent/index.js";
import { blogs1 } from "./utils/constants.js";
import CareersPage from "./pages/Careers/index.js";
import CategoryBlogs from "./pages/Blogs/categoryBlogs.js";
import StickyForm from "./components/StickyForm/index.js";
import { grahcms, QUERY_SLUG_CATEGORIES, QUERY_SLUG_POSTS } from "./utils/Queries.js";
import ISOCertified from "./pages/ISO/index.js";
import TermsAndConditions from "./pages/PrivacyPolicy/index.js";
function App() {
  const [pageState, setPageState] = React.useState(false);
  const [posts, setPosts] = React.useState([]);
  const [categories, setCategories] = React.useState([]);


  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await grahcms.request(QUERY_SLUG_CATEGORIES);
        setCategories(data.categories);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []); // Empty dependency array ensures this runs only once

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await grahcms.request(QUERY_SLUG_POSTS);
        setPosts(data.posts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
      <header style={pageState ? { top: "0px" } : {}}>
        <Header />
      </header>
      <Helmet>
        <title>Ridge Homes - #1 Best Real Estate Company In Hyderabad</title>
        <meta
          name="description"
          content="Ridge Homes: Hyderabad's leading real estate company offering top-notch services & wide range of properties. Trust us to help you find your dream home in the city"
        />
        <meta
          name="keywords"
          content="real estate in hyderabad, hyderabad real estate, real estate companies in hyderabad, real estate hyderabad, top real estate companies in hyderabad, top real estate company in hyderabad, best real estate companies in hyderabad, best real estate company in hyderabad, top 10 real estate companies in hyderabad, real estate company in hyderabad, Top 10 real estate companies in Telangana, Top residential builders in Hyderabad, ridge homes in hyderabad"
        />
      </Helmet>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        {/* <Route path="/careers" element={<SiteMaintenance />} /> */}
        <Route path="/vision" element={<ComingSoon />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/kshetra" element={<Navigate to="/open-plots-in-shankarpally/kshetra" />} />
        <Route path="/projects/kshetra" element={<Navigate to="/open-plots-in-shankarpally/kshetra" />} />
        <Route path="/open-plots-in-shankarpally/kshetra" element={<Kshetra />} />
        <Route path="/plots-in-shankarpally" element={<KshetraLanding />} />
        <Route path="/plots-in-maheshwaram" element={<TranquilLanding />} />
        <Route
          path="/plots-in-sultanpur-hyderabad"
          element={<SunRiseLanding />}
        />
        <Route
          path="/tranquilvalley"
          element={<Navigate to="/open-plots-in-maheshwaram/tranquilvalley" />}
        />
        <Route
          path="/projects/tranquilvalley"
          element={<Navigate to="/open-plots-in-maheshwaram/tranquilvalley" />}
        />
        <Route path="/open-plots-in-maheshwaram/tranquilvalley" element={<Tranquil />} />
        <Route
          path="/sunrisecity"
          element={<Navigate to="/plots-in-sultanpur-hyderabad/sunrisecity" />}
        />
        <Route
          path="/projects/sunrisecity"
          element={<Navigate to="/plots-in-sultanpur-hyderabad/sunrisecity" />}
        />
        <Route path="/plots-in-sultanpur-hyderabad/sunrisecity" element={<SunRise />} />
        <Route
          path="/springcity"
          element={<Navigate to="/projects/springcity" />}
        />
        <Route path="/projects/springcity" element={<SpringCity />} />
        <Route path="/projects" element={<AllProjects />} />
        <Route
          path="/projects/completedProjects"
          element={<CompletedProjects />}
        />
        <Route path="/projects/onGoingProjects" element={<OnGoingProjects />} />
        <Route path="/ongoing-projects" element={<SiteMaintenance />} />
        {/* <Blogs Blogs={blogs1} /> */}
        {/* <Route path="/blogs" element={<SiteMaintenance />}/> */}
        <Route path="/blogs" element={<Blogs Blogs={posts} />} />
        <Route path="/blog/:slug" element={<BlogContent blogs={posts} categories={categories}/>} />
        <Route path="/blog/category/:name" element={<CategoryBlogs posts={posts} categories={categories}/>}/>
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/blog3" element={<Blog3 />} />
        <Route path="/iso-certified" element={<ISOCertified/>} />
        <Route path="/privacy-policy" element={<TermsAndConditions/>}/>
        <Route
          path="*"
          element={<PageNotFound setPageState={setPageState} />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

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

function App() {
  const [pageState, setPageState] = React.useState(false);
  const [blogs, setBlogs] = React.useState([]);
  const [categories, setCategories] = React.useState([]);

  async function getApi(url) {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error:", error);
      return null;
    }
  }

  useEffect(() => {
    getApi("https://blog.ridgehomes.in/api/blogs")
      .then((data) => setBlogs(data))
      .catch((error) => console.error("Error:", error));

    getApi("https://blog.ridgehomes.in/api/categories")
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error:", error));
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
        <Route path="/kshetra" element={<Navigate to="/projects/kshetra" />} />
        <Route path="/projects/kshetra" element={<Kshetra />} />
        <Route path="/plots-in-shankarpally" element={<KshetraLanding />} />
        <Route path="/plots-in-maheshwaram" element={<TranquilLanding />} />
        <Route
          path="/plots-in-sultanpur-hyderabad"
          element={<SunRiseLanding />}
        />
        <Route
          path="/tranquilvalley"
          element={<Navigate to="/projects/tranquilvalley" />}
        />
        <Route path="/projects/tranquilvalley" element={<Tranquil />} />
        <Route
          path="/sunrisecity"
          element={<Navigate to="/projects/sunrisecity" />}
        />
        <Route path="/projects/sunrisecity" element={<SunRise />} />
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
        <Route path="/blogs" element={<Blogs Blogs={blogs} />} />
        <Route path="/blog/:blogID" element={<BlogContent blogs={blogs} categories={categories}/>} />
        <Route path="/blog/category/:categoryName" element={<CategoryBlogs blogs={blogs} categories={categories}/>}/>
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/blog3" element={<Blog3 />} />
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

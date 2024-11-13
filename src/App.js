import React, { useEffect, Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Helmet } from "react-helmet";
import {
  grahcms,
  QUERY_SLUG_CATEGORIES,
  QUERY_SLUG_POSTS,
} from "./utils/Queries.js";

// Lazy load components
const Home = lazy(() => import("./pages/Home"));
const ComingSoon = lazy(() => import("./pages/ComingSoon"));
const Kshetra = lazy(() => import("./pages/Kshetra"));
const Tranquil = lazy(() => import("./pages/Tranquil"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const SunRise = lazy(() => import("./pages/Sunrise"));
const SpringCity = lazy(() => import("./pages/SpringCity"));
const Blog3 = lazy(() => import("./pages/Blog3"));
const CompletedProjects = lazy(() => import("./pages/CompletedProjects"));
const OnGoingProjects = lazy(() => import("./pages/OngoingProjects"));
const AllProjects = lazy(() => import("./pages/Projects"));
const KshetraLanding = lazy(() => import("./pages/KshetraLanding"));
const TranquilLanding = lazy(() => import("./pages/TranquilLanding"));
const SunRiseLanding = lazy(() => import("./pages/SunriseLanding"));
const PageNotFound = lazy(() => import("./pages/Error/PageNotFound.js"));
const SiteMaintenance = lazy(() => import("./utils/SiteMaintenance.js"));
const Blogs = lazy(() => import("./pages/Blogs/index.js"));
const BlogContent = lazy(() => import("./pages/BlogContent/index.js"));
const CareersPage = lazy(() => import("./pages/Careers/index.js"));
const CategoryBlogs = lazy(() => import("./pages/Blogs/categoryBlogs.js"));
const ISOCertified = lazy(() => import("./pages/ISO/index.js"));
const TermsAndConditions = lazy(() => import("./pages/PrivacyPolicy/index.js"));
const blogRedirects = {
  "/blog/discover-your-dream-home-open-plots-for-sale-in-maheshwaram-tranquil-valley": "/blog/open-plots-for-sale-in-maheshwaram",
  "/blog/what-is-hmda-understanding-the-hyderabad-metropolitan-development-authority": "/blog/what-is-hmda",
  "/blog/why-west-facing-plots-are-a-smart-and-beneficial-choice-for-homebuyers": "/blog/why-west-facing-plots-are-a-smart",
  "/blog/sustainable-living-at-ridge-homes-a-pathway-to-a-greener-future": "/blog/sustainable-living-at-ridge-homes",
  "/blog/saving-every-drop-rainwater-harvesting-at-ridgehomes": "/blog/saving-every-drop-rainwater-harvesting",
  "/blog/embracing-nature-and-culture-the-story-of-raavi-trees-at-ridgehomes":	"/blog/embracing-nature-and-culture-the-story-of-raavi-trees",
  "/blog/ridgehomes-goshala-a-sanctuary-of-tradition-and-well-being": "/blog/ridgehomes-goshala-a-sanctuary-of-tradition",
  "/blog/hyderabad-to-host-indias-largest-ai-city-orr-tranquil-valley-maheshwaram": "/blog/hyderabad-to-host-indias-largest-ai-city-orr",
  "/blog/the-road-to-tranqility-a-journey-through-cc-roads-at-tranquil-valley": "/blog/hyderabad-to-host-indias-largest-ai-city-orr",
  "/blog/oneplus-sets-up-factory-in-maheshwaram-amongst-other-projects-in-the-area": "/blog/oneplus-sets-up-factory-in-maheshwaram",
  "/blog/uncovering-the-unique-architecture-of-the-manduva-house-a-traditional-home-in-andhra-pradesh": "/blog/manduva-house-a-traditional-home-in-andhra-pradesh",
  "/blog/do-you-think-investing-on-shankarpally-villa-plots-is-a-good-idea": "/blog/investing-on-shankarpally-villa-plots-is-a-good-idea",
  "/blog/the-rise-of-gated-communities-in-hyderabad-advantages-and-best-location": "/blog/gated-communities-in-hyderabad-advantages",
  "/blog/upcoming-infrastructure-projects-in-hyderabad-and-their-impact-on-real-estate": "/blog/upcoming-infrastructure-projects-in-hyderabad",
  "/blog/where-modernity-embraces-tradition-and-life-moves-at-a-majestic-pace": "/blog/where-modernity-embraces-tradition",
  "/blog/telangana-mobility-valley-the-next-big-thing-tranquil-valley": "/blog/telangana-mobility-valley-the-next-big-thing",
  "/blog/ridgehomes-making-hyderabad-greener-by-translocating-trees": "/blog/hyderabad-greener-by-translocating-trees",
  "/blog/real-estate-interest-sparks-in-maheshwaram-as-malabar-sets-up-facility-worth-rs-750-crore": "/blog/real-estate-interest-sparks-in-maheshwaram"
};

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
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await grahcms.request(QUERY_SLUG_POSTS);
        setPosts(data.posts);
      } catch (error) {
        console.error("Error fetching posts:", error);
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
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/vision" element={<ComingSoon />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route
            path="/kshetra"
            element={<Navigate to="/open-plots-in-shankarpally/kshetra" />}
          />
          <Route
            path="/projects/kshetra"
            element={<Navigate to="/open-plots-in-shankarpally/kshetra" />}
          />
          <Route
            path="/open-plots-in-shankarpally/kshetra"
            element={<Kshetra />}
          />
          <Route path="/plots-in-shankarpally" element={<KshetraLanding />} />
          <Route path="/plots-in-maheshwaram" element={<TranquilLanding />} />
          <Route
            path="/plots-in-sultanpur-hyderabad"
            element={<SunRiseLanding />}
          />
          <Route
            path="/tranquilvalley"
            element={
              <Navigate to="/open-plots-in-maheshwaram/tranquilvalley" />
            }
          />
          <Route
            path="/projects/tranquilvalley"
            element={
              <Navigate to="/open-plots-in-maheshwaram/tranquilvalley" />
            }
          />
          <Route
            path="/open-plots-in-maheshwaram/tranquilvalley"
            element={<Tranquil />}
          />
          <Route
            path="/sunrisecity"
            element={
              <Navigate to="/plots-in-sultanpur-hyderabad/sunrisecity" />
            }
          />
          <Route
            path="/projects/sunrisecity"
            element={
              <Navigate to="/plots-in-sultanpur-hyderabad/sunrisecity" />
            }
          />
          <Route
            path="/plots-in-sultanpur-hyderabad/sunrisecity"
            element={<SunRise />}
          />
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
          <Route
            path="/projects/onGoingProjects"
            element={<OnGoingProjects />}
          />
          <Route path="/ongoing-projects" element={<SiteMaintenance />} />
          <Route path="/blogs" element={<Blogs Blogs={posts} />} />
          <Route
            path="/blog/:slug"
            element={<BlogContent blogs={posts} categories={categories} />}
          />
          {Object.entries(blogRedirects).map(([oldPath, newPath]) => (
            <Route
              key={oldPath}
              path={oldPath}
              element={<Navigate to={newPath} replace />}
            />
          ))}
          <Route
            path="/blog/category/:name"
            element={<CategoryBlogs posts={posts} categories={categories} />}
          />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/blog3" element={<Blog3 />} />
          <Route path="/iso-certified" element={<ISOCertified />} />
          <Route path="/privacy-policy" element={<TermsAndConditions />} />
          <Route
            path="*"
            element={<PageNotFound setPageState={setPageState} />}
          />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;

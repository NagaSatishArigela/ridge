import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Header from './components/Header';
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


function App() {
  const [pageState, setPageState] = React.useState(false);
  return (
    <>
      <header style={pageState ? { top: "0px" } : {}}>
        <Header/>
      </header>
      <Helmet>
        <title>Ridge Homes - #1 Best Real Estate Company In Hyderabad</title>
        <meta name="description" content="Ridge Homes: Hyderabad's leading real estate company offering top-notch services & wide range of properties. Trust us to help you find your dream home in the city" />
        <meta name="keywords" content="real estate in hyderabad, hyderabad real estate, real estate companies in hyderabad, real estate hyderabad, top real estate companies in hyderabad, top real estate company in hyderabad, best real estate companies in hyderabad, best real estate company in hyderabad, top 10 real estate companies in hyderabad, real estate company in hyderabad, Top 10 real estate companies in Telangana, Top residential builders in Hyderabad, ridge homes in hyderabad" />
      </Helmet>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Home />} />
        <Route path="/vision" element={<ComingSoon />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/kshetra" element={<Navigate to="/projects/kshetra" />} />
        <Route path="/projects/kshetra" element={<Kshetra />} />
        <Route path="/plots-in-shankarpally" element={<KshetraLanding />} />
        <Route path="/plots-in-maheshwaram" element={<TranquilLanding />} />
        <Route path="/plots-in-sultanpur-hyderabad" element={<SunRiseLanding />} />
        <Route path="/tranquilvalley" element={<Navigate to="/projects/tranquilvalley" />} />
        <Route path="/projects/tranquilvalley" element={<Tranquil />} />
        <Route path="/sunrisecity" element={<Navigate to="/projects/sunrisecity" />} />
        <Route path="/projects/sunrisecity" element={<SunRise />} />
        <Route path="/springcity" element={<Navigate to="/projects/springcity" />} />
        <Route path="/projects/springcity" element={<SpringCity />} />
        <Route path="/projects" element={<AllProjects />} />
        <Route path="/projects/completedProjects" element={<CompletedProjects />} />
        <Route path="/projects/onGoingProjects" element={<OnGoingProjects />} />
        <Route path="/blog1" element={<Blog1 />} />
        <Route path="/blog2" element={<Blog2 />} />
        <Route path="/blog3" element={<Blog3 />} />
        <Route path="*" element={<PageNotFound setPageState={setPageState}/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

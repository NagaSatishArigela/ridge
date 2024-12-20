import React, { useEffect, useState } from "react";
import "./index.css";
import careerBanner from "../../assets/images/07012020_VE_Real-Estate_-Linkedin-Background_07152020-min.png";
import Header from "../../components/TopHeader";
import JobModal from "../../components/JobModal";
import { QUERY_SLUG_CAREERS, grahcms } from "../../utils/Queries";

const CareersPage = () => {
  const [careersData, setCareersData] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const jobs = [
    {
      title: "Sales Manager",
      location: "Hyderabad",
      image: "https://dummyimage.com/600x400/000/fff&text=image1",
    },
    {
      title: "Marketing Manager",
      location: "Hyderabad",
      image: "https://dummyimage.com/600x400/000/fff&text=image2",
    },
    {
      title: "Telecaller",
      location: "Hyderabad",
      image: "https://dummyimage.com/600x400/000/fff&text=image3",
    },
    {
      title: "CRM Specialist",
      location: "Hyderabad",
      image: "https://dummyimage.com/600x400/000/fff&text=image1",
    },
    {
      title: "Sales Performance Manager",
      location: "Hyderabad",
      image: "https://dummyimage.com/600x400/000/fff&text=image2",
    },
    {
      title: "Sales Associate",
      location: "Hyderabad",
      image: "https://dummyimage.com/600x400/000/fff&text=image3",
    },
  ];

  useEffect(() => {
    const fetchCareers = async () => {
      try {
        const data = await grahcms.request(QUERY_SLUG_CAREERS);
        setCareersData(data.careers);
      } catch (error) {
        console.error('Error fetching careers:', error);
      }
    };

    fetchCareers();
  }, []);

  const openModal = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedJob(null);
    setIsModalOpen(false);
  };

  return (
    <>
      <Header />
      <div className="careers-page">
        <header className="bannerc">
          <div className="banner-overlay">
            {/* <img
              src={careerBanner}
              alt="Career Opportunities"
              className="banner-image"
            /> */}
            <div className="banner-text">
              <h1>Career Opportunities</h1>
              <p>
                Ridgehome offers you a culture that is all about innovation and
                winning. It challenges you and brings out the absolute best out
                of you.
              </p>
            </div>
          </div>
        </header>
        <section className="current-openings">
          <h2 className="section-title">CURRENT OPENINGS</h2>
          <div className="jobs-grid">
            {careersData && careersData?.map((job, index) => (
              <div key={index} className="job-card">
                <img src={job.image.url} alt={job.title} className="job-image" loading="lazy"/>
                <div className="job-content">
                  <h3 className="job-title">{job.title}</h3>
                  <p className="job-details">Job Title: {job.title}</p>
                  <p className="job-details">Location: {job.location}</p>
                  <button className="know-more-button" onClick={() => openModal(job)}>Know More</button>
                </div>
              </div>
            ))}
          </div>
        </section>
        <JobModal job={selectedJob} isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </>
  );
};

export default CareersPage;

import React, { useEffect, useState } from "react";
import "./index.css";
import careerBanner from "../../assets/images/07012020_VE_Real-Estate_-Linkedin-Background_07152020-min.png";
import Header from "../../components/TopHeader";
import JobModal from "../../components/JobModal";

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
    getApi("http://localhost:5003/api/careers")
      .then((data) => setCareersData(data))
      .catch((error) => console.error("Error:", error));
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
            <img
              src={careerBanner}
              alt="Career Opportunities"
              className="banner-image"
            />
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
            {careersData.map((job, index) => (
              <div key={index} className="job-card">
                <img src={job.cardImage} alt={job.jobTitle} className="job-image" />
                <div className="job-content">
                  <h3 className="job-title">{job.jobTitle}</h3>
                  <p className="job-details">Job Title: {job.jobTitle}</p>
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

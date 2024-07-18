import React, { useState } from "react";
import "./index.css";
import Sidebar from "./Sidebar";

const JobModal = ({ job, isOpen, onClose }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  if (!isOpen || !job) return null;

  const openSidebar = () => setSidebarOpen(true);

  return (
    <div className="modal-overlay">
      <div className="modal-contents">
        <span className="close-icon" onClick={onClose}>
          &times;
        </span>
        <h2>{job.jobTitle}</h2>
        <p>
          <strong>Location:</strong> {job.location}
        </p>
        <div
          className="pt-5 text-justify"
          dangerouslySetInnerHTML={{ __html: job?.jobDescription.html }}
        ></div>
        {/* <button onClick={openSidebar}>Submit you Resume</button> */}
        {/* <img src={job.image} alt={job.title} className="modal-image" /> */}
        {/* {sidebarOpen && <Sidebar
          isOpen={sidebarOpen}
          onClose={onClose}
          setSidebarOpen={setSidebarOpen}
        />} */}
      </div>
    </div>
  );
};

export default JobModal;

import React, { useState } from "react";
import "./index.css";

const JobModal = ({ job, isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [resume, setResume] = useState(null);
  if (!isOpen || !job) return null;

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("resume", resume);
    onClose(); // Close the modal after form submission
  };

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
                className="pt-5"
                dangerouslySetInnerHTML={{ __html: job?.jobDescription }}
              >
              </div>
        {/* <img src={job.image} alt={job.title} className="modal-image" /> */}
        <form className="resume-form" onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="resume">Upload your resume:</label>
            <input
              type="file"
              id="resume"
              name="resume"
              onChange={(e) => setResume(e.target.files[0])}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default JobModal;

import { useState } from "react";
import './index.css';

function Sidebar({ isOpen, onClose, setSidebarOpen }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [resume, setResume] = useState(null);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("resume", resume);
    onClose(); // Close the modal after form submission
    setSidebarOpen(false);
  };
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
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
  );
}

export default Sidebar;

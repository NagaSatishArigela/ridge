import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./index.css";
import call from '../../assets/images/call-receive-svgrepo-com.svg';
import info from '../../assets/images/info-square-svgrepo-com.svg';
import UnlockModal from "../unlockModal";

const StickyForm = () => {
  const location = useLocation(); // assuming your route will have :page as a param
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [showForm, setShowForm] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const getPageName = (path) => {
    const pathSegments = path.split("/").filter(Boolean);
    return pathSegments.length > 0 && (pathSegments[0] === 'blog')
      ? pathSegments[0]
      : pathSegments[pathSegments.length - 1];
  };

  const openModal = () => {
    setShowForm(true);
  };

  const closeModal = () => {
    setShowForm(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const pageName = getPageName(location.pathname);
    console.log(pageName, 'testing pageName')
    const payload = {
      ...formData,
      page: pageName,
    };
    console.log(payload, "checking payload of stickyform");
    // Replace the URL with your backend endpoint
    // const response = await fetch('https://your-backend-endpoint.com/submit', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(payload),
    // });

    // if (response.ok) {
    //   console.log('Form submitted successfully');
    //   // Handle success (e.g., show a message, clear the form, etc.)
    // } else {
    //   console.error('Failed to submit form');
    //   // Handle error (e.g., show an error message)
    // }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="sticky-form">
        <div className="sticky-container">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            style={{ marginRight: "10px" }}
          />
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
            style={{ marginRight: "10px" }}
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            style={{ marginRight: "10px" }}
          />
          <button
            type="submit"
            style={{
              backgroundColor: "#FFA500",
              color: "white",
              border: "none",
              padding: "5px 10px",
            }}
          >
            SEND
          </button>
        </div>
      </form>
      <div className="sticky-icons">
        <a href="tel:917775857777">
          <img src={call} alt="Call" />
        </a>
        <div onClick={openModal}>
          <img src={info} alt="Info" />
        </div>
        {/* <a href="https://wa.me/1234567890">
          <img src={whatsappIcon} alt="WhatsApp" />
        </a> */}
      </div>
      {showForm && (
          <UnlockModal
            isOpen={showForm}
            onClose={closeModal}
            page={getPageName(location.pathname)}
            srd="66470be4735dafb67e848e32"
          />
        )}
    </>
  );
};

export default StickyForm;

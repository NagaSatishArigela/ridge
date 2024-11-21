import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useLocation } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const location = useLocation();
  const [send, setSend] = useState(false);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  const getPageName = (path) => {
    const pathSegments = path.split("/").filter(Boolean);
    return pathSegments.length > 0 && pathSegments[0] === "blog"
      ? pathSegments[0]
      : pathSegments[pathSegments.length - 1];
  };
  const sendEmail = (e) => {
    e.preventDefault();
    let templateId = "template_rolhn2e";
    emailjs
      .sendForm(
        "service_pn8vf29",
        templateId,
        form.current,
        "RIdumvJqbANv7cRbb"
      )
      .then(
        (result) => {
          console.log(result.text);
          if (result) {
            setSend(true);
            setTimeout(() => {
              setSend(false);
            }, 2000);
            form.current.reset();
          }
        },
        (error) => {
          alert(error.text);
        }
      );
  };

  const contact = {
    display: "flex",
    position: "relative",
    flexDirection: "column",
    backgroundColor: "#F5F5F5",
    margin: "auto",
    padding: "10px",
    justifyContent: "center",
  };
  return (
    <div style={contact}>
      <h3
        style={{
          fontSize: "24px",
          fontFamily: "sans-serif",
          fontWeight: "700px",
          textAlign: "center",
        }}
      >
        Make An Enquiry
      </h3>
      {send && (
        <div className="toast">
          <FaCheckCircle /> Information Sent
        </div>
      )}
      <form
        ref={form}
        onSubmit={sendEmail}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          justifyContent: "center",
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Enter Your Name"
          required
          style={{
            borderRadius: "5px",
            borderColor: "#000",
            borderStyle: "solid",
            padding: "12px 10px",
            color: "#000",
            backgroundColor: "#fff",
            fontFamily: "sans-serif",
            fontSize: "15px",
          }}
        />
        <input
          type="email"
          name="email"
          placeholder="Enter Your Email ID"
          required
          style={{
            borderRadius: "5px",
            borderColor: "#000",
            borderStyle: "solid",
            fontSize: "15px",
            padding: "12px 10px",
            color: "#000",
            backgroundColor: "#fff",
            fontFamily: "sans-serif",
          }}
        />
        <input
          type="text"
          name="phone"
          placeholder="Enter Your Contact Number"
          required
          style={{
            borderRadius: "5px",
            borderColor: "#000",
            borderStyle: "solid",
            fontSize: "15px",
            padding: "12px 10px",
            color: "#000",
            backgroundColor: "#fff",
            fontFamily: "sans-serif",
          }}
        />
        <input
          type="pageName"
          name="pageName"
          value={
            getPageName(location.pathname)
              ? getPageName(location.pathname)
              : "Home"
          }
          placeholder="pageName"
          className="hide"
          style={{display: "none"}}
        />
        {/* <button className='btn'>Send Message</button> */}
        <div style={{ display: "flex", alignItems: "start" }}>
          <input
            type="checkbox"
            id="consent"
            checked={isCheckboxChecked}
            onChange={(e) => setIsCheckboxChecked(e.target.checked)}
            style={{ width: "30%", margin: "2px 2px"  }}
          />
          <label
            htmlFor="consent"
            style={{ fontFamily: "sans-serif", fontSize: "11px", textAlign: 'start' }}
          >
            I authorise Ridge Homes & its representatives to contact me with
            updates and notifications via Email/SMS/WhatsApp/Call. This will
            override DND/NDNC
          </label>
        </div>
        <input
          className="btn"
          type="submit"
          value="Enquire"
          disabled={!isCheckboxChecked}
          style={{
            backgroundColor: isCheckboxChecked ? "#DD9C3C" : "#d3d3d3",
            fontFamily: "sans-serif",
            fontWeight: "700px",
            padding: "20px",
            fontSize: "18px",
            borderRadius: "3px",
            color: "#fff",
            cursor: isCheckboxChecked ? "pointer" : "not-allowed",
          }}
        />
      </form>
    </div>
  );
};

export default Contact;

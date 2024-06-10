import React, { useState } from "react";
import "./index.css";

const TeamMemberCard = ({ member }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleDescription = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="teamMember">
      <img src={member.image} alt={member.name} className="teamImage" />
      <div className="teamDetails">
        <h3
          style={{
            fontFamily: "sans-serif",
            fontSize: "35px",
            fontWeight: "600",
            margin: "25px 0px",
          }}
        >
          {member.name}
        </h3>
        <h4>{member.title}</h4>
        <div className={`description ${expanded ? "expanded" : ""}`}>
          <p style={{ textAlign: "justify" }}>{member.description}</p>
        </div>
        <button
          onClick={toggleDescription}
          style={{
            color: "#DD9C37",
            border: "none",
            fontSize: "20px",
            padding: "10px",
          }}
        >
          {expanded ? "...Read Less" : "...Read More"}
        </button>
        <div className="socialLinks">
          <a href={member.facebook}>
            <i className="fa fa-facebook"></i>
          </a>
          <a href={member.linkedin}>
            <i className="fa fa-linkedin"></i>
          </a>
          <a href={member.twitter}>
            <i className="fa-brands fa-x-twitter"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;

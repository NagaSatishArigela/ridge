import React from "react";
import "../Styles/styles.css";

function HighlightText(props) {
  const { data, highlightImage, altText } = props;
  return (
    <>
      <div className="container-m">
        <div className="highlight-text">
          <div className="highlight-left-text">
            <h3>Location Highlights</h3>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              {data.map((item, index) => (
                <li
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  {altText === 'tranquil2' && <img
                    src={item.url}
                    alt={item.text}
                    style={{ marginRight: "10px" }}
                  />}
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="highlight-right-image">
            <img src={highlightImage} alt={altText} loading="lazy" />
          </div>
        </div>
      </div>
    </>
  );
}

export default HighlightText;

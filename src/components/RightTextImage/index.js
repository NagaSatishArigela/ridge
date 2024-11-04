import React from "react";
import "../Styles/styles.css";

function RightTextImage(props) {
  const { data, handleReadMore, index } = props;
  return (
    <>
      <div className="container-m">
        <div className="imageText">
          {data?.align === "left" && (
            <div className="right-image">
              <img src={data?.image} alt={data?.altText} loading="lazy" />
            </div>
          )}
          <div className="left-text">
            {data?.heading.map((item) => (
              <h3>{item?.text}</h3>
            ))}
            {data?.lists && (
              <ul>
                {data?.lists.map((item) => (
                  <li>{item?.list}</li>
                ))}
              </ul>
            )}
            {data?.description.map((item) => (
              <p>{item?.text}</p>
            ))}
          </div>
          {data?.align === "right" && (
            <div className="right-image">
              <img src={data?.image} alt={data?.altText} loading="lazy" />
            </div>
          )}
          {/* <span onClick={() => handleReadMore(index)}>Read More</span> */}
        </div>
      </div>
    </>
  );
}

export default RightTextImage;

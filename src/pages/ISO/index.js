import React from "react";
import isoImage from "../../assets/images/isoImage.png";
import Header from "../../components/TopHeader";

const ISOCertified = () => {
  return (
    <><Header />
    <div style={{ textAlign: "center" }}>
      <img
        src={isoImage}
        alt="ISO Certified"
        style={{ width: "100%", height: "auto", top:'50px', position: 'relative', padding: '50px' }}
        loading="lazy"
      />
    </div>
    </>
  );
};

export default ISOCertified;

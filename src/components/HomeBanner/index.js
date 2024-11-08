import React from "react";
import HomeContactForm from "../ContactForm";
import "../Styles/styles.css";

function HomeBanner(props) {
  const { bannerImage, landing, altText } = props;

  const bannerImageSmall = `${bannerImage}?w=480`;
  const bannerImageMedium = `${bannerImage}?w=768`;
  const bannerImageLarge = `${bannerImage}?w=1200`;

  return (
    <section className="banner">
      <img
        src={bannerImageLarge}
        srcSet={`
          ${bannerImageSmall} 480w,
          ${bannerImageMedium} 768w,
          ${bannerImageLarge} 1200w
        `}
        sizes="(max-width: 600px) 480px, (max-width: 1024px) 768px, 1200px"
        alt={altText}
        loading="lazy"
      />
      {landing && (
        <div className="landing-ads">
          <HomeContactForm srd="664456705d8deffd47ff9b89" />
        </div>
      )}
    </section>
  );
}

export default HomeBanner;

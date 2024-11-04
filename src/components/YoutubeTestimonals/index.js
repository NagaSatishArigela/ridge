import React from 'react';

const YoutubeTestimonial = ({ videoId }) => {

  return (
    <div className="testimonial-container">
    
      <iframe
          width="270px"
          height="320px"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="YouTube Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading='lazy'
        ></iframe>
    </div>
  );
};

export default YoutubeTestimonial;

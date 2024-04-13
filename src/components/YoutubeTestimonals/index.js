import React from 'react';
import YouTube from 'react-youtube';

const YoutubeTestimonial = ({ videoId }) => {
  const opts = {
    height: "240",
    width: "440",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className="testimonial-container">
      <YouTube videoId={videoId} opts={opts} />
    </div>
  );
};

export default YoutubeTestimonial;

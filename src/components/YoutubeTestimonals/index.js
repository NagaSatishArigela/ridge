import React from 'react';
import ReactPlayer from 'react-player/lazy';

const YoutubeTestimonial = ({ videoId }) => {
  return (
    <div className="testimonial-container">
      <ReactPlayer url={`https://www.youtube.com/watch?v=${videoId}`} width="270px" height="320px"/>
    </div>
  );
};

export default YoutubeTestimonial;

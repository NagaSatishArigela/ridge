import React, { useState } from 'react';
import ReactPlayer from 'react-player/lazy';

const YoutubeTestimonial = ({ videoId }) => {
  const [showVideo, setShowVideo] = useState(false);

  const handlePlayButtonClick = () => {
    setShowVideo(true);
  };
  return (
    <div className="testimonial-container">
    
      <iframe
          width="270px"
          height="320px"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="YouTube Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
    </div>
  );
};

export default YoutubeTestimonial;

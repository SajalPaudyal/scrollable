import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import dashboard from './assets/dashboard.png';
import ipad from './assets/ipad.png';

const StickyImage: React.FC = () => {
  const imageRef = useRef<HTMLDivElement>(null);

  const handleScroll = (event: React.WheelEvent<HTMLDivElement>) => {
    const image = imageRef.current;
    const { deltaY } = event;

    if (image) {
      // Scroll the image vertically
      image.scrollTop += deltaY;
    }
  };

  return (
    <div className="sticky-container">
      <motion.div
        className="image-wrapper"
        ref={imageRef}
        onWheel={handleScroll}
      >
        {/* Replace 'image-url.jpg' with the path to your large image */}
        <img src={dashboard} alt="Large Image" />
      </motion.div>
    </div>
  );
};

export default StickyImage;

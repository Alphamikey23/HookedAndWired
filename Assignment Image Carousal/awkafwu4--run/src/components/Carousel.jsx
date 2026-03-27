import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData.jsx";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Carousel = () => {
  // TODO 1: Initialize state to track the current image index
  // Hint: use useState and start from index 0
  const [currentIndex, setCurrentIndex] = useState(0);

  // TODO 2: Create a function to move to the previous image
  // Rules:
  // - If current index is 0, go to the last image
  // - Otherwise, decrease the index by 1
  const handlePrev = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  // TODO 3: Create a function to move to the next image
  // Rules:
  // - If current index is the last image, go back to index 0
  // - Otherwise, increase the index by 1
  const handleNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="carousel-container">
      {/* TODO 4: Attach handlePrev to the left arrow button */}
      <button className="arrow left" onClick={handlePrev}>
        <ArrowBackIosIcon />
      </button>

      <div className="carousel-content">
        {/* TODO 5: Render the image using currentIndex */}
        {/* Hint: images[currentIndex].img */}
        <img className="carousel-image" src={images[currentIndex].img} />

        {/* TODO 6: Display the title of the current image */}
        <h2>{images[currentIndex].title}</h2>

        {/* TODO 7: Display the subtitle of the current image */}
        <p>{images[currentIndex].subtitle}</p>
      </div>

      {/* TODO 8: Attach handleNext to the right arrow button */}
      <button className="arrow right" onClick={handleNext}>
        <ArrowForwardIosIcon />
      </button>
    </div>
  );
};

export default Carousel;

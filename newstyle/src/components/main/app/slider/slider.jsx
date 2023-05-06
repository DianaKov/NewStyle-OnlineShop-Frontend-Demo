import React, { useEffect, useState } from "react";
import imageSrc1 from './img/Frame 5.png';
import imageSrc2 from './img/Frame 6.png';
import imageSrc3 from './img/Frame 71.png';

import './slider.css'

const Slider = () => {
  const slides = [
    { id: 1, imageSrc: imageSrc1 },
    { id: 2, imageSrc: imageSrc2 },
    { id: 3, imageSrc: imageSrc3 }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [ballsStop, setBallsStop] = useState(false);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);

    return () => {
      clearInterval(slideInterval);
    };
  }, [slides.length]);

  useEffect(() => {
    const ballInterval = setInterval(() => {
      setBallsStop((prevBallsStop) => !prevBallsStop);
    }, 2000);

    return () => {
      clearInterval(ballInterval);
    };
  }, []);

  const balls = [];
  for (let i = 1; i <= 20; i++) {
    balls.push(`ball-${i}`);
  }

  return (
    <div className="slider">
      {slides.map((slide) => (
        <div
          key={slide.id}
          className={`slide slide-${slide.id} ${
            currentSlide === slide.id - 1 ? "active" : ""
          }`}
        >
          {slide.id === 1 && (
            <div className="logo">
              <div className="circle-left"></div>
              <div className="circle-right"></div>
              <div className="text">
                <span className="letter n">N</span>
                <span className="letter e">e</span>
                <span className="letter w">w&nbsp;</span>
                <span className="letter s">S</span>
                <span className="letter t">t</span>
                <span className="letter y">y</span>
                <span className="letter l">l</span>
                <span className="letter e">e</span>
              </div>
              
              {balls.map((ball, index) => (
                <div
                  key={ball}
                  className={`ball ${ball} ${ballsStop ? "stop" : ""}`}
                />
              ))}
            </div>
          )}
          {slide.id !== 1 && (
            <img
              src={slide.imageSrc}
              alt={`Slide ${slide.id}`}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Slider;
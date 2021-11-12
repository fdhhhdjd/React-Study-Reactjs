import React, { useEffect } from "react";
import "./Sliders.css";
import BtnSlider from "./BtnSlider";
import dataSlider from "./dataSlider.js";
import { useState } from "react";

const Sliders = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  const length = dataSlider.length;
  const nextSlide = () => {
    if (slideIndex !== length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === length) {
      setSlideIndex(1);
    }
  };
  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(length);
    }
  };
  const moveDot = (index) => {
    setSlideIndex(index);
  };
  useEffect(() => {
    const slider = setInterval(() => {
      setSlideIndex(slideIndex === 1 ? length - 1 : slideIndex - 1);
    }, 2000);

    return () => {
      clearInterval(slider);
    };
  }, [slideIndex, length]);
  return (
    <>
      <div className="container-slider">
        {dataSlider.map((obj, index) => {
          return (
            <div
              key={obj.id}
              className={
                slideIndex === index + 1 ? "slide active-anim" : "slide"
              }
            >
              <img src={`/Img/img${index + 1}.jpg`} className="hinh" />
            </div>
          );
        })}
        <BtnSlider moveSlide={nextSlide} direction={"next"} />
        <BtnSlider moveSlide={prevSlide} direction={"prev"} />
        <div className="container-dots">
          {Array.from({ length: 5 }).map((item, index) => (
            <div
              onClick={() => moveDot(index + 1)}
              className={slideIndex === index + 1 ? "dot active" : "dot"}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sliders;

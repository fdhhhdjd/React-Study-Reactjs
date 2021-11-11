import React from "react";
import "./Sliders.css";
import BtnSlider from "./BtnSlider";
import dataSlider from "./dataSlider.js";
import { useState } from "react";
const Sliders = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  const nextSlide = () => {};
  const prevSlide = () => {};
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
              <img src={`/Img/img${index + 1}.jpg`} />
            </div>
          );
        })}
        <BtnSlider moveSlide={nextSlide} direction={"next"} />
        <BtnSlider moveSlide={prevSlide} direction={"prev"} />
      </div>
    </>
  );
};

export default Sliders;

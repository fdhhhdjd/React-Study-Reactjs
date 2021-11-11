import React from "react";
import "./Sliders.css";
import BtnSlider from "./BtnSlider";
import dataSlider from "./dataSlider.js";
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
              <img src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.jpg`} />
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

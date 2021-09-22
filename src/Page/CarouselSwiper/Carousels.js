import React from "react";
//! --> npm i add react-responsive-carousel
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { imageData } from "../../utils/ImageData";
const Carousels = () => {
  return (
    <>
      <div className="container">
        <div className="col-md-4">
          {imageData && imageData.length && (
            <Carousel showArrows={true} autoPlay infiniteLoop>
              {imageData &&
                imageData.map((item, i) => (
                  <img
                    src={item.path}
                    alt={item.title}
                    style={{ width: "50%" }}
                  />
                ))}
            </Carousel>
          )}
        </div>
      </div>
    </>
  );
};

export default Carousels;

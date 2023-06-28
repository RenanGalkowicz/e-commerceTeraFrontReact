import React from "react";
import Carousel from "react-bootstrap/Carousel";
import carousel1 from "../../images/placeholders/carousel1.png";
import carousel2 from "../../images/placeholders/carousel2.png";
import carousel3 from "../../images/placeholders/carousel3.png";

export default function AppCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={carousel1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={carousel2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={carousel3} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

import React from "react";
import Slider from "react-slick";
import "./Slide.css";
import img1 from "./imgSlider/1.png";
import img2 from "./imgSlider/2.jpg";
import img3 from "./imgSlider/3.jpg";
import img4 from "./imgSlider/4.jpg";
import img5 from "./imgSlider/5.jpg";
import img6 from "./imgSlider/6.jpg";

const settings = {
  dots: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  draggable: true,
  infinite: false,
  focusOnSelect: true,
  easing: "linear",
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  swipeToSlide: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
        dots: true
      }
    },

    {
      breakpoint: 950,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2,
        dots: true
      }
    },
  ]
};

function Slide() {
  return (
    <div className="slide-container">
      <Slider {...settings}>
        <div className="size">
          <img src={img1} alt="img" />
        </div>
        <div>
          <img src={img2} alt="img" />
        </div>
        <div>
          <img src={img3} alt="img" />
        </div>
        <div>
          <img src={img4} alt="img" />
        </div>
        <div>
          <img src={img5} alt="img" />
        </div>
        <div>
          <img src={img6} alt="img" />
        </div>
      </Slider>
    </div>
  );
}

export default Slide;

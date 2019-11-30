import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./eventNSS.css";
import Image1 from "../Image Grid/images/img1.jpeg";
import Image2 from "../Image Grid/images/img2.jpeg";
import Image3 from "../Image Grid/images/img3.jpeg";
import Image6 from "../Image Grid/images/img6.jpeg";
import Image7 from "../Image Grid/images/img7.jpeg";
import Image8 from "../Image Grid/images/img8.jpeg";

class Carousel extends React.Component {
  render() {
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    return (
      <div className="container">
        <Slider {...settings}>
          <div className="leftContainer">
            <div className="leftImg">
              <img src={Image1} alt="" className="image" />
            </div>
            <div className="leftContent">
              <label htmlFor="" className="leftPara">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </label>
            </div>
            <div className="leftHeading">
              <label htmlFor="" className="leftHeader">
                {" "}
                Social
                <span style={{ fontWeight: "bold" }}> Summit </span>
              </label>
            </div>
          </div>

          <div className="rightContainer">
            <div className="rightImg">
              <img src={Image2} alt="" className="image" />
            </div>
            <div className="rightContent">
              <label htmlFor="" className="rightPara">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </label>
            </div>
            <div className="rightHeading">
              <label htmlFor="" className="rightHeader">
                {" "}
                Social
                <span style={{ fontWeight: "bold" }}> Summit </span>
              </label>
            </div>
          </div>

          <div className="leftContainer">
            <div className="leftImg">
              <img src={Image3} alt="" className="image" />
            </div>
            <div className="leftContent">
              <label htmlFor="" className="leftPara">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </label>
            </div>
            <div className="leftHeading">
              <label htmlFor="" className="leftHeader">
                {" "}
                Social
                <span style={{ fontWeight: "bold" }}> Summit </span>
              </label>
            </div>
          </div>

          <div className="rightContainer">
            <div className="rightImg">
              <img src={Image6} alt="" className="image" />
            </div>
            <div className="rightContent">
              <label htmlFor="" className="rightPara">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </label>
            </div>
            <div className="rightHeading">
              <label htmlFor="" className="rightHeader">
                {" "}
                Social
                <span style={{ fontWeight: "bold" }}> Summit </span>
              </label>
            </div>
          </div>

          <div className="leftContainer">
            <div className="leftImg">
              <img src={Image7} alt="" className="image" />
            </div>
            <div className="leftContent">
              <label htmlFor="" className="leftPara">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </label>
            </div>
            <div className="leftHeading">
              <label htmlFor="" className="leftHeader">
                {" "}
                Social
                <span style={{ fontWeight: "bold" }}> Summit </span>
              </label>
            </div>
          </div>

          <div className="rightContainer">
            <div className="rightImg">
              <img src={Image8} alt="" className="image" />
            </div>
            <div className="rightContent">
              <label htmlFor="" className="rightPara">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </label>
            </div>
            <div className="rightHeading">
              <label htmlFor="" className="rightHeader">
                {" "}
                Social
                <span style={{ fontWeight: "bold" }}> Summit </span>
              </label>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}

export default Carousel;

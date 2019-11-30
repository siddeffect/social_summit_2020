import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./eventNSS.css";
import Image1 from "../ImageGrid/images/img1.jpeg";
import Image2 from "../ImageGrid/images/img2.jpeg";
import Image3 from "../ImageGrid/images/img3.jpeg";
import Image6 from "../ImageGrid/images/img6.jpeg";
import Image7 from "../ImageGrid/images/img7.jpeg";
import Image8 from "../ImageGrid/images/img8.jpeg";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style }} onClick={onClick} />;
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style }} onClick={onClick} />;
}

class Carousel extends React.Component {
  state = {
    width: window.innerWidth
  };

  render() {
    let lapSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      prevArrow: <SamplePrevArrow />,
      nextArrow: <SampleNextArrow />
    };

    let phSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true
    };

    return (
      <div className="container">
        {this.state.width > 1024 ? (
          <Slider {...lapSettings}>
            <div className="leftContainer">
              <div className="leftImg">
                <img src={Image1} alt="" className="image" />
              </div>
              <div className="leftContent">
                <label htmlFor="" className="leftPara">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
        ) : null}

        {/* for moblie */}
        {this.state.width < 1024 ? (
          <Slider {...phSettings}>
            <div className="leftContainer">
              <div className="leftImg">
                <img src={Image1} alt="" className="image" />
              </div>
              <div className="leftContent">
                <label htmlFor="" className="leftPara">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
        ) : null}
      </div>
    );
  }
}

export default Carousel;

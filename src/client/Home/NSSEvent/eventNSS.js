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

function Carousel() {
  const Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          fade: true,
          autoplay: false
        }
      }
    ]
  };
  return (
    <div className="outerContainer">
      <Slider {...Settings}>
        <div className="leftContainer">
          <div className="leftImg">
            <img src={Image1} alt="" className="image" />
          </div>
          <div className="leftContent">
            <label htmlFor="" className="leftPara">
              Under this initiative, in collaboration with Nagar Nigam, a survey
              was conducted regarding waste segregation and Swachhta App in
              nearby market place. Also, a cleanliness drive was conducted near
              Ganga ghats, Haridwar. Stage plays regarding the same were
              organized.
            </label>
          </div>
          <div className="leftHeading">
            <label htmlFor="" className="leftHeader">
              {" "}
              <span style={{ fontWeight: "bold" }}> Udbhav</span>
            </label>
          </div>
        </div>

        <div className="rightContainer">
          <div className="rightImg">
            <img src={Image2} alt="" className="image" />
          </div>
          <div className="rightContent">
            <label htmlFor="" className="rightPara">
              Blood Donation Camp, organised each semester, proved to be a great
              experience for students donating blood for the first time, with a
              record-breaking success of 1013 people coming forward for the
              noble cause.
            </label>
          </div>
          <div className="rightHeading">
            <label htmlFor="" className="rightHeader">
              {" "}
              <span style={{ fontWeight: "bold" }}> Blood Donation Camp </span>
            </label>
          </div>
        </div>

        <div className="leftContainer">
          <div className="leftImg">
            <img src={Image3} alt="" className="image" />
          </div>
          <div className="leftContent">
            <label htmlFor="" className="leftPara">
              With a vision of upliftment of the society, NSS IIT Roorkee aims
              at organizing collection and distribution drives. We organised
              cloth-distribution camp on Janmashtami, followed by food drive on
              Diwali, which offered food to about 400 people in the nearby slum
              areas.
            </label>
          </div>
          <div className="leftHeading">
            <label htmlFor="" className="leftHeader">
              {" "}
              <span style={{ fontWeight: "bold" }}> AASRA</span>
            </label>
          </div>
        </div>

        <div className="rightContainer">
          <div className="rightImg">
            <img src={Image6} alt="" className="image" />
          </div>
          <div className="rightContent">
            <label htmlFor="" className="rightPara">
              Our volunteers teach around 100 students, from nearby
              underprivileged areas, on a daily basis. By assigning a personal
              teacher to the students, attending them on an individual basis,
              the initiative has received positive feedback from students so
              far.
            </label>
          </div>
          <div className="rightHeading">
            <label htmlFor="" className="rightHeader">
              <span style={{ fontWeight: "bold" }}> Free Education </span>
            </label>
          </div>
        </div>

        <div className="leftContainer">
          <div className="leftImg">
            <img src={Image7} alt="" className="image" />
          </div>
          <div className="leftContent">
            <label htmlFor="" className="leftPara">
              Under this initiative, in collaboration with Nagar Nigam, a survey
              was conducted regarding waste segregation and Swachhta App in
              nearby market place. Also, a cleanliness drive was conducted near
              Ganga ghats, Haridwar. Stage plays regarding the same were
              organized.
            </label>
          </div>
          <div className="leftHeading">
            <label htmlFor="" className="leftHeader">
              {" "}
              <span style={{ fontWeight: "bold" }}> Swacchta Hi Sewa</span>
            </label>
          </div>
        </div>

        <div className="rightContainer">
          <div className="rightImg">
            <img src={Image8} alt="" className="image" />
          </div>
          <div className="rightContent">
            <label htmlFor="" className="rightPara">
              Celebrating the spirit and the joy of serving humanity, we proudly
              celebrated NSS day on 24th September, along with 100 volunteers,
              on the theme “Best out of waste”. We used plastic bottles to plant
              the saplings, reducing the plastic waste on our campus.
            </label>
          </div>
          <div className="rightHeading">
            <label htmlFor="" className="rightHeader">
              {" "}
              <span style={{ fontWeight: "bold" }}> Plantation Drives </span>
            </label>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;

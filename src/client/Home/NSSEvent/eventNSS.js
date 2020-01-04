import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./eventNSS.css";
import Fade from "react-reveal/Fade";

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
      <Fade bottom>
        <Slider {...Settings}>
          <div className="leftContainer">
            <div className="leftImg">
              <img
                src="/Images/nss_events/udbhav-min.jpg"
                alt=""
                className="image"
              />
            </div>
            <div className="leftContent">
              <label htmlFor="" className="leftPara">
                Emphasizing on the holistic educational development of rural
                underprivileged children of Roorkee, NSS IIT Roorkee strives to
                provide quality education in a more interactive way along with
                extracurricular activities.
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
              <img
                src="/Images/nss_events/bdc-min.jpg"
                alt=""
                className="image"
              />
            </div>
            <div className="rightContent">
              <label htmlFor="" className="rightPara">
                Blood Donation Camp, organised each semester, proved to be a
                great experience for students donating blood for the first time,
                with a record-breaking success of 1013 people coming forward for
                the noble cause.
              </label>
            </div>
            <div className="rightHeading">
              <label htmlFor="" className="rightHeader">
                {" "}
                <span style={{ fontWeight: "bold" }}>
                  {" "}
                  Blood Donation Camp{" "}
                </span>
              </label>
            </div>
          </div>
          <div className="leftContainer">
            <div className="leftImg">
              <img
                src="/Images/nss_events/aasra-min.jpg"
                alt=""
                className="image"
              />
            </div>
            <div className="leftContent">
              <label htmlFor="" className="leftPara">
                With a vision of upliftment of the society, NSS IIT Roorkee aims
                at organizing collection and distribution drives. We organised
                cloth-distribution camp on Janmashtami, followed by food drive
                on Diwali, which offered food to about 400 people in the nearby
                slum areas.
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
              <img
                src="/Images/nss_events/free_edu-min.jpg"
                alt=""
                className="image"
              />
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
              <img
                src="/Images/nss_events/swacchta-min.jpg"
                alt=""
                className="image"
              />
            </div>
            <div className="leftContent">
              <label htmlFor="" className="leftPara">
                Under this initiative, in collaboration with Nagar Nigam, a
                survey was conducted regarding waste segregation and Swachhta
                App in nearby market place. Also, a cleanliness drive was
                conducted near Ganga ghats, Haridwar. Stage plays regarding the
                same were organized.
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
              <img
                src="/Images/nss_events/plantation_drive-min.jpg"
                alt=""
                className="image"
              />
            </div>
            <div className="rightContent">
              <label htmlFor="" className="rightPara">
                Celebrating the spirit and the joy of serving humanity, we
                proudly celebrated NSS day on 24th September, along with 100
                volunteers, on the theme “Best out of waste”. We used plastic
                bottles to plant the saplings, reducing the plastic waste on our
                campus.
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
      </Fade>
    </div>
  );
}

export default Carousel;

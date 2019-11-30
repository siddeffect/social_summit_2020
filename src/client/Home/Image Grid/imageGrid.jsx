import React, { Component } from "react";
import Styles from "./css/imageGrid.module.css";

class Carousel extends Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth
    };
  }
  render() {
    return (
      <div className={Styles.container}>
        {this.state.width > 768 ? (
          <div className={Styles.desktopOnly}>
            <div className={Styles.wraper1}>
              <div className={Styles.imgCard}>
                <figure className={Styles.effectImgCard}>
                  <img
                    src="/Images/previous_year_events/case_study.jpg"
                    className={Styles.img}
                    alt=""
                    style={{
                      width: "500px",
                      height: "300px",
                      borderTopLeftRadius: "12px"
                    }}
                  />
                  <figcaption className={Styles.imgCaption}>
                    <label className={Styles.header}>
                      Case<span style={{ fontWeight: "bold" }}>Studies</span>
                    </label>

                    <div className={Styles.description}>
                      Lorem ipsum dolor sit amet,
                      <br /> consectetur adipiscing elit, sed do eiusmod tempor{" "}
                      <br />
                      incididunt ut labore et dolore magna aliqua.
                      <div className={Styles.greenLine}></div>
                    </div>
                  </figcaption>
                </figure>
              </div>

              <div className={Styles.imgCard}>
                <figure className={Styles.effectImgCard}>
                  <img
                    src="/Images/previous_year_events/workshop.jpg"
                    className={Styles.img}
                    alt=""
                    style={{ width: "500px", height: "300px" }}
                  />
                  <figcaption className={Styles.imgCaption}>
                    <label className={Styles.header}>
                      {" "}
                      <span style={{ fontWeight: "bold" }}> Workshops</span>
                    </label>
                    <div className={Styles.description}>
                      Lorem ipsum dolor sit amet,
                      <br /> consectetur adipiscing elit, sed do eiusmod tempor{" "}
                      <br />
                      incididunt ut labore et dolore magna aliqua.
                      <div className={Styles.greenLine}></div>
                    </div>
                  </figcaption>
                </figure>
              </div>

              <div className={Styles.imgCard}>
                <figure className={Styles.effectImgCard}>
                  <img
                    src="/Images/previous_year_events/guest_lecture.jpg"
                    className={Styles.img}
                    alt=""
                    style={{
                      width: "500px",
                      height: "300px",
                      borderBottomLeftRadius: "12px"
                    }}
                  />
                  <figcaption
                    className={Styles.imgCaption}
                    style={{ borderBottomLeftRadius: "12px" }}
                  >
                    <label className={Styles.header}>
                      Guest<span style={{ fontWeight: "bold" }}>Lectures</span>
                    </label>
                    <div className={Styles.description}>
                      Lorem ipsum dolor sit amet,
                      <br /> consectetur adipiscing elit, sed do eiusmod tempor{" "}
                      <br />
                      incididunt ut labore et dolore magna aliqua.
                      <div className={Styles.greenLine}></div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className={Styles.wraper2}>
              <div className={Styles.imgCard}>
                <figure className={Styles.effectImgCard}>
                  <img
                    src="/Images/previous_year_events/street_play.jpg"
                    className={Styles.img}
                    alt=""
                    style={{ width: "500px", height: "450px" }}
                  />
                  <figcaption className={Styles.imgCaption}>
                    <label className={Styles.header}>
                      Street<span style={{ fontWeight: "bold" }}>Play</span>
                    </label>
                    <div className={Styles.description}>
                      Lorem ipsum dolor sit amet,
                      <br /> consectetur adipiscing elit, sed do eiusmod tempor{" "}
                      <br />
                      incididunt ut labore et dolore magna aliqua.
                      <div className={Styles.greenLine}></div>
                    </div>
                  </figcaption>
                </figure>
              </div>

              <div className={Styles.imgCard}>
                <figure className={Styles.effectImgCard}>
                  <img
                    src="/Images/previous_year_events/action_plan.jpg"
                    className={Styles.img}
                    alt=""
                    style={{ width: "500px", height: "450px" }}
                  />
                  <figcaption className={Styles.imgCaption}>
                    <label className={Styles.header}>
                      Action<span style={{ fontWeight: "bold" }}>Plan</span>
                    </label>
                    <div className={Styles.description}>
                      Lorem ipsum dolor sit amet,
                      <br /> consectetur adipiscing elit, sed do eiusmod tempor{" "}
                      <br />
                      incididunt ut labore et dolore magna aliqua.
                      <div className={Styles.greenLine}></div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>

            <div className={Styles.wraper3}>
              <div className={Styles.imgCard}>
                <figure className={Styles.effectImgCard}>
                  <img
                    src="/Images/previous_year_events/work_presentation.jpg"
                    className={Styles.img}
                    alt=""
                    style={{
                      width: "500px",
                      height: "300px",
                      borderTopRightRadius: "12px"
                    }}
                  />
                  <figcaption className={Styles.imgCaption}>
                    <label className={Styles.header}>
                      Work
                      <span style={{ fontWeight: "bold" }}>Presentation</span>
                    </label>

                    <div className={Styles.description}>
                      Lorem ipsum dolor sit amet,
                      <br /> consectetur adipiscing elit, sed do eiusmod tempor{" "}
                      <br />
                      incididunt ut labore et dolore magna aliqua.
                      <div className={Styles.greenLine}></div>
                    </div>
                  </figcaption>
                </figure>
              </div>

              <div className={Styles.imgCard}>
                <figure className={Styles.effectImgCard}>
                  <img
                    src="/Images/previous_year_events/cultural_night.jpg"
                    className={Styles.img}
                    alt=""
                    style={{ width: "500px", height: "300px" }}
                  />
                  <figcaption className={Styles.imgCaption}>
                    <label className={Styles.header}>
                      Cultural
                      <span style={{ fontWeight: "bold" }}>Nights</span>
                    </label>
                    <div className={Styles.description}>
                      Lorem ipsum dolor sit amet,
                      <br /> consectetur adipiscing elit, sed do eiusmod tempor{" "}
                      <br />
                      incididunt ut labore et dolore magna aliqua.
                      <div className={Styles.greenLine}></div>
                    </div>
                  </figcaption>
                </figure>
              </div>

              <div className={Styles.imgCard}>
                <figure className={Styles.effectImgCard}>
                  <img
                    src="/Images/previous_year_events/hackathon.jpg"
                    className={Styles.img}
                    alt=""
                    style={{
                      width: "500px",
                      height: "300px",
                      borderBottomRightRadius: "12px"
                    }}
                  />
                  <figcaption
                    className={Styles.imgCaption}
                    style={{ borderBottomRightRadius: "12px " }}
                  >
                    <label className={Styles.header}>
                      <span style={{ fontWeight: "bold" }}> Hackathon</span>
                    </label>
                    <div className={Styles.description}>
                      Lorem ipsum dolor sit amet,
                      <br /> consectetur adipiscing elit, sed do eiusmod tempor{" "}
                      <br />
                      incididunt ut labore et dolore magna aliqua.
                      <div className={Styles.greenLine}></div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        ) : null}

        {/* for mobile screen */}
        {this.state.width < 768 ? (
          <div className={Styles.mobileOnly}>
            <div className={Styles.wraper1}>
              <div className={Styles.imgCard}>
                <figure className={Styles.effectImgCard}>
                  <img
                    src="/Images/previous_year_events/case_study.jpg"
                    className={Styles.imgMobile}
                    alt=""
                    style={{
                      width: "160px",
                      height: "180px",
                      borderTopLeftRadius: "12px"
                    }}
                  />
                  <figcaption className={Styles.imgCaption}>
                    <label className={Styles.header}>
                      {" "}
                      Case <span style={{ fontWeight: "bold" }}>Studies</span>
                    </label>
                  </figcaption>
                </figure>
              </div>

              <div className={Styles.imgCard}>
                <figure className={Styles.effectImgCard}>
                  <img
                    src="/Images/previous_year_events/workshop.jpg"
                    className={Styles.imMobileg}
                    alt=""
                    style={{
                      width: "160px",
                      height: "180px",
                      borderTopRightRadius: "12px"
                    }}
                  />
                  <figcaption className={Styles.imgCaption}>
                    <label className={Styles.header}>
                      {" "}
                      <span style={{ fontWeight: "bold" }}> Workshops</span>
                    </label>
                  </figcaption>
                </figure>
              </div>
            </div>

            <div className={Styles.wraper2}>
              <div className={Styles.imgCard}>
                <figure className={Styles.effectImgCard}>
                  <img
                    src="/Images/previous_year_events/guest_lecture.jpg"
                    className={Styles.imMobileg}
                    alt=""
                    style={{
                      width: "160px",
                      height: "180px"
                    }}
                  />
                  <figcaption className={Styles.imgCaption}>
                    <label className={Styles.header}>
                      Guest <span style={{ fontWeight: "bold" }}>Lectures</span>
                    </label>
                  </figcaption>
                </figure>
              </div>

              <div className={Styles.imgCard}>
                <figure className={Styles.effectImgCard}>
                  <img
                    src="/Images/previous_year_events/street_play.jpg"
                    className={Styles.imgMobile}
                    alt=""
                    style={{ width: "160px", height: "180px" }}
                  />
                  <figcaption className={Styles.imgCaption}>
                    <label className={Styles.header}>
                      Street <span style={{ fontWeight: "bold" }}>Play</span>
                    </label>
                  </figcaption>
                </figure>
              </div>
            </div>

            <div className={Styles.wraper3}>
              <div className={Styles.imgCard}>
                <figure className={Styles.effectImgCard}>
                  <img
                    src="/Images/previous_year_events/action_plan.jpg"
                    className={Styles.imMobileg}
                    alt=""
                    style={{ width: "160px", height: "180px" }}
                  />
                  <figcaption className={Styles.imgCaption}>
                    <label className={Styles.header}>
                      Action <span style={{ fontWeight: "bold" }}>Plan</span>
                    </label>
                  </figcaption>
                </figure>
              </div>
              <div className={Styles.imgCard}>
                <figure className={Styles.effectImgCard}>
                  <img
                    src="/Images/previous_year_events/work_presentation.jpg"
                    className={Styles.imMobileg}
                    alt=""
                    style={{ width: "160px", height: "180px" }}
                  />
                  <figcaption className={Styles.imgCaption}>
                    <label className={Styles.header}>
                      Work{" "}
                      <span style={{ fontWeight: "bold" }}>Presentation</span>
                    </label>
                  </figcaption>
                </figure>
              </div>
            </div>

            <div className={Styles.wraper4}>
              <div className={Styles.imgCard}>
                <figure className={Styles.effectImgCard}>
                  <img
                    src="/Images/previous_year_events/cultural_night.jpg"
                    className={Styles.imMobileg}
                    alt=""
                    style={{
                      width: "160px",
                      height: "180px",
                      borderBottomLeftRadius: "12px"
                    }}
                  />
                  <figcaption
                    className={Styles.imgCaption}
                    style={{ borderBottomLeftRadius: "12px" }}
                  >
                    <label className={Styles.header}>
                      Cultural{" "}
                      <span style={{ fontWeight: "bold" }}>Nights</span>
                    </label>
                  </figcaption>
                </figure>
              </div>

              <div className={Styles.imgCard}>
                <figure className={Styles.effectImgCard}>
                  <img
                    src="/Images/previous_year_events/hackathon.jpg"
                    className={Styles.imgMobile}
                    alt=""
                    style={{
                      width: "160px",
                      height: "180px",
                      borderBottomRightRadius: "12px"
                    }}
                  />
                  <figcaption
                    className={Styles.imgCaption}
                    style={{ borderRadius: "0 12px 0 0" }}
                  >
                    <label className={Styles.header}>
                      <span style={{ fontWeight: "bold" }}> Hackathon</span>
                    </label>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Carousel;

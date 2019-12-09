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
                    <label className={Styles.header}>Case Studies</label>
                    <div className={Styles.description}>
                      Channelize your thoughts to design better <br />
                      lines of action to achieve a multi-dimensional <br />
                      solution to the persisting social problems.
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
                    <label className={Styles.header}>B PLANS</label>
                    <div className={Styles.description}>
                      Prepare your business plans and get ready to
                      <br />
                      convince the inconvincible
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
                      Round Table Conference
                    </label>
                    <div className={Styles.description}>
                      Best ideas are surfaced only through an immense <br />
                      clash of wisdom. This event presents a broad <br />
                      discussion forum to reach a practical solution for <br />
                      societal ills.
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
                    style={{ width: "500px", height: "454px" }}
                  />
                  <figcaption className={Styles.imgCaption}>
                    <label className={Styles.header}>Street Play</label>
                    <div className={Styles.description}>
                      Just pick up your drums, tambourines and get ready to{" "}
                      <br />
                      scream,shout and bustle up the streets,intriguing your{" "}
                      <br />
                      audience against a social dogma
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
                    style={{ width: "500px", height: "455px" }}
                  />
                  <figcaption className={Styles.imgCaption}>
                    <label className={Styles.header}>
                      Model United Nations Conference
                    </label>
                    <div className={Styles.description}>
                      An event to negotiate all the important agendas <br />
                      and bring the best of the delegates, attachés and <br />
                      moderators in an explicit and diplomatic way.
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
                    <label className={Styles.header}>Work Presentation</label>
                    <div className={Styles.description}>
                      Grab a chance for the rightful acknowledgment
                      <br /> of your unparalleled social work.
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
                    <label className={Styles.header}>Cultural Nights</label>
                    <div className={Styles.description}>
                      Have something different to stand out from the crowd? Then
                      this is the moment to perform in front of an audience and
                      steal the show.
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
                    <label className={Styles.header}>Hackathon</label>
                    <div className={Styles.description}>
                      Think ,refine,code and test your potential <br />
                      to transfigure the current scenario of society.
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
                    <label className={Styles.header}>Case Studies</label>
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
                    <label className={Styles.header}>B PLANS</label>
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
                    <label className={Styles.header}>R.T.C</label>
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
                    <label className={Styles.header}>Street Play</label>
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
                    <label className={Styles.header}>M.U.N</label>
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
                    <label className={Styles.header}>Work Presentation</label>
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
                    <label className={Styles.header}>Cultural Nights</label>
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
                    <label className={Styles.header}>Hackathon</label>
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

import React, { Component } from "react";
import Styles from "./css/imageGrid.module.css";
import Fade from "react-reveal/Fade";

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
        <Fade>
          <label className={Styles.mainHeader}>Events</label>
        </Fade>
        {this.state.width > 768 ? (
          <div className={Styles.desktopOnly}>
            <div className={Styles.wraper1}>
              <Fade bottom>
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
                        Case Studies
                        <a
                          href="https://drive.google.com/file/d/1k4XJ0eDfzQP0k8FB7LZAfT5ugNP_l-r1/view"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src="/Images/icons/documents.svg"
                            alt="document"
                            className={Styles.document}
                          />
                        </a>
                      </label>
                      <div className={Styles.description}>
                        Channelize your thoughts to design better <br />
                        lines of action to achieve a multi-dimensional <br />
                        solution to the persisting social problems.
                        <div className={Styles.greenLine}></div>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              </Fade>

              <Fade bottom>
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
                        B PLANS
                        <a
                          href="https://drive.google.com/file/d/1AEiq9iw8bfIYOQoGjZcd536oj5rQriyb/view"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src="/Images/icons/documents.svg"
                            alt="document"
                            className={Styles.document}
                          />
                        </a>
                      </label>
                      <div className={Styles.description}>
                        Prepare your business plans and get ready to
                        <br />
                        convince the inconvincible
                        <div className={Styles.greenLine}></div>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              </Fade>

              <Fade bottom>
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
                        <a
                          href="https://drive.google.com/file/d/1baxt9nB2LSq-qQgHFzu4CFNQuPK6AYwU/view"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src="/Images/icons/documents.svg"
                            alt="document"
                            className={Styles.document}
                          />
                        </a>
                      </label>
                      <div className={Styles.description}>
                        Best ideas are surfaced only through an immense <br />
                        clash of wisdom. This event presents a broad <br />
                        discussion forum to reach a practical solution for{" "}
                        <br />
                        societal ills.
                        <div className={Styles.greenLine}></div>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              </Fade>
            </div>
            <div className={Styles.wraper2}>
              <Fade bottom>
                <div className={Styles.imgCard}>
                  <figure className={Styles.effectImgCard}>
                    <img
                      src="/Images/previous_year_events/street_play.jpg"
                      className={Styles.img}
                      alt=""
                      style={{ width: "500px", height: "454px" }}
                    />
                    <figcaption className={Styles.imgCaption}>
                      <label className={Styles.header}>
                        Street Play
                        <a
                          href="https://drive.google.com/file/d/1Adzbtkj27ahXa5x7rguwG7nadmCu6NHr/view"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src="/Images/icons/documents.svg"
                            alt="document"
                            className={Styles.document}
                          />
                        </a>
                      </label>
                      <div className={Styles.description}>
                        Just pick up your drums, tambourines and get <br />{" "}
                        ready to scream,shout and bustle up the streets,
                        <br /> intriguing your audience against a social dogma
                        <div className={Styles.greenLine}></div>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              </Fade>

              <Fade bottom>
                <div className={Styles.imgCard}>
                  <figure className={Styles.effectImgCard}>
                    <img
                      src="/Images/previous_year_events/mun.jpg"
                      className={Styles.img}
                      alt=""
                      style={{ width: "500px", height: "455px" }}
                    />
                    <figcaption className={Styles.imgCaption}>
                      <label className={Styles.header}>
                        MUN
                        <a
                          href="https://drive.google.com/file/d/1zb9Ieu2oWJTl8R6U54BWMhQBNCaqR7Uc/view"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src="/Images/icons/documents.svg"
                            alt="document"
                            className={Styles.document}
                          />
                        </a>
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
              </Fade>
            </div>

            <div className={Styles.wraper3}>
              <Fade bottom>
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
                        Work Presentation
                        <a
                          href="https://drive.google.com/file/d/11E9YigZLRgPcQZ62fnTZesD4fLL-7eri/view"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src="/Images/icons/documents.svg"
                            alt="document"
                            className={Styles.document}
                          />
                        </a>
                      </label>
                      <div className={Styles.description}>
                        Grab a chance for the rightful acknowledgment
                        <br /> of your unparalleled social work.
                        <div className={Styles.greenLine}></div>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              </Fade>
              <Fade bottom>
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
                        Cultural Nights
                        <a
                          href="https://drive.google.com/file/d/11jy7V3pKsCBwYg4nFPTi_M5LRHnmVcVr/view"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src="/Images/icons/documents.svg"
                            alt="document"
                            className={Styles.document}
                          />
                        </a>
                      </label>
                      <div className={Styles.description}>
                        Have something different to stand out from <br /> the
                        crowd? Then this is the moment to perform <br /> in
                        front of an audience and steal the show.
                        <div className={Styles.greenLine}></div>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              </Fade>
              <Fade bottom>
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
                        Hackathon
                        <a
                          href="https://drive.google.com/file/d/18XsAoTfBn1EkLo-5txDknV_BoLsUGNZO/view"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src="/Images/icons/documents.svg"
                            alt="document"
                            className={Styles.document}
                          />
                        </a>
                      </label>
                      <div className={Styles.description}>
                        Think ,refine,code and test your potential <br />
                        to transfigure the current scenario of society.
                        <div className={Styles.greenLine}></div>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              </Fade>
            </div>
          </div>
        ) : null}

        {/* for mobile screen */}
        {this.state.width < 768 ? (
          <div className={Styles.mobileOnly}>
            <div className={Styles.wraper1}>
              <Fade bottom>
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
                        Case Studies
                        <a
                          href="https://drive.google.com/file/d/1k4XJ0eDfzQP0k8FB7LZAfT5ugNP_l-r1/view"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src="/Images/icons/documents.svg"
                            alt="document"
                            className={Styles.document}
                          />
                        </a>
                      </label>
                    </figcaption>
                  </figure>
                </div>
              </Fade>

              <Fade bottom>
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
                        B PLANS
                        <a
                          href="https://drive.google.com/file/d/1AEiq9iw8bfIYOQoGjZcd536oj5rQriyb/view"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src="/Images/icons/documents.svg"
                            alt="document"
                            className={Styles.document}
                          />
                        </a>
                      </label>
                    </figcaption>
                  </figure>
                </div>
              </Fade>
            </div>
            <div className={Styles.wraper2}>
              <Fade bottom>
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
                        R.T.C
                        <a
                          href="https://drive.google.com/file/d/1baxt9nB2LSq-qQgHFzu4CFNQuPK6AYwU/view"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src="/Images/icons/documents.svg"
                            alt="document"
                            className={Styles.document}
                          />
                        </a>
                      </label>
                    </figcaption>
                  </figure>
                </div>
              </Fade>
              <Fade bottom>
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
                        Street Play
                        <a
                          href="https://drive.google.com/file/d/1Adzbtkj27ahXa5x7rguwG7nadmCu6NHr/view"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src="/Images/icons/documents.svg"
                            alt="document"
                            className={Styles.document}
                          />
                        </a>
                      </label>
                    </figcaption>
                  </figure>
                </div>
              </Fade>
            </div>

            <div className={Styles.wraper3}>
              <Fade bottom>
                <div className={Styles.imgCard}>
                  <figure className={Styles.effectImgCard}>
                    <img
                      src="/Images/previous_year_events/mun.jpg"
                      className={Styles.imMobileg}
                      alt=""
                      style={{ width: "160px", height: "180px" }}
                    />
                    <figcaption className={Styles.imgCaption}>
                      <label className={Styles.header}>
                        M.U.N
                        <a
                          href="https://drive.google.com/file/d/1zb9Ieu2oWJTl8R6U54BWMhQBNCaqR7Uc/view"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src="/Images/icons/documents.svg"
                            alt="document"
                            className={Styles.document}
                          />
                        </a>
                      </label>
                    </figcaption>
                  </figure>
                </div>
              </Fade>
              <Fade bottom>
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
                        Work Presentation
                        <a
                          href="https://drive.google.com/file/d/11E9YigZLRgPcQZ62fnTZesD4fLL-7eri/view"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src="/Images/icons/documents.svg"
                            alt="document"
                            className={Styles.document}
                          />
                        </a>
                      </label>
                    </figcaption>
                  </figure>
                </div>
              </Fade>
            </div>

            <div className={Styles.wraper4}>
              <Fade bottom>
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
                        Cultural Nights
                        <a
                          href="https://drive.google.com/file/d/11jy7V3pKsCBwYg4nFPTi_M5LRHnmVcVr/view"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src="/Images/icons/documents.svg"
                            alt="document"
                            className={Styles.document}
                          />
                        </a>
                      </label>
                    </figcaption>
                  </figure>
                </div>
              </Fade>
              <Fade bottom>
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
                      style={{ borderRadius: "0 0 12px 0" }}
                    >
                      <label className={Styles.header}>
                        Hackathon
                        <a
                          href="https://drive.google.com/file/d/18XsAoTfBn1EkLo-5txDknV_BoLsUGNZO/view"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src="/Images/icons/documents.svg"
                            alt="document"
                            className={Styles.document}
                          />
                        </a>
                      </label>
                    </figcaption>
                  </figure>
                </div>
              </Fade>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Carousel;

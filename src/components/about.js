import React from "react";

import about from "../assets/images/about/creative.png";
import devmountain from "../assets/images/about/dev-mountain-logo.png";
import calpolyLogo from "../assets/images/about/cp-logo.png";
import kingstonLogo from "../assets/images/about/kingston-logo.png";

export default props => {
  return (
    <section id="about">
      <div className="container">
        <h3 className="white-color">Who Am I?</h3>
        <hr className="white-color" />
        <p className="text-faded">
          I've always had a passion for building and creating things. After
          graduating a Computer science course for Hardware and Networking I
          took those skills and worked in the industry for years when I wanted
          to take it to the next level and learn the software side. I took a
          thirteen week bootcamp course for web development.
        </p>
        <div className="row">
          <img
            id="aboutImg"
            className="col s10 m6 l4 offset-s1 offset-m3 offset-l4 responsive-img"
            src={about}
            alt="About me"
          />
        </div>
        <div className="text-faded center-align">
          <em>"Where there's a will, there's a way."</em>
        </div>
        {/* <p className="text-faded">
          My approach to UX/UI design and software development is to balance
          form and function. I think a design should be intuitive, visually
          balanced, and it allows the content to shine. Designs that create a
          great user experience are significant because they cause people to buy
          products from the same company over and over again. Additionally,
          implementing designs with code efficiency in mind will enhance
          performance, scalability, and overall product quality. With this
          approach, there is no limit on what can be achieved.
        </p> */}

        <h4 className="white-color">Background</h4>
        <hr className="white-color sub" />
        <div className="row">
          <div className="col s12 m4">
            <img
              src={devmountain}
              alt="LearningFuze"
              className="bgImg responsive-img"
            />
            <div className="background-text text-faded">
              Completing DevMountain's{" "}
              <em>Full Immersion Web Development Program </em>has laid the
              foundation for my <strong>software development</strong> career.
            </div>
          </div>
          {/* <div className="col s12 m4">
            <img
              src={kingstonLogo}
              alt="Kingston"
              className="bgImg responsive-img"
            />
            <div className="background-text text-faded">
              5+ years experience as a <strong>Flash Design Engineer </strong>at{" "}
              <em>Kingston Technology</em> has molded me into an engineer that
              can take a concept and develop it into a high volume product.
            </div>
          </div>
          <div className="col s12 m4">
            <img
              src={calpolyLogo}
              alt="Cal Poly"
              className="bgImg responsive-img"
            />
            <div className="background-text text-faded">
              Earning my bachelor's degree in{" "}
              <strong>Electrical Engineering</strong> while applying Cal Poly's{" "}
              <em>Learn by Doing</em> approach is how I acquired my logical and
              analytical skills.
            </div> */}
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

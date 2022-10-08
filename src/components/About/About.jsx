import React from "react";
import "./About.css";
import photo1 from "../../assets/photo1.png";
import photo2 from "../../assets/photo2.png";

function About() {
  return (
    <div className="about">
      <div className="about-title-div">
        <p className="about-title">ut aliquip ex ea commodo consequat</p>
      </div>
      <div className="about-description">
        <div className="about-description1">
          <img className="photo1" src={photo1} alt="photo1" />
          <div>
            <p className="about-description-title">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
            <p className="about-description-text">
              Incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum
            </p>
          </div>
        </div>
        <div className="about-description2">
          <div className="about-description1-wrapper2">
            <p className="about-description-title2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
            <p className="about-description-text2">
              Incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum
            </p>
          </div>
          <div>
          <img className="photo2" src={photo2} alt="photo1" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

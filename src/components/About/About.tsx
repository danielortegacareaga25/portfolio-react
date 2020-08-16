import React, { useRef, useEffect } from "react";
import PERFILIMAGE from "./../../images/perfil.png";

const About: React.FC = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section-title">About</h2>
      <div className="about__container bg-grid">
        <div className="about__img">
          <img src={PERFILIMAGE} alt="image" />
        </div>
        <div>
          <h2 className="about__subtitle">Im Daniel Ortega</h2>
          <span className="about__profession">Web Developer</span>
          <p className="about__text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam,
            aliquid numquam porro quidem nobis sit ab praesentium distinctio
            architecto exercitationem a similique provident maxime error
            voluptate veniam eligendi reiciendis accusantium!
          </p>
          <div className="about__social">
            <a href="#" className="about__social-icon">
              <i className="bx bxl-linkedin"></i>
            </a>
            <a href="#" className="about__social-icon">
              <i className="bx bxl-github"></i>
            </a>
            <a href="#" className="about__social-icon">
              <i className="bx bxl-facebook"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import React from "react";
import IMAGESKILLS from "./../../images/skill.jpg";
import { skills } from "./../../fixtures/skills.fixture";

// import { Container } from './styles';

const Skills: React.FC = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills__container bg-grid">
        <div className="skills__box">
          {skills.map((skill, idx) => (
            <div key={idx}>
              <h3 className="skills__subtitle">{skill.name}</h3>
              {skill.skills.map((sk, idz) => (
                <span key={idz} className="skills__name">
                  {sk}
                </span>
              ))}
            </div>
          ))}
        </div>
        <div className="skills__img">
          <img src={IMAGESKILLS} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Skills;

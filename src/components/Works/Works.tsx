import React from "react";
import { WORKS } from "./../../fixtures/works.fixture";

// import { Container } from './styles';

const Works: React.FC = () => {
  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section-title">Portfolio</h2>
      <div className="portfolio__container bg-grid">
        {WORKS.map((work, idx) => (
          <div className="portfolio__img" key={idx}>
            <img src={require(`../../images/${work}.jpg`)} alt="" />
            <div className="portfolio__link">
              <a href="#" className="portfolio__link-name">
                View details
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Works;

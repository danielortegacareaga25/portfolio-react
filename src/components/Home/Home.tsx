import React from "react";
import PERFILIMAGE from "./../../images/perfil.png";

const Home: React.FC = () => {
  return (
    <section className="home" id="home">
      <div className="home__container bg-grid">
        <h1 className="home__title">
          <span>He</span>
          <br />
          LLO.
        </h1>
        {/* <div className="home_colors">
          <div className="home_green"></div>
        </div> */}
        <div className="home__scroll">
          <a href="about" className="home__scroll-link">
            <i className="bx bx-up-arrow-alt">Scroll down</i>
          </a>
        </div>
        <img src={PERFILIMAGE} alt="image" className="home__img" />
      </div>
    </section>
  );
};

export default Home;

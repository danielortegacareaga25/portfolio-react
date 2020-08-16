import React from "react";

// import { Container } from './styles';

const Footer: React.FC = () => {
  return (
    <footer className="footer section">
      <div className="footer__container bg-grid">
        <div className="footer__data">
          <h2 className="footer__title">Daniel Ortega</h2>
          <p className="footer__text">
            Im Daniel and ths is my personal website
          </p>
        </div>
        <div className="footer__data">
          <h2 className="footer__title">Explore</h2>
          <ul>
            <li>
              <a href="#home" className="footer__link">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="footer__link">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="footer__link">
                Skills
              </a>
            </li>
            <li>
              <a href="#portfolio" className="footer__link">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#contact" className="footer__link">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__data">
          <h2 className="footer__title">Folllow</h2>
          <a href="#" className="footer__social">
            <i className="bx bxl-facebook"></i>
          </a>
          <a href="#" className="footer__social">
            <i className="bx bxl-instagram"></i>
          </a>
          <a href="#" className="footer__social">
            <i className="bx bxl-twitter"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

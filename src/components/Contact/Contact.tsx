import React from "react";

// import { Container } from './styles';

const Contact: React.FC = () => {
  return (
    <section className="contact section" id="contact">
      <h2 className="section-title">Contact</h2>
      <div className="contact__container bg-grid">
        <div className="contact__info">
          <h3 className="contact__subtitle">EMAIL</h3>
          <span className="contact__text">danielortegacareaga@gmail.com</span>
          <h3 className="contact__subtitle">PHONE</h3>
          <span className="contact__text">+52 1 (722) 652 4755</span>
          <h3 className="contact__subtitle">ADDRESS</h3>
          <span className="contact__text">Estado de Mexico, Mexico</span>
        </div>
        <form action="" className="contact__form">
          <div className="contact__inputs">
            <input type="text" placeholder="Name" className="contact__input" />
            <input type="text" placeholder="Email" className="contact__input" />
          </div>
          <textarea
            placeholder="Mensaje..."
            rows={10}
            cols={0}
            name=""
            id=""
            className="contact__input"
          ></textarea>
          <input type="submit" value="Send" className="contact__button" />
        </form>
      </div>
    </section>
  );
};

export default Contact;

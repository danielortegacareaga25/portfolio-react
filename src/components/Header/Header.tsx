import React, { useState } from "react";
import { texts, sections } from "./../../fixtures/header.fixture";

const Header: React.FC = () => {
  const [sectionActive, setSectionActive] = useState(0);
  const [showMenu, setShowMenu] = useState(false);

  const actionLink = (idx: number) => {
    setShowMenu(false);
    setSectionActive(idx);
  };
  return (
    <header className="l-header">
      <nav className="nav bd-grid">
        <span className="nav__logo">{texts.name}</span>
        <div className={`nav__menu ${showMenu ? "show" : ""}`} id="nav-menu">
          <ul className="nav__list">
            {sections.map((section, idx) => (
              <li
                className="nav__item"
                key={idx}
                onClick={() => actionLink(idx)}
              >
                <a
                  href={`#${section.href}`}
                  className={`nav__link ${
                    sectionActive === idx ? "active" : ""
                  }`}
                >
                  {section.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div
          onClick={() => setShowMenu(!showMenu)}
          id="nav-toggle"
          className="nav__toggle"
        >
          <i className="bx bx-menu"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;

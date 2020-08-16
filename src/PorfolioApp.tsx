import React, { useEffect } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { scrollInit, sectionsInit } from "./utils/scroll";

const PorfolioApp: React.FC = () => {
  useEffect(() => {
    sectionsInit();
    scrollInit();
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <>
      <Header />
      <Home />
      <About />
      <Skills />
      <Works />
      <Contact />
      <Footer />
    </>
  );
};

export default PorfolioApp;

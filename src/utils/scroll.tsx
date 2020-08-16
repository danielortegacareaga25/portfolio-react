export const scrollInit = () => {
  const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true,
  });
  sr.reveal(".home__title", {});
  sr.reveal(".home__scroll", { delay: 200 });
  sr.reveal(".home__img", { origin: "right", delay: 400 });

  sr.reveal(".about__img", { delay: 500 });
  sr.reveal(".about__subtitle", { delay: 300 });
  sr.reveal(".about__profession", { delay: 400 });
  sr.reveal(".about__text", { delay: 500 });
  sr.reveal(".about__social-icon", { delay: 600, interval: 200 });

  sr.reveal(".skills__subtitle", {});
  sr.reveal(".skills__name", { distance: "20px", delay: 50, interval: 100 });
  sr.reveal(".skills__img", { delay: 400 });

  sr.reveal(".portfolio__img", { interval: 200 });

  sr.reveal(".contact__subtitle", {});
  sr.reveal(".contact__text", { interval: 200 });
  sr.reveal(".contact__input", { delay: 400 });
  sr.reveal(".contact__button", { delay: 600 });
};

export const sectionsInit = () => {
  const sections = document.querySelectorAll("section[id]");
  window.addEventListener("scroll", () => {
    const scrollY = window.pageYOffset;
    sections.forEach((current: any) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50;
      const sectionId = current.getAttribute("id");
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        const secAux = document.querySelector(
          ".nav__menu a[href*=" + sectionId + "]"
        );
        if (secAux) secAux.classList.add("active");
      } else {
        const secAux = document.querySelector(
          ".nav__menu a[href*=" + sectionId + "]"
        );
        if (secAux) secAux.classList.remove("active");
      }
    });
  });
};

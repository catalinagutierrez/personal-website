import React, { useState, useLayoutEffect, useRef } from "react";
import "./body.styles.scss";

import AboutMe from "../about-me/about-me.component";
import ExperienceCollection from "../experience/experience.component";
import Portfolio from "../portfolio/portfolio.component";

const Body = () => {
  const [show, setShow] = useState({
    about: false,
    experience: false,
    portfolio: false,
  });

  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const portfolioRef = useRef(null);

  useLayoutEffect(() => {
    const aboutPos = aboutRef.current.getBoundingClientRect().top;
    const experiencePos = experienceRef.current.getBoundingClientRect().top;
    const portfolioPos = portfolioRef.current.getBoundingClientRect().top;

    const onScroll = () => {
      if (aboutPos - window.innerHeight <= window.scrollY) {
        setShow((state) => ({ ...state, about: true }));
      }
      if (experiencePos - window.innerHeight <= window.scrollY) {
        setShow((state) => ({ ...state, experience: true }));
      }
      if (portfolioPos - window.innerHeight <= window.scrollY) {
        setShow((state) => ({ ...state, portfolio: true }));
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="body">
      <div className="body-section" id="about-me" ref={aboutRef}>
        <AboutMe show={show.about} />
      </div>
      <div className="body-section" id="experience" ref={experienceRef}>
        <ExperienceCollection show={show.experience} />
      </div>
      <div className="body-section" id="portfolio" ref={portfolioRef}>
        <Portfolio show={show.portfolio} />
      </div>
    </div>
  );
};

export default Body;

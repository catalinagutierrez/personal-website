import React from "react";
import "./introduction.styles.scss";
import IntroductionContent from "../introduction-content/introduction-content.component";

const Introduction = () => (
  <div className="introduction" data-aos="fade-in">
    <IntroductionContent />
  </div>
);

export default Introduction;

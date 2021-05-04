import React from "react";
import "./header.styles.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Header = () => (
  <div className="header">
    <a
      href="https://www.linkedin.com/in/catalina-gutierrez-moreno/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faLinkedin} />
    </a>
    <a
      href="https://www.github.com/catalinagutierrez/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faGithub} />
    </a>
    <a
      href="mailto:cgutierrezm95@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faEnvelope} />
    </a>
  </div>
);

export default Header;

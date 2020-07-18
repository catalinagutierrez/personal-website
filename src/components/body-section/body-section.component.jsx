import React from 'react';
import './body-section.styles.scss';

import AboutMe from '../about-me/about-me.component';
import ExperienceCollection from '../experience/experience.component';
import Portfolio from '../portfolio/portfolio.component';

function BodyComponent(props) {
    switch (props.type) {
        case 'AboutMe':
          return <AboutMe />;
        case 'Experience':
          return <ExperienceCollection />;
          case 'Portfolio':
          return <Portfolio />;
        default:
          return null;
  }
}

const BodySection = ({ type }) => (
    <div className="body-section">
        <BodyComponent type={type} />
    </div>
);

export default BodySection;
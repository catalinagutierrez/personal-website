import React, { useState, useEffect } from "react";
import "./experience.styles.scss";
import Typewriter from "typewriter-effect";

const Experience = (props) => {
  const [render, setRender] = useState(false);

  useEffect(() => {
    setRender(props.show);
  }, [props.show]);

  return (
    <div>
      {render ? (
        <div className="experience">
          <h2>
            <Typewriter
              options={{
                autoStart: false,
                delay: 100,
                cursor: "",
              }}
              onInit={(typewriter) => {
                typewriter.typeString("my journey so far.").start();
              }}
            />
          </h2>
        </div>
      ) : (
        <h2> </h2>
      )}
      <div className="experience-body">
        <div className="animation" data-aos="fade-left">
          <article className="experience-entry">
            <div className="experience-label">
              <h3>northeastern university </h3>
              <h4>January 2021 - December 2022</h4>
              <p>
                Currently working towards a master's degree in computer science
                at Northeastern University.
              </p>
            </div>
          </article>
        </div>
        <div className="animation" data-aos="fade-left">
          <article className="experience-entry">
            <div className="experience-label">
              <h3>escafandra </h3>
              <h4>July 2019 - August 2020</h4>
              <p>
                Worked remotely as a full stack developer. The company offers a
                web based application that health providers utilize to organize
                patient records, medical histories, and financial information
                using the ASP.NET MVC 5 framework. I worked with JavaScript,
                HTML and CSS in the frontend, and C# and SQL Server in the
                backend.
              </p>
            </div>
          </article>
        </div>
        <div className="animation" data-aos="fade-left">
          <article className="experience-entry">
            <div className="experience-label">
              <h3>northwestern university </h3>
              <h4>January 2019 - June 2019</h4>
              <p>
                Worked as research assistant at Miller Laboratory of Limb Motor
                Control, contributing by setting up a motion tracking system
                using multiple cameras for 3D reconstruction of hand kinematics.
              </p>
            </div>
          </article>
        </div>
        <div className="animation" data-aos="fade-left">
          <article className="experience-entry">
            <div className="experience-label">
              <h3>EIA university </h3>
              <h4>July 2014 - December 2019</h4>
              <p>Obtained my bachelors degree in biomedical engineering.</p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Experience;

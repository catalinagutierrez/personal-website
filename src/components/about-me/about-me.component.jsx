import React, { useState, useEffect } from "react";
import "./about-me.styles.scss";
import Typewriter from "typewriter-effect";

const AboutMe = (props) => {
  const [render, setRender] = useState(false);

  useEffect(() => {
    setRender(props.show);
  }, [props.show]);

  return (
    <div className="about-me">
      {render ? (
        <div>
          <h2>
            <Typewriter
              options={{
                autoStart: false,
                delay: 120,
                cursor: "",
              }}
              onInit={(typewriter) => {
                typewriter.typeString("About me.").start();
              }}
            />
          </h2>
        </div>
      ) : (
        <h2> </h2>
      )}
      <div className="about-body" data-aos="fade-in">
        <img src={require("../../assets/photo.jpg")} alt="stylish selfie" />
        I'm currently pursuing a master's degree in computer science with the
        hope of becoming a software developer.
        <br />
        <br />
        I spent the better part of my bachelors in the medical instrumentation
        lab. I was constatly involved in projects where I programmed FPGAs and
        embedded systems to acquire and process all kinds of biological signals.
        These hands on computer engineering projects helped me truly understand
        the logic behind programming, which I had the pleasure of experiencing
        through a variety of languages including Assembler and C.
        <br />
        <br />
        In 2019 I began my professional journey in Chicago, where I completed an
        internship at Northwestern University. At the time I was in the midst of
        completing my undergraduate thesis project, in which I programmed the
        embedded software for a biomedical device prototype. It was then that I
        realized that software development was not only fun, but it's something
        I'm passionate about. I would work full time at the lab and part time as
        a server, yet still come home late at night eager to continue working on
        my thesis to implement new ideas that had surfaced during the day.
        <br />
        <br />
        Six months prior to graduating, I started working as a full stack web
        developer. I was thrilled to be able to explore another facet of the
        world of software engineering. Working with a small, closely knit team
        allowed me to see my work evolve from ideas all the way into deployment.
        <br />
        <br />I have always found great joy in tackling problems by searching
        for pragmatic, straightforward solutions. Software is a niche where I
        can use my creativity to do just that, while also learning and exploring
        different contexts in a world where technology is finding its way to
        every aspect of our lives.
      </div>
    </div>
  );
};

export default AboutMe;

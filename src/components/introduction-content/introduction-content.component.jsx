import React from "react";
import "./introduction-content.styles.scss";
import Typewriter from "typewriter-effect";

const IntroductionContent = () => (
  <div className="introduction-content">
    <Typewriter
      options={{
        autoStart: false,
        delay: 40,
      }}
      onInit={(typewriter) => {
        typewriter
          .pauseFor(400)
          .typeString("<span class='head'>hi,</span>")
          .pauseFor(300)
          .typeString("<span class='head'> i'm Catalina.</span>")
          .pauseFor(1200)
          .changeDelay(30)
          .typeString(
            "<span class='sub'><br>a biomedical engineer who fell in love with software development.</span>"
          )
          .start();
      }}
    />
  </div>
);

export default IntroductionContent;

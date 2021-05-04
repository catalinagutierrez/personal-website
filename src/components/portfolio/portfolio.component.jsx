import React, { useState, useEffect } from "react";
import "./portfolio.styles.scss";
import Typewriter from "typewriter-effect";

import PortfolioEntry from "../portfolio-entry/portfolio-entry.component";

const Portfolio = (props) => {
  const [render, setRender] = useState(false);

  useEffect(() => {
    setRender(props.show);
  }, [props.show]);

  const portfolio = [
    {
      id: "1",
      name: "pet adoption website",
      animationDelay: 0,
      thumbnail: require("../../assets/animalRescueThumbnail.jpg"),
      alt: "Website Thumbnail",
      languages: "ReactJS, Redux, Firebase, Stripe",
      description:
        "I grew curious about modern JavaScript frameworks, so I decided to learn ReactJS on my own by taking an online course. After completing the master project, which was a fashion e-commerce website, I decided to expand upon it and create a similar app but using my own ideas and different functionality.",
      imageCaption:
        "I used heroku to deploy the most recent version of the project. It can be accessed ",
      link: "https://cat-animal-rescue.herokuapp.com/",
    },
    {
      id: "2",
      name: "BLE ECG device",
      animationDelay: 200,
      thumbnail: require("../../assets/thesisThumbnail.jpg"),
      alt: "PCB Thumbnail",
      languages: "C, MATLAB",
      img: require("../../assets/thesisDiagram.jpg"),
      description:
        "My bachelor's thesis project was the design and prototyping of a cardiac biopotential recording device that uses two synchronized, independent signal readings from the patients chest using Bluetooth Low Energy to transmit data wirelessly to a central processing unit.",
      imageCaption:
        "The overall functionality of the device is shown in the following diagram:",
      link: null,
    },
    {
      id: "3",
      name: "mini-shell",
      animationDelay: 400,
      thumbnail: require("../../assets/shellThumbnail.jpg"),
      alt: "Mini Shell Thumbnail",
      languages: "C",
      img: "",
      description:
        "Implemented a personalized, simple version of a shell that executes UNIX commands. It includes signal handling for termination, pipelining between two processes, and basic built in functions.",
      link: null,
    },
    {
      id: "4",
      name: "mastermind game",
      animationDelay: 600,
      thumbnail: require("../../assets/mastermindThumbnail.png"),
      alt: "Mastermind Thumbnail",
      languages: "Python",
      img: "",
      description:
        "I created a Python version of the Mastermind game where the player guesses a 4 color code. It uses Turtle for the UI and keeps track of the scoreboard by persisting data in a text file.",
      link: null,
    },
  ];

  return (
    <div>
      {render ? (
        <h2>
          <Typewriter
            options={{
              autoStart: false,
              delay: 100,
            }}
            onInit={(typewriter) => {
              typewriter.typeString("my work at a glance.").start();
            }}
          />
        </h2>
      ) : (
        <h2> </h2>
      )}
      <div className="portfolio">
        {portfolio.map(({ id, ...otherItemProps }) => (
          <PortfolioEntry key={id} {...otherItemProps} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

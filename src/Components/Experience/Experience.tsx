import React from "react";
import ExperienceCard from "../ExperienceCard/ExperienceCard";
import "./Experience.css";
import { experiences } from "../../data/experiences"

function Experiences() {
  let dir_counter = 0,
    direction: "row" | "row-reverse" = "row";
  return (
    <section id="portfolio">
      <div className="main-div">
        <h1
          className="header"
          style={{
            color: "whitesmoke",
            fontSize: "30px",
          }}
        >
          Experience
        </h1>
        {experiences.map((experience) => {
          dir_counter++;
          if (dir_counter % 2 === 0) direction = "row-reverse";
          else direction = "row";
          return (
            <ExperienceCard {...experience} direction={direction} key={dir_counter} />
          );
        })}
      </div>
    </section>
  );
}

export default Experiences;

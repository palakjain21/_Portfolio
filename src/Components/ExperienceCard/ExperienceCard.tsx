import React from "react";
import "./ExperienceCard.css";
import { experienceType } from "../../interfaces/Experience";
import DevIcons from "../DevIcons/DevIcons";

function ExperienceCard({
  title,
  content,
  direction,
  stack,
  company,
  start,
  end
}: experienceType) {
  return (
    <div className="main" style={{ flexDirection: direction }}>
      <div className="description">
        <div className="cardText">
          <h1 style={{ color: "whitesmoke" }}>{title}</h1>
          <h3 style={{ color: "wheat" }}>{company}</h3>
              {content.map(c=>(
                <span>{c}</span>
              ))}
          <DevIcons className="devicon" stacks={stack} />
          <br />
        </div>
      </div>
      <div className="image"></div>
    </div>
  );
}

export default ExperienceCard;

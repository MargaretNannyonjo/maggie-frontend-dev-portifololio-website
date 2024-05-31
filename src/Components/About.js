import React from "react";
import { Link } from "react-router-dom";

export const About = () => {
  return (
    <div className="aboutSkills">
      <div className="about">
        <div className="aboutSection">
          <div className="aboutimg">
            <h1>
              About <br />
              me
            </h1>
          </div>
        </div>
        <div className="aboutSection">
          <div className="aboutDiv">
            <p>
              I'm an Enthusiastic and dedicated individual with a passion for
              technology and a desire to excel in the field of software
              engineering. Eager to leverage my strong problem-solving skills,
              attention to detail, and commitment to continuous learning and
              contribute to innovative projects.
            </p>

            <p>
              Strong written and verbal communication skills developed through
              coursework and public speaking engagements. Self-motivated and
              eager to learn, with a demonstrated ability to quickly grasp new
              concepts and solid experience leveraging Artificial Intelligence,
              to enhance user experiences, optimize processes, and make
              data-driven decisions.
            </p>

            <button>
              <Link to="/contact">Contact me</Link>
            </button>
          </div>
        </div>
      </div>
      <div className="skills">
        <h1>
          My Skills <i className="fa-solid fa-arrow-left" id="arrow"></i>
        </h1>

        <div className="skillIcons">
          <div className="icons">
            <i className="fa-brands fa-html5" id="icon"></i>
            <h5>HTML</h5>
          </div>

          <div className="icons">
            <i class="fa-brands fa-css3" id="icon"></i>
            <h5>CSS</h5>
          </div>

          <div className="icons">
            <i class="fa-brands fa-js" id="icon"></i>
            <h5>JavaScript</h5>
          </div>

          <div className="icons">
            <i class="fa-brands fa-react" id="icon"></i>
            <h5>React</h5>
          </div>

          <div className="icons">
            <i class="fa-brands fa-python" id="icon"></i>
            <h5>Python</h5>
          </div>

          <div className="icons">
            <i class="fa-brands fa-git" id="icon"></i>
            <h5>Git</h5>
          </div>

          <div className="icons">
            <i class="fa-brands fa-linux" id="icon"></i>
            <h5>Linux</h5>
          </div>

          <div className="icons">
            <i class="fa-solid fa-c" id="icon"></i>
            <h5>C</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

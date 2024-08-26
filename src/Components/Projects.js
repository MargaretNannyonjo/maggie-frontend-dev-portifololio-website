import React from "react";
import safari from "../images/safari-screen.png";
import uh from "../images/uh-page.png";
import linear from "../images/gradient.png";
import books from "../images/virtual-care-screen.png";
import { Link } from "react-router-dom";

export const Projects = () => {
  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="container">
        <div className="card">
          <img src={books} alt="Virtualcare" />
          <p>
            <span style={{ fontWeight: "bold" }}>Virtual Care:</span>: Designed
            to facilitate online consultations with healthcare experts, allowing
            patients to receive medical advice, diagnoses, and treatment from
            the comfort of their homes.
          </p>

          <Link
            to="https://virtalcare-services.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <button>Live Demo </button>
          </Link>
        </div>

        <div className="card">
          <img src={safari} alt="SafariQuest" />
          <p>
            <span style={{ fontWeight: "bold" }}>Safari Quest:</span>{" "}
            Captivating stories, stunning visuals, and delightful recipes take
            you on a global culinary journey. Explore diverse cultures and savor
            the universal language of food .
          </p>

          <Link
            to="https://safariquest-adventure.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <button> Live Demo</button>
          </Link>
        </div>

        <div className="card">
          <img src={uh} alt="UnityHospital" />
          <p>
            <span style={{ fontWeight: "bold" }}>Unity Hospital:</span>: Your
            gateway to essential medical info, services, and resources. Explore
            healthcare options, find expert professionals, and discover
            patient-centric programs with ease.
          </p>

          <Link
            to="https://margaretnannyonjo.github.io/hospital-landing_page/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <button>Live Demo</button>
          </Link>
        </div>

        <div className="card">
          <img src={linear} alt="Colorgradient" />

          <p>
            <span style={{ fontWeight: "bold" }}>Color Wave:</span> Explore a
            spectrum of hues and witness real-time background changes. An
            intuitive tool for enhancing web designs and visual projects
            effortlessly.
          </p>

          <Link
            to="https://margaretnannyonjo.github.io/make-your_gradients/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <button> Live Demo </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

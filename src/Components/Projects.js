import React from "react";
import safari from "../images/safari-screen.png";
import vista from "../images/vroomvista.png";
import uh from "../images/uh-page.png";
import linear from "../images/gradient.png";
import books from "../images/virtual-care-screen.png";

export const Projects = () => {
  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="container">
        <div className="card">
          <img src={safari} alt="" />
          <p>
            Safari Quest: A food and travel destination where captivating
            stories, stunning visuals, and delightful recipes take you on a
            global culinary journey. Explore diverse cultures and savor the
            universal language of food with every bite.
          </p>
          <button>
            <a
              href="https://safariquest-adventure.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </button>
        </div>

        <div className="card">
          <img src={books} alt="" />
          <p>
            Virtual Care: Designed to facilitate online consultations with
            healthcare experts, allowing patients to receive medical advice,
            diagnoses, and treatment from the comfort of their homes.
          </p>

          <button>
            <a
              href=" https://virtual-care-telemedicine.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </button>
        </div>

        <div className="card">
          <img src={vista} alt="" />
          <p>
            VroomVista: Your go-to car rental platform for a seamless,
            hassle-free experience. Explore a diverse fleet, transparent
            policies, and competitive rates. Elevate your travel with effortless
            vehicle booking for business or leisure.
          </p>

          <button>
            <a
              href=" https://margaretnannyonjo.github.io/car-renting/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </button>
        </div>

        <div className="card">
          <img src={uh} alt="" />
          <p>
            Unity Hospital website: Your gateway to essential medical info,
            services, and resources. Explore healthcare options, find expert
            professionals, and discover patient-centric programs with ease.
          </p>

          <button>
            <a
              href=" https://margaretnannyonjo.github.io/hospital-landing_page/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </button>
        </div>

        <div className="card">
          <img src={linear} alt="" />

          <p>
            Color Wave Explorer: Dive into creativity with this project,
            enabling users to craft personalized gradient color combinations.
            Explore a spectrum of hues and witness real-time background changes.
            An intuitive tool for enhancing web designs and visual projects
            effortlessly.
          </p>

          <button>
            <a
              href=" https://margaretnannyonjo.github.io/make-your_gradients/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

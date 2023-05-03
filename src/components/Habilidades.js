import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import html5 from "../assets/images/Skills/html5.svg";
import css3 from "../assets/images/Skills/css3-original.fe70a3d1.svg";
import js from "../assets/images/Skills/javascript-original.svg";
import react from "../assets/images/Skills/react-original-wordmark.svg";
import boostrap from "../assets/images/Skills/boostrap.svg";
import tailwind from "../assets/images/Skills/tailwindcss-plain.f4af2906.svg";
import material from "../assets/images/Skills/material-ui-svgrepo-com.svg";
import sass from "../assets/images/Skills/sass.svg";
import sqlserver from "../assets/images/Skills/microsoft-sql-server-logo-svgrepo-com.svg";
import firebase from "../assets/images/Skills/firebase-plain-wordmark.svg";
import github from "../assets/images/Skills/gitHub.svg";
import git from "../assets/images/Skills/git-original-wordmark.svg";

class Habilidades extends React.Component {
  render() {
    return (
      <React.Fragment>
        {/* Skills Section */}

        <div id="skills" className="skills">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Habilidades</h2>
            </div>

            <div className="skills-wrapper">
              <div clasName="first-set animate__animated animate__pulse">
                <img
                  src={html5}
                  alt=""
                  loading="lazy"
                  className="icon icon-card"
                />
                <img
                  src={css3}
                  alt=""
                  loading="lazy"
                  className="icon icon-card"
                />
                <img
                  src={js}
                  alt=""
                  loading="lazy"
                  className="icon icon-card"
                />
                <img
                  src={react}
                  alt=""
                  loading="lazy"
                  className="icon icon-card"
                />
              </div>

              <div className="second-set animate__animated animate__pulse">
                <img
                  src={boostrap}
                  alt=""
                  loading="lazy"
                  className="icon icon-card"
                />
                <img
                  src={tailwind}
                  alt=""
                  loading="lazy"
                  className="icon icon-card"
                />
                <img
                  src={material}
                  alt=""
                  loading="lazy"
                  className="icon icon-card"
                />
                <img
                  src={sass}
                  alt=""
                  loading="lazy"
                  className="icon icon-card"
                />
                <div clasName="tirt-set animate__animated animate__pulse">
                  <img
                    src={sqlserver}
                    alt=""
                    loading="lazy"
                    className="icon icon-card"
                  />
                     <img
                  src={firebase}
                  alt=""
                  loading="lazy"
                  className="icon icon-card"
                />
                <img
                  src={github}
                  alt=""
                  loading="lazy"
                  className="icon icon-card"
                />
                <img
                  src={git}
                  alt=""
                  loading="lazy"
                  className="icon icon-card"
                />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Skills Section */}
      </React.Fragment>
    );
  }
}

export default Habilidades;

import React from "react";
import Fondo from "../assets/images/servicio.jpg";

class Slider extends React.Component {
  render() {
    return (
      <React.Fragment>
        {/*Full Page Image Header with Vertically Centered Content 
                    --Home-- */}

        <div id="Home" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={Fondo}
                className="img-fullscreen-home d-block w-100 opacity-75"
                alt="Home"
              ></img>
              <div className="carousel-caption d-flex flex-column justify-content-center h-100 m-auto">
                <h1 className="title-Home container-xl ">
                  <strong></strong> Front-End Developer
                </h1>
                <h1 className="title-Home-background container-xl ">
                  <strong></strong> Front-End Developer
                </h1>
                <p className="subtitle-home">Soy Maximiliano Paez</p>
                <a
                  className="button-slider btn btn-danger mt-5 "
                  href="#contact"
                  role="button"
                >
                  Contáctame
                </a>
              </div>
              <div className="arrow-home-slider d-flex">
                <a className="nav-link" href="#About">
                  <span className="animated">
                    <i className="fa-solid fa-chevron-down"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/*End Home*/}
      </React.Fragment>
    );
  }
}

export default Slider;

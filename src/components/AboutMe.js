import React, { Component } from "react";
import Foto from "../assets/images/12118740_10206995719844050_6654430610218142104_n-removebg.png";
import CVMaxi from "../assets/Download/CV Maxi.pdf";

class AboutMe extends Component {
  render() {
    return (
      <React.Fragment>
        {/* About Me */}
        <section id="About" className="container-about pt-5 ">
          <div className="clear-fix"></div>
          <div className="row mt-5">
            <div className="container-img-aboutme col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <img src={Foto} alt="Me" />
            </div>
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="row">
                <h4 className="h4-texto-about text-center">Sobre Mí</h4>
              </div>
              <div className="row">
                <p className="text-center">
                  Soy de Cordoba, Argentina. Tengo 29 años y mi trayectoria en
                  este hermoso rubro empieza en como Soporte de Sistema de
                  Software contable en una empresa de 30 años en el mercado.
                  Actualmente estoy estudiando un terciario de Desarrollo de
                  Software y estoy en el último año, ademas realizando cursos
                  con respecto a web por varias plataformas. Soy una persona que
                  me apasiona el desafio y conocer nuevas habilidades para
                  pulirlas lo mejor que se pueda.
                </p>
              </div>
              <div className="row">
                <p className="text-center">
                  <strong className="title-strong">
                    Quiero convertirme en Desarrollador Full Stack.
                  </strong>
                </p>
                <div className="button-Aboutme-container row">
                  <a
                    className="button-Aboutme btn btn-danger"
                    href={CVMaxi}
                    role="button"
                    target="_blank"
                  >
                    Ver CV
                  </a>
                  <a
                    className="button-Aboutme btn btn-outline-danger mt-3"
                    href={CVMaxi}
                    role="button"
                    download="CV Maximiliano Paez.pdf"
                  >
                    Descargar CV
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End About Me */}
      </React.Fragment>
    );
  }
}

export default AboutMe;

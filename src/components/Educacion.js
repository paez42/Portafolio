import React from "react";

class Educacion extends React.Component {
  render() {
    return (
      <React.Fragment>
        {/* Education*/}

        <div id="education">
          <h2 className="heading">Educación</h2>
          <div className="row">
            <div className="col-lg-6">
              <div className="education-block">
                <h3>
                  Técnico Superior en Desarrollo de Software - Inst Superior
                  Ramon Carrillo
                </h3>
                <span className="education-date">2021 - 2023</span>
                <h4>Desarrollo de Software</h4>
              </div>

              <div className="education-block">
                <h3>SQL Server</h3>
                <span className="education-date">2021 - 2022</span>
                <h4>SQL Server Moderado</h4>
              </div>

              <div className="education-block">
                <h3>Free Code Camp</h3>
                <span className="education-date">2022</span>
                <h4>Algoritmos de JavaScript y Estructuras de Datos</h4>
              </div>
              <div className="education-block">
                <h3>Udemy</h3>
                <span className="education-date">2023</span>
                <h4>
                  React JS Completo - Material UI - Taildwind - Firebase -
                  Formik - React Router Dom - Vite{" "}
                </h4>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="education-block">
                <h3>Free Code Camp</h3>
                <span className="education-date">2022</span>
                <h4>Librerías de desarrollo de la interfaz</h4>
              </div>

              <div className="education-block">
                <h3>Udemy</h3>
                <span className="education-date">2022</span>
                <h4>Creación de Paginas Web con HTML, CSS y Sass</h4>
              </div>

              <div className="education-block">
                <h3>Udemy</h3>
                <span className="education-date">Nov 2022 - 2023</span>
                <h4>
                  Master en Frameworks JavaScript: React Js - Redux - Rest - APi
                  Rest
                </h4>
              </div>
            </div>
          </div>
        </div>
        {/* End education */}
      </React.Fragment>
    );
  }
}

export default Educacion;

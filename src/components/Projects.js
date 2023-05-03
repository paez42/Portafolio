import React from "react";

class Projects extends React.Component {
  render() {
    return (
      <React.Fragment>
        {/* Projects */}
        <div id="projects" className="background-alt">
          <h2 className="heading">Proyectos</h2>
          <div className="container">
            <body className="d-flex flex-column h-100 bg-light">
              <main className="flex-shrink-0">
                <div className="py-5">
                  <div className="container px-5 mb-5">
                    <div className="row gx-5 justify-content-center">
                      <div className="col-lg-11 col-xl-9 col-xxl-8">
                        <div className="card overflow-hidden mb-5">
                          <div className="card-body p-0">
                            <div className="card-project d-flex align-items-center">
                              <div className="p-5">
                                <h3 className="fw-bolder">
                                  Rick and Morty APP
                                </h3>
                                <p>
                                  APP Basada en cards, donde se implementó
                                  trabajo de manipulación de API, agregando
                                  ruteo y varias herramientas de React Router
                                  Dom
                                </p>
                                <div className="button-Aboutme-container row">
                                  <a
                                    className="button-Aboutme btn btn-danger"
                                    href="./assets/Download/CV Maxi.pdf"
                                    role="button"
                                    target="_blank"
                                  >
                                    Ir a Web
                                  </a>
                                  <a
                                    className="button-Aboutme btn btn-outline-danger mt-3"
                                    href="./assets/Download/CV Maxi.pdf"
                                    role="button"
                                    download="CV Maximiliano Paez.pdf"
                                  >
                                    Repositorio GitHub
                                  </a>
                                </div>
                              </div>
                              <img
                                class="img-fluid"
                                src="https://dummyimage.com/300x400/343a40/6c757d"
                                alt="..."
                              />
                            </div>
                          </div>
                        </div>

                        <div className="card overflow-hidden">
                          <div className="card-body p-0">
                            <div className="card-project d-flex align-items-center">
                              <div className="p-5">
                                <h3 className="fw-bolder">CRUD API</h3>
                                <p>
                                  Se realizó un CRUD básico donde se uso Axios,
                                  Material UI, JSON Server para la simulacion
                                  del BackEnd, Firebase para la autenticación,
                                  Formik y Yup para validaciones, Rutas
                                  protegidas, Ruteo, etc. con React Router Dom.
                                  Ademas se le agregó un login para mostrar las
                                  validaciones realizadas
                                </p>
                                <div className="button-Aboutme-container row">
                                  <a
                                    className="button-Aboutme btn btn-danger"
                                    href="./assets/Download/CV Maxi.pdf"
                                    role="button"
                                    target="_blank"
                                  >
                                    Ir a Web
                                  </a>
                                  <a
                                    className="button-Aboutme btn btn-outline-danger mt-3"
                                    href="./assets/Download/CV Maxi.pdf"
                                    role="button"
                                    download="CV Maximiliano Paez.pdf"
                                  >
                                    Repositorio GitHub
                                  </a>
                                </div>
                              </div>
                              <img
                                className="img-fluid"
                                src="https://dummyimage.com/300x400/343a40/6c757d"
                                alt="..."
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
            </body>
          </div>
        </div>

        {/* End Projects */}
      </React.Fragment>
    );
  }
}

export default Projects;

import React from "react";

class Contacts extends React.Component {
  render() {
    return (
      <React.Fragment>
        {/* Contact me */}

        <section className="page-section" id="contact">
          <div className="container px-4 px-lg-5">
            <div className="row gx-4 gx-lg-5 justify-content-center">
              <div className="col-lg-8 col-xl-6 text-center">
                <h2 className="mt-0">Contáctame</h2>
              </div>
            </div>

            <form id="form" action="" className="row container-contactme">
              <div className="col-md-12 mt-3">
                <label for="validationDefault01" className="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="validationDefault01"
                  required
                />
              </div>

              <div className="col-md-12">
                <label
                  for="validationDefaultUsername"
                  className="form-label mt-3"
                >
                  E-Mail
                </label>
                <input
                  type="text"
                  name="email"
                  className="form-control"
                  id="validationDefault03"
                  required
                />
              </div>
              <div className="mb-3 mt-3">
                <label for="validationTextarea" className="form-label">
                  Mensaje
                </label>
                <textarea
                  className="form-control"
                  name="message"
                  id="validationTextarea"
                  placeholder=""
                  required
                ></textarea>
                <div className="invalid-feedback">Mensaje.</div>
              </div>

              <div className="col-12">
                <button type="submit" className="btn btn-danger mt-3 mb-5">
                  Enviar
                </button>
              </div>
            </form>

            {/* Envio de mail */}

            <a
              href="mailto:maxiipaez8@gmail.com"
              id="form-mail"
              className="opacity-0"
            >
              mail
            </a>

            {/* End Envio de mail */}

            <div className="row gx-4 gx-lg-5 justify-content-center">
              <div className="col-lg-4 text-center mb-5 mb-lg-0">
                <i className="bi-phone fs-2 mb-3 text-muted"></i>
                <div>3537-325637</div>
              </div>
            </div>
          </div>
        </section>

        {/* End Contact Me */}
      </React.Fragment>
    );
  }
}

export default Contacts;

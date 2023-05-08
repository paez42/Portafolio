import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

export const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tg5p6wk",
        "template_etyj84m",
        form.current,
        "uq67QpIdygYUcYSty"
      )
      .then(
        (result) => {
          console.log(result.text);
          mostrar();
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const mostrar = () => {
    Swal.fire({
      title: "E-Mail enviado correctamente!",
      text: "Muchas gracias",
      icon: "success",
      confirmButtonText: "ok",
    });
  };

  return (
    <>
      <section className="page-section" id="contact">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-lg-8 col-xl-6 text-center">
              <h2 className="mt-0">Contáctame</h2>
            </div>
          </div>

          <form
            id="form"
            action=""
            className="row container-contactme"
            ref={form}
            onSubmit={sendEmail}
          >
            <div className="col-md-12 mt-3">
              <label for="validationDefault01" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                name="user_name"
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
                type="email"
                name="user_email"
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

          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-lg-4 text-center mb-5 mb-lg-0">
              <i className="bi-phone fs-2 mb-3 text-muted"></i>
              <div>3537-325637</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contacts;

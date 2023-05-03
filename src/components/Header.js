import React from "react";
import Portafolio from '../assets/images/portafolio.png';

class Header extends React.Component {

    render() {

        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow fixed-top">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03"
                        aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <img className="img-navbar opacity-75" src={Portafolio} alt="Logotipo"></img>
                        <a className="navbar-brand" href="#Home">Portafolio</a>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                            <ul className="menu-navbar navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#Home">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#About">Sobre mí</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#Experience">Experiencia</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#education">Educación</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#skills">Habilidades</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#projects">Proyectos</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#contact">Contacto</a>
                                </li>
                            </ul>
                            {/* Social icons */}
                            <form className="d-flex">
                                <ul className="navbar-nav sm-icons mr-0 ">
                                    <li className="nav-item"><a className="nav-link" href="https://www.linkedin.com/in/maxi-paez/" target="_blank"><i
                                        className="bi bi-linkedin"></i></a></li>
                                    <li className="nav-item"><a className="nav-link" href="https://github.com/paez42" target="_blank"><i
                                        className="bi bi-github"></i></a></li>
                                    <li className="nav-item"><a className="nav-link" href="https://www.facebook.com/maaxipaez/" target="_blank"><i
                                        className="bi bi-facebook"></i></a></li>
                                    <li className="nav-item"><a className="nav-link" href="https://www.instagram.com/maxipaezz/" target="_blank"><i
                                        className="bi bi-instagram"></i></a></li>
                                </ul>
                            </form>
                            {/* End Social icons */}
                        </div>
                </div>
            </nav>
        );
    }
}

export default Header;
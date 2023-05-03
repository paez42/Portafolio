import React from "react";

class Experiencia extends React.Component {

    render() {
        return (
            <React.Fragment>
                {/* Experience */}

                <div className="experience-main pt-100 pb-100" id="Experience">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 mx-auto text-center">
                                <div className="section-title">
                                    <h4>Experiencia</h4>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12">
                                <ul className="timeline-list">
                                    <li>
                                        <div className="timeline_content">
                                            <span>2011 - 2023</span>
                                            <h4>Técnico de Software/Hardware</h4>
                                            <p>Instalación, Reparación, Consultoría en general para empresas.</p>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="timeline_content">
                                            <span>2018 - 2021</span>
                                            <h4>Ventas - Sistema de Facturación</h4>
                                            <p>Atencion al publico - Facturación - Control de Stock</p>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="timeline_content">
                                            <span>2021 - Actualmente</span>
                                            <h4>Soporte IT - Atila Software</h4>
                                            <p>Soporte general - Consultor SQL Server</p>
                                        </div>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Experience */}
            </React.Fragment>
        );
    }
}

export default Experiencia;
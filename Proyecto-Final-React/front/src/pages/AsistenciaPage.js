import React from "react";

const AsistenciaPage = (props) => {
    return (
        <div className="container">
            <div className="option">
                <img src="img/servicio-al-cliente.jpg" alt="Servicio al Cliente" />
                <p>Servicio al Cliente</p>
            </div>
            <div className="option">
                <img src="img/soporte-tecnico.jpg" alt="Soporte Técnico" />
                <p>Soporte Técnico</p>
            </div>
            <div className="option">
                <img src="img/asesor-energetico.jpg" alt="Asesoramiento Energético" />
                <p>Asesoramiento Energético</p>
            </div>
            <div className="option">
                <img src="img/Investigación-y-desarrollo.png" alt="Investigación & Desarrollo" />
                <p>Investigación & Desarrollo</p>
            </div>
            <div className="bottom-section">
            <div className="option">
                <img src="img/respuestas-emergencias.jpg" alt="Servicio al Cliente" />
                <p>Respuesta a emergencias</p>
            </div>
            <div className="option">
                <img src="img/educacion-capasitacion.jpg" alt="Soporte Técnico" />
                <p>Educación y capacitación</p>
            </div>
            </div>
        </div>        
    );
}

export default AsistenciaPage;
import React from "react";

const AsistenciaPage = (props) => {
    return (
        <div className="container">
            <div className="option">
                <img src="servicio_al_cliente.jpg" alt="Servicio al Cliente" />
                <p>Servicio al Cliente</p>
            </div>
            <div className="option">
                <img src="soporte_tecnico.jpg" alt="Soporte Técnico" />
                <p>Soporte Técnico</p>
            </div>
            {/* Repite este bloque para cada opción */}
        </div>
    );
}

export default AsistenciaPage;
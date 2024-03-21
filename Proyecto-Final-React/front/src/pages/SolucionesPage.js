import React from "react";

const SolucionesPage = (props) => {
    return (
        <div className="container">
            <header>
                <h1>Brindamos múltiples soluciones a distintas necesidades</h1>                
            </header>            
                <div className="services">
                    <div className="service">
                        <h3>Suministro de Energía</h3>
                        <p>Proporcionamos energía eléctrica, gas natural, petróleo y otros combustibles a clientes residenciales, comerciales e industriales.</p>
                    </div>
                    <div className="service">
                        <h3>Eficiencia Energética</h3>
                        <p>Ofrecemos servicios y productos para ayudar a utilizar la energía de manera más eficiente, como auditorías energéticas y tecnologías de gestión.</p>
                    </div>
                    <div className="service">
                        <h3>Energías Renovables</h3>
                        <p>Desarrollamos, instalamos y operamos sistemas de energía renovable, incluyendo paneles solares, turbinas eólicas y plantas hidroeléctricas.</p>
                    </div>
                    <div className="service">
                        <h3>Almacenamiento de Energía</h3>
                        <p>Proporcionar soluciones de almacenamiento de energía, como baterías, para optimizar la gestión de la energía y proporcionar respaldo en caso de interrupciones en el suministro.</p>
                    </div>
                    <div className="service">
                        <h3>Electromovilidad</h3>
                        <p>Implementar infraestructuras de carga para vehículos eléctricos y ofrecer soluciones integrales para la electrificación del transporte.</p>
                    </div>
                    <div className="service">
                        <h3>Gestión de Residuos Energéticos</h3>
                        <p>Desarrollar soluciones para el tratamiento y aprovechamiento de residuos energéticos, como la conversión de residuos en energía o biocombustibles.</p>
                    </div>
                </div>
        </div>

    );
}

export default SolucionesPage;
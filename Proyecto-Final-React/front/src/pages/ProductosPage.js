import React from "react";

const ProductosPage = (props) => {
    return (
        <body>
            <div className="productos">
                <div className="generacion">
                    <img src="img/generacion.jpg" alt="generacion" />
                    <h2>Generación de energía</h2>
                    <p>Centrales eléctricas: Incluyen plantas de energía térmica, hidroeléctricas, nucleares, eólicas y solares, entre otras. Estas instalaciones generan electricidad utilizando diferentes fuentes de energía.
                        Paneles solares y turbinas eólicas: Equipos específicos para la generación de energía renovable, como los paneles solares fotovoltaicos y las turbinas eólicas.</p>
                </div>
                <div className="transmision">
                    <img src="img/transmision.jpg" alt="generacion" />
                    <h2>Transmisión y distribución</h2>
                    <p>Transformadores: Dispositivos utilizados para cambiar el voltaje de la electricidad durante la transmisión y distribución.
                        Líneas de transmisión y subestaciones: Infraestructuras para transportar la electricidad desde las centrales eléctricas hasta los lugares de consumo.
                        Medidores eléctricos: Equipos para medir y gestionar el consumo de energía en hogares y negocios.</p>
                </div>
                <div className="almacenamiento">
                    <img src="img/almacenamiento.jpg" alt="generacion" />
                    <h2>Almacenamiento de energía</h2>
                    <p>Baterías y sistemas de almacenamiento: Almacenamiento de energía para gestionar la variabilidad de fuentes renovables y mejorar la estabilidad de la red eléctrica.</p>
                </div>
            </div>

            <div className="innovacion">
                <div className="smartgrid">
                    <img src="img/smart-grid.jpg" alt="smartgrid" />
                    <h2>Servicios de Red Inteligente</h2>
                    <p>Implementación de tecnologías que permiten la monitorización y control avanzado de la red eléctrica.</p>
                </div>
                <div className="invydesa">
                    <img src="img/invydesa.jpg" alt="invydesa" />
                    <h2>Investigación y Desarrollo</h2>
                    <p>Inversión en proyectos de investigación y desarrollo para nuevas tecnologías y métodos de generación y distribución de energía.</p>
                </div>
            </div>
        </body>
    );
}

export default ProductosPage;

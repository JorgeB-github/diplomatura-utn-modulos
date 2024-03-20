import React from 'react';
import { Link } from "react-router-dom"

const Nav = (props) => {
    return (
        <nav>                  
                    <Link to="/">Nosotros</Link>
                    <Link to="/productos">PRODUCTOS</Link>
                    <Link to="/asistencia">ASISTENCIA</Link>
                    <Link to="/soluciones">SOLUCIONES</Link>              
        </nav>
    );
}

export default Nav; 
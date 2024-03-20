import React from "react";

const FormPage = (props) => {
    return (
        <form className="row g-3">
        <div className="col-md-6">
          <label htmlFor="inputnombre" className="form-label">Nombre</label>
          <input type="text" className="form-control" id="inputnombre" />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputapellido" className="form-label">Apellido</label>
          <input type="text" className="form-control" id="inputapellido" />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">Email</label>
          <input type="email" className="form-control" id="inputEmail4" />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword4" className="form-label">Password</label>
          <input type="password" className="form-control" id="inputPassword4" />
        </div>
        <div className="col-12">
          <label htmlFor="inputdireccion" className="form-label">Direccion</label>
          <input type="text" className="form-control" id="inputdireccion" />
        </div>     
        <div className="col-md-6">
          <label htmlFor="inputciudad" className="form-label">Ciudad</label>
          <input type="text" className="form-control" id="inputciudad" />
        </div>
        <div className="col-md-4">
          <label htmlFor="inputpais" className="form-label">País</label>
          <select id="inputpais" className="form-select">
            <option selected>Seleccione una opcion...</option>
            <option>Argentina</option>
            <option>Chile</option>
          </select>
        </div>        
        <div className="col-12">
          <button type="submit" className="btn btn-primary">Registrarse</button>
        </div>
      </form>
    );
}

export default FormPage;

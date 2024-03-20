import { BrowserRouter, Routes, Route } from 'react-router-dom';  

import React from 'react';

import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Nav from './components/layout/Nav';

import AsistenciaPage from './pages/AsistenciaPage';
import NosotrosPage from './pages/NosotrosPage';
import ProductosPage from './pages/ProductosPage';
import SolucionesPage from './pages/SolucionesPage';
import FormPage from './pages/FormPage';

import './styles/components/layout/Nav.css'
import './styles/components/layout/Header.css'
import './styles/components/layout/Footer.css'

import './styles/components/pages/NosotrosPage.css'
import './styles/components/pages/ProductosPage.css'
import './styles/components/pages/FormPage.css'


function App() {
  return (
    <div className="App">
      <Header></Header>

      <BrowserRouter>
        <Nav></Nav>
        <Routes>
          <Route path='/' element ={<NosotrosPage />} />
          <Route path='productos' element ={<ProductosPage />} />
          <Route path='asistencia' element ={<AsistenciaPage />} />
          <Route path='soluciones' element ={<SolucionesPage />} />
          <Route path='form' element ={<FormPage />} />          
        </Routes>
      </BrowserRouter>

      <Footer></Footer>
    </div>
  );
}

export default App;

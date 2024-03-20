import { BrowserRouter, Routes, Route } from "react-router-dom"
import React from 'react'

import Heder from './componentes/layout/Header';
import Nav from './componentes/layout/Nav';
import Footer from './componentes/layout/Footer';

import ContactoPage from './pages/ConstactoPage';
import HomePage from './pages/HomePage';
import NosotrosPage from './pages/NosotrosPage';
import NovedadesPage from './pages/NovedadesPage';

function App() {
  return (
    <div className="App">
      <Heder></Heder>

      <BrowserRouter>
        <Nav></Nav>
          <Routes>
          <Route path="/" element={<HomePage />} />
            <Route path="nosotros" element={<NosotrosPage />} />
            <Route path="novedades" element={<NovedadesPage />} />
            <Route path="contacto" element={<ContactoPage />} />
          </Routes>
      </BrowserRouter>
      
      <Footer></Footer>
    </div>
  );
}


export default App;

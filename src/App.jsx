import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import NavBar from './components/Nav/NavBar';
import About from './pages/About/About';
import Products from './pages/Products/Product';
import Contact from './pages/Contact/Contact';
import Error404 from "./pages/Error404/Error404";
import Detail from "./pages/Detail/Detail";
/*Servicios*/ 
import Servicios from "./pages/Servicios/Servicios";
import ServiciosHome from "./pages/Servicios/ServiciosHome";
import ServiciosLista from "./pages/Servicios/ServiciosLista";
import ServiciosGarantia from "./pages/Servicios/ServiciosGarantia";
import ServiciosPoliticas from "./pages/Servicios/ServiciosPoliticas";

import { useState } from "react";
/*Registros*/
import Registros from './pages/Registros/Registros';
import DetailDatos from "./pages/Detail/Detail Base de Datos";
/*Imagenes*/
import imgInmueble from "/img/datos-inmueble.jpg"
import imgOrdenTrabajo from "/img/orden-de-trabajo.jpg"
import imgInsumos from "/img/insumos-medicos.jpg"
import imgInventarios from "/img/inventarios-de-equipos.jpg"
import imgPersonal from "/img/datos-personal.jpg"

function App() {
  //Codigo JavaScript aca.....
  const [productos, setProductos] = useState([
      {id:1, nombre:"producto 1", precio:100},
      {id:2, nombre:"producto 2", precio:200},
      {id:3, nombre:"producto 3", precio:300},
      {id:4, nombre:"producto 4", precio:400},
    ]);
  const [regs, setReg] = useState([
      {id:1, nombre:"Ordenes de trabajo", url:imgOrdenTrabajo},
      {id:2, nombre:"Solicitud de materiales", url:imgInsumos},
      {id:3, nombre:"Inventario de equipos", url:imgInventarios},
      {id:4, nombre:"Datos del inmueble", url:imgInmueble},
      {id:5, nombre:"Datos del personal", url:imgPersonal},
    ]);
    
  return (
    <div>
      <div className="zocaloSuperior">
        <h4> Contacto: clinica@serv.mantenimiento.com.ar </h4>
        <h4> Emergencias: 54-9-261-3542741 / 54-9-261-98752461 </h4>
      </div>
      <BrowserRouter>
          <Header />
          <NavBar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products productos={productos} />} />
          <Route path="/products/:id" element={<Detail productos={productos} />} />

          <Route path="/servicios"  element={<Servicios />} >
            <Route index element={<ServiciosHome />}/>
            <Route path="/servicios/lista" element={<ServiciosLista />} />
            <Route path="/servicios/garantia" element={<ServiciosGarantia />} />
            <Route path="/servicios/politicas" element={<ServiciosPoliticas/>} />
          </Route>

          <Route path="/registros" element={<Registros regs={regs} />} />
          <Route path="/registros/:id" element={<DetailDatos regs={regs} />} />

          <Route path="/contact"  element={<Contact />} />
          <Route path="*"  element={<Error404 />} />
        </Routes>      
      </BrowserRouter>
    </div>
  )
}

export default App

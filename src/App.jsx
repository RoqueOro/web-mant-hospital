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
/*Registros*/ 
import Registros from './pages/Registros/Registros';
import RegistrosHome from './pages/Registros/RegistrosHome';
import OrdenesDeTrabajo from './pages/Registros/Ordenes de Trabajo';
import SolicitudDeMateriales from './pages/Registros/Solicitud de Materiales';
import InventarioDeEquipos from './pages/Registros/Inventario de Equipos';
import DatosInmueble from './pages/Registros/Datos del Inmueble';
import DatosPersonal from './pages/Registros/Datos del Personal';
import { useState } from "react";
/*Reg*/
import Registro from "./pages/Products/Reg"
import DetailReg from "./pages/Detail/DetailReg"

function App() {
  //Codigo JavaScript aca.....
  const [productos, setProductos] = useState([
      {id:1, nombre:"producto 1", precio:100},
      {id:2, nombre:"producto 2", precio:200},
      {id:3, nombre:"producto 3", precio:300},
      {id:4, nombre:"producto 4", precio:400},
    ]);
  const [regs, setReg] = useState([
      {id:1, nombre:"Ordenes de trabajo"},
      {id:2, nombre:"Solicitud de materiales"},
      {id:3, nombre:"Inventario de equipos"},
      {id:4, nombre:"Datos del inmueble"},
      {id:5, nombre:"Datos del personal"},
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
          
          <Route path="/regs" element={<Registro regs={regs} />} />
          <Route path="/regs/:id" element={<DetailReg regs={regs} />} />

          <Route path="/servicios"  element={<Servicios />} >
            <Route index element={<ServiciosHome />}/>
            <Route path="/servicios/lista" element={<ServiciosLista />} />
            <Route path="/servicios/garantia" element={<ServiciosGarantia />} />
            <Route path="/servicios/politicas" element={<ServiciosPoliticas/>} />
          </Route>

          <Route path="/registros"  element={<Registros />} >
          <Route index element={<RegistrosHome />}/>
            <Route path="/registros/trabajo" element={<OrdenesDeTrabajo />} />
            <Route path="/registros/materiales" element={<SolicitudDeMateriales />} />
            <Route path="/registros/inventarios" element={<InventarioDeEquipos />} />
            <Route path="/registros/datosInmueble" element={<DatosInmueble />} />
            <Route path="/registros/datosPersonal" element={<DatosPersonal />} />
          </Route>

          <Route path="/contact"  element={<Contact />} />
          <Route path="*"  element={<Error404 />} />
        </Routes>      
      </BrowserRouter>
    </div>
  )
}

export default App

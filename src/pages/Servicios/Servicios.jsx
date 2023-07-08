import { Link, Outlet } from "react-router-dom";

const Servicios = () => {
  
    return(
    <div>
        <h1>Nuestros servicios</h1>
        <nav>
            <Link to="/servicios">Inicio</Link>
            <Link to="/servicios/lista">Lista</Link>
            <Link to="/servicios/garantia">Garantía</Link>
            <Link to="/servicios/politicas">Politíca</Link>
        </nav>
        <Outlet />
    </div>        
    )
}

export default Servicios;
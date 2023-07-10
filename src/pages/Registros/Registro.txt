import { Link, Outlet } from "react-router-dom";
import styles from "./Registros.module.css"
import imgInmueble from "/img/datos-inmueble.jpg"
import imgOrdenTrabajo from "/img/orden-de-trabajo.jpg"
import imgInsumos from "/img/insumos-medicos.jpg"
import imgInventarios from "/img/inventarios-de-equipos.jpg"
import imgPersonal from "/img/datos-personal.jpg"


const Registros = () => {
    
    return(
    <div>
        <h2>{"[ REGISTRO DE DATOS ]"}</h2>
        <nav className={styles.barraNavegacion}>
            <Link to="/registros">Inicio</Link>
            <Link to="/registros/trabajo" className={styles.links}>
                <div className={styles.contenedor}>
                <img src={imgOrdenTrabajo} className={styles.imagenes} alt="Ordenes de trabajo"></img>
                <h3 className={styles.titulo}>ORDENES DE TRABAJO</h3>
                </div>
            </Link>
            <Link to="/registros/materiales" className={styles.links}>
                <div className={styles.contenedor}>
                <img src={imgInsumos} className={styles.imagenes} alt="Solicitud de materiales y repuestos"></img>
                <h3 className={styles.titulo}>SOLICITUD DE MATERIALES Y REPUESTOS</h3>
                </div>
            </Link>
            <Link to="/registros/inventarios" className={styles.links}>
                <div className={styles.contenedor}>
                <img src={imgInventarios} className={styles.imagenes} alt="Inventario de equipos"></img>
                <h3 className={styles.titulo}>INVENTARIO DE EQUIPOS</h3>
                </div>
            </Link>
            <Link to="/registros/datosInmueble" className={styles.links}>
                <div className={styles.contenedor}>    
                <img src={imgInmueble} className={styles.imagenes} alt="Base de datos del inmueble"></img>
                <h3 className={styles.titulo}>BASE DE DATOS INICIAL</h3>
                </div>
            </Link>
            <Link to="/registros/datosPersonal" className={styles.links}>
                <div className={styles.contenedor}>    
                <img src={imgPersonal} className={styles.imagenes} alt="Base de datos del personal"></img>
                <h3 className={styles.titulo}>BASE DE DATOS PERSONAL</h3>
                </div>
            </Link>
        </nav>
        <Outlet/>
    </div>        
    )
}

export default Registros;

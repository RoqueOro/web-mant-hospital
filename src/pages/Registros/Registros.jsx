import { Link, Outlet } from "react-router-dom";
import styles from "./Registros.module.css"

const Registros = ({ regs}) => {
    
    return(
    <div>
        <p>Está sección ha sido diseñada con el objetivo de proveer a los empleados de la institución de una plataforma para poder realizar sus pedido de reparación, materiales y proveer informacion acerca del inmueble y el personal de mantenimiento que resolverá sus solitud.</p>
        <nav className={styles.barraNavegacion}>
          {regs.map((producto)=> (
            <Link to={`/registros/${producto.id}`} key={producto.id}  className={styles.links}>
              <div className={styles.contenedor} >
              <img src={producto.url} className={styles.imagenes} alt="Ordenes de trabajo"></img>
              <h3 className={styles.titulo}>{producto.nombre}</h3>
              </div>
            </Link>
            ))}
        </nav>
        <Outlet/>
    </div>        
    )
}

export default Registros;

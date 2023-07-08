import {Link,NavLink} from "react-router-dom";
import styles from "./NavBar.module.css"

const NavBar= () => {
    return(
        <div className={styles.contenedor}>
            <nav className={styles.barraNavegacion} >
                <NavLink className={({isActive}) => isActive ? styles["activeLink"]: null} to="/about"> ABOUT </NavLink>
                <NavLink className={({isActive}) => isActive ? styles["activeLink"]: null} to="/products"> PRODUCTS </NavLink>
                <NavLink className={({isActive}) => isActive ? styles["activeLink"]: null} to="/regs"> REGISTROS </NavLink>
                <NavLink className={({isActive}) => isActive ? styles["activeLink"]: null} to="/servicios"> SERVICIOS </NavLink>
                <NavLink className={({isActive}) => isActive ? styles["activeLink"]: null} to="/registros"> REGISTRO DE DATOS </NavLink>
                <NavLink className={({isActive}) => isActive ? styles["activeLink"]: null} to="/contact"> CONTACT </NavLink>
                <Link to="/inexistente"> Error 404 </Link>
            </nav>
        </div>
    )
}
export default NavBar;
import {Link,NavLink} from "react-router-dom";
import styles from "./NavBar.module.css"
import {useState} from "react"

const NavBar= () => {
    const [isOpen, setIsOpen] = useState(false);

    return(
        <div className={`${styles.contenedor} ${isOpen && styles.open}`}>
            <div className={styles.navlogo}> <p>{"CSM"}</p> </div>

            <div className={`${styles.navbar} ${isOpen && styles.open}`} >
                <NavLink className={({isActive}) => isActive ? styles["activeLink"]: null} to="/about"> <p className={styles.nav_items}> {"ABOUT"} </p> </NavLink>
                <NavLink className={({isActive}) => isActive ? styles["activeLink"]: null} to="/products"> <p className={styles.nav_items}> {"PRODUCT"} </p> </NavLink>
                <NavLink className={({isActive}) => isActive ? styles["activeLink"]: null} to="/servicios"> <p className={styles.nav_items}> {"MANTENIMIENTO PREVENTIVO"} </p>  </NavLink>
                <NavLink className={({isActive}) => isActive ? styles["activeLink"]: null} to="/registros"> <p className={styles.nav_items}> {"REGISTRO DE DATOS"} </p>  </NavLink>
                <NavLink className={({isActive}) => isActive ? styles["activeLink"]: null} to="/contact"> <p className={styles.nav_items}> {"CONTACT"} </p>  </NavLink>
                <Link to="/inexistente" className={styles.error404}> Error 404 </Link>
            </div>

            <div className={`${styles.nav_toggle} ${isOpen && styles.open}`} onClick={() => setIsOpen(!isOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}
export default NavBar;

//{isOpen && ( <div className={styles.aboutContainer}> <About /> </div> )}
import styles from "./Footer.module.css"

const Header= () => {
    return(
        <div className={styles.contenedor}>
            <p>{"Contacto: clinica@serv.mantenimiento.com.ar "}</p>
            <p>{"Emergencias: 54-9-261-3542741 / 54-9-261-98752461"}</p>
        </div>
    )
}
export default Header;
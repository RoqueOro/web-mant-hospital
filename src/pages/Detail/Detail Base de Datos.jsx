import { useParams } from "react-router-dom";
import OrdenesDeTrabajo from '../Registros/Ordenes de Trabajo';
import SolicitudDeMateriales from '../Registros/Solicitud de Materiales';
import InventarioDeEquipos from '../Registros/Inventario de Equipos';
import DatosInmueble from '../Registros/Datos del Inmueble';
import DatosPersonal from '../Registros/Datos del Personal';
import Error404 from "../Error404/Error404";

const DetailDatos = ({ regs }) => {

    const {id} = useParams();   
    const producto = regs.find((producto) => producto.id.toString() === id);


    //Mostrar componentes
    let componentToRender;

    switch (id) {
      case "1":
        componentToRender = <OrdenesDeTrabajo />;
        break;
      case "2":
        componentToRender = <SolicitudDeMateriales />;
        break;
      case "3":
        componentToRender = <InventarioDeEquipos />;
        break;
      case "4":
        componentToRender = <DatosInmueble />;
        break;
      case "5":
        componentToRender = <DatosPersonal />;
        break;
      default:
        componentToRender = <Error404 />;
    }

    return(
    <div>
        {componentToRender}    
    </div>        
    )
}

export default DetailDatos;
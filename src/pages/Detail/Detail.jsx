import { useParams, useNavigate } from "react-router-dom";

const Detail = ({ productos }) => {
  
    const {id} = useParams();
    const navigate = useNavigate();
    
    const producto = productos.find((producto) => producto.id.toString() === id);

    function handleGoBack() {
      navigate(-1);
    }

    return(
    <div>
        <h1>Detalle del producto</h1>
        <h2>nombre: {producto.nombre}</h2>
        <h3>${producto.precio}</h3>     
        <h4>id:{producto.id}</h4>
        <button onClick={handleGoBack}> Regresar </button>     
    </div>        
    )
}

export default Detail;
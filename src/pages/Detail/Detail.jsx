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
        <h2>{producto.nombre}</h2> 
        <p>Estos son nuestro productos y servicios que vamos a ofrecer</p>
        <h3>{producto.id}</h3>
        <button onClick={handleGoBack}> Regresar </button>     
    </div>        
    )
}

export default Detail;
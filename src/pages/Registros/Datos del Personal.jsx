import { useNavigate } from "react-router-dom";

const DatosPersonal = () => {
    const navigate = useNavigate();

    function handleGoBack() {
        navigate(-1);
    }
    return(
    <div>
        <h2>Datos del Personal</h2>
        <hr></hr>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius numquam excepturi hic dignissimos! Suscipit, quas ea earum quibusdam in nihil aliquid nobis ex eum, commodi nisi est quam architecto quaerat.</p>
        <hr></hr>
        <button onClick={handleGoBack}> Regresar </button> 
    </div>        
    )
}

export default DatosPersonal;
import {Link} from "react-router-dom";

const Reg = ({ regs }) => {
  
    return(
    <div>
      <section>
        Aquí se muestran tus registros
        <h2>{"[ Registros ]"}</h2>
        <ul>
          {regs.map((producto)=> (
            <li key={producto.id}>
            <Link to={`/regs/${producto.id}`}>{producto.nombre}</Link>
            </li>
            ))}
        </ul>
      </section>

      <input type="number" id="input-precio" placeholder="Filtrado por precio"></input>
      <button id="button-precio">Filtrar por precio</button>
      
      <div id="product-list"></div>
      <div id="categorias-container"></div>       
    </div>        
    )
}

export default Reg;
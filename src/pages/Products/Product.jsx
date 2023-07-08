import {Link} from "react-router-dom";

const Products = ({productos}) => {
  
    return(
    <div>
      <section>
        Aquí se muestran tus productos
        <h2>{"[ PRODUCTOS ]"}</h2>
        <ul>
          {productos.map((producto)=> (
            <li key={producto.id}>
            <Link to={`/products/${producto.id}`}>{producto.nombre}</Link>
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

export default Products;
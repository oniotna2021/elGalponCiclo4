import { useEffect, useState } from 'react';
import PageWrapper from './PageWrapper';
import Paginacion from './Paginacion';
import Producto from './Producto';

import axios from 'axios';

export default function LogicShop() {

    const [paginaActual, setPaginaActual] = useState(1);
    const [productos, setProductos]=useState([]);
    const TOTAL_POR_PAGINA = 3;

    useEffect(()=>{
        buscarProductos();
    }, []); 
  
      const buscarProductos=()=>{
      let url='http://localhost:4000/api/producto';
      axios.get(url)
      .then(res => {
        setProductos(res.data)
      })
      .catch((error) => {
        console.log(error); 
      });   
    }  
  
    const getTotalPaginas = () => {
      let cantidadTotalDeProductos = productos.length;
      return Math.ceil(cantidadTotalDeProductos / TOTAL_POR_PAGINA);
    }
  
    let productPagina= productos.slice(
        (paginaActual - 1) * TOTAL_POR_PAGINA,
        paginaActual * TOTAL_POR_PAGINA
    );
  
    return (
      <PageWrapper>
  
        {productPagina.map(producto =>
          <Producto key={producto._id} identidad={producto._id} nombre={producto.nombre} categoria={producto.categoria}
            precio={producto.precio_venta} 
            img={producto.imagen}>
            {producto.detalle}
          </Producto>
        )}
  
        <Paginacion pagina={paginaActual} total={getTotalPaginas()} onChange={(pagina) => {
          setPaginaActual(pagina)
        }} />
  
      </PageWrapper>
    );
  }
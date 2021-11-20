import React from 'react'
import { useParams } from 'react-router'
import {db} from "../../db"

function SpecificProduct(){
    let {productId} = useParams();
        return (
            <div>
               <div className='productElement'>
                  <h3>{db[productId].nombre.toLocaleUpperCase()}</h3>
                  <br />                  
                  <img 
                  src={db[productId].imagen} 
                  alt={db[productId].nombre} 
                  className='productImg' 
                  />
                  <ol>
                    <li>Inventario: {db[productId].unidades} </li>
                    <li>Precio compra: {db[productId].precio_compra} </li>
                    {/* <li>Precio venta: {db[productId].precio_venta} </li> */}
                    <li>Detalle: {db[productId].detalle} </li>

                  </ol>
                  
               </div>   
            </div>
        )

}

export default SpecificProduct;

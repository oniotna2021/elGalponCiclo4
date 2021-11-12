import React from 'react'
import { useParams } from 'react-router'
import {db} from "../../db"
import {Link} from 'react-router-dom'

function SpecificProduct(){
    let {productId} = useParams();
        return (
            <div>
               <div className='productElement'>
                  <h3>{db[productId].productName.toLocaleUpperCase()}</h3>

                  <Link to={'/Products/'+ db[productId].productId}>
                  <img 
                  src={db[productId].productImage} 
                  alt={db[productId].productName} 
                  className='productImg' 
                  />
                  <ol>
                    <li>product Stock: {db[productId].productStock} </li>
                    <li>product Price: {db[productId].productPrice} </li>
                    <li>product Sale Price: {db[productId].productSalePrice} </li>
                    <li>Rating: {db[productId].rating} </li>

                  </ol>
                  </Link>
               </div>   
            </div>
        )

}

export default SpecificProduct;

import React from 'react'
import { useParams } from 'react-router'
import {useEffect, useState} from 'react';
import axios from "axios";

import '../Style/css/bootstrap.min.css';
import '../Style/css/style.css';

export default function SpecificProduct(){

  let {id} = useParams();

  const [producto, setProducto]= useState([]);
  const [carrito, setCarrito]= useState([]);

  useEffect(()=>{
    peticionProductGet();
  },[])


    
  const agregarAlCarrito=()=>{
  
    fetch('http://localhost:4000/api/carrito',{
        method:'POST',
        body: JSON.stringify(carrito),
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        }
    }).then(res => res.json())
    .then(data => {
        console.log(data);
    })
    .then( alert('Producto registrado'))
    .catch(err => console.error(err))
    // console.log(this.state);

   
}

  const peticionProductGet=async ()=>{
    await axios.get('http://localhost:4000/api/producto/'+id)
    .then(response=>{
      setProducto(response.data);
      setCarrito(
          { 
              email: localStorage.getItem('email'),
              id_dbproducto: response.data.id_dbproducto,
              nombre:response.data.nombre,
              cantidad: 1,
              productId: response.data.productId,
              precio_venta: response.data.precio_venta
            }
            )
    })
    .catch(error=>{
      console.log(error);
    })
  }
  return (
      <div>
        <div class="page-wrapper">

          <main class="main">
          <br/><br/>

              <div class="page-content">
                  <div class="container">
                      <div class="product-details-top">
                          <div class="row">
                              <div class="col-md-6">
                                  <div class="product-gallery product-gallery-vertical">
                                      <div class="row">
                                          <figure class="product-main-image">
                                              <img id="product-zoom" src={producto.imagen} data-zoom-image="assets/images/products/single/1-big.jpg" alt="product image"/>

                                              <a href="#" id="btn-product-gallery" class="btn-product-gallery">
                                                  <i class="icon-arrows"></i>
                                              </a>
                                          </figure>

                                          <div id="product-zoom-gallery" class="product-image-gallery">
                                              <a class="product-gallery-item active" href="#" data-image="assets/images/products/single/1.jpg" data-zoom-image="assets/images/products/single/1-big.jpg">
                                                  <img src={producto.imagen} alt="product side"/>
                                              </a>
                                          </div>
                                      </div>
                                  </div>
                              </div>

                              <div class="col-md-6">
                                  <div class="product-details">
                                      <h1 class="product-title">{producto.nombre}</h1>

                                      <div class="ratings-container">
                                          <div class="ratings">
                                              <div class="ratings-val" ></div>
                                          </div>
                                          <a class="ratings-text" href="#product-review-link" id="review-link">( 2 vistas )</a>
                                      </div>

                                      <div class="product-price">
                                          $ {producto.precio_venta}
                                      </div>

                                      <div class="product-content">
                                          <p>{producto.detalle} </p>
                                      </div>

                                  

                                      <div class="product-details-action">                        
                                          <button onClick={()=> agregarAlCarrito() } className="btn-product btn-cart"><span>añadir al carro</span></button>

                                          <div class="details-action-wrapper">
                                              <a href="#" class="btn-product btn-wishlist" title="Wishlist"><span>deseos</span></a>
                                        
                                          </div>
                                      </div>

                                      <div class="product-details-footer">
                                          <div class="product-cat">
                                              <span>Categoria:</span>
                                              {producto.categoria}
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>

                  </div>
              </div>
          </main>


          </div>
          <button id="scroll-top" title="Back to Top"><i class="icon-arrow-up"></i></button>


          <div class="sticky-bar">
          <div class="container">
              <div class="row">
                  <div class="col-6">
                      <figure class="product-media">
                          <a href="product.html">
                              <img src={producto.imagen} alt="Product image"/>
                          </a>
                      </figure>
                      <h4 class="product-title"><a href="product.html">{producto.nombre}</a></h4>
                  </div>

                  <div class="col-6 justify-content-end">
                      <div class="product-price">
                        $ {producto.precio_venta}
                      </div>
                      {/* <div class="product-details-quantity">
                          <input type="number" id="sticky-cart-qty" class="form-control" value="1" min="1" max="10" step="1" data-decimals="0" required />
                      </div> */}

                      <div class="product-details-action">
                          <button onClick={()=> this.agregarAlCarrito() } class="btn-product btn-cart"><span>Añadir al carro</span></button>
                          <a href="#" class="btn-product btn-wishlist" title="Wishlist"><span>deseos</span></a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
  )

}

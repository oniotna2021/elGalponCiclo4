import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../templates/Footer'

export default class administrar extends Component {
    render() {
        return (
        <div>
          <div className="containerProduct d-lg-flex">

            <div className="card rounded bg-gray " style={{width: '18rem'}}>
              <img src="https://img.freepik.com/vector-gratis/icono-usuario_6091-78.jpg?size=338&ext=jpg" class="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">EDITAR CLIENTE</h5>
                  <p className="card-text">En esta seccion podras editar el nombre, apellido y telefono del cliente</p>
                 <Link className="btn btn-primary" to="/Editar">EDITAR</Link> 
               </div>
            </div>

            <div className="card rounded bg-gray ms-5" style={{width: '18rem'}}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5IPJXeZLdosZk49nTz076duNkeobwAFoT3A&usqp=CAU" class="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">EDITAR PRODUCTO</h5>
                  <p className="card-text">En esta seccion podras editar el nombre, apellido y telefono del cliente</p>
                 <Link className="btn btn-primary" to="/Products/edit">EDITAR</Link> 
               </div>
            </div>

            <div className="card bg-gray ms-5" style={{width: '18rem'}}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9C2yhxuis7OPC_X1ZYjHI6jAruBt1VzQ-KUeo4Ls2Rd9w10I6_jCgO7vwvCHCwixTsJ4&usqp=CAU" class="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">AGREGAR PRODUCTO</h5>
                  <p className="card-text">En esta seccion podras editar el nombre, apellido y telefono del cliente</p>
                 <Link className="btn btn-primary" to="/products/create">AGREGAR</Link> 
               </div>
            </div>
              
            </div>
          <Footer />
          </div>
          
        
        )
    }
}

import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class administrar extends Component {
    render() {
        return (
            <div>
                <li className="nav-item">
                <Link className="nav-link" to="/products/create">CREAR PRODUCTO</Link>
              </li>  
                <br />
                <li className="nav-item">
                <Link className="nav-link" to="/Editar">EDITAR CLIENTE</Link> 
              </li> 
                <br />
                <li className="nav-item">
                <Link className="nav-link" to="/Products/edit">EDITAR PRODUCTO</Link>
              </li> 
            </div>
        )
    }
}

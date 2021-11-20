import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class administrar extends Component {
    render() {
        return (
            <div>
                <li class="nav-item">
                <Link class="nav-link" to="/products/create">CREAR PRODUCTO</Link>
              </li>  
                <br />
                <a>EDITAR USUARIO</a>
                <br />
                <a>EDITAR PRODUCTO</a>
            </div>
        )
    }
}

import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import logoB from '../assets/logoB.png';

export default class Header extends Component {
    render() {
        return (
            <div>
                <header>
        <nav className="gradiente navbar navbar-expand-lg navbar-light bg-light">

        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
         
          <img className="logo-lgi navbar-brand" src={logoB} alt="Logo de El Galpón"></img>
          <Link className="ms-3 navbar-brand" to="/el_galpon_ciclo_4">ElGalpon</Link>
          
          <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link" to="/el_galpon_ciclo_4">INICIO</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/About">SOBRE NOSOTROS</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/Contacto">CONTACTO</Link>
              </li> 
              <li class="nav-item">
                <Link class="nav-link" to="/Registrar">REGISTRAR</Link>
              </li>  
              <li class="nav-item">
                <button class="btn btn-sm btn-outline-secondary" type="submit">
                  <Link class="nav-link" to="/Comprar">
                  COMPRAR
                  <i class="bi-cart-fill me-1"></i>
                  <span class="badge bg-dark text-white ms-1 rounded-pill">0</span>
                  </Link>
                </button> 
                <button class="btn btn-sm btn-outline-secondary" type="submit">
                  <Link class="btn" to='/el_galpon_ciclo_4'>
                    Salir
                  </Link>
                </button> 
              </li>   
          {/* <Link class="btn btn-link bg-black" to='/login'>ENTRAR</Link> */}
          
          </ul>
          <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-success" type="submit">Search</button>
         </form>
          </div>
        </div>
        </nav>
      </header>
            </div>
        )
    }
}

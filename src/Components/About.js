import React, { Component } from 'react'
import imgExterior from '../assets/egExterior.jpg'
import imgInterior from '../assets/egInterior.jpg'

export default class About extends Component {
    render() {
        return (
            <div class="contenedorQs">
            <h1>¿Quiénes somos?</h1>
            <p>
              Somos la mejor distribuidora de productos agropecuarios en la región<br/>
              y una excelente prestadora de servicios veterinarios.
            </p>
            <figure>            
                <img src={imgExterior} height="234px" width="auto" alt="foto de la parte externa del negocio" />
                <img src={imgInterior} height="234px" width="auto" alt="foto del interior del negocio" />
            </figure>
            <p>Tenemos a su disposición:</p>
            <ul>
                <li>Insumos agropecuarios</li>
                <li>Semillas</li>
                <li>Concentrados y Alimentos para sus animales</li>
                <li>Miel de Purga</li>
                <li>Sales Mineralizadas</li>
                <li>Pollitos de Engorde</li>
                <li>Implementos Avicolas</li>
                <li>Accesorios Caninos</li>
            </ul>
            <p>Además protegemos la salud de sus animales ofreciéndole:</p>
            <ul>
                <li>Contacto con veterinarios certificados</li>
                <li>Drogas veterinarias</li>
                <li>Vacunas</li>
                <li>Instrumental e Implementos Veterinarios</li>
            </ul>
            <p>Somos distribuidores autorizados de:</p>
            <ul>
                <li>Sthill<img src="" alt=" -> icono de sthill" /></li>
                <li>Lhaura<img src="" alt=" -> icono de Lhaura" /></li>
                <li>Mejía & Compañía S.A.<img src="" alt=" -> icono de Mejia & Cia." /></li>
            </ul>
            <p>Estamo ubicados en la carrera 6 # 6-43<br/>Teléfono: 836-4368<br/>Pitalito - Huila</p>
        </div>
            )
    }
}

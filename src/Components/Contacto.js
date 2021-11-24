import React, { Component } from 'react'
import Footer from '../templates/Footer'
import Carrusel from '../templates/Carrusel'

class Contacto extends Component {
    //Estados iniciales
    state = {
        nombreCliente: "",
        correoCliente: "",
        telefonoCliente: "",
        mensajeCliente: ""
    };

    //Función para actualizar los estados
    actualizarEstado = ({name, value}) => {
        this.setState(() => {
            return { [name]: value };
        });
    };

    render() {
        return (
            <div>
                <Carrusel />
                <br />
                <br />
                <br />

                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="well well-sm">
                                <form class="form-horizontal" action="/enviar-correo" method="post">
                                    <fieldset>
                                        <h3 class="text-center header">¡Contáctanos!</h3>
                                        <h4 class="text-center header">Estamos para servirte</h4><br />

                                        <div class="form-group">
                                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-user bigicon"></i></span>
                                            <div class="col-md-8">
                                                <input id="fname" name="nombreCliente" type="text" placeholder="¿Cómo te llamas?" class="form-control"
                                                onChange={ event => this.actualizarEstado(event.target) } autoFocus />
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-envelope-o bigicon"></i></span>
                                            <div class="col-md-8">
                                                <input id="email" name="correoCliente" type="text" placeholder="Tu correo electrónico" class="form-control"
                                                onChange={ event => this.actualizarEstado(event.target) } />
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-phone-square bigicon"></i></span>
                                            <div class="col-md-8">
                                                <input id="phone" name="telefonoCliente" type="text" placeholder="Tu número de teléfono" class="form-control"
                                                onChange={ event => this.actualizarEstado(event.target) } />
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-pencil-square-o bigicon"></i></span>
                                            <div class="col-md-8">
                                                <textarea class="form-control" id="message" name="mensajeCliente"
                                                placeholder="Escríbenos aquí tu mensaje. Te responderemos en un lapso no superior a 2 días" rows="3"
                                                onChange={ event => this.actualizarEstado(event.target) }></textarea>
                                            </div>
                                        </div>

                                        <button class="btn btn-primary btn-lg">Enviar</button>
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <br />
                <br />
                <br />

                <Footer />
            </div>
        )
    }
}

export default Contacto;

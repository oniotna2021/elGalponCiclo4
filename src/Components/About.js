import React, { Component } from "react";
import imgExterior from "../assets/imgExterior.jpg";
import imgInterior from "../assets/imgInterior.jpg";
import Wilmar from "../assets/Wilmar.jpeg";
import Antonio from "../assets/Antonio.jpg";
import Jhon from "../assets/Jhon.jpg";
import Oscar from "../assets/Oscar.jpg";
import Leidy from "../assets/Leidy.jpg";
import Footer from "../templates/Footer";
import Carrusel from "../templates/Carrusel";

export default class About extends Component {
  render() {
    return (
      <div>
        <Carrusel />
        <div class="contenedores">
          <section class="nosotros"></section>
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <img
                  class="rounded-circle"
                  src={imgExterior}
                  alt="imgExterior"
                  height="400px"
                  width="1080px"
                  margin="center"
                />
                <h1>Quienes somos?</h1>
                <p>
                  Somos la mejor distribuidora de productos agropecuarios en la
                  región
                  <br />y una excelente prestadora de servicios veterinarios.
                </p>
                <br />
                <br />
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
                <p>
                  Estamo ubicados en la carrera 6 # 6-43
                  <br />
                  Teléfono: 836-4368
                  <br />
                  Pitalito - Huila
                </p>

                <br />
                <h1> Desarrolladores </h1>
              </div>
              <div class="col-lg-4">
                <img
                  class="rounded-circle"
                  src={Wilmar}
                  alt="Wilmar"
                  width="140"
                  height="140"
                />
                <h3>Wilmar Barragan</h3>
                <p>
                  Ingeniero electrónico con conocimientos en sistemas y
                  telecomunicaciones, ciberseguridad,gerencia de proyectos y con
                  conocimientos en en programación.
                </p>
                <h3>
                  CARGO:Desarrollador Front-End , Contacto :
                  <a
                    href="https://wa.me/573043716442?text=Hola!%20ingeniero electronico y desarrollador web"
                    class="whatsapp"
                    target="_blank"
                  >
                    {" "}
                    <i class="fa fa-whatsapp whatsapp-icon"></i>
                  </a>
                </h3>
              </div>
              <div class="col-lg-4">
                <img
                  class="rounded-circle"
                  src={Antonio}
                  alt="Antonio"
                  width="140"
                  height="140"
                />
                <h3>Antonio Mogollon</h3>
                <p class="texto-1">
                  Desarrollador FRONT-END, encargado de la interfaz desde el
                  punto de vista del código para que el usuario pueda
                  interactuar con un sistema
                </p>
                <h3>
                  CARGO:Scrum Master , Contacto :
                  <a
                    href="https://wa.me/573217258986?text=Hola!%20desarrollador web"
                    class="whatsapp"
                    target="_blank"
                  >
                    {" "}
                    <i class="fa fa-whatsapp whatsapp-icon"></i>
                  </a>
                </h3>
              </div>
              <div class="col-lg-4">
                <img
                  class="rounded-circle"
                  text-aligne="center"
                  src={Jhon}
                  alt="Jhon"
                  width="140"
                  height="140"
                />
                <h3>Jhon Cardona</h3>
                <p class="texto-1">
                  Administrador de empresas con conocimientos en sistemas,
                  apasionado por la enseñanza y la programación con especial
                  énfasis en las aplicaciones móviles y videojuegos.
                </p>
                <h3>
                  CARGO:Desarrollador Back-End , Contacto :
                  <a
                    href="https://wa.me/573167308590?text=Hola!%20administrador de empresas y desarrollador web"
                    class="whatsapp"
                    target="_blank"
                  >
                    {" "}
                    <i class="fa fa-whatsapp whatsapp-icon"></i>
                  </a>
                </h3>
              </div>
              <div class="col-lg-4">
                <img
                  class="rounded-circle"
                  src={Oscar}
                  alt="Oscar"
                  width="140"
                  height="140"
                />
                <h3>Oscar Amaya</h3>
                <p class="texto-1">
                  Tripulante Misión TIC 2022. Emprendedor, técnico de sistemas,
                  con conocimientos en programación, en procura de llevar nuevas
                  tecnologías a los sectores más desfavorecidos.
                </p>
                <h3>
                  CARGO:Desarrollador Front-End , Contacto :
                  <a
                    href="https://wa.me/573226142660?text=Hola!%20tecnico de sistemas y desarrollador web"
                    class="whatsapp"
                    target="_blank"
                  >
                    {" "}
                    <i class="fa fa-whatsapp whatsapp-icon"></i>
                  </a>
                </h3>
              </div>
              <div class="col-lg-4">
                <img
                  class="rounded-circle"
                  src={Leidy}
                  alt="Leidy"
                  width="140"
                  height="140"
                />
                <h3>Leidy Ortega</h3>
                <p class="texto-1">
                  Ingeniera de software de la universidad surcolombiana de neiva
                  Huila con conocimientos en programación web y metodología
                  scrum
                </p>

                <h3>
                  CARGO:Desarrollador Front-End , Contacto :
                  <a
                    href="https://wa.me/573223301797?text=Hola!%20ingeniero software y desarrollador web"
                    class="whatsapp"
                    target="_blank"
                  >
                    {" "}
                    <i class="fa fa-whatsapp whatsapp-icon"></i>
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

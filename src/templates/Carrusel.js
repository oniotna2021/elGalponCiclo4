import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'


export default class Carrusel extends Component {
    render() {
        return (
            <div>
                <Carousel>

                  <Carousel.Item interval={3000}>
                    <img
                    className="d-block w-100"
                    src="https://solucionesamtec.com.co/galpon/banner1.jpg"
                    alt="First slide"
                    />
                <Carousel.Caption>
                  {/* Zona para texto o enlace */}
                </Carousel.Caption>
                
                </Carousel.Item>
                 <Carousel.Item interval={3000}>
                 <img
                 className="d-block w-100"
                 src="https://solucionesamtec.com.co/galpon/banner2.jpg"
                 alt="Second slide"
                 />
                <Carousel.Caption>
                </Carousel.Caption>
 
                </Carousel.Item>
                <Carousel.Item interval={3000}>
               <img
                className="d-block w-100"
                src="https://solucionesamtec.com.co/galpon/banner3.jpg"
                alt="Third slide"
                />
                <Carousel.Caption>
                </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
        )
    }
}

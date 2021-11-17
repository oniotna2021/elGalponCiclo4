import React, { Component } from 'react'
import Footer from "../templates/Footer";
import Carrusel from '../templates/Carrusel';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Carrusel />
                <br />
                <br />
                <br />

                <h1>Welcome to HOME page!!</h1>

                <br />
                <br />
                <br />

                <Footer />
            </div>
        )
    }
}


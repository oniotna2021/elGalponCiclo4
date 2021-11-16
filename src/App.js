// import logo from './logo.svg';
import './App.css';
import logob from './assets/logoB.png';
import { Link, Routes, Route} from 'react-router-dom';


import Contacto from "./Components/Contacto";
import Home from "./Components/Home";
import Login from "./Components/Login/Login";
import About from "./Components/About";
import NotFound from "./Components/NotFound";
import Category from "./Components/Category";
import Products from "./Components/Products/Products";
import ProductWrap from "./Components/Products/ProductWrap";
import CrearProducto from "./Components/Products/CrearProducto";
import SpecificProduct from "./Components/Products/SpecificProduct";
import Carousel from 'react-bootstrap/Carousel'


function App() {
  return (

    <div className="App">
     
      <header>
        <nav className="gradiente navbar navbar-expand-lg navbar-light bg-light">

        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
         
          <img className="logo-lgi navbar-brand" src={logob} alt="Logo de El Galpón"></img>
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
          <Link class="btn btn-link bg-black" to='/login'>ENTRAR</Link>
          <Link class="btn btn-link bg-black" to='/el_galpon_ciclo_4'>Salir</Link>
          </ul>
          <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-success" type="submit">Search</button>
         </form>
          </div>
        </div>
        </nav>
      </header>

      <Carousel>
  <Carousel.Item interval={3000}>
    <img
      className="d-block w-100"
      src="https://solucionesamtec.com.co/galpon/banner1.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      {/* <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={3000}>
    <img
      className="d-block w-100"
      src="https://solucionesamtec.com.co/galpon/banner2.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
      {/* <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={3000}>
    <img
      className="d-block w-100"
      src="https://solucionesamtec.com.co/galpon/banner1.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      {/* <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
     
      <Routes>
         <Route path='/el_galpon_ciclo_4' element={<Home />}></Route>
         <Route path='/login' element={<Login />}></Route>
       <Route path='/Products' element={<ProductWrap />}>
            <Route path='/Products' element={<Products />}></Route>
            <Route path='/Products/:productId' element={<SpecificProduct />}></Route>
            <Route path='/Products/create' caseSensitive={false} element={<CrearProducto />}></Route>
         </Route>
         <Route path='/Category' element={<Category />}></Route>
         <Route path='/About' element={<About />}></Route>
         <Route path='*' element={<NotFound />}></Route>
         <Route path='/Contacto' element={<Contacto />}></Route>


       </Routes>

    </div>
  );
}

export default App;

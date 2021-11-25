import Footer from '../templates/Footer'
import Carrusel from '../templates/Carrusel';
import Login from './Login/Login';


export default function Comprar(){
   
  const generateAppMenu = () =>{
    return(
    <div>
        <Carrusel />
        <br />
        <br />
        <br />
        <h1>TU CARRITO DE COMPRAS</h1> 
        <br />
        <br />
        <br />
        <Footer />     
    </div>
    
    
    );
    }
    
    const generateAppLogin=()=>{
    return(
      
    <div>
      <Login />
    </div>
      
    )
    }

    const desicion=()=>{
      let token = localStorage.getItem('token')
      if(!token){
        return generateAppLogin();
      }else{
        return generateAppMenu();
        
      }
    
    }

    
    return(
      <div>
          {desicion()}
      </div>
    )

}
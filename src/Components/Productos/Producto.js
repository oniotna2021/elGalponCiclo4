import '../Style/css/style.css';

export default function Producto(props) {

  return (
    <div className="col-6 col-md-4 col-lg-4">
      <div className="product product-7 text-center">
          <figure className="product-media">
              <a href="product.html">
                  <img src={props.img} alt="Product" className="product-image" />
              </a>

              <div className="product-action-vertical">
                  <a href="prueba.html" className="btn-product-icon btn-wishlist btn-expandable"><span>Añadir a Deseos</span></a>
                  <a href="prueba.html" className="btn-product-icon btn-quickview" title="Vista Rapida"><span>Vista Rapida</span></a>
                  {/* <a href="prueba.html" className="btn-product-icon btn-compare" title="Comparar"><span>Comparar</span></a> */}
              </div>

              <div className="product-action">
                  <a href="prueba.html" className="btn-product btn-cart"><span>añadir al carro</span></a>
              </div>
          </figure>

          <div className="product-body">
              <div className="product-cat">
                  <a href="prueba.html">{props.categoria} </a>
              </div>
              <h3 className="product-title"><a href="product.html">{props.nombre}</a></h3>
              <div className="product-price">
                  {props.precio}
              </div>
              <div className="ratings-container">
                  <div className="ratings">
                      <div className="ratings-val"></div>
                      
                  </div>
                  <span className="ratings-text">( 0 Reviews )</span>
              </div>
              
            {/* depronto lo utilizo */}
{/*               <div className="product-nav product-nav-thumbs">
                  <a href="prueba.html" className="active">
                      <img src="assets/images/products/product-5-thumb.jpg" alt="product desc" />
                  </a>
                  <a href="prueba.html">
                      <img src="assets/images/products/product-5-2-thumb.jpg" alt="product desc" />
                  </a>
              </div> */}
          </div>
      </div>
  </div>
  )
}
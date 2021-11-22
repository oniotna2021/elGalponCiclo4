import '../Style/css/bootstrap.min.css';
import '../Style/css/style.css';

export default function PageWrapper(props) {

  return (
    <div>
      <main className="main">
        	<div className="page-header text-center" >
        		<div className="container">
        			<h1 className="page-title">TODOS NUESTROS PRODUCTOS</h1>
        		</div> 
        	</div>
			
			<br />

            <div className="page-content">
                <div className="container">
                	<div className="row">
                		<div className="col-lg-9">
                			<div className="toolbox">
                				{/* <div className="toolbox-left">
                					<div className="toolbox-info">
                						Mostrar <span>9 of 56</span> Productos
                					</div>
                				</div> */}

                				<div className="toolbox-right">
                					<div className="toolbox-sort">
                						<label htmlFor="sortby">Ordenar por:</label>
                						<div className="select-custom">
											<select name="sortby" id="sortby" className="form-control">
												<option value="popularity" >Mas Popular</option>
												<option value="rating">Mejor Calificado</option>
												<option value="date">Fecha</option>
											</select>
										</div>
                					</div>

                				</div>
                			</div>

                            <div className="products mb-3">
                                <div className="row justify-content-center">
 
                                {props.children}

                                </div>
                            </div>

                		</div>
                		<aside className="col-lg-3 order-lg-first">
                			<div className="sidebar sidebar-shop">
                				<div className="widget widget-clean">
                					<label>Filtros:</label>
                					<a href="prueba.html" className="sidebar-filter-clear">Limpiar filtros</a>
                				</div>

                				<div className="widget widget-collapsible">
    								<h3 className="widget-title">
									    <a data-toggle="collapse" href="#widget-1" role="button" aria-expanded="true" aria-controls="widget-1">
									        Categoria
									    </a>
									</h3>

									<div className="collapse show" id="widget-1">
										<div className="widget-body">
											<div className="filter-items filter-items-count">
												<div className="filter-item">
													<div className="custom-control custom-checkbox">
														<input type="checkbox" className="custom-control-input" id="cat-1" />
														<label className="custom-control-label" htmlFor="cat-1">Agricola</label>
													</div>
													<span className="item-count">3</span>
												</div>

												<div className="filter-item">
													<div className="custom-control custom-checkbox">
														<input type="checkbox" className="custom-control-input" id="cat-2" />
														<label className="custom-control-label" htmlFor="cat-2">Fertilizantes</label>
													</div>
													<span className="item-count">0</span>
												</div>

												<div className="filter-item">
													<div className="custom-control custom-checkbox">
														<input type="checkbox" className="custom-control-input" id="cat-3" />
														<label className="custom-control-label" htmlFor="cat-3">Veterinaria</label>
													</div>
													<span className="item-count">4</span>
												</div>

												<div className="filter-item">
													<div className="custom-control custom-checkbox">
														<input type="checkbox" className="custom-control-input" id="cat-4" />
														<label className="custom-control-label" htmlFor="cat-4">Nutrición</label>
													</div>
													<span className="item-count">2</span>
												</div>

												<div className="filter-item">
													<div className="custom-control custom-checkbox">
														<input type="checkbox" className="custom-control-input" id="cat-5" />
														<label className="custom-control-label" htmlFor="cat-5">Equipos</label>
													</div>
													<span className="item-count">2</span>
												</div>

												<div className="filter-item">
													<div className="custom-control custom-checkbox">
														<input type="checkbox" className="custom-control-input" id="cat-6" />
														<label className="custom-control-label" htmlFor="cat-6">Mascotas</label>
													</div>
													<span className="item-count">1</span>
												</div>

											</div>
										</div>
									</div>
        						</div>

        						<div className="widget widget-collapsible">
    								<h3 className="widget-title">
									    <a data-toggle="collapse" href="#widget-4" role="button" aria-expanded="true" aria-controls="widget-4">
									        Marcas
									    </a>
									</h3>

									<div className="collapse show" id="widget-4">
										<div className="widget-body">
											<div className="filter-items">
												<div className="filter-item">
													<div className="custom-control custom-checkbox">
														<input type="checkbox" className="custom-control-input" id="brand-1" />
														<label className="custom-control-label" htmlFor="brand-1">Jabugo</label>
													</div>
												</div>

												<div className="filter-item">
													<div className="custom-control custom-checkbox">
														<input type="checkbox" className="custom-control-input" id="brand-2" />
														<label className="custom-control-label" htmlFor="brand-2">Guijuelo</label>
													</div>
												</div>

												<div className="filter-item">
													<div className="custom-control custom-checkbox">
														<input type="checkbox" className="custom-control-input" id="brand-3" />
														<label className="custom-control-label" htmlFor="brand-3">Draza</label>
													</div>
												</div>

												<div className="filter-item">
													<div className="custom-control custom-checkbox">
														<input type="checkbox" className="custom-control-input" id="brand-4" />
														<label className="custom-control-label" htmlFor="brand-4">Dogourmet</label>
													</div>
												</div>

												<div className="filter-item">
													<div className="custom-control custom-checkbox">
														<input type="checkbox" className="custom-control-input" id="brand-5" />
														<label className="custom-control-label" htmlFor="brand-5">Tafe</label>
													</div>
												</div>

												<div className="filter-item">
													<div className="custom-control custom-checkbox">
														<input type="checkbox" className="custom-control-input" id="brand-6" />
														<label className="custom-control-label" htmlFor="brand-6">Ace</label>
													</div>
												</div>

												<div className="filter-item">
													<div className="custom-control custom-checkbox">
														<input type="checkbox" className="custom-control-input" id="brand-7" />
														<label className="custom-control-label" htmlFor="brand-7">Nike</label>
													</div>
												</div>

											</div>
										</div>
									</div>
        						</div>
                			</div>
                		</aside>
                	</div>
                </div>
            </div>
      </main>
    </div>
  
  );
}
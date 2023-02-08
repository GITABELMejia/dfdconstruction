import Layout from "../components/Layout";
import { skills, experiences, projects } from "../profile";
import Link from "next/link"
const Index = () => (

    <Layout>
        <header className=" h-100">
            <div id="slider" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="/slide5.jpg" alt="portada1" className="d-block w-100 " />
                        <div className="container">
                            <div className="row justify-content-between ">
                                <div className="col-md-6">
                                    <div className="carousel-caption d-none d-md-block text-end ">
                                        <h3>Tu casa a tu gusto</h3>
                                        <p>Necesito mas Informacion</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="/slide6.jpg" alt="portada2" className="d-block w-100 " />
                        <div className="carousel-caption d-none d-md-block">
                            <h2 className="display-4">Encuentra diseños de lujo</h2>
                        </div>
                    </div>

                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#slider" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Anterior</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#slider" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Siguiente</span>
                </button>
            </div>
        </header>
        <section className="container sobre-nosotros mt-5">
            <h2 className="text-center mb-5">Más sobre Nosotros</h2>
            <div className="row">
                <div className="col-sm-4 text-center">
                    <img src="/icono_seguridad.jpg" alt="icono_Seguridad" className="img-fliud mb-4" />
                    <h3 className="mb-3 text-uppercase">Seguridad</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique iure sit ad, deleniti eaque quod.</p>
                </div>
                <div className="col-sm-4 text-center">
                    <img src="/icono_precio.jpg" alt="icono_Seguridad" className="img-fliud mb-4" />
                    <h3 className="mb-3 text-uppercase">El Mejor Precio</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique iure sit ad, deleniti eaque quod.</p>
                </div>
                <div className="col-sm-4 text-center">
                    <img src="/icono_disponible.jpg" alt="icono_Seguridad" className="img-fliud mb-4" />
                    <h3 className="mb-3 text-uppercase">Disponibilidad Inmediata</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique iure sit ad, deleniti eaque quod.</p>
                </div>
            </div>
        </section>
        <section className="container anuncios mt-5 ">
            <h2 className="text-center mb-5">Nuestros Trabajo</h2>
            <div className="col-md-4">
                <div className="card">
                    <img src="anuncio1.jpg" alt="auncion de trabajo" className="card-img-top" />
                    <div className="card-body">
                        <h3 className="card-tittle">
                            Casa en Zona de Lujo
                        </h3>
                        <p className="card-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, debitis!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </Layout>

)

export default Index
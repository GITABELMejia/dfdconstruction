
import Link from "next/link"
const Navbar = () => (

    <div className="barra ">
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-dark p-md-3 ">
                <Link className="nombre-sitio navbar-brand text-uppercase" href="/">
                    DFD<span>Construction</span><span className="punto">.</span>
                </Link>

                <button
                    className="navbar-toggler "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-bg navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="mx-auto"></div>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link underline-hover" href="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link underline-hover" href="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link underline-hover" href="/models">Models</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link underline-hover" href="/galery">Galery</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link underline-hover" href="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>

            </nav>
        </div>
    </div>


)

export default Navbar
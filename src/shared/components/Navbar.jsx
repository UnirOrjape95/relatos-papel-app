import { Link } from "react-router-dom"
import { CartOverview } from "../components/CartOverview";


export const Navbar = () => {


    return (
        <>
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <div className="container">
                    <Link to={"/books"} className="navbar-brand">Relatos Papel App</Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarContent">

                        <div className="py-2 d-flex justify-content-center ms-auto">
                            <span className="cart-icon text-light ms-5">
                                Usuario
                                <i className="fa-solid fa-user fa-2xl ms-3"></i>
                            </span>

                            <CartOverview />
                        </div>

                    </div>

                </div>
            </nav>
        </>
    )
}

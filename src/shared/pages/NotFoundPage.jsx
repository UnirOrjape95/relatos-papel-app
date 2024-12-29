import { Link } from "react-router-dom"

export const NotFoundPage = () => {
  return (
    <>
      <div className="custom-bg text-dark">
        <div className="d-flex align-items-center justify-content-center min-vh-100 px-2">
          <div className="text-center">
            <h1 className="display-1 fw-bold">404</h1>
            <p className="fs-2 fw-medium mt-4">Oops! Página no encontrada</p>
            <p className="mt-4 mb-5">La página que busca no existe. Regrese a la página principal dando click en el botón.</p>
            <Link to={"/books"} className="btn btn-dark fw-semibold rounded-pill px-4 py-2 custom-btn">
              Página Principal
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

import { useRedirection } from "../hooks/useRedirection";



export const LandingPage = () => {

  useRedirection("/books", 5000);

  return (
    <>
      <div className="p-5 mb-4 bg-body-tertiary rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">Bienvenidos a Relatos de Papel</h1>
          <p className="col-md-8 fs-4">Será redireccionado a la página principal en 5 segundos.</p>
                    
          <div className="spinner-grow spinner-grow-sm ms-1" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow spinner-grow-sm ms-1" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow spinner-grow-sm ms-1" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    </>
  )
}

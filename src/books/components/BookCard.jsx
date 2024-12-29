import { Link } from "react-router-dom"

export const BookCard = ({ 
    id,
    title,
    authors,
    price,
    image
}) => {
    return (
        <div className="col">
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={`/assets/books/${image}`} className="rounded-start card-img-small img-fluid" alt={title} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">
                                <small className="text-muted">{authors}</small>
                            </p>
                            <p className="card-text"><b>${price}</b></p>
                            <Link to={`/books/${id}`}>
                                Ver detalle
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

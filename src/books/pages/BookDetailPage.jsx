
import { useContext, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { BookContext } from '../context/BookContext';
import { CartContext } from '../context/CartContext';
import { Toast } from '../../shared/components/Toast';

export const BookDetailPage = () => {

  const navigate = useNavigate();
  const { bookId } = useParams();
  const { books } = useContext(BookContext);
  const book = books.find(b => b.id.toString() === bookId);

  const [showToast, setShowToast] = useState(false);
  const [messageToast, setMessageToast] = useState("");
  const { items, setItems } = useContext(CartContext);

  const onAddCartItem = () => {

    if (!book) return;

    let existInCart = items.some(i => i.title === book.title);

    if (!existInCart) {
      setItems([...items, book]);
      setMessageToast("Libro agregado al carrito");
    } else {
      setMessageToast("El libro seleccionado ya se encuentra agregado");
    }
    
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
      navigate("/books");
    }, 1500);
  }

  if (!book)
    return (
      <div className="custom-bg text-dark">
        <div className="text-center">
          <h1 className="fw-bold">Libro no encontrado</h1>
          <Link to={"/books"} className="btn btn-dark fw-semibold rounded-pill px-4 py-2 custom-btn">
            Página Principal
          </Link>
        </div>
      </div>
    )

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={`../public/assets/books/${book.image}`}
          alt={book.title}
          className="img-thumbnail"
        />
      </div>

      <div className="col-8">
        <h3>{book.title}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"> <b>Autor(es):</b> {book.authors} </li>
          <li className="list-group-item"> <b>Género:</b> {book.genre}</li>
          <li className="list-group-item"> <b>Rating:</b> {book.rating}/5</li>
          <li className="list-group-item"> <b>Páginas:</b> {book.pages}</li>
        </ul>

        <h5 className="mt-3"> Sinopsis </h5>
        <p>{book.synopsis}</p>

        {book.stock === 0
          ? <span class="badge rounded-pill text-bg-danger">Agotado</span>
          : <div>
            <h4 className="mt-3">${book.price}</h4>
            <button onClick={onAddCartItem} className="btn btn-primary fw-semibold rounded-pill px-4 py-2">Añadir al carrito</button>
          </div>
        }

        <div className="mt-5">
          <Link to={"/books"} className="btn btn-dark fw-semibold rounded-pill px-4 py-2">
            Página Principal
          </Link>
        </div>

        {showToast && <Toast message={messageToast} />}

      </div>

    </div>

  )
}

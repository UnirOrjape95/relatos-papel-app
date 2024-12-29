import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { CartContext } from '../../books/context/CartContext';


export const CartOverview = () => {

    const { items, setItems } = useContext(CartContext);

    const removeItemFromCart = (id) => {
        const newItems = items.filter(i => i.id !== id);
        setItems(newItems);
    }

    return (
        <div className="dropdown ms-5">
            <a

                className="cart-icon text-light dropdown-toggle"
                id="cartDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                <i className="fa-solid fa-cart-shopping fa-2xl"></i>
                <span className="cart-count"><b>{items.length}</b></span>
            </a>
            <ul
                className="dropdown-menu dropdown-menu-end p-3 cart-dropdown"
                aria-labelledby="cartDropdown"
            >
                {items.length > 0 ? (
                    <>
                        <table className="table table-sm">
                            <thead>
                                <tr>
                                    <th>Título</th>
                                    <th>Precio</th>
                                    <th>Acción</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map((item, index) => (
                                    <tr key={index}>
                                        <td className="text-truncate w-25">
                                            {item.title}
                                        </td>
                                        <td>${item.price}</td>
                                        <td className="text-center">
                                            <button
                                                className="btn btn-sm btn-danger"
                                                onClick={() => removeItemFromCart(item.id)} // Cambia esta función según tu lógica
                                            >
                                                X
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <hr />
                        <div className="d-flex justify-content-between">
                            <strong>Total:</strong>
                            <strong>${items.reduce((total, item) => total + item.price, 0).toFixed(2)}</strong>
                        </div>

                        <div className="d-grid gap-2 mt-3">
                            <Link to={"/books/chekout"} className="btn btn-dark fw-semibold rounded-pill px-4 py-2">
                                Ir al carrito
                            </Link>
                        </div>
                    </>
                ) : (
                    <li className="dropdown-item text-muted">El carrito está vacío</li>
                )}
            </ul>

        </div>
    )
}
